$(document).ready(function(){ // 페이지가 열리면 실행

// 네비게이션은 제일 먼저 실행되어야 하므로 상단에 써줍니다~~

    const navDB = [
        ["빠른 흡수력", "#about"],
        ["좋은 성분만 담았다", "#tech"],
        ["걸어온 길", "#portfolio"],
        ["고객센터", "#myInterview"],
        ["체험 신청", "#request"],
        ["SNS 채널", "#contact"],
    ];

    let navli = '';

    for(let i in navDB){
        navli += `<li><a href="${navDB[i][1]}">${navDB[i][0]}</a></li>`
    };

    $(".depth1").html(navli); //ul에 네비게이션 넣기


//////////////////////////////////////데이터 삽입///////////////////////////////////////////


    // 각 섹션 타이틀을 링크 텍스트와 매치하기
    $(".slideSection").not("#myInterview").each(function(){
        $(this).find('h2').html(navDB[$(this).index()][0]);
    }); //// each


    // 네비게이션 슬라이드 섹션 이동
     $("#nav a").click(function(e){ //매개변수 e는 이벤트를 의미함
    // 네비게이션 클릭 실행

        e.preventDefault(); //a태그의 고유 기능(책갈피) 막기 => 자바스크립트 실행하고자!!
        var targetPos = $($(this).attr('href')).offset().top;
        // a태그 href값이랑 같은 객체의 상단위치 저장해두기

        $('body, html').animate({'scrollTop':targetPos});
        // 화면 애니메이션 실행 => 스크롤 상단 위치로
        // 그 상단 위치를 넣으면 해당 객체에 간 것 같은 효과가 됨

        // 네비게이션 클릭 시 active 된 네비 디자인 변형
        $(this).parent().addClass('active').siblings().removeClass('active');
        // 선택된 this => 클릭된 #nav a 의 parent에 addClass => <li>
        // 선택되지 않은 나머지 <li>의 형제들(siblings)은 active가 아니므로 removeClass 해준다

        // 위에 식과 같은 표현
        // $(".depth1 li").removeClass('active');
        // $(this).parent().addClass('active');

    }); //// click

    



    // 토글
    $("#myInterview dt").click(function(){
        if($(this).hasClass('act')){
            $(this).removeClass('act');
        } else{
            $(this).addClass('act').siblings('dt').removeClass('act');
        }
        // $(this).toggleClass('act').siblings('dt').removeClass('act');
    });

    // 전체보기 버튼
    let toggleAll = false;
    $("#btnAll_interview").click(function(){
        if(toggleAll){
            $(this).html('전체보기').css({'background-color':'#80baff', 'color': 'white'});
            $("#myInterview dt").removeClass('act');
            toggleAll = false;
        } else{
            $(this).html('전체닫기').css({'background-color':'#ddd', 'color': 'black'});
            $("#myInterview dt").addClass('act');
            toggleAll = true;
        }
    });

}); //// ready


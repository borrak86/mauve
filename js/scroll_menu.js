$(function(){
    var menu = $('#top_menu > ul > li');
    var contents = $('#contents > div');
    
    menu.click(function(event){
       event.preventDefault(); //메뉴를 클릭했을대 메뉴안의 링크메뉴가 클릭되는 것을 방지    
       var tg = $(this); //현재이벤트대상을 변수 tg에 담기
       var i = tg.index(); //현재이벤트대상의 인덱스값을 변수i에 담기
       var section = contents.eq(i); //div의 i순서값을 section변수에 담기
       var tt = section.offset().top; //화면에서 x축의 거리알아내서 변수 tt에 담기
       $('html, body').stop().animate({scrollTop:tt}); //
    });
    
     $(window).scroll(function(){
       var sct = $(window).scrollTop();//화면상에서 내가 스크롤한 만큼의 거리를 알아내기
       contents.each(function(){ //순차적으로 함수 실행하기
         var tg = $(this);
         var i = tg.index();
          if(tg.offset().top <= sct){
              menu.removeClass('on');
              menu.eq(i).addClass('on');
          }
      });
    });
});
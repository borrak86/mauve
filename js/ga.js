$(document).ready(function(){

// 메인슬라이드
   var linum, className, classNum, pos;

//페이지바로가기 버튼 색 적용
   $('#btnDots>div:eq(0)').addClass('hover')


//페이지 바로가기 버튼
  $('#btnDots>div').click(function(){
    linum = $(this).index()+1
    className = $('#mainslide li[class="slider'+linum+'"]')
    pos = className.position().left;

    $('#mainslide:not(:animated)').animate({left: -pos}, function(){
          if(className.index()==1){
              $(".maintext").animate({ opacity: 0 }, 100);
              $(this).append($('#mainslide li:eq(0)'))
              $("#mainslide li:eq(0) .maintext").animate({ opacity: 1 }, 300)
          }

          if(className.index()==2){
              $(".maintext").animate({ opacity: 0 }, 100);
              $(this).append($('#mainslide li:eq(0)'))
              $(this).append($('#mainslide li:eq(0)'))
              $("#mainslide li:eq(0) .maintext").animate({ opacity: 1 }, 300)
          }
      $(this).css({left:0})
      })
  })

    $('#btnDots>div').click(function(){

    $('#btnDots>div').removeClass('hover');
    $(this).addClass('hover');

  })

//자동재생
  var timing = setInterval(function(){
    $('.btnRight').click();
  }, 3000)


//언어선택
  $('#language ul li').click(function(){
    $('#language ul li').removeClass('on');
    $(this).addClass('on')
  })

//레시피 hover
  $('#recipe li').hover(function(){
    $(this).find('dl').stop().animate({top: '295px' }, 200)
    $(this).stop().animate({backgroundSize: '102%'}, 300)
  }, function(){
    $(this).find('dl').stop().animate({top: '355px' }, 200)
    $(this).stop().animate({backgroundSize: '100%'}, 300)
  })
})

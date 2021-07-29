$('#nav-icon3').on('click',function(){
       if($(this).hasClass('open')){
         $(this).removeClass('open');
           $('.popup-menu').fadeOut(250);
        }
       else{
          $(this).addClass('open');
           $('.popup-menu').fadeIn(250);
        }
        
    });
    
});
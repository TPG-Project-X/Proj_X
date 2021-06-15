$(function() {
    $("#datepicker").datepicker();
});
$(function(){
    //作成
    $('.sakusei').click(function(){
        //拡大する
        $('body').css('background-color', '#D1B5B5');
        $('.sakusei').addClass('sakusei_click');
        $('.sakusei').css('z-index', '50');
        $('.sakusei').css({transform: 'translateX(15vw) translateY(-7vh)'})
        $('.tuika').css({transform: 'translateX(-200px)'})
        $('.sakusei_kesu').delay(50).show();
        $('.sakusei_kesu').animate({opacity : 1}, 300);
        $('.sakusei_progress').delay(50).show();
        $('.sakusei_progress').animate({opacity : 1}, 300);
        //入力フォーム出現
        $('.sakusei_nyuryoku').addClass('sakusei_nyuryoku_click')
        $('.sakusei_progress').addClass('sakusei_progress_click')
        return false;
    })
    //作成消す
    $('.sakusei_kesu').click(function(){
        $('body').css('background-color', '#FFE8E8');
        $('.sakusei').removeClass('sakusei_click');
        $('.sakusei').css('z-index', '0');
        $('.sakusei').css({transform: 'translate(0vw)'})
        $('.tuika').css({transform: 'translate(0px)'});
        $('.sakusei_kesu').delay(0).animate({opacity : 0}, 10);
        $('.sakusei_kesu').hide();
        $('.sakusei_progress').delay(0).animate({opacity : 0}, 10);
        $('.sakusei_progress').hide();
        //入力フォーム消す
        $('.sakusei_nyuryoku').removeClass('sakusei_nyuryoku_click')
        $('.sakusei_progress').removeClass('sakusei_progress_click')
        return false
    })



    var saku_num = 0

    $('.sakusei_susumu').click(function(){
        if(saku_num == 0){
            $('.sakusei_date').css({'margin-left':'-=500px'})
            $('.sakusei_han').css({'margin-left':'-=500px'})
            $('.progress_susumi').css({'stroke-dashoffset':'-=47.125'})
            saku_num = 1;
        }
        if(saku_num == 1){
            $('.sakusei_han').css({'margin-left':'-=500px'})
            $('.sakusei_member').css({'margin-left':'-=500px'})
            $('.progress_susumi').css({'stroke-dashoffset':'-=47.125'})
            saku_num = 1;
        }
    })

   /* var saku_num_susumu = 0

    if(saku_num_susumu==0){
        $(".sakusei_susumu").click(function(){
            saku_num_susumu +=1;
            $('.sakusei_date').css({'margin-left':'-=500px'})
            $('.sakusei_han').css({'margin-left':'-=500px'})
        })
    }
    if(saku_num_susumu==1){
        $(".sakusei_susumu").click(function(){
            $('.sakusei_han').css({'margin-left':'-=500px'})
            $('.sakusei_member').css({'margin-left':'-=500px'})
        })
    }
    if(saku_num_susumu==2){
        $(".sakusei_modoru").click(function(){
            $('.sakusei_date').css({'margin-left':'+=500px'})
            $('.sakusei_han').css({'margin-left':'+=500px'})
            
        })
    }*/

    //作成すすむ

  /*  $(".sakusei_susumu").click(function(){
        $('.sakusei_date').css({'margin-left':'-=500px'})
        $('.sakusei_han').css({'margin-left':'-=500px'})
        $('.sakusei_member').css({'margin-left':'-=500px'})
        $('.sakusei_gidai').css({'margin-left':'-=500px'})
        $('.progress_susumi').css({'stroke-dashoffset':'-=47.125'})
    })

    //作成戻る
    
    $(".sakusei_modoru").click(function(){
        $('.sakusei_date').css({'margin-left':'+=500px'})
        $('.sakusei_han').css({'margin-left':'+=500px'})
        $('.sakusei_member').css({'margin-left':'+=500px'})
        $('.sakusei_gidai').css({'margin-left':'+=500px'})
        $('.progress_susumi').css({'stroke-dashoffset':'+=47.125'})
    })*/
 


    //追加
    $('.tuika').click(function(){
        $('body').css('background-color', '#D1B5B5');
        $('.tuika').addClass('tuika_click');
        $('.tuika').css('z-index', '50');
        $('.tuika').css({transform: 'translateX(-15vw) translateY(-7vh)'})
        $('.sakusei').css({transform: 'translateX(200px)'});
        $('.tuika_kesu').css({transform: 'translateX(0vw)'})
        $('.tuika_kesu').delay(50).show();
        $('.tuika_kesu').animate({opacity : 1}, 300);
        return false;
    })

    //追加消す
    $('.tuika_kesu').click(function(){
        $('body').css('background-color', '#FFE8E8');
        $('.tuika').removeClass('tuika_click');
        $('.tuika').css('z-index', '0');
        $('.tuika').css({transform: 'translate(0vw)'})
        $('.sakusei').css({transform: 'translateX(0px)'});
        $('.tuika_kesu').delay(0).animate({opacity : 0}, 10);
        $('.tuika_kesu').hide();  
        return false
    })
})


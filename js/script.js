$(document).ready(function(){

//1. alert
//alert('hello world')

//2. alert
$('.sho').on('click',function(){
alert("Hello Hasan");
});


//3
$('#sb').on('click',function(){
  $('#hs').show();
});
$('#hb').on('click',function(){
  $('#hs').hide();
});


//4
$('#to').on('click',function(){
  $('#tog').toggle();
});


//5
$('#tof').on('click',function(){
  $('#togf').toggle('fast');
});

//6
$('#tos').on('click',function(){
  $('#togs').toggle('slow');
});

//7
$('#tot').on('click',function(){
  $('#togt').toggle(1000);
});


//8
$('#sbi').on('click',function(){
  $('#hsf').fadeIn();
});
$('#hbo').on('click',function(){
  $('#hsf').fadeOut();
});


//9
$('#tofa').on('click',function(){
  $('#hsfa').fadeToggle();
});

//10
$('#tofat').on('click',function(){
  $('#hsfat').fadeToggle(2000);
});

//11
$(".ques").on("click",function(){
$(".answ").slideToggle(500);

});

  // 12: Change CSS property
  $('#changeCss16').click(function() {
    $('#div16').css('color', 'red');
  });


// 13.
    $("#textChangeBtn").click(function() {
        $("#textBox").text("hello");
    });

    //14. Toggle Visibility
    $(document).ready(function() {
        $("#toggleBtn").click(function() {
            $("#toggleBox").toggle();
        });
    });

//15. Slide toggle effect
$(document).ready(function() {
    $("#slideBtn").click(function() {
        $("#slideBox").slideToggle();
    });
});

//16.
$(document).ready(function() {
    $("#classBtn").click(function() {
        $("#classBox").toggleClass("highlight");
    });
});
  // Example 17: Get input value
  $('#getValue17').click(function() {
    var value = $('#input17').val();
    $('#output17').text('Input value: ' + value);
  });


});
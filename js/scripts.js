loadScreen();

$(document).ready(function(){

  $('.loader').hide(15000);

  let winHeight = $(window).height();

$("ul li.option.work__experience").click(function(){
  $("#article1").show();
  $("#article2").hide();
  $("#article3").hide();
  $("#article4").hide();
  $("#article5").hide();
});

$("ul li.option.key__skills").click(function(){
  $("#article1").hide();
  $("#article2").show();
  $("#article3").hide();
  $("#article4").hide();
  $("#article5").hide();
});

$("ul li.option.current__education").click(function(){
  $("#article1").hide();
  $("#article2").hide();
  $("#article3").show();
  $("#article4").hide();
  $("#article5").hide();
});

$("ul li.option.career__aim").click(function(){
  $("#article1").hide();
  $("#article2").hide();
  $("#article3").hide();
  $("#article4").show();
  $("#article5").hide();
});

$("ul li.option.personal__information").click(function(){
  $("#article1").hide();
  $("#article2").hide();
  $("#article3").hide();
  $("#article4").hide();
  $("#article5").show();
});

/*$.ajax({url:'about/wexp.txt', success: function(result){
$('#wexp').html(result);
}});*/


if ($(window).width() < 450) {
  $('body').addClass('sp');
  let menuView = "<div class=\"menu--section\"><ul></ul></div>";
  let menuViewInner = $(".page--menu").html();
  // $("header").append("<span class=\"menu left\" onclick=\"showMenu(this)\"><div class=\"menu--icon bar1\"></div><div class=\"menu--icon bar2\"></div><div class=\"menu--icon bar3\"></div><a href=\"#\" class=\"menu--inner\"></a></span>");
  $(".main").prepend(menuView);
  $(".menu--section ul").html(menuViewInner);
  $.ajax({url:'../contact/sp_contacts.txt',success: function(result){
    $('.sp .contact').html(result);
  }});
} else if ($(window).width() < 1025) {
  $('body').addClass('tab');
  $.ajax({url:'../contact/sp_contacts.txt',success: function(result){
    $('.tab .contact').html(result);
  }});
  } else {
    $('.header').css('top',winHeight);
  $.ajax({url:'../contact/web_contacts.txt',success: function(result){
    $('.contact').html(result);
  }});
  }

  $(window).change(function(){

  });

  $(window).scroll(function(){
    if ($(document).scrollTop()<winHeight) {
    $('.header').hide(); 
  } else {
    $('.header').show();
      // $(document).scrollTop(winHeight);
    }
  });




  $('.section').height(winHeight);

  let tlEvent = $(".time__line--events .event");

});

function showMenu(x) {
	x.classList.toggle("change");
	$('.menu--section').toggleClass("open");
} 

function timeLineLoader(tle) {
  switch(tle.id){
    
      case "event--2022":
        $.ajax({url:'about/work_exp_2022.txt',success: function(result){
          $('#tlv').html(result);
          $('#tlv').css('left','0');
        }});
        break;
      case "event--2021":
        $.ajax({url:'about/work_exp_2021.txt',success: function(result){
          $('#tlv').html(result);
          $('#tlv').css('left','200px');
        }});
        break;
      case "event--2020":
        $.ajax({url:'about/work_exp_2020.txt',success: function(result){
          $('#tlv').html(result);
          $('#tlv').css('left','420px');
        }});
        break;
      case "event--2019":
        $.ajax({url:'about/work_exp_2019.txt',success: function(result){
          $('#tlv').html(result);
          $('#tlv').css('left','625px');
        }});
        break;
      case "event--2018":
        $.ajax({url:'about/work_exp_2018.txt',success: function(result){
          $('#tlv').html(result);
          $('#tlv').css('left','840px');
        }});
        break;
      case "event--2015":
        $.ajax({url:'about/work_exp_2015.txt',success: function(result){
          $('#tlv').html(result);
          $('#tlv').css('left','1045px');
        }});
        break;
      case "event--2014":
        $.ajax({url:'about/work_exp_2014.txt',success: function(result){
          $('#tlv').html(result);
          $('#tlv').css('left','1255px');
        }});
        break;
      case "event--2011":
        $.ajax({url:'about/work_exp_2011.txt',success: function(result){
          $('#tlv').html(result);
          $('#tlv').css('left','1455px');
        }});
        break;
    }
    $('#tlv').css('display','inline-block');
}

function badge(cert) {
  switch(cert.id){
    case "cert__oca":
      $('.section--about #article3 iframe#embedded-badge-5425153a-5f45-4ec5-90f6-14fb1e36e7ed').show();
      break;
    case "cert__aws--practitioner":
      $('.section--about #article3 iframe#embedded-badge-e774c874-b199-4a66-a7a3-71cb107a44ea').show();
      break;
    case "cert__aws--developer":
      $('.section--about #article3 iframe#embedded-badge-3dab972c-820b-4833-b762-2251b66324ae').show();
      break;
  }
}

function hBadge(cert) {
  switch(cert.id){
    case "cert__oca":
      $('.section--about #article3 iframe#embedded-badge-5425153a-5f45-4ec5-90f6-14fb1e36e7ed').hide();
      break;
    case "cert__aws--practitioner":
      $('.section--about #article3 iframe#embedded-badge-e774c874-b199-4a66-a7a3-71cb107a44ea').hide();
      break;
    case "cert__aws--developer":
      $('.section--about #article3 iframe#embedded-badge-3dab972c-820b-4833-b762-2251b66324ae').hide();
      break;
  }
}
function loadScreen() {
  let name = "Naleli Ramoeletsi";
  let header = document.getElementById('load--heading');
  let nName = "";
  for (var i = 0; i < name.length; i++) {
    nName.concat(name[i]);
    header.innerContent = nName;
  }
}


// document.onload(articleLoader());

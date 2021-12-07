$(function () {
  $("[data-toggle=popover]").popover({
    title: "Update Spelling",
    container: "body",
    html: true,
    trigger: "click",
    sanitize: false,
    placement: "bottom",
    content: function () {
      var content = $(this).attr("data-popover-content");
      return $(content).children(".popover-body").html();
    },
  });
  //확인 누르면 팝오버창 사라지고 글자 사라짐
  $(document).on("click", "#answer_edit_btn", function () {
    $('[data-toggle="popover"]').popover("hide");
    $('[data-toggle="popover"]').removeClass("click-word");
  });
});

//단어 클릭하면 각각 파란색으로 바뀜
$(".word").click(function () {
  $(this).each(function () {
    $(this).toggleClass("click-word");
  });
});

//오타수정 팝오버 - input에서 타이핑 하면 화면에 바껴서 출력
function confirm1() {
  var inputVal1 = $(".popover #input1").val();
  if ($(".popover #input1").val()) {
    $("#pop1").html(inputVal1);
  }
}

function confirm2() {
  var inputVal2 = $(".popover #input2").val();
  if ($(".popover #input2").val()) {
    $("#pop2").html(inputVal2);
  }
}

function confirm3() {
  var inputVal3 = $(".popover #input3").val();
  if ($(".popover #input3").val()) {
    $("#pop3").html(inputVal3);
  }
}

function confirm4() {
  var inputVal4 = $(".popover #input4").val();
  if ($(".popover #input4").val()) {
    $("#pop4").html(inputVal4);
  }
}

function confirm5() {
  var inputVal5 = $(".popover #input5").val();
  if ($(".popover #input5").val()) {
    $("#pop5").html(inputVal5);
  }
}
function confirm6() {
  var inputVal6 = $(".popover #input6").val();
  if ($(".popover #input6").val()) {
    $("#pop6").html(inputVal6);
  }
}
function confirm7() {
  var inputVal7 = $(".popover #input7").val();
  if ($(".popover #input7").val()) {
    $("#pop7").html(inputVal7);
  }
}
function confirm8() {
  var inputVal8 = $(".popover #input8").val();
  if ($(".popover #input8").val()) {
    $("#pop8").html(inputVal8);
  }
}
function confirm9() {
  var inputVal9 = $(".popover #input9").val();
  if ($(".popover #input9").val()) {
    $("#pop9").html(inputVal9);
  }
}
function confirm10() {
  var inputVal10 = $(".popover #input10").val();
  if ($(".popover #input10").val()) {
    $("#pop10").html(inputVal10);
  }
}

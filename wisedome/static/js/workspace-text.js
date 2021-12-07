//폰트 글자 키우기
var def_size = 16;
var cur_base = def_size;
$('input[type="button"]').click(function () {
  change_font_size(parseInt($(this).data("csize")));
});
function change_font_size(csize) {
  var $cotent_html = $(".textsize");
  $cotent_html.each(function () {
    var cur_size = parseInt($(this).css("font-size"));
    cur_size = cur_size + csize;
    console.log(cur_size);
    $(this).css("font-size", cur_size.toString() + "px");
  });
}

//나의 답변관리 숨겼다 나타내기
$(document).ready(function () {
  $("#manage-answer-btn").click(function () {
    $("#manage-answer").slideToggle("slow");
  });
  $("#manage-answer-btn").click(function () {
    $("#manage-answer-top").hide("slow");
  });
});

//수정하기 버튼 누르면, 객관식 답변들 뜸
$(document).ready(function () {
  $("#edit").click(function () {
    $(".reselect").css("display", "block");
  });
});

///답변을 누르면 제출하기 버튼 활성화됨
function enableButton() {
  document.getElementById("submit").disabled = false;
}

function typeText() {
  document.getElementById("summary").disabled = false;
}

////페이지번호 (탭버튼)누르면 내용 뜨게하기
function openPage(evt, pageNumber) {
  var i, x, tablinks;
  x = document.getElementsByClassName("pageContents");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" purple", "");
  }
  document.getElementById(pageNumber).style.display = "block";
  evt.currentTarget.className += " purple";
}

///문장요약란이 글자가 입력되면 제출하기 버튼 활성화
$(function () {
  $("#input_text").on("input", function () {
    if ($("#input_text").val() == "") $("#summary").attr("disabled", true);
    else $("#summary").attr("disabled", false);
  });
});

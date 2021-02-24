
//폰트 글자 키우기
function changeFontSize(className, fontSize) {
    for (let element of document.getElementsByClassName(className))
      element.style.fontSize =
        (typeof fontSize === "function" ? fontSize(element) : fontSize) + "px";
  }
  
  window.addEventListener("input", () => {
    const input = event.target;
    if (input.classList.contains("controlbar"))
      changeFontSize(input.dataset.fsTargetClass || "textsize", input.value);
  });
  
  
  //답변 컬러에관한 설명
  $(document).ready(function(){
    $("#bannerClose").click(function(){
      $(".popup").hide("slow");
      $("#bannerOpen").show();
    });
    $("#bannerOpen").click(function(){
      $(".popup").show("slow");
      $("#bannerOpen").hide();
    });
  });
  
  
  
  //페이지번호 (탭버튼)누르면 내용 뜨게하기
  function openWord(evt, wordNumber) {
    var i, x, tablinks;
    x = document.getElementsByClassName("wordbook");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" purple", " ");
    }
    document.getElementById(wordNumber).style.display = "block";
    evt.currentTarget.className += " purple";
  }
  
  
  
  //답변수정에서 이전문제들 뜨게
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
  
  
  
  //나의 답변관리 숨겼다 나타내기
  $(document).ready(function(){
    $("#manage-answer-btn").click(function(){
      $("#manage-answer").slideToggle("slow");
    });
    $("#manage-answer-btn").click(function(){
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
  
  
  //최종제출버튼 뜸
  $(document).ready(function () {
      $(".step2-submit-btn .btn").click(function () {
              $("#final-submit").css("display", "block");
      });
  });
  
  
  
  
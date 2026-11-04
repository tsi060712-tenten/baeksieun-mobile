// 모바일 전용 반응형 기능입니다.
$(function () {
  // 모바일 화면인지 확인합니다. 425px 이하에서만 아래 기능을 실행합니다.
  const isMobile = window.matchMedia("(max-width: 424.98px)").matches;

  // 모바일이 아니면 PC의 기존 기능을 그대로 사용하고 종료합니다.
  if (!isMobile) return;

  // Finder 아이콘을 모바일용 파일 아이콘으로 바꿉니다.
  $("footer .finder img").attr({
    src: "img/icon_file.png",
    alt: "파일아이콘"
  });

  // 기존 메모장에 타이핑되던 제목을 모바일에서는 한 줄로 고정합니다.
  const $portTitle = $(".memo .port h1");
  const mobileTitle = "Baek Sieun Portfolio";

  // main.js의 타이핑 효과가 제목을 다시 바꾸더라도 모바일 제목을 유지합니다.
  $portTitle.text(mobileTitle);
  if ($portTitle.length) {
    const titleObserver = new MutationObserver(function () {
      if ($portTitle.text().replace(/\s+/g, " ").trim() !== mobileTitle) {
        $portTitle.text(mobileTitle);
      }
    });

    // 제목 요소의 텍스트가 바뀌는지 관찰합니다.
    titleObserver.observe($portTitle[0], {
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  // PC에서 쓰던 자기소개 대신 이메일, 전화번호, 이력서, 노션 링크를 표시합니다.
  const mobileContactHtml = `
    <div class="mobile-contact">
      <button type="button" class="mobile-copy" data-copy="tsi060712@naver.com">
        tsi060712@naver.com
      </button>
      <button type="button" class="mobile-copy" data-copy="010-4653-6344">
        010-4653-6344
      </button>
      <button type="button" class="mobile-resume">이력서 보기</button>
      <a class="mobile-notion" href="https://app.notion.com/p/7037cf0d4c9f83ad9768817db4724702" target="_blank" rel="noopener noreferrer">
        Notion
      </a>
      <span class="mobile-toast" role="status">Copied!</span>
    </div>
  `;

  // 이전에 생성된 연락처가 있으면 중복으로 추가하지 않습니다.
  if (!$(".memo .mobile-contact").length) {
    $(".memo .port").append(mobileContactHtml);
  }

  // 마지막으로 누른 모바일 창이 항상 가장 위에 오도록 관리합니다.
  let mobileZIndex = 2000;

  function bringMobileWindowToFront($window) {
    $(".window").each(function () {
      mobileZIndex = Math.max(
        mobileZIndex,
        Number($(this).css("z-index")) || 0
      );
    });

    mobileZIndex++;
    $window.css("z-index", mobileZIndex);
  }

  $(document)
    .off("pointerdown.mobileWindowStack", ".window")
    .on("pointerdown.mobileWindowStack", ".window", function () {
      bringMobileWindowToFront($(this));
    });

  // 이메일·전화번호를 누르면 클립보드에 복사합니다.
  $(document).on("click", ".mobile-contact .mobile-copy", async function () {
    const valueToCopy = $(this).attr("data-copy");

    try {
      // 보안 컨텍스트에서 지원되는 클립보드 API를 사용합니다.
      await navigator.clipboard.writeText(valueToCopy);
    } catch (error) {
      // 클립보드 API를 사용할 수 없는 경우를 위한 복사 대체 방법입니다.
      const $temp = $("<textarea>").val(valueToCopy).appendTo("body");
      $temp[0].select();
      document.execCommand("copy");
      $temp.remove();
    }

    // 복사 완료 안내를 잠깐 표시합니다.
    const $toast = $(".mobile-contact .mobile-toast");
    $toast.text("Copied!").addClass("show");
    setTimeout(function () {
      $toast.removeClass("show");
    }, 1200);
  });

  // 이력서 보기를 누르면 기존 PDF 창을 엽니다.
  $(document).on("click", ".mobile-contact .mobile-resume", function () {
    window.open("pdf/resume.pdf", "_blank")
  });

  // Finder 파일 아이콘을 누르면 Project 창을 엽니다.
  // 기존 PC용 클릭 이벤트에만 의존하지 않고 모바일 표시 클래스를 추가합니다.
  $("footer .finder").off("click.mobileProject").on("click.mobileProject", function (event) {
    event.preventDefault();
    event.stopPropagation();

    const $project = $(".project")
      .addClass("mobile-open")
      .removeClass("close");

    bringMobileWindowToFront($project);
  });

  // Project 창을 닫는 버튼을 누르면 홈 화면으로 돌아갑니다.
  $(".project .menubg .close-btn").off("click.mobileProjectClose").on("click.mobileProjectClose", function () {
    $(".project").removeClass("mobile-open");
  });

  // Project 창의 왼쪽 화살표 컨테이너를 누르면 모바일 홈 화면으로 돌아갑니다.
  $(".project .topbar .arrowbox")
    .off("click.mobileProjectBack")
    .on("click.mobileProjectBack", function (event) {
      event.preventDefault();
      event.stopPropagation();

      $(".project")
        .removeClass("mobile-open")
        .addClass("close");
    });

  // 캘린더 위젯을 누르면 기존 Career 창을 화면 중앙에 배치합니다.
  $(".widget .calendar, .contact .wed").off("click.mobileCareer").on("click.mobileCareer", function () {
    const $address = $(".address")
      .removeClass("close")
      .addClass("mobile-centered");

    bringMobileWindowToFront($address);
  });

  // Career/Contact 창의 닫기 버튼을 누르면 창을 숨기고 중앙 배치 클래스를 제거합니다.
  $(".address .close-btn").off("click.mobileCareerClose").on("click.mobileCareerClose", function () {
    $(".address")
      .addClass("close")
      .removeClass("mobile-centered");
  });

  // 다른 코드에서 address 창을 닫았을 때도 중앙 배치 스타일이 남지 않도록 처리합니다.
  $(document).on("click", ".address .close-btn", function () {
    setTimeout(function () {
      if ($(".address").hasClass("close")) {
        $(".address").removeClass("mobile-centered");
      }
    }, 0);
  });

  // 모바일에서는 마우스 위치에 반응하는 도크 확대 효과를 제거합니다.
  $("footer .inner").off("mousemove mouseleave");
  $("footer .inner img").css("transform", "none");

  // 화면 방향이나 브라우저 크기가 바뀌었을 때도 모바일 도크 아이콘을 원래 크기로 둡니다.
  $(window).on("resize.mobileDock", function () {
    if (window.matchMedia("(max-width: 424.98px)").matches) {
      $("footer .inner img").css("transform", "none");
    }
  });
});

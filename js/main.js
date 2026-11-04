$(function () {
  // 다크모드 라이트모드
  $(".toggle-box").click(function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
      $("header .icon-box").find("img").attr("src","img/darkmode.svg")
    }else{
      $("header .icon-box").find("img").attr("src","img/lightmode.svg")
    }
  })

  // header today 날짜
  function updateDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString("ko-KR", {
      month: "long",
      day: "numeric",
      weekday: "short",
    });

    const time = now.toLocaleTimeString("ko-KR", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    $(".header-time").text(`${date} ${time}`);
  }

  updateDateTime();

  setInterval(updateDateTime, 60000);

  // 메모장 글씨 타이핑 효과
  const text = `Baek Sieun
    Portfolio`;

  let index = 0;

  function typing() {
    if (index < text.length) {
      $(".port h1").html(text.slice(0, index + 1).replace(/\n/g, "<br>"));

      index++;
      // 타이핑속도조절
      setTimeout(typing, 100);
    }else {
      typingSpan();
    }
  }

  const textSpan = `디자인의 의도를 이해하고, 
  구현의 가능성을 고려하며, 
  더 나은 결과를 함께 만듭니다`;

  let idx = 0;

  function typingSpan() {
    if (idx < textSpan.length) {
      $(".port > span").html(textSpan.slice(0, idx + 1).replace(/\n/g, "<br>"));

      idx++;
      // 타이핑속도조절
      setTimeout(typingSpan, 80);
    }
  }

  // 1.2초 후 타이핑 시작
  setTimeout(typing, 1200);
  

  // calender 위젯
  function createCalendar() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const week = ["일", "월", "화", "수", "목", "금", "토"];

    let html = "";

    // 월
    html += `<div class="month">${month + 1}월</div>`;

    // 요일
    html += `<div class="week">`;

    week.forEach((day) => {
      html += `<span>${day}</span>`;
    });

    html += `</div>`;

    // 날짜
    html += `<div class="days">`;

    // 1일 전 빈칸
    for (let i = 0; i < firstDay; i++) {
      html += `<span></span>`;
    }

    // 날짜
    for (let i = 1; i <= lastDate; i++) {
      if (i === today) {
        html += `<span class="today">${i}</span>`;
      } else {
        html += `<span>${i}</span>`;
      }
    }

    // 남은 칸 빈칸
    const totalCells = firstDay + lastDate;
    const emptyCells = 42 - totalCells;

    for (let i = 0; i < emptyCells; i++) {
      html += `<span></span>`;
    }

    html += `</div>`;

    $(".calendar").html(html);
  }

  createCalendar();

  // 포토부스 사진 교체
  $(".about-me .minigall img").on("click", function () {
    const $main = $(".about-me .imgbox img");
    const $thumb = $(this);

    // 이미지 경로 서로 바꾸기
    const mainSrc = $main.attr("src");
    $main.attr("src", $thumb.attr("src"));
    $thumb.attr("src", mainSrc);
});


  // 창 열고 닫기
  $(".about-me .close-btn").click(function () {
    $(".about-me").addClass("close");
  });

  $(".contact .gallery").click(function () {
    zIndex++;
    $(".about-me").removeClass("close").css("z-index", zIndex);
  });

  $(".project .close-btn").click(function () {
    $(".project").addClass("close");
  });

  $("footer .finder").click(function () {
    zIndex++;
    $(".project").removeClass("close").css("z-index", zIndex);
  });

  // project 창 닫기
  $(".project .close-btn").click(function () {
    $(".project").addClass("close");
  });
  $("footer .finder").click(function () {
    $(".project").removeClass("close");
  });

  function openContact() {
    zIndex++;

    $(".address").removeClass("close").css("z-index", zIndex);

    $(".address .search p").text("Contact");

    $(".address .info").html(`
        <div class="copy-toast">Copied!</div>

        <ul>
            <li class="copy">
                <img src="img/mail.svg" alt="메일아이콘">
                <span>tsi060712@naver.com</span>
            </li>

            <li class="copy">
                <img src="img/call.svg" alt="전화아이콘">
                <span>010-4653-6344</span>
            </li>

            <li class="pdf-pre">
                <img src="img/resume.svg" alt="위치아이콘" style="width: 22px; height: 22px;">
                <span>이력서 보기</span>
            </li>
        </ul>

        <button>
            <a href="#" rel="noopener noreferrer">
              <p>Click to copy info</p>
            </a>
        </button>
    `);
  }

  // Career 열기
  function openCareer() {
    zIndex++;

    $(".address").removeClass("close").css("z-index", zIndex);

    $(".address .search p").text("Career");

    $(".address .info").html(`
        <ul>
            <li>
                <span>404: Career not found?</span>
            </li>
            <li>
                <span>Still building my own path.</span>
            </li>
        </ul>

        <button>
            <a href="https://app.notion.com/p/7037cf0d4c9f83ad9768817db4724702" target="_blank" rel="noopener noreferrer">
              <p>View Notion</p>
            </a>
        </button>
    `);
  }

  // Mail 아이콘 → Contact
  $(".contact .mail").click(function () {
    openContact();
  });

  // Calendar 위젯 + Footer Calendar → Career
  $(".calendar, .contact .wed").click(function () {
    openCareer();
  });

  // Red 버튼 → 창 닫기
  $(".address .close-btn").click(function () {
    $(".address").addClass("close");
  });

  // .info 복사되기

  $(".info").on("click", ".copy", function () {
    const copy = $(this).find("span").text();

    navigator.clipboard.writeText(copy);

    $(".copy-toast").addClass("show");

    setTimeout(function () {
      $(".copy-toast").removeClass("show");
    }, 1000);
  });
  // resume 창 뜨기 + 닫기
  $(".address .info").on("click", ".pdf-pre", function () {
      let maxZIndex = 0;

      $(".window").each(function () {
          maxZIndex = Math.max(
              maxZIndex,
              Number($(this).css("z-index")) || 0
          );
      });

      $(".resume")
          .removeClass("close")
          .css("z-index", maxZIndex + 1);
  });
  $(".resume .close-btn").click(function () {
    $(".resume").addClass("close");
  });

  // window 창 드래그 + 클릭한 창 앞으로
  let zIndex = 11;
  $(function () {
    let isDragging = false;
    let $dragWindow = null;

    let startX;
    let startY;

    let startLeft;
    let startTop;

    $(document).on("mousedown", ".window", function (e) {
      const $window = $(this);
      // 현재 창들의 최대 z-index 찾기
      let maxZIndex = 0;

      $(".window").each(function () {
        maxZIndex = Math.max(
            maxZIndex,
            Number($(this).css("z-index")) || 0
        );
      });
      // 클릭한 창을 가장 위로
      zIndex = maxZIndex + 1;
      $window.css("z-index", zIndex);

      // 모바일에서는 창을 앞으로만 가져오고 드래그 위치는 변경하지 않습니다.
      if (window.matchMedia("(max-width: 424.98px)").matches) return;

      isDragging = true;
      $dragWindow = $window;

      startX = e.clientX;
      startY = e.clientY;

      const rect = $window[0].getBoundingClientRect();

      startLeft = rect.left;
      startTop = rect.top;

      // transform 제거
      $window.css({
        left: startLeft,
        top: startTop,
        transform: "none",
      });
    });

    $(document).on("mousemove", function (e) {
      if (!isDragging || !$dragWindow) return;

      const moveX = e.clientX - startX;
      const moveY = e.clientY - startY;

      $dragWindow.css({
        left: startLeft + moveX,
        top: startTop + moveY,
      });
    });

    $(document).on("mouseup", function () {
      isDragging = false;
      $dragWindow = null;
    });
  });

  // footer icon 파도효과
  const $dock = $("footer .inner");
  const $items = $("footer .finder, footer .skills li, footer .contact > div");

  const maxScale = 1.25; // 가장 크게 커지는 크기
  const effectRange = 150; // 영향 받는 거리

  $dock.on("mousemove", function (e) {
    const mouseX = e.clientX;

    $items.each(function () {
      const $item = $(this);
      const $img = $item.find("img");

      const rect = this.getBoundingClientRect();

      // 아이콘의 가운데 위치
      const itemX = rect.left + rect.width / 2;

      // 마우스와 아이콘 사이 거리
      const distance = Math.abs(mouseX - itemX);

      // 영향 범위 안에서만 확대
      if (distance < effectRange) {
        // 0 ~ 1 사이 값
        const influence = 1 - distance / effectRange;

        // 부드러운 곡선
        const smooth = Math.sin((influence * Math.PI) / 2);

        // scale 계산
        const scale = 1 + (maxScale - 1) * smooth;

        $img.css("transform", `scale(${scale})`);
      } else {
        $img.css("transform", "scale(1)");
      }
    });
  });

  // Dock에서 마우스가 빠지면 원래대로
  $dock.on("mouseleave", function () {
    $items.find("img").css("transform", "scale(1)");
  });
});

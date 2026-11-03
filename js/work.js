
$(function () {
  // 앱 디자인 데이터
  const appProjects = [
    {
      title: "비버모아",
      image: "img/app1-thumb.png",
      description: "저축을 주제로 기획한 금융 앱으로, 저축 서비스에 필요한 구조와 기능을 정의하고 이를 바탕으로 모바일 앱 UI/UX를 디자인했습니다. 신뢰감과 안정감을 주는 초록색을 메인컬러로 설정했습니다.",
      period: "2026.07.22 - 2026.07.26",
      tools: "Figma · ChatGPT · Photoshop",
      prototype: "https://www.figma.com/proto/u7wTjLv8YEzTfc0dEy3owN/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=53-4&t=4ImloFybozFKGUfd-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=53%3A4&show-proto-sidebar=1",
      planning: "https://app.notion.com/p/d807cf0d4c9f8324a3c88148b726af8d"
    }
  ];
  // 상세페이지 데이터
  const innerProjects = [
    {
      title: "글램팜",
      image: "img/glam.jpg",
      description: "글램팜 고데기의 제품 특징과 기능을 소비자가 쉽게 이해할 수 있도록 구성하고, 제품의 품질과 프리미엄 이미지를 함께 전달하는 것을 목표로 제작했습니다. ",
      period: "2026.07.22 - 2026.07.26",
      tools: "Figma · ChatGPT · Photoshop",
      viewmore: "",
      process: "https://app.notion.com/p/3d37cf0d4c9f808f8e5ff03fc8821596"
    },
    {
      title: "국일 식초",
      image: "img/innerpage1.jpg",
      description: "기업 요구사항을 바탕으로 야채·과일 세척 식초의 특징과 활용성을 효과적으로 전달할 수 있도록 기획하고 디자인했습니다. AI 활용 이미지를 통해 시각적으로 전달할 수 있도록 구성했습니다.",
      period: "2026.07.22 - 2026.07.26",
      tools: "Figma · ChatGPT · Photoshop",
      viewmore: "",
      process: "https://app.notion.com/p/3d37cf0d4c9f80f7bc94f6e28c0cc7d7"
    },
    {
      title: "국일 퐁퐁",
      image: "img/innerpage2.jpg",
      description: "기업 요구사항을 바탕으로 주방세제의 특징과 장점을 효과적으로 전달할 수 있도록 기획하고 디자인했습니다. 고객의 문제 제시 · 해결책 제시 · 제품 장점 강조 · 구매 유도 의 흐름으로 구성했습니다. ",
      period: "2026.07.22 - 2026.07.26",
      tools: "Figma · ChatGPT · Photoshop",
      viewmore: "",
      process: "https://app.notion.com/p/3d37cf0d4c9f80499d2dfe48568c891f"
    }
  ]
  // 카드뉴스 데이터
  const cardProjects = [
    {
      title: "공차",
      image: "img/gongcha.jpg",
      description: "공차의 망고쥬얼리밀크티와 말차 쥬얼리 밀크티를 비교하는 취향 선택형 카드뉴스를 제작했습니다. '오늘 너의 취향은?' 을 중심으로 두 제품의 색감과 특징이 직관적으로 보이도록 구성했습니다. ",
      period: "2026.07.22 - 2026.07.26",
      tools: "Figma · Photoshop · Chat GPT",
      process: "https://app.notion.com/p/3d37cf0d4c9f808f8e5ff03fc8821596"
    },
    {
      title: "fwee",
      image: "img/fwee.jpg",
      description: "fwee Glowy Smoothie 립밤을 소개하는 제품 홍보형 카드뉴스를 제작했습니다. 제품의 스무디 컨셉과 다양한 컬러를 시각적을 보여주고, 립밤의 특징이 한눈에 들어오도록 구성했습니다.",
      period: "2026.07.22 - 2026.07.26",
      tools: "Figma · Photoshop · Chat GPT",
      process: "https://app.notion.com/p/fwee-a9f7cf0d4c9f82bea0c7816e037c752a"
    },
    {
      title: "오니츠카타이거",
      image: "img/onitsuka.jpg",
      description: "오니츠카타이거의 신상 SCRAW 라인을 소개하는 제품 홍보형 카드뉴스를 제작했습니다. 브랜드의 스포티하고 레트로한 분위기와 제품 컬러를 강하게 보여주는 것에 초점을 맞춰 작업했습니다.",
      period: "2026.07.22 - 2026.07.26",
      tools: "Figma · Photoshop · Chat GPT",
      process: "https://app.notion.com/p/6067cf0d4c9f83dc8750810a4d954412"
    },
    {
      title: "제네시스 마그마",
      image: "img/magma.jpg",
      description: "제네시스의 X Skorpio Concept을 주제로 강렬한 오프로드·고성능 이미지를 강조한 카드뉴스를 제작했습니다. 어두운 공간과 오렌지색 네온 조명을 활용해 고급스러운 활동성있는 분위기를 표현했습니다.",
      period: "2026.07.22 - 2026.07.26",
      tools: "Figma · Photoshop · Chat GPT",
      process: "https://app.notion.com/p/40c7cf0d4c9f833ab74981141982fe35"
    }
  ]
  // 클론코딩 데이터
  const projects = [
    // {
    //   title: "StudioKyle",
    //   image: "img/coding-img1.png",
    //   description: "브랜드의 감각적인 무드를 전달하는 스튜디오카일 웹사이트입니다. GSAP과 ScrollTrigger를 이용해 인터랙션을 구현하고 jQuery 로 cursor 스타일을 변경했습니다.",
    //   period: "2026.09.14 - 2026.10.03",
    //   tools: "HTML · CSS · jQuery · Lenis · GSAP",
    //   mySite: "#",
    //   process: "#"
    // },
    {
      title: "(주)365mc",
      image: "img/365mc.png",
      description: "영상, swiper, GSAP, Lenis 등 다양한 라이브러리와 인터랙션을 활용하여 메인페이지 50%와 서브페이지(의료사업)를 구현했습니다. 팀프로젝트로 반응형과 영문버전까지 제작했습니다.  ",
      period: "2026.07.31 - 2026.08.21",
      tools: "HTML · CSS · jQuery · Lenis · GSAP",
      mySite: "",
      process: "https://app.notion.com/p/365mc-cb57cf0d4c9f8215887b01c0cf0128fe"
    },
    {
      title: "조세마루",
      image: "img/coding-img2.png",
      description: "Fullpage 라이브러리를 이용한 웹사이트 조세마루입니다. gsap을 이용하여 메인 화면의 글씨 인터랙션을 구현하고 Fullpage 의 navigation을 커스텀했습니다.",
      period: "2026.08.19 - 2026.08.28",
      tools: "HTML · CSS · jQuery · Fullpage · gsap",
      mySite: "https://tsi060712-tenten.github.io/josemaru/",
      process: "https://app.notion.com/p/a147cf0d4c9f8377a4b1015b3819f6ee"
    },
    {
      title: "부산국제영화제",
      image: "img/coding-img3.png",
      description: "Swiper를 활용한 다양한 형태의 슬라이드 구현과 함께, 페이지의 전체적인 분위기에 맞춰 스크롤바 스타일을 직접 커스텀하고 스크롤 방향에 따라 헤더가 나타나고 사라지는 효과를 구현했습니다.",
      period: "2026.08.07 - 2026.08.15",
      tools: "HTML · CSS · jQuery · Swiper",
      mySite: "https://tsi060712-tenten.github.io/busan/",
      process: "https://app.notion.com/p/7217cf0d4c9f8245b4ce81c578458556"
    },
    {
      title: "삼양미디어",
      image: "img/coding-img4.png",
      description: "삼양미디어의 교과서 카테고리 페이지를 클론코딩했습니다. 원본 사이트의 레이아웃과 인터랙션을 직접 분석한 뒤 HTML, CSS, jQuery, Swiper 를 활용해 주요 기능을 구현했습니다.",
      period: "2026.07.01 - 2026.07.10",
      tools: "HTML · CSS · jQuery · Swipe",
      mySite: "https://tsi060712-tenten.github.io/samyang/",
      process: "https://app.notion.com/p/3907cf0d4c9f80a48167fd244ee255d4"
    }
  ];
  // 랜딩페이지 데이터
  const landingProjects = [
    {
      title: "Sumone",
      image: "img/sumone.jpg",
      description: "커플 문답 앱인 썸원의 브랜드 분위기와 서비스를 참고해 SumOne 2.0 : Grow Together 의 방향성을 보여주는 랜딩페이지를 디자인했습니다. AI 를 활용해 랜딩페이지에 필요한 비주얼을 제작하고 Figma 에 적용했습니다.",
      period: "2026.07.22 - 2026.07.26",
      tools: "Figma · ChatGPT · Photoshop",
      prototype: "https://www.figma.com/proto/xBVbJa1V2LB5KO5aoINsDV/%EB%B0%B1%EC%8B%9C%EC%9D%80?node-id=128-2&t=haucd0KxqfnBqNl5-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1",
      process: "https://app.notion.com/p/7107cf0d4c9f83b1ac3201747a0184fc"
    }
  ];
  // 웹페이지 데이터
  const webProjects = [
    {
      title: "Kia Lifestyle",
      image: "img/kia.png",
      description: "차량 정보 제공에서 확장시켜 지속적인 브랜드 경험과 고객 간의 접점을 강화하기 위해 실질적인 차박 관련 정보 제공과 캠페인으로 사용자 참여를 확대 시키는 독립적인 컨텐츠 플랫폼을 제작했습니다.",
      period: "2026.09.03 - 2026.09.30",
      tools: "Figma · VSCode · Chat GPT · GitHub",
      mySite: "https://tsi060712-tenten.github.io/kia-success/",
      process: "https://app.notion.com/p/kia-lifestyle-3fd7cf0d4c9f80f2b129fb8f1e031ca5"
    }
  ];

  
  // 창별 요소 선택
  const $workpage = $(".clone-window");
  const $appWindow = $(".app-window");
  const $innerpage = $(".inner-page");
  const $cardnews = $(".card-news");
  const $landingpage = $(".landing-page");
  const $webpage = $(".web-page");

  let currentIndex = 0;
  let appIndex = 0;

  // 프로젝트 내용 변경 공통 함수
  function changeProject($window, projects, index, isApp = false) {
    index = (index + projects.length) % projects.length;

    const project = projects[index];

    $window.find(".topbar h4").text(project.title);

    $window.find(".work-img img")
      .attr("src", project.image)
      .attr("alt", project.title);

    $window.find(".work-txt h2").text(project.title);
    $window.find(".work-txt > span").text(project.description);

    $window.find(".meta p").eq(0).find("strong").text(project.period);
    $window.find(".meta p").eq(1).find("strong").text(project.tools);

    // 버튼 링크 변경
    if (isApp) {
      $window.find(".site-btn a").eq(0).attr("href", project.prototype);
      $window.find(".site-btn a").eq(1).attr("href", project.planning);
    } else {
      $window.find(".site-btn a").eq(0).attr("href", project.mySite);
      $window.find(".site-btn a").eq(1).attr("href", project.process);
    }

    // 선택한 슬라이드 표시 + 슬라이드 넘기기 
    $window.find(".swiper-slide")
      .removeClass("selected")
      .eq(index)
      .addClass("selected");

      // 페이지네이션 위치 변경
      const pagenation = $window.find(".archive")[0].swiper;

      if(pagenation) {
        pagenation.slideTo(index)
      }

      if (isApp) {
        appIndex = index;
      } else {
        currentIndex = index;
      }
    }

  // 클론코딩 슬라이드 클릭
  $workpage.on("click", ".archive .swiper-slide a", function (e) {
    e.preventDefault();

    const index = $(this).closest(".swiper-slide").index();
    changeProject($workpage, projects, index);
  });

  // 클론코딩 이전 / 다음
  $workpage.find(".pagebtn a").eq(0).on("click", function (e) {
    e.preventDefault();
    changeProject($workpage, projects, currentIndex - 1);
  });

  $workpage.find(".pagebtn a").eq(1).on("click", function (e) {
    e.preventDefault();
    changeProject($workpage, projects, currentIndex + 1);
  });

  // 앱 디자인 슬라이드 클릭
  $appWindow.on("click", ".archive .swiper-slide a", function (e) {
    e.preventDefault();

    const index = $(this).closest(".swiper-slide").index();
    changeProject($appWindow, appProjects, index, true);
  });

  // 앱 디자인 이전 / 다음
  $appWindow.find(".pagebtn a").eq(0).on("click", function (e) {
    e.preventDefault();
    changeProject($appWindow, appProjects, appIndex - 1, true);
  });

  $appWindow.find(".pagebtn a").eq(1).on("click", function (e) {
    e.preventDefault();
    changeProject($appWindow, appProjects, appIndex + 1, true);
  });

  // 상세페이지 슬라이드 클릭
  $innerpage.on("click", ".archive .swiper-slide a", function (e) {
    e.preventDefault();

    const index = $(this).closest(".swiper-slide").index();
    changeProject($innerpage, innerProjects, index, true);
  });

  // 상세페이지 이전 / 다음
  $innerpage.find(".pagebtn a").eq(0).on("click", function (e) {
    e.preventDefault();
    changeProject($innerpage, innerProjects, appIndex - 1, true);
  });

  $innerpage.find(".pagebtn a").eq(1).on("click", function (e) {
    e.preventDefault();
    changeProject($innerpage, innerProjects, appIndex + 1, true);
  });

  // 카드뉴스 슬라이드 클릭
  $cardnews.on("click", ".archive .swiper-slide a", function (e) {
    e.preventDefault();

    const index = $(this).closest(".swiper-slide").index();
    changeProject($cardnews, cardProjects, index, true);
  });

  // 카드뉴스 이전 / 다음
  $cardnews.find(".pagebtn a").eq(0).on("click", function (e) {
    e.preventDefault();
    changeProject($cardnews, cardProjects, appIndex - 1, true);
  });

  $cardnews.find(".pagebtn a").eq(1).on("click", function (e) {
    e.preventDefault();
    changeProject($cardnews, cardProjects, appIndex + 1, true);
  });

  // 랜딩페이지 슬라이드 클릭
  $landingpage.on("click", ".archive .swiper-slide a", function (e) {
    e.preventDefault();

    const index = $(this).closest(".swiper-slide").index();
    changeProject($landingpage, landingProjects, index, true);
  });

  // 랜딩페이지 이전 / 다음
  $landingpage.find(".pagebtn a").eq(0).on("click", function (e) {
    e.preventDefault();
    changeProject($landingpage, landingProjects, appIndex - 1, true);
  });

  $landingpage.find(".pagebtn a").eq(1).on("click", function (e) {
    e.preventDefault();
    changeProject($landingpage, landingProjects, appIndex + 1, true);
  });

  // 웹페이지 슬라이드 클릭
  $webpage.on("click", ".archive .swiper-slide a", function (e) {
    e.preventDefault();

    const index = $(this).closest(".swiper-slide").index();
    changeProject($webpage, webProjects, index, true);
  });

  // 웹페이지 이전 / 다음
  $webpage.find(".pagebtn a").eq(0).on("click", function (e) {
    e.preventDefault();
    changeProject($webpage, webProjects, appIndex - 1, true);
  });

  $webpage.find(".pagebtn a").eq(1).on("click", function (e) {
    e.preventDefault();
    changeProject($webpage, webProjects, appIndex + 1, true);
  });

  // 처음 표시할 프로젝트
  changeProject($workpage, projects, 0);
  changeProject($appWindow, appProjects, 0, true);
  changeProject($innerpage, innerProjects, 0, true);
  changeProject($cardnews, cardProjects, 0, true);
  changeProject($landingpage, landingProjects, 0, true);
  changeProject($webpage, webProjects, 0, true);


  // 창열기 공통 함수
  function openWindow($window) {
    let maxZIndex = 0;

    $(".window").each(function () {
        maxZIndex = Math.max(
            maxZIndex,
            Number($(this).css("z-index")) || 0
        );
    });

    $window.addClass("open").css("z-index", maxZIndex + 1);
  }
  
  // App Design 폴더 클릭 → 창 열기
  $(".folder-wrap ul li").eq(0).click(function () {
    openWindow($(".app-window"));

    $(".app-window")
      .addClass("open")
      .css("z-index", maxZIndex + 1);
  });

  // app-design 창 닫기
  $(".app-window .topbar .close-btn").click(function (e) {
    e.stopPropagation();
    $(".app-window").removeClass("open");
  });

  // inner-page 폴더 클릭 → 창 열기
  $(".folder-wrap ul li").eq(1).click(function () {
    openWindow($(".inner-page"));

    $(".inner-page")
      .addClass("open")
      .css("z-index", maxZIndex + 1);
    });

  // inner-page 창 닫기
  $(".inner-page .topbar .close-btn").click(function (e) {
    e.stopPropagation();
    $(".inner-page").removeClass("open");
  });

  // card-news 폴더 클릭 → 창 열기
  $(".folder-wrap ul li").eq(2).click(function () {
    openWindow($(".card-news"));

    $(".card-news")
      .addClass("open")
      .css("z-index", maxZIndex + 1);
    });

  // card-news 창 닫기
  $(".card-news .topbar .close-btn").click(function (e) {
    e.stopPropagation();
    $(".card-news").removeClass("open");
  });

  // clone coding 폴더 클릭 → 창 열기
    $(".folder-wrap ul li").eq(3).click(function () {
      openWindow($(".clone-window"));

      $(".clone-window")
        .addClass("open")
        .css("z-index", maxZIndex + 1);
      });

    // clone coding 창 닫기
    $(".clone-window .topbar .close-btn").click(function (e) {
      e.stopPropagation();
      $(".clone-window").removeClass("open");
    });

  // landing-page 폴더 클릭 → 창 열기
  $(".folder-wrap ul li").eq(4).click(function () {
    openWindow($(".landing-page"));

    $(".landing-page")
      .addClass("open")
      .css("z-index", maxZIndex + 1);
    });

  // landing-page 창 닫기
  $(".landing-page .topbar .close-btn").click(function (e) {
    e.stopPropagation();
    $(".landing-page").removeClass("open");
  });

  // web-page 폴더 클릭 → 창 열기
  $(".folder-wrap ul li").eq(5).click(function () {
    openWindow($(".web-page"));

    $(".web-page")
      .addClass("open")
      .css("z-index", maxZIndex + 1);
    });

  // web-page 창 닫기
  $(".web-page .topbar .close-btn").click(function (e) {
    e.stopPropagation();
    $(".web-page").removeClass("open");
  });

  // 슬라이드 중복 초기화
  $(".workpage").each(function () {
    const $window = $(this);

      new Swiper($window.find(".archive")[0], {
          slidesPerView: 4,
          spaceBetween: 20,

          pagination: {
              el: $window.find(".swiper-pagination")[0],
              clickable: true,
              dynamicBullets: true
          }
      });
  });
});

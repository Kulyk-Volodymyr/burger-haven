const burgerBtn = document.getElementById("burger-button");
const burgerBtnBars = document.querySelectorAll(".burgerButton__bar");
const headerMenu = document.querySelector(".header__items");
const headerMenuLinks = document.querySelectorAll(".header__items li");

const homeSection = document.getElementById("home");
const homeTitleLeft = document.getElementById("home-title-left");
const homeTitleRight = document.getElementById("home-title-right");
const aboutSection = document.getElementById("about");
const aboutContent = document.getElementById("about-content");
const menuSection = document.getElementById("menu");
const menuContent = document.getElementById("menu-content");
const contactSection = document.getElementById("contact");
const contactContent = document.getElementById("contact-content");

const burgerTop = document.getElementById("burger-top");
const burgerBottom = document.getElementById("burger-bottom");

window.addEventListener("hashchange", () => {
  history.replaceState(null, null, window.location.pathname);
});

function toggleMenu() {
  headerMenu.classList.toggle("header__items_visible");
  [...burgerBtnBars].forEach((item, index) =>
    item.classList.toggle(`burgerButton__bar_${index + 1}Close`)
  );
}
burgerBtn.onclick = toggleMenu;
[...headerMenuLinks].forEach((item) => (item.onclick = toggleMenu));

window.addEventListener("scroll", aboutSectionScroll);

function aboutSectionScroll() {
  let windowHeight = document.documentElement.clientHeight;
  let windowWidth = window.innerWidth;
  let aboutSectionTop = aboutSection.getBoundingClientRect().top;
  let scrollRatio = Math.abs(aboutSectionTop) / windowHeight;

  if (aboutSectionTop < 0) {
    if (scrollRatio < 1) {
      homeTitleLeft.style.transform = `translateX(${scrollRatio * -100}%)`;
      homeTitleRight.style.transform = `translateX(${scrollRatio * 100}%)`;
      homeTitleLeft.style.opacity = `${1 - scrollRatio}`;
      homeTitleRight.style.opacity = `${1 - scrollRatio}`;
      aboutContent.style.transform = `scale(${scrollRatio})`;
      aboutContent.style.opacity = `${scrollRatio}`;
      aboutAnimateBurger(windowWidth, scrollRatio);
    } else {
      homeTitleLeft.style.transform = "translateX(100%)";
      homeTitleRight.style.transform = "translateX(100%)";
      homeTitleLeft.style.opacity = "0";
      homeTitleRight.style.opacity = "0";
      aboutContent.style.transform = "scale(1)";
      aboutContent.style.opacity = "1";
      aboutAndMenuAnimateBurger(windowWidth);

      window.removeEventListener("scroll", aboutSectionScroll);
      window.addEventListener("scroll", menuSectionScroll);
      window.removeEventListener("scroll", aboutAnimateBurger);
      window.addEventListener("scroll", menuAnimateBurger);
    }
  } else {
    homeTitleLeft.style.transform = "translateX(0px)";
    homeTitleRight.style.transform = "translateX(0px)";
    homeTitleLeft.style.opacity = "1";
    homeTitleRight.style.opacity = "1";
    burgerTop.style.transform = "translate(-50%, -100%) scale(0.36)";
    burgerBottom.style.transform = "translate(-50%, 0%) scale(0.36)";
    aboutContent.style.opacity = "0";
    aboutContent.style.transform = "scale(0)";
  }
}

function menuSectionScroll() {
  let windowHeight = document.documentElement.clientHeight;
  let windowWidth = window.innerWidth;
  let menuSectionTop = menuSection.getBoundingClientRect().top;
  let scrollRatio = Math.abs(menuSectionTop) / windowHeight;

  if (menuSectionTop < 0) {
    if (scrollRatio < 1) {
      aboutContent.style.transform = `scale(${1 - scrollRatio})`;
      aboutContent.style.opacity = `${1 - scrollRatio}`;
      menuContent.style.opacity = `${Math.abs(menuSectionTop) / windowHeight}`;
      menuContent.style.transform = `translateX(${
        (1 - scrollRatio) * 100
      }%) scale(${0.5 + scrollRatio / 2})`;
      menuAnimateBurger(windowWidth, scrollRatio);
    } else {
      aboutContent.style.transform = "scale(0)";
      aboutContent.style.opacity = "0";
      menuContent.style.opacity = "1";
      menuContent.style.transform = "translateX(0%) scale(1)";
      menuAndCotactAnimateBurger(windowWidth);

      window.removeEventListener("scroll", menuSectionScroll);
      window.addEventListener("scroll", contactSectionScroll);
      window.removeEventListener("scroll", menuAnimateBurger);
      window.addEventListener("scroll", contactAnimateBurger);
    }
  } else {
    menuContent.style.opacity = "0";
    menuContent.style.transform = "translateX(100%) scale(0.5)";
    aboutAndMenuAnimateBurger(windowWidth);

    window.removeEventListener("scroll", menuSectionScroll);
    window.addEventListener("scroll", aboutSectionScroll);
    window.removeEventListener("scroll", menuAnimateBurger);
    window.addEventListener("scroll", aboutAnimateBurger);
  }
}

function contactSectionScroll() {
  let windowHeight = document.documentElement.clientHeight;
  let windowWidth = window.innerWidth;
  let contactSectionTop = contactSection.getBoundingClientRect().top;
  let scrollRatio = Math.abs(contactSectionTop) / windowHeight;

  if (contactSectionTop < 0) {
    if (scrollRatio < 1) {
      menuContent.style.opacity = `${1 - scrollRatio}`;
      menuContent.style.transform = `translateX(${scrollRatio * 100}%) scale(${
        1 - scrollRatio / 2
      })`;
      contactContent.style.opacity = `${scrollRatio}`;
      contactContent.style.transform = `scale(${scrollRatio})`;
      contactAnimateBurger(windowWidth, scrollRatio);
    } else {
      menuContent.style.opacity = "0";
      menuContent.style.transform = "translateX(100%) scale(0.5)";
      contactContent.style.opacity = "1";
      contactContent.style.transform = "scale(1)";
      cotactFinalAnimateBurger(windowWidth);
    }
  } else {
    menuAndCotactAnimateBurger(windowWidth);
    window.removeEventListener("scroll", contactSectionScroll);
    window.addEventListener("scroll", menuSectionScroll);
    window.removeEventListener("scroll", contactAnimateBurger);
    window.addEventListener("scroll", menuAnimateBurger);
  }
}

function aboutAnimateBurger(windowWidth, scrollRatio) {
  if (windowWidth < 480) {
    burgerTop.style.transform = `translate(-50%, ${
      -100 - scrollRatio * 25
    }%) scale(0.36)`;
    burgerBottom.style.transform = `translate(-50%, ${
      scrollRatio * 30
    }%) scale(0.36)`;
  } else if (windowWidth >= 480 && windowWidth < 768) {
    burgerTop.style.transform = `translate(-50%, ${
      -100 - scrollRatio * 25
    }%) scale(${0.36 - scrollRatio * -0.16})`;
    burgerBottom.style.transform = `translate(-50%, ${
      scrollRatio * 30
    }%) scale(${0.36 - scrollRatio * -0.16})`;
  } else if (windowWidth >= 768 && windowWidth < 992) {
    burgerTop.style.transform = `translate(-50%, ${
      -100 - scrollRatio * 25
    }%) scale(${0.36 - scrollRatio * -0.32})`;
    burgerBottom.style.transform = `translate(-50%, ${
      scrollRatio * 30
    }%) scale(${0.36 - scrollRatio * -0.32})`;
  } else if (windowWidth >= 992 && windowWidth < 1440) {
    burgerTop.style.transform = `translate(-50%, ${
      -100 - scrollRatio * 30
    }%) scale(${0.36 - scrollRatio * -0.32})`;
    burgerBottom.style.transform = `translate(-50%, ${
      scrollRatio * 35
    }%) scale(${0.36 - scrollRatio * -0.32})`;
  } else {
    burgerTop.style.transform = `translate(-50%, ${
      -100 - scrollRatio * 30
    }%) scale(${0.36 - scrollRatio * -0.32})`;
    burgerBottom.style.transform = `translate(-50%, ${
      scrollRatio * 35
    }%) scale(${0.36 - scrollRatio * -0.32})`;
  }
}

function aboutAndMenuAnimateBurger(windowWidth) {
  if (windowWidth < 480) {
    burgerTop.style.transform = "translate(-50%, -125%) scale(0.36)";
    burgerBottom.style.transform = "translate(-50%, 30%) scale(0.36)";
  } else if (windowWidth >= 480 && windowWidth < 768) {
    burgerTop.style.transform = "translate(-50%, -125%) scale(0.52)";
    burgerBottom.style.transform = "translate(-50%, 30%) scale(0.52)";
  } else if (windowWidth >= 768 && windowWidth < 992) {
    burgerTop.style.transform = "translate(-50%, -125%) scale(0.68)";
    burgerBottom.style.transform = "translate(-50%, 30%) scale(0.68)";
  } else if (windowWidth >= 992 && windowWidth < 1440) {
    burgerTop.style.transform = "translate(-50%, -130%) scale(0.68)";
    burgerBottom.style.transform = "translate(-50%, 35%) scale(0.68)";
  } else {
    burgerTop.style.transform = "translate(-50%, -130%) scale(0.68)";
    burgerBottom.style.transform = "translate(-50%, 35%) scale(0.68)";
  }
}

function menuAnimateBurger(windowWidth, scrollRatio) {
  if (windowWidth < 480) {
    burgerTop.style.transform = `translate(-50%, ${
      -125 - scrollRatio * 35
    }%) scale(0.36)`;
    burgerBottom.style.transform = `translate(-50%, ${
      30 - scrollRatio * -35
    }%) scale(0.36)`;
  } else if (windowWidth >= 480 && windowWidth < 768) {
    burgerTop.style.transform = `translate(-50%, ${
      -125 - scrollRatio * 28
    }%) scale(0.52)`;
    burgerBottom.style.transform = `translate(-50%, ${
      30 - scrollRatio * -26
    }%) scale(0.52)`;
  } else if (windowWidth >= 768 && windowWidth < 992) {
    burgerTop.style.transform = `translate(-50%, ${
      -125 - scrollRatio * 30
    }%) scale(0.68)`;
    burgerBottom.style.transform = `translate(-50%, ${
      30 - scrollRatio * -30
    }%) scale(0.68)`;
  } else if (windowWidth >= 992 && windowWidth < 1440) {
    burgerTop.style.transform = `translate(${-50 - scrollRatio * 70}%, ${
      -130 - scrollRatio * -30
    }%) scale(0.68)`;
    burgerBottom.style.transform = `translate(${-50 - scrollRatio * 70}%, ${
      35 - scrollRatio * 35
    }%) scale(0.68)`;
  } else {
    burgerTop.style.transform = `translate(${-50 - scrollRatio * 70}%, ${
      -130 - scrollRatio * -30
    }%) scale(${0.68 - scrollRatio * -0.32})`;
    burgerBottom.style.transform = `translate(${-50 - scrollRatio * 70}%, ${
      35 - scrollRatio * 35
    }%) scale(${0.68 - scrollRatio * -0.32})`;
  }
}

function menuAndCotactAnimateBurger(windowWidth) {
  if (windowWidth < 480) {
    burgerTop.style.transform = "translate(-50%, -160%) scale(0.36)";
    burgerBottom.style.transform = "translate(-50%, 65%) scale(0.36)";
  } else if (windowWidth >= 480 && windowWidth < 768) {
    burgerTop.style.transform = "translate(-50%, -153%) scale(0.52)";
    burgerBottom.style.transform = "translate(-50%, 56%) scale(0.52)";
  } else if (windowWidth >= 768 && windowWidth < 992) {
    burgerTop.style.transform = "translate(-50%, -155%) scale(0.68)";
    burgerBottom.style.transform = "translate(-50%, 60%) scale(0.68)";
  } else if (windowWidth >= 992 && windowWidth < 1440) {
    burgerTop.style.transform = "translate(-120%, -100%) scale(0.68)";
    burgerBottom.style.transform = "translate(-120%, 0%) scale(0.68)";
  } else {
    burgerTop.style.transform = "translate(-120%, -100%) scale(1)";
    burgerBottom.style.transform = "translate(-120%, 0%) scale(1)";
  }
}

function contactAnimateBurger(windowWidth, scrollRatio) {
  if (windowWidth < 480) {
    burgerTop.style.transform = `translate(-50%, ${
      -160 - scrollRatio * -45
    }%) scale(0.36)`;
    burgerBottom.style.transform = `translate(-50%, ${
      65 - scrollRatio * 47
    }%) scale(0.36)`;
  } else if (windowWidth >= 480 && windowWidth < 768) {
    burgerTop.style.transform = `translate(-50%, ${
      -153 - scrollRatio * -38
    }%) scale(0.52)`;
    burgerBottom.style.transform = `translate(-50%, ${
      56 - scrollRatio * 38
    }%) scale(0.52)`;
  } else if (windowWidth >= 768 && windowWidth < 992) {
    burgerTop.style.transform = `translate(-50%, ${
      -155 - scrollRatio * -35
    }%) scale(0.68)`;
    burgerBottom.style.transform = `translate(-50%, ${
      60 - scrollRatio * 37
    }%) scale(0.68)`;
  } else if (windowWidth >= 992 && windowWidth < 1440) {
    burgerTop.style.transform = `translate(${
      -120 - scrollRatio * -35
    }%, -100%) scale(0.68) rotate(${scrollRatio * -90}deg)`;
    burgerBottom.style.transform = `translate(${
      -120 - scrollRatio * -105
    }%, 0%) scale(0.68) rotate(${scrollRatio * -90}deg)`;
  } else {
    burgerTop.style.transform = `translate(${
      -120 - scrollRatio * -35
    }%, -100%) scale(1) rotate(${scrollRatio * -90}deg)`;
    burgerBottom.style.transform = `translate(${
      -120 - scrollRatio * -105
    }%, 0%) scale(1) rotate(${scrollRatio * -90}deg)`;
  }
}

function cotactFinalAnimateBurger(windowWidth) {
  if (windowWidth < 480) {
    burgerTop.style.transform = "translate(-50%, -115%) scale(0.36)";
    burgerBottom.style.transform = "translate(-50%, 18%) scale(0.36)";
  } else if (windowWidth >= 480 && windowWidth < 768) {
    burgerTop.style.transform = "translate(-50%, -115%) scale(0.52)";
    burgerBottom.style.transform = "translate(-50%, 18%) scale(0.52)";
  } else if (windowWidth >= 768 && windowWidth < 992) {
    burgerTop.style.transform = "translate(-50%, -120%) scale(0.68)";
    burgerBottom.style.transform = "translate(-50%, 23%) scale(0.68)";
  } else if (windowWidth >= 992 && windowWidth < 1440) {
    burgerTop.style.transform =
      "translate(-85%, -100%) scale(0.68) rotate(-90deg)";
    burgerBottom.style.transform =
      "translate(-15%, 0%) scale(0.68) rotate(-90deg)";
  } else {
    burgerTop.style.transform =
      "translate(-85%, -100%) scale(1) rotate(-90deg)";
    burgerBottom.style.transform =
      "translate(-15%, 0%) scale(1) rotate(-90deg)";
  }
}

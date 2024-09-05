// #region hoverbtn
const buttons = document.querySelectorAll(".andrii__info-btn");

buttons.forEach((button) => {
  button.addEventListener("mousemove", function (e) {
    const rect = button.getBoundingClientRect();
    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;

    button.style.setProperty("--x", `${startX}px`);
    button.style.setProperty("--y", `${startY}px`);

    button.classList.add("hover");
  });

  button.addEventListener("mouseleave", function () {
    button.classList.remove("hover");
  });
});
// #endregion
//========================================================================================================================================================
const container = document.querySelector(".skill__utils1");
if (container) {
  for (let i = 0; i < 25; i++) {
    const dot = document.createElement("div");
    container.appendChild(dot);
  }
}

//========================================================================================================================================================
// #region gsapanimation images
gsap.registerPlugin();

const animateCircles = (selector) => {
  const circles = document.querySelectorAll(selector);

  gsap.fromTo(
    circles,
    {
      x: (i) => 42 - parseFloat(circles[i].getAttribute("cx")) + "px",
      y: (i) => 42 - parseFloat(circles[i].getAttribute("cy")) + "px",
      opacity: 0,
      scale: 0.5
    },
    {
      x: 0,
      y: 0,
      scale: 1.2,
      opacity: 1,
      duration: 0.8,
      ease: "power3.inOut",
      stagger: {
        each: 0.05,
        grid: [5, 5],
        from: "edges"
      },
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5
    }
  );

  gsap.to(circles, {
    scale: 1,
    duration: 0.8,
    ease: "elastic.out(1, 0.5)",
    stagger: {
      each: 0.05,
      grid: [5, 5],
      from: "center"
    },
    repeat: -1,
    yoyo: true,
    delay: 0.8
  });
};

animateCircles(".skill__utils1 svg circle");
animateCircles(".skill__utils3 svg circle");

gsap.registerPlugin(MotionPathPlugin);

gsap.utils.toArray(".animated-svg path").forEach((path) => {
  const length = path.getTotalLength();

  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length
  });

  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 10,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });
});
// #endregion
// #region first screen
if (!sessionStorage.getItem("animationPlayed")) {
  document.body.style.overflow = "hidden";

  const timeline = gsap.timeline();

  timeline
    .set([".andrii__info-title", ".andrii__info", ".andrii__info-text", ".andrii__info-btn"], {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    })
    .set(".andrii", { left: "20%" })
    .to(".andrii__info-title span", { text: { value: "I am a front-end developer" }, duration: 2, ease: "none" }) // Text appears without removing existing text
    .to(
      ".andrii__info-text",
      {
        text: { value: "I create modern, responsive websites that blend cutting-edge technology with innovative design" },
        duration: 3,
        ease: "none"
      },
      "+=0.5"
    )
    .from(".andrii__info-btn", { opacity: 0, x: -50, duration: 1 }, "+=0.5")
    .to(".andrii", { left: "0%", duration: 1.5, ease: "power3.out" })
    .set(
      [".andrii__info-title", ".andrii__info", ".andrii__info-text", ".andrii__info-btn"],
      {
        textAlign: "",
        display: "",
        flexDirection: "",
        alignItems: ""
      },
      "<"
    )
    .from(".andrii__img-me", { opacity: 0, x: 100, duration: 1 })
    .from(".andrii__img-text", { opacity: 0, duration: 1 })
    .to(".andrii__img-descr", { text: { value: "Always open to interesting offers" }, duration: 1.5, ease: "none" })
    .from(".header", { opacity: 0, y: -50, duration: 1 })
    .from(".social", { opacity: 0, x: -50, duration: 1 }, "<")
    .from(".andrii__img-logo", { opacity: 0, duration: 1 })
    .from(".andrii__img-dots", { opacity: 0, duration: 1 }, "<")

    .add(() => {
      document.body.style.overflow = "";
      sessionStorage.setItem("animationPlayed", "true");
    });
} else {
  document.body.style.overflow = "";
  const textDescr = document.querySelector(".andrii__img-descr");
  const textInfo = document.querySelector(".andrii__info-text");
  const textSpan = document.querySelector(".andrii__info-title span");
  textDescr.textContent = "Always open to interesting offers";
  textInfo.textContent = "I create modern, responsive websites that blend cutting-edge technology with innovative design";
  textSpan.textContent = "I am a front-end developer";
}
// #endregion
// #region smart
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".smart",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".smart",
      start: "top 80%",
      end: "center top",
      scrub: true
    }
  }
);
// #endregion
// #region project
gsap.from(".projects__project", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 60%",
    end: "bottom top",
    scrub: false,
    markers: false
  },
  opacity: 0,
  y: 20,
  stagger: 0.3,
  duration: 1
});
// #endregion
// #region skills
gsap.from(".skill-box", {
  scrollTrigger: {
    trigger: ".skill__inner-box",
    start: "top 70%",
    end: "bottom top",
    scrub: false,
    markers: false
  },
  opacity: 0,
  x: 50,
  stagger: {
    amount: 0.5,
    start: 0.5,
    from: "end",
    stagger: {
      amount: 0.5,
      start: 0.5,
      from: "end"
    }
  },
  duration: 1,
  delay: (index) => {
    const delays = [0, 0.5, 1, 1.5, 2];
    return delays[index] || 0;
  }
});

// #endregion
// #region about
// Анімація для тексту
gsap.from(".about__text p, .about__text a", {
  scrollTrigger: {
    trigger: ".about__content",
    start: "top 80%",
    end: "bottom top",
    scrub: false,
    markers: false
  },
  opacity: 0,
  y: 20,
  stagger: 0.3,
  duration: 1
});

// Анімація для зображень
gsap.from(".about__img img", {
  scrollTrigger: {
    trigger: ".about__content",
    start: "top 80%",
    end: "bottom top",
    scrub: false,
    markers: false
  },
  opacity: 0,
  scale: 1.1,
  stagger: 0.3,
  duration: 1
});
// #endregion

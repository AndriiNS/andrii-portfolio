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
//========================================================================================================================================================
const container = document.querySelector(".skill__utils1");

for (let i = 0; i < 25; i++) {
  const dot = document.createElement("div");
  container.appendChild(dot);
}
//========================================================================================================================================================
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

//========================================================================================================================================================
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

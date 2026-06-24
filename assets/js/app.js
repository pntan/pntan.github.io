$(function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.registerPlugin(
    ScrollTrigger
  );

  gsap.utils
    .toArray("section")
    .forEach(section => {

      gsap.from(
        Array.from(section.children), {
          opacity: 0,
          y: 100,

          duration: 1,

          scrollTrigger: {
            trigger: section,
            start: "top 80%"
          }
        }
      );

    });

  gsap.to("#hero", {

    scale: 0.85,

    opacity: 0.3,

    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "+=700",
      scrub: true
    }

  });

  $(".reveal").each(function() {

    let text = $(this).text();

    let html = "";

    text.split("").forEach(letter => {

      html += `
        <span class="letter">
            ${letter}
        </span>`;
    });

    $(this).html(html);

  });

  gsap.to(".letter", {

    opacity: 1,

    y: 0,

    stagger: 0.03,

    duration: 1.2

  });

  window.addEventListener(
    "scroll",
    () => {

      const scroll =
        window.scrollY;

      const height =
        document.body.scrollHeight -
        window.innerHeight;

      const percent =
        scroll / height * 100;

      $("#progressBar").css(
        "width",
        percent + "%"
      );

    }
  );

  $(".skill-fill").each(function() {

    const width =
      $(this).data("width");

    gsap.to(this, {

      width: width + "%",

      duration: 1.5,

      ease: "power3.out",

      scrollTrigger: {
        trigger: this,
        start: "top 90%"
      }

    });

  });

  const cursor =
    document.querySelector("#cursor");

  window.addEventListener("mousemove", (e) => {

    cursor.style.transform =
      `translate(${e.clientX}px,${e.clientY}px)`;

  });

  $(document).on(
    "mousemove",
    ".project-card",
    function(e) {

      const rect =
        this.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      const rotateY =
        (x / rect.width - 0.5) * 20;

      const rotateX = -(y / rect.height - 0.5) * 20;

      gsap.to(this, {

        rotateY,

        rotateX,

        duration: .3

      });

    });

  $(".project-card").mouseleave(
    function() {

      gsap.to(this, {

        rotateX: 0,
        rotateY: 0

      });

    });

  window.addEventListener(
    "load",
    () => {

      gsap.to("#loader", {

        opacity: 0,

        duration: 1,

        onComplete() {

          $("#loader").remove();

        }

      });

    });

  // const lenis = new Lenis();
  // lenis.on("scroll", ScrollTrigger.update)

  // gsap.ticker.add((time)=>{

  //     lenis.raf(time * 1000);

  // });

  // gsap.ticker.lagSmoothing(0);
});
$(function() {

  const p = portfolioData;

  $("#hero").html(`
<div class="min-h-screen flex items-center container mx-auto px-6">

  <div class="w-full">

    <p class="text-zinc-500 tracking-[5px] mb-4">
      PORTFOLIO
    </p>

    <h1 class="hero-title">
      ${p.profile.name}
    </h1>

    <section id="marquee">

      <div class="marquee">

        HTML CSS JS PHP
        PYTHON WORDPRESS
        MYSQL GSAP
        THREEJS

      </div>

    </section>

    <h2 class="text-2xl text-zinc-400 mt-4">
      ${p.profile.role}
    </h2>

    <p class="mt-2 text-zinc-500 leading-8 w-full">
      ${p.profile.description}
    </p>

  </div>

</div>
`);

  $("#about").html(`
<div class="container mx-auto px-6 py-32">

  <div class="grid md:grid-cols-2 gap-16 items-center">

    <img src="${p.profile.avatar}" class="avatar">

    <div>

      <h2 class="section-title">
        ABOUT
      </h2>

      <p class="about-text">
        ${p.profile.description}
      </p>

    </div>

  </div>

</div>
`);

  let skills = "";

  p.skills.forEach(skill => {

    skills += `
<div class="mb-8">

  <div class="flex justify-between mb-2">

    <span>${skill.name}</span>

    <span>${skill.level}%</span>

  </div>

  <div class="skill-bar">

    <div class="skill-fill" data-width="${skill.level}">
    </div>

  </div>

</div>
`;

  });

  $("#skills").html(`
<div class="container mx-auto px-6 py-32">

  <h2 class="section-title mb-20">
    SKILLS
  </h2>

  ${skills}

</div>
`);

  let projects = "";

  p.projects.forEach(project => {

    projects += `
<div class="project-card">

  <h3>
    ${project.title}
  </h3>

  <p>
    ${project.description}
  </p>

  <div class="flex gap-2 mt-4 flex-wrap">

    ${project.stack.map(s => `
    <span class="tag">${s}</span>
    `).join("")}

  </div>

</div>
`;
  });

  $("#projects").html(`
<div class="container mx-auto px-6 py-32">

  <h2 class="section-title mb-20">
    PROJECTS
  </h2>

  <div class="grid md:grid-cols-3 gap-8">

    ${projects}

  </div>

</div>
`);

  let timeline = "";

  p.achievements.forEach(item => {

    timeline += `
<div class="timeline-item">

  <span class="year">
    ${item.year}
  </span>

  <h3>
    ${item.title}
  </h3>

</div>
`;
  });

  $("#timeline").html(`
<div class="container mx-auto px-6 py-32">

  <h2 class="section-title mb-20">
    TIMELINE
  </h2>

  ${timeline}

</div>
`);

  $("#contact").html(`
<div class="container mx-auto px-6 py-32">

  <h2 class="section-title mb-20">
    CONTACT
  </h2>

  <div class="terminal">

    ${p.socials.map(item => `
    <a href="${item.url}">
      > ${item.name}
    </a>
    `).join("")}

  </div>

</div>
`);

});
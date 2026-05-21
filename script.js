const skillsData = [
  // --- Languages & Core Backend ---
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "JavaScript (ES6+)", icon: "devicon-javascript-plain colored" },
  { name: "C#", icon: "devicon-csharp-plain colored" },
  { name: "Ruby", icon: "devicon-ruby-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },

  // --- Web Frameworks & Frontend Development ---
  { name: "React", icon: "devicon-react-plain colored" },
  { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
  { name: "HTML5/CSS3", icon: "devicon-html5-plain colored" },
  { name: "Vite", icon: "devicon-vitejs-plain colored" },
  { name: "REST APIs", icon: "fas fa-code" },
  { name: "Axios", icon: "fas fa-exchange-alt" },

  // --- Data Analysis, Science & Visualisation ---
  { name: "Pandas", icon: "devicon-pandas-plain colored" },
  { name: "Jupyter Notebooks", icon: "devicon-jupyter-plain colored" },
  { name: "Recharts", icon: "fas fa-chart-line" },
  { name: "Leaflet (Maps)", icon: "fas fa-map" },
  { name: "Power BI", icon: "fas fa-chart-pie" },
  { name: "Tableau", icon: "fas fa-chart-column" },
  { name: "KNIME", icon: "fas fa-diagram-project" },
  { name: "Microsoft Excel", icon: "fas fa-file-excel" },

  // --- Databases & ORMs ---
  { name: "SQL, PL/SQL, PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "SQLAlchemy (ORM)", icon: "devicon-sqlalchemy-plain colored" },
  { name: "Microsoft Access", icon: "fas fa-key" },

  // --- Cloud, DevOps & Tools ---
  { name: "Render", icon: "fas fa-cloud-upload-alt" },
  { name: "AWS (EC2, S3)", icon: "fab fa-aws" },
  { name: "Microsoft Azure", icon: "devicon-azure-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Git & GitHub Actions", icon: "devicon-git-plain colored" }
];

const projectsData = [
  {
    title: "Melbourne Rental Intelligence",
    description: "A full-stack data analytics web application that explores and visualises rental property prices and trends across Melbourne.",
    tech: ["Python", "Pandas", "PostgreSQL", "FastAPI", "React", "Render"],
    icon: "img/rental_banner.png",
    link: "projects/rental.html",
    liveDemo: "https://melbourne-rental-intelligence.onrender.com/",
    github: "https://github.com/EthanLy1/melbourne-rental-intelligence",
    isUnderConstruction: false,
    accentColor: "#2563eb",
    accentBg: "#eff6ff",
    placeholderIcon: "fas fa-map-marked-alt"
  },
  {
    title: "Algorithmic Trading Tool",
    description: "Web Application Capstone project during final year in Computer Science. Views historical/real-time stock and crypto data and can execute trades.",
    tech: ["Python", "React", "Flask/FastAPI", "Node.js", "HTML/CSS", "JSON"],
    icon: "img/algotradeposter.png",
    link: "projects/capstone.html",
    isUnderConstruction: false,
    accentColor: "#059669",
    accentBg: "#ecfdf5",
    placeholderIcon: "fas fa-chart-line"
  },
  {
    title: "Custom Website for Katrina Wurm",
    description: "Developed a website for client in industry project. Adhering to clients functional and non-functional requirements and applying client feedback in Agile development.",
    tech: ["Wordpress", "Elementor"], 
    icon: "img/industry_banner.png",
    link: "projects/industry.html",
    liveDemo: "https://www.katrinawurm.com.au/",  
    liveDemoText: "Live Site", 
    isUnderConstruction: false,
    accentColor: "#7c3aed",
    accentBg: "#f5f3ff",
    placeholderIcon: "fas fa-globe"
  },
  {
    title: "Athena Lifting — Gym Progression & Analytics Platform",
    description: "A full-stack fitness tracking application for logging workouts, visualising strength progression, and analysing training data over time.",
    tech: [],
    icon: null,
    link: null,
    liveDemo: null,
    github: null,
    isUnderConstruction: true,
    accentColor: "#dc2626",
    accentBg: "#fef2f2",
    placeholderIcon: "fas fa-dumbbell"
}
  
];

const experienceData = [
  {
    title: "Fresh Service/Convenience Team Member",
    company: "Woolworths Supermarkets",
    date: "July 2023 - Present",
    desc: "Collaborated in a 7+ person team to achieve daily operational targets under pressure as well as working individually in my task and role. Developed communication and conflict resolution skills in a fast-paced environment."
  }
];

/* Skills */
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = "";

  skillsData.forEach(skill => {
    const skillDiv = document.createElement("div");

    skillDiv.className = "skill-card";
    skillDiv.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;

    container.appendChild(skillDiv);
  });
}

/* Projects */
function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = "";

  projectsData.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    // --- Image / Placeholder Area ---
    const imgDiv = document.createElement("div");
    imgDiv.className = "project-img";

    const isImage = project.icon && (project.icon.includes('.') || project.icon.startsWith('data:') || project.icon.startsWith('http'));

    if (isImage) {
      imgDiv.innerHTML = `<img src="${project.icon}" alt="${project.title} banner" style="width:100%;height:100%;object-fit:cover;">`;
    } else {
      const accent = project.accentColor || "#2563eb";
      const accentBg = project.accentBg || "#eff6ff";
      imgDiv.style.background = accentBg;
      imgDiv.innerHTML = `
        <div class="project-placeholder" style="--accent:${accent};">
          <div class="placeholder-icon-wrap">
            <i class="${project.placeholderIcon || 'fas fa-code'}" style="color:${accent};"></i>
          </div>
        </div>`;
    }

    // --- Info Body ---
    const infoDiv = document.createElement("div");
    infoDiv.className = "project-info";

    // Title
    const titleEl = document.createElement("h3");
    if (project.isUnderConstruction) {
      titleEl.innerHTML = `${project.title} <span class="badge-under-construction">🚧 Dev</span>`;
    } else {
      titleEl.textContent = project.title;
    }

    // Description
    const descEl = document.createElement("p");
    descEl.textContent = project.description;

    // Tech tags
    const techStackDiv = document.createElement("div");
    techStackDiv.className = "tech-stack";
    project.tech.forEach(tech => {
      const tag = document.createElement("span");
      tag.className = "tech-tag";
      tag.textContent = tech;
      techStackDiv.appendChild(tag);
    });

    // Links
    const linksDiv = document.createElement("div");
    linksDiv.className = "project-links";

    if (project.isUnderConstruction) {
      linksDiv.innerHTML = `
        <span class="btn btn-disabled">
          <i class="fas fa-hammer"></i> Coming Soon
        </span>`;
    } else {
  let linksHTML = '';

  if (project.liveDemo) {
  const buttonText = project.liveDemoText || "Live Demo"; 
  linksHTML += `
    <a href="${project.liveDemo}" target="_blank" class="btn btn-primary btn-sm">
      <i class="fas fa-external-link-alt"></i> ${buttonText}
    </a>`;
}

  if (project.github) {
    linksHTML += `
      <a href="${project.github}" target="_blank" class="btn btn-ghost btn-sm">
        <i class="fab fa-github"></i> Repo
      </a>`;
  }

  // More Info always last
  linksHTML += `
    <a href="${project.link}" class="btn btn-outline btn-sm">
      <i class="fas fa-circle-info"></i> More Info
    </a>`;

  linksDiv.innerHTML = linksHTML;
}

    infoDiv.appendChild(titleEl);
    infoDiv.appendChild(descEl);
    infoDiv.appendChild(techStackDiv);
    infoDiv.appendChild(linksDiv);

    card.appendChild(imgDiv);
    card.appendChild(infoDiv);

    container.appendChild(card);
  });
}

/* Experience */
function renderExperience() {
  const container = document.getElementById("exp-list");
  if (!container) return;

  container.innerHTML = "";

  experienceData.forEach(exp => {
    const expDiv = document.createElement("div");

    expDiv.className = "exp-item";

    expDiv.innerHTML = `
      <div class="exp-title">
        <span>${exp.title}</span>
        <span class="exp-date">${exp.date}</span>
      </div>

      <div class="exp-company">${exp.company}</div>

      <p style="margin-top: 0.6rem; color: #334155;">
        ${exp.desc}
      </p>
    `;

    container.appendChild(expDiv);
  });
}

/* Smooth scroll */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      if (targetId === "#" || targetId === "") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();

        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* Footer */
function setFooterYear() {
  const footer = document.querySelector('footer p');

  if (footer) {
    const year = new Date().getFullYear();

    footer.innerHTML = `© ${year} Ethan Ly | Let's Build something great together!`;
  }
}

/* Init */
function init() {
  renderSkills();
  renderProjects();
  renderExperience();
  setupSmoothScroll();
  setFooterYear();
}

init();
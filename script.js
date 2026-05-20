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
    title: "Melbourne Rental Price & Trends Dashboard",
    description: "A full-stack data analytics web application that explores and visualises rental property prices and trends across Melbourne.",
    tech: ["Python", "Pandas", "Jupyter", "PostgreSQL", "SQLAlchemy", "FastAPI", "React", "Recharts", "Leaflet", "Vite", "Axios", "Render"],
    icon: "img/rental_banner.png",
    link: "projects/melbourne-rental.html",
    isUnderConstruction: false
  },
  {
    title: "Algorithmic Trading Tool (Algotrade)",
    description: "Web Application Capstone project during final year in Computer Science. Views historical/real-time stock and crypto data and can execute trades.",
    tech: ["Python", "React", "Flask/FastAPI", "Node.js", "HTML/CSS", "JSON"],
    icon: "fas fa-chart-line",
    link: "projects/capstone.html",
    isUnderConstruction: false
  },
  {
    title: "Custom Website for Katrina Wurm",
    description: "Developed a website for client in industry project. Adhering to clients functional and non-functional requirements and applying client feedback in Agile development.",
    tech: ["Wordpress"],
    icon: "fas fa-globe",
    link: "projects/industry.html",
    isUnderConstruction: false
  }
];

const experienceData = [
  {
    title: "Fresh Service/Convenience Team Member",
    company: "Woolworths Supermarkets",
    date: "July 2023 - Present",
    desc: "Collaborated in a 7+ person team to achieve daily operational targets under pressure as well as working individually in my task and role. Developed communication and conflict resolution skills in a fast-paced environment."
  },
  {
    title: "Administration/Office Support (Casual)",
    company: "Creative Insights",
    date: "Jan 2019 – Jan 2020",
    desc: "Handled data entry and submitted Medicare Bulk-billed claims online. Includes greeting clients, managing client's booking and operating company phone."
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

    const imgDiv = document.createElement("div");
    imgDiv.className = "project-img";
    const isImage = project.icon.includes('.') || project.icon.startsWith('data:') || project.icon.startsWith('http');

    if (isImage) {
      imgDiv.innerHTML = `<img src="${project.icon}" alt="${project.title} banner" style="width: 100%; height: 100%; object-fit: cover;">`;
    } else {
      imgDiv.innerHTML = `<i class="${project.icon}" style="font-size: 3.5rem;"></i>`;
    }

    const infoDiv = document.createElement("div");
    infoDiv.className = "project-info";

    const titleEl = document.createElement("h3");
    if (project.isUnderConstruction) {
      titleEl.innerHTML = `${project.title} <span style="font-size: 0.7rem; background: #fef3c7; color: #92400e; padding: 2px 6px; border-radius: 4px; margin-left: 5px; vertical-align: middle; border: 1px solid #f59e0b;">🚧 Dev</span>`;
    } else {
      titleEl.textContent = project.title;
    }

    const descEl = document.createElement("p");
    descEl.textContent = project.description;

    const techStackDiv = document.createElement("div");
    techStackDiv.className = "tech-stack";

    project.tech.forEach(tech => {
      const tag = document.createElement("span");

      tag.className = "tech-tag";
      tag.textContent = tech;

      techStackDiv.appendChild(tag);
    });

    const linksDiv = document.createElement("div");
    linksDiv.className = "project-links";

    if (project.isUnderConstruction) {
      linksDiv.innerHTML = `
        <span class="btn btn-disabled" style="padding: 0.5rem 1.2rem; font-size: 0.85rem; opacity: 0.6; cursor: not-allowed; border: 1px dashed #cbd5e1; color: #64748b; display: inline-block; border-radius: 6px;">
          <i class="fas fa-hammer"></i> Coming Soon
        </span>
      `;
    } else {
      linksDiv.innerHTML = `
        <a href="${project.link}" class="btn btn-outline" style="padding: 0.5rem 1.2rem; font-size: 0.85rem;">
          <i class="fas fa-circle-info"></i> More Info
        </a>
      `;
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
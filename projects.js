const projects = {
  "Algorithmic Trading Tool (Algotrade)": {
    badge: "Capstone Project | Team Lead",
    description:
      "This project is a trading web application that allows users to execute trades, as well as provide trade-related information and assistance. The project was completed in Agile method with weekly client meetings online. Features include real-time stock and crypto tracking and custom strategy execution.",
    poster: "img/algotradeposter.png",
    role:
      "In this project I was chosen as the Project Leader for a team of five. Tasks include managing the team, communicating with client, and completing technical work. I primarily worked on the backend engineering the database, and adding features to the application.",
    tech: ["Python", "React", "Flask/FastAPI", "Node.js", "HTML/CSS", "JSON"],
    contributions: [
      {
        title: "Database Schema & Implementation",
        desc: "To support the trading logic, I implemented a non-relational schema that handles high-frequency data updates and user strategy storage efficiently.",
        image: "img/mongo.png",
        caption: "A view of the MongoDB Atlas database structure and collections."
      },
      {
        title: "Database Engineering (Python & MongoDB)",
        desc: "I designed the cloud-based database architecture using MongoDB Atlas. I developed a suite of Python functions for real-time data manipulation, routing, and rigorous testing to ensure data integrity during trades.",
        image: "img/dbcode.png",
        caption: "Demo showing the AI Agent processing natural language prompts to manage trades."
      },
      {
        title: "AI Agent Demonstration",
        desc: "The AI Agent acts as an intermediary, allowing users to interact with complex trading strategies without needing to understand the underlying code.",
        image: "vid/aidemo.mp4",
        caption: "The AI Agent in action, executing a user command via natural language."
      },
      {
        title: "AI Integration Logic",
        desc: "I integrated the OpenAI API to allow users to manage trading strategies via natural language. Users can create, update, or delete strategies through simple prompts—a feature the client highlighted as their favorite.",
        image: "img/aicode.png",
        caption: "The Python logic and routing used to connect the OpenAI API to our strategy database."
      },
      {
        title: "Social Sentiment Demo",
        desc: "This demonstration shows how the application pulls live data to provide immediate market feedback to the user.",
        image: "vid/socialdemo.mp4",
        caption: "Demonstration of real-time sentiment scoring from live social media feeds."
      },
      {
        title: "Social Sentiment Analysis Code",
        desc: "I built a sentiment engine using NLTK’s VADER library. It evaluates X (Twitter) posts to calculate sentiment scores, categorizing assets as Bullish, Bearish, or Neutral to help users make informed decisions.",
        image: "img/socialcode.png",
        caption: "The implementation of the VADER SentimentIntensityAnalyzer within our backend pipeline."
      }
    ]
  },

  "Custom Website for Katrina Wurm": {
    badge: "Industry Project | Client Delivery",
    description:
      "This project was about making an updated website for a client as an industry project during my Computer Science degree. The goal was to improve brand consistency, improve SEO, and update information for Katrina. Project was completed in Agile method with client meetings every 2-3 weeks in person. Group consisted of six members. <br><br> Website live at: <a href='https://www.katrinawurm.com.au/' target='_blank' style='color: #4f46e5; text-decoration: underline;'>katrinawurm.com.au</a>",
    poster: "img/brand.png",
    role:
      "Created pages for the website. Applying feedback and documenting satisfied features during client meetings. Assisted teammates when needed. Main contributions include creating the about page, blog page, and dynamic header.",
    tech: ["Wordpress"],
    contributions: [
      {
        title: "Developing the website",
        desc: "The website was made using Wordpress and Elementor, a styling plugin in Wordpress. While developing the website, we adhered to the client's functional and non-functional requirements such as themes, colours, logos and pictures, etc. Additionally, other plugins were added to the website to improve performance and monitor data, including LiteSpeed Cache and MonsterInsights.",
        image: "img/elementor.png",
        caption: "Elementor plugin"
      },
      {
        title: "Blog page",
        desc: "During development, I took on the task of creating the blog page. Katrina expressed multiple features to be included in the blog page as it was a new page that was not present in the previous website. Features of the blog page include viewing posts, leaving comments, searching for posts via search bar, and viewing recent comments. On the other hand, the admin can edit posts, as well as add/remove/archive posts and comments.",
        image: "vid/blogdemo.mp4",
        caption: "Blog features including posts, comments, search bar, etc"
      },
      {
        title: "Dynamic header",
        desc: "I also created the header to fit the client's needs. Katrina expressed that she desired a dynamic header, with a moving GIF, animations, and links to her socials. It was ensured the theme was applied to match the colour codes listed in her requirements.",
        image: "vid/headerdemo.mp4",
        caption: "Header with dynamic animation and links to socials"
      },
      {
        title: "About page",
        desc: "The about page was important in telling the story of Katrina to viewers. This page was also used to give credibility to her status, showing each award she has achieved through being a life coach. This page not only captures the Katrina's personality, but expresses her values and the help she can provide.",
        image: "vid/aboutdemo.mp4",
        caption: "Structured about page adhering to client preferences"
      }
    ]
  },

  "Melbourne Rental Price & Trends Dashboard": {
    badge: "Full-Stack Data Analytics",
    description: 
      "Full-Stack Data Analytics Project (Solo Developer). The dashboard allows users to interactively analyse rental market data by suburb, property type, and time period to identify pricing patterns and affordability insights. The project combines data science and software engineering by processing real-world housing data, performing exploratory data analysis, and presenting insights through an interactive web interface.",
    poster: "img/devops1.png",
    role: 
      "Implemented all features including dynamic filtering of rental listings, visualisations of price trends over time, suburb-level comparisons, and summary statistics such as average rent and price distribution. The backend processes and serves cleaned datasets via a REST API, while the frontend provides an intuitive dashboard experience with interactive charts.",
    tech: ["Python", "PostgreSQL", "FastAPI", "React", "Vercel", "Render"],
    contributions: [
      {
        title: "Data + Python",
        desc: "Find data. Load data into Python. Clean data. Basic Analysis. Save cleaned dataset.",
        image: "img/devops2.png",
        caption: "Placeholder"
      },
      {
        title: "Database",
        desc: "Install PostgreSQL. Create database. Create table. Insert data from Python. Verify data.",
        image: "img/devops2.png",
        caption: "Placeholder"
      },
      {
        title: "FastAPI Backend",
        desc: "Setup FastAPI. Create basic app. Connect PostgreSQL. Create API endpoints. Test API locally.",
        image: "img/devops2.png",
        caption: "Placeholder"
      },
      {
        title: "React Frontend",
        desc: "Create React app. Setup pages. Fetch backend data. Add charts. Add filters.",
        image: "img/devops2.png",
        caption: "Placeholder"
      },
      {
        title: "Vercel + Render",
        desc: "Deploy backend. Deploy frontend. Test full system.",
        image: "img/devops2.png",
        caption: "Placeholder"
      }
    ]
  }
};

/* URL Params */

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const project = projects[id];

/* Lightbox */

function setupLightbox() {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("expanded-image");
  const modalCaption = document.getElementById("modal-caption");
  const closeModal = document.querySelector(".close-modal");

  let modalVideo = document.getElementById("expanded-video");

  if (!modalVideo) {
    modalVideo = document.createElement("video");
    modalVideo.id = "expanded-video";
    modalVideo.controls = true;
    modalVideo.autoplay = true;
    modalVideo.muted = false;
    modalVideo.style.maxWidth = "90%";
    modalVideo.style.maxHeight = "80vh";
    modalVideo.style.display = "none";

    modalImg.parentNode.insertBefore(modalVideo, modalImg);
  }

  const openModal = (src, captionText) => {
    modal.style.display = "flex";

    if (src.endsWith(".mp4")) {
      modalImg.style.display = "none";

      modalVideo.style.display = "block";
      modalVideo.src = src;
      modalVideo.play();
    } else {
      modalVideo.style.display = "none";
      modalVideo.pause();

      modalImg.style.display = "block";
      modalImg.src = src;
    }

    if (modalCaption) {
      modalCaption.textContent = captionText || "";
    }
  };

  const handleClose = () => {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";
  };

  closeModal.onclick = handleClose;

  modal.onclick = (e) => {
    if (e.target !== modalImg && e.target !== modalVideo) {
      handleClose();
    }
  };

  const heroImg = document.getElementById("project-poster");

  if (heroImg) {
    heroImg.onclick = () => openModal(heroImg.src, id);
  }

  document.querySelectorAll(".contrib-media").forEach((container) => {
    const media = container.querySelector("img, video");
    const captionText =
      container.querySelector(".image-caption")?.textContent || "";

    if (media) {
      media.style.cursor = "zoom-in";

      media.onclick = () => {
        const src =
          media.tagName === "VIDEO"
            ? media.querySelector("source").src
            : media.src;

        openModal(src, captionText);
      };
    }
  });
}

/* Render Project */

if (project) {
  document.getElementById("project-title").textContent = id;

  const badgeElement = document.getElementById("project-badge");
  if (badgeElement) {
    badgeElement.textContent = project.badge;
  }

  document.title = `${id} | Ethan Ly`;

  document.getElementById("project-desc").innerHTML =
    project.description;

  document.getElementById("project-role").textContent =
    project.role;

  document.getElementById("project-poster").src =
    project.poster;

  const techContainer = document.getElementById("project-tech-pills");

  project.tech.forEach((t) => {
    const span = document.createElement("span");

    span.className = "tech-tag";
    span.textContent = t;

    techContainer.appendChild(span);
  });

  const contribContainer = document.getElementById("contributions-list");

  project.contributions.forEach((c) => {
    const div = document.createElement("div");

    div.className = "contribution-item";

    let mediaHTML = "";

    if (c.image.endsWith(".mp4")) {
      mediaHTML = `
        <video autoplay muted loop playsinline class="contrib-video">
          <source src="${c.image}" type="video/mp4">
        </video>
      `;
    } else {
      mediaHTML = `<img src="${c.image}" alt="${c.title}">`;
    }

    div.innerHTML = `
      <div class="contrib-text">
        <h4>${c.title}</h4>
        <p>${c.desc}</p>
      </div>

      <div class="contrib-media">
        ${mediaHTML}
        <p class="image-caption">${c.caption || ""}</p>
      </div>
    `;

    contribContainer.appendChild(div);
  });

  setupLightbox();
} else {
  document.getElementById("project-title").textContent =
    "Project not found";
}
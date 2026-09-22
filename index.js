const portfolio = {
  name: "Alok Gupta",
  title: "Senior Full Stack Engineer",
  location: "Noida, Uttar Pradesh, India",
  email: "alok.gupta.fullstack@gmail.com",
  phone: "+91 9935932705",
  linkedin: "https://www.linkedin.com/in/alok-gupta-024685196",
  summary:
    "Senior Full Stack Engineer with 4.5+ years of experience building and deploying scalable web applications using React.js, Node.js, Python, and AWS. Experienced in end-to-end product development, microservices architecture, secure REST APIs, database optimization, cloud deployment, and CI/CD automation. Proven track record of improving application performance, reliability, and operational efficiency across production systems supporting 20K+ users.",
  experiences: [
    {
      role: "Senior Software Engineer",
      company: "Samay AE",
      period: "Apr 2026 – Sep 2026",
      meta: "Contract · Remote / UAE",
      tech: "React.js · Node.js · SQL · Make.com · AI Tools · REST APIs",
      bullets: [
        "Built Glyntr from scratch, an AI-powered social media platform using React.js, Node.js, SQL, and REST APIs, deployed as a production application used by multiple users.",
        "Owned end-to-end application development including frontend, backend, SQL database design, REST API development, authentication, payment integration, and third-party integrations.",
        "Integrated AI tools, Make.com automation, and Stripe Payment Gateway to automate AI image generation, content workflows, publishing processes, and secure payment processing.",
        "Integrated Instagram and LinkedIn APIs using OAuth 2.0, enabling users to connect social accounts and centrally publish and manage AI-generated content."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "AI Crew Solutions",
      period: "Dec 2025 – Mar 2026",
      meta: "Hyderabad, Telangana",
      tech: "React.js · Node.js · MongoDB · MySQL · AWS · Docker",
      bullets: [
        "Designed and implemented a microservices-based aviation crew system handling 5K+ monthly roster transactions with high reliability.",
        "Optimized backend modules and database workflows, enhancing throughput by 20% and ensuring high system availability.",
        "Implemented CI/CD pipelines using Docker, Jenkins, and GitHub Actions, shortening deployment cycles by 30%.",
        "Monitored containerized applications on AWS EC2, S3, IAM and CloudWatch, maintaining 99.8% uptime."
      ]
    },
    {
      role: "Software Engineer",
      company: "INADEV India",
      period: "Jun 2022 – Nov 2025",
      meta: "Noida, Uttar Pradesh",
      tech: "React.js · Node.js · Python · MongoDB · AWS",
      bullets: [
        "Built full-stack fintech applications supporting 20K+ users, improving API latency by 25% and transaction reliability.",
        "Engineered secure REST APIs with JWT authentication and RBAC, ensuring role-based access control and platform security.",
        "Improved server performance through caching and query optimization, reducing load by 30%.",
        "Conducted 100+ code reviews, mentored junior developers, and introduced structured PR standards to improve code quality and team efficiency.",
        "Integrated third-party financial and logistics APIs, enabling seamless end-to-end transaction workflows."
      ]
    },
    {
      role: "Software Testing Associate Intern",
      company: "The Entrepreneurship Network",
      period: "Dec 2021 – May 2022",
      meta: "Noida, Uttar Pradesh",
      tech: "Functional Testing · Regression Testing · Defect Tracking",
      bullets: [
        "Executed 100+ functional and regression test cases, improving release stability.",
        "Logged and tracked defects using structured reporting methods.",
        "Collaborated with the development team to improve software reliability."
      ]
    }
  ],
  skills: {
    "Frontend": ["React.js", "TypeScript", "Redux", "Responsive Design", "Cross-Browser Compatibility"],
    "Backend": ["Node.js", "Python", "FastAPI", "REST API Design", "JWT", "RBAC", "Microservices"],
    "Database": ["MongoDB", "Indexing", "Aggregation", "MySQL", "Query Optimization"],
    "Cloud & DevOps": ["AWS", "EC2", "S3", "Lambda", "IAM", "Docker", "Jenkins", "GitHub Actions", "CI/CD"],
    "AI & Automation": ["AI Integration", "Make.com", "OAuth 2.0", "Third-Party APIs", "Automation Workflows"]
  },
  projects: [
    {
      name: "Glyntr",
      label: "AI-Powered Social Media Platform",
      description:
        "A production-ready platform for AI-powered content creation and social media management. Built from scratch across frontend, backend, SQL database and REST API layers.",
      points: [
        "AI image generation and content workflows",
        "Stripe payment integration",
        "Make.com automation",
        "Instagram and LinkedIn API integration",
        "OAuth 2.0 social account connection",
        "Centralized publishing workflow"
      ],
      stack: "React.js · Node.js · SQL · REST APIs · AI · Make.com · Stripe"
    }
  ],
  education: "Master of Computer Applications (MCA) — Dr. A.P.J. Abdul Kalam Technical University, Lucknow · 2022",
  certificate: "AWS Certified Cloud Practitioner"
};

const app = document.getElementById("app");

const icon = (name) => {
  const icons = {
    arrow: "↗",
    mail: "✉",
    phone: "☎",
    location: "⌖",
    code: "</>",
    cloud: "☁",
    ai: "✦",
    database: "◫",
    check: "✓"
  };
  return icons[name] || "";
};

function render() {
  app.innerHTML = `
    <section class="hero" id="home">
      <div class="hero-glow glow-one"></div>
      <div class="hero-glow glow-two"></div>
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <div class="eyebrow"><span></span> Available for freelance & full-time opportunities</div>
          <h1>Building <em>scalable</em><br>digital products.</h1>
          <p class="hero-sub">${portfolio.summary}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#contact">Let's Work Together ${icon("arrow")}</a>
            <a class="btn btn-secondary" href="${portfolio.linkedin}" target="_blank" rel="noopener">LinkedIn ${icon("arrow")}</a>
          </div>
          <div class="quick-info">
            <span>${icon("location")} ${portfolio.location}</span>
            <span>${icon("code")} React · Node · Python · AWS</span>
          </div>
        </div>
        <div class="hero-card reveal">
          <div class="terminal-top"><i></i><i></i><i></i><span>alok@developer:~</span></div>
          <div class="terminal-body">
            <p><b class="pink">const</b> developer = {</p>
            <p class="indent">name: <b class="green">"Alok Gupta"</b>,</p>
            <p class="indent">role: <b class="green">"Senior Full Stack Engineer"</b>,</p>
            <p class="indent">experience: <b class="yellow">"4.5+ years"</b>,</p>
            <p class="indent">focus: [</p>
            <p class="double-indent"><b class="green">"Web Apps"</b>, <b class="green">"AI"</b>, <b class="green">"Cloud"</b></p>
            <p class="indent">],</p>
            <p class="indent">available: <b class="blue">true</b></p>
            <p>};</p>
            <div class="terminal-line"><span>$</span> npm run build-future</div>
          </div>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="container stats-grid">
        <div><strong>4.5+</strong><span>Years Experience</span></div>
        <div><strong>20K+</strong><span>Users Supported</span></div>
        <div><strong>5K+</strong><span>Monthly Transactions</span></div>
        <div><strong>100+</strong><span>Code Reviews</span></div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container split">
        <div class="section-heading reveal">
          <span class="section-kicker">01 — About</span>
          <h2>Engineering with a <span>product mindset.</span></h2>
        </div>
        <div class="about-copy reveal">
          <p>${portfolio.summary}</p>
          <p>I enjoy taking products from idea to production — designing clean interfaces, scalable APIs, reliable databases, secure authentication, integrations, and cloud infrastructure.</p>
          <div class="mini-grid">
            <div><b>Frontend</b><span>React.js · TypeScript · Redux</span></div>
            <div><b>Backend</b><span>Node.js · Python · FastAPI</span></div>
            <div><b>Cloud</b><span>AWS · Docker · CI/CD</span></div>
            <div><b>Automation</b><span>AI · Make.com · APIs</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section dark-section" id="experience">
      <div class="container">
        <div class="section-heading centered reveal">
          <span class="section-kicker">02 — Experience</span>
          <h2>Professional <span>journey.</span></h2>
        </div>
        <div class="timeline">
          ${portfolio.experiences.map((job, index) => `
            <article class="timeline-item reveal">
              <div class="timeline-dot">${String(index + 1).padStart(2, "0")}</div>
              <div class="timeline-content">
                <div class="job-top">
                  <div>
                    <h3>${job.role}</h3>
                    <h4>${job.company}</h4>
                  </div>
                  <span class="period">${job.period}</span>
                </div>
                <p class="job-meta">${job.meta}</p>
                <div class="tag-row">${job.tech.split(" · ").map(t => `<span>${t}</span>`).join("")}</div>
                <ul>${job.bullets.map(b => `<li>${icon("check")} ${b}</li>`).join("")}</ul>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="projects">
      <div class="container">
        <div class="section-heading reveal">
          <span class="section-kicker">03 — Featured Project</span>
          <h2>Building products that <span>solve real problems.</span></h2>
        </div>
        ${portfolio.projects.map(project => `
          <article class="project-card reveal">
            <div class="project-visual">
              <div class="project-window">
                <div class="window-bar"><i></i><i></i><i></i></div>
                <div class="mock-dashboard">
                  <div class="mock-side"></div>
                  <div class="mock-main">
                    <div class="mock-line large"></div>
                    <div class="mock-cards"><i></i><i></i><i></i></div>
                    <div class="mock-chart"></div>
                  </div>
                </div>
              </div>
              <span class="project-badge">AI + Automation</span>
            </div>
            <div class="project-info">
              <span class="project-label">${project.label}</span>
              <h3>${project.name}</h3>
              <p>${project.description}</p>
              <ul class="project-points">
                ${project.points.map(p => `<li>${icon("check")} ${p}</li>`).join("")}
              </ul>
              <div class="stack">${project.stack}</div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section skills-section" id="skills">
      <div class="container">
        <div class="section-heading centered reveal">
          <span class="section-kicker">04 — Expertise</span>
          <h2>Tools I use to <span>build.</span></h2>
        </div>
        <div class="skills-grid">
          ${Object.entries(portfolio.skills).map(([group, items], index) => `
            <div class="skill-card reveal">
              <div class="skill-icon">${[icon("code"), icon("cloud"), icon("database"), icon("cloud"), icon("ai")][index]}</div>
              <h3>${group}</h3>
              <div class="skill-list">${items.map(s => `<span>${s}</span>`).join("")}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section education-section">
      <div class="container edu-grid">
        <div class="reveal">
          <span class="section-kicker">05 — Education</span>
          <h2>Education & <span>certification.</span></h2>
        </div>
        <div class="edu-card reveal">
          <span class="edu-mark">MCA</span>
          <div><h3>Master of Computer Applications</h3><p>Dr. A.P.J. Abdul Kalam Technical University · 2022</p></div>
        </div>
        <div class="edu-card reveal">
          <span class="edu-mark">AWS</span>
          <div><h3>AWS Certified Cloud Practitioner</h3><p>Cloud fundamentals & AWS services</p></div>
        </div>
      </div>
    </section>

    <section class="contact-section" id="contact">
      <div class="container contact-box reveal">
        <div>
          <span class="section-kicker">06 — Contact</span>
          <h2>Have a project in mind?</h2>
          <p>Let's build something reliable, scalable and useful.</p>
        </div>
        <div class="contact-actions">
          <a href="mailto:${portfolio.email}" class="contact-link">${icon("mail")} ${portfolio.email}</a>
          <a href="tel:${portfolio.phone.replace(/\s/g, "")}" class="contact-link">${icon("phone")} ${portfolio.phone}</a>
          <a href="${portfolio.linkedin}" target="_blank" rel="noopener" class="contact-link">LinkedIn ${icon("arrow")}</a>
        </div>
      </div>
    </section>
  `;

  document.getElementById("year").textContent = new Date().getFullYear();

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#nav");
  menu.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

render();

const CONFIG = {
  email: "smayj705@gmail.com",
  linkedin: "https://www.linkedin.com/in/samay-jain-5001241b3/",
  github: "https://github.com/Samay9812",
  analytiqal: "https://analytiappl-main-mwzynzhsburttnfjtgt98r.streamlit.app/"
};

const journeyData = {
  flipkart: {
    label: "Where the systems thinking started",
    title: "Flipkart — Supply Chain Intern",
    body: "My first exposure to large-scale operations taught me to look beyond individual tasks and understand how process design affects speed, accuracy and cost.",
    points: [
      "Worked across outbound, inventory planning and dock operations.",
      "Observed how bottlenecks propagate across a high-volume warehouse.",
      "Contributed process ideas associated with roughly 10% cycle-time improvement.",
      "Learned to connect operational friction to measurable commercial impact."
    ]
  },
  rmit: {
    label: "Building technical depth and communication",
    title: "RMIT — Master of Analytics & Peer Mentor",
    body: "RMIT gave me the technical foundation, while peer mentoring forced me to explain analytics clearly rather than only solve problems myself.",
    points: [
      "Worked across machine learning, regression, time series, databases and applied analytics.",
      "Mentored 70+ postgraduate students across technical subjects.",
      "Learned to adapt explanations to different levels of technical confidence.",
      "Strengthened the communication side of analytics work."
    ]
  },
  intelli: {
    label: "From analysis to solution design",
    title: "IntelliPharm — Technical Business Analyst",
    body: "This was the point where I moved from analysing a problem to redesigning a solution around technical constraints, commercial logic and stakeholder needs.",
    points: [
      "Worked with a pharmacy-product opportunity space of roughly 22.5 million combinations.",
      "Redesigned a slow Python-heavy process using SQL Server and Python.",
      "Reduced runtime from roughly 32 minutes to around 5 seconds.",
      "Introduced opportunity-cost thinking from economics into the matching approach.",
      "Worked with senior stakeholders and pilot users to validate the solution."
    ]
  },
  w4s: {
    label: "Turning scattered data into operating capability",
    title: "Women4STEM — Data Analyst",
    body: "I worked across reporting, automation, sponsor analytics and operational systems rather than only building one dashboard.",
    points: [
      "Automated 60+ event reports and reduced manual handling by about 80%.",
      "Built sponsor-facing analytics and reporting workflows.",
      "Worked across historical invoice data, CRM migration and event analytics.",
      "Supported more than 25 events with data-driven reporting and insight."
    ]
  },
  gww: {
    label: "Closer to live operational processes",
    title: "Operations & Process Improvement",
    body: "Working on live account and billing processes strengthened my attention to data quality, QA, compliance and the operational consequences of small errors.",
    points: [
      "Resolve account-level issues affecting automated processes.",
      "Perform validation and quality checks before changes move forward.",
      "Work within controlled operational and compliance processes.",
      "Apply analytical thinking to recurring operational problems."
    ]
  }
};

const thinkingData = {
  understand: { title: "1. Understand the real problem", text: "I start by separating the visible symptom from the underlying problem. I want to know who is affected, what decision needs to improve, and what constraints are real before touching the solution." },
  structure: { title: "2. Structure the problem", text: "I break the problem into data, process, user and business components. This is where requirements, assumptions, dependencies and failure points become explicit." },
  build: { title: "3. Build the smallest useful solution", text: "I prefer a working MVP that answers the core problem over a large feature set. Analytiqal taught me to define 'done' more aggressively and move enhancements into a backlog." },
  validate: { title: "4. Validate with real cases", text: "I test with real or unseen data, compare outputs with expected behaviour and look for assumptions that only worked on the original example." },
  improve: { title: "5. Fix root causes, not only symptoms", text: "When something fails, I try to identify whether the issue is local or systemic. Shared type handling, state management and history are examples of fixes that improved multiple parts of Analytiqal at once." }
};

const skillData = {
  analytics: {
    title: "Data Analytics",
    skills: ["SQL","Python","Power BI","DAX","Tableau","R","Forecasting","Data Wrangling","Statistical Analysis"],
    evidence: [
      "IntelliPharm: redesigned a high-volume matching workflow using SQL and Python.",
      "Women4STEM: automated reporting and built sponsor/event analytics.",
      "Personal Finance Tracker: star schema, Power Query, DAX and forecasting.",
      "Gold Price Prediction: compared multiple time-series approaches."
    ]
  },
  business: {
    title: "Business Analysis",
    skills: ["Requirements Gathering","Process Mapping","Stakeholder Engagement","UAT","Business Cases","BPMN","Process Improvement"],
    evidence: [
      "IntelliPharm: translated an inventory problem into technical and commercial requirements.",
      "Worked with executive and operational stakeholders during solution validation.",
      "Used process thinking across live operational work and independent products."
    ]
  },
  communication: {
    title: "Communication",
    skills: ["Data Storytelling","Executive Reporting","Mentoring","Stakeholder Communication","Documentation"],
    evidence: [
      "Mentored 70+ postgraduate students at RMIT.",
      "Built sponsor-facing reporting for Women4STEM.",
      "Regularly translate technical findings into operational language."
    ]
  },
  product: {
    title: "Product & Automation",
    skills: ["MVP Scoping","Workflow Design","Automation","Error Handling","Regression Testing","UX Thinking"],
    evidence: [
      "Built Analytiqal end-to-end and iteratively hardened it with unseen datasets.",
      "Reduced duplicated functionality by reorganising workflow architecture.",
      "Applied root-cause fixes across state, datatype and failure-handling logic."
    ]
  }
};

const caseStudies = {
  analytiqal: {
    kicker: "Featured product",
    title: "Analytiqal",
    intro: "A no-code analytics workflow designed to help non-coders move through a real analysis process without hiding the reasoning.",
    boxes: [
      ["Problem","Analytics tools can make tasks easier while still leaving users unsure what steps to take, why they matter, or what changed in the data."],
      ["Design decision","I built the workflow as explicit stages instead of a one-click automation engine so the user remains involved in the analytical process."],
      ["Stress test","I used unseen datasets to expose hidden assumptions around datetime handling, string operations, missing values, large files and workflow state."],
      ["MVP trade-off","I stopped adding features once the core workflow worked reliably and moved non-essential improvements into a backlog."]
    ],
    results: [
      ["End-to-end","Import → profile → clean → transform → engineer → visualise"],
      ["Robustness","Type safety, quarantine handling and regression fixes"],
      ["Product thinking","Reduced redundant steps and simplified workflow architecture"]
    ],
    takeaway: "The strongest part of this project is not the number of features. It is the development journey: testing, identifying systemic problems, making trade-offs and deciding what belonged in the MVP."
  },
  intellipharm: {
    kicker: "Technical Business Analysis",
    title: "IntelliPharm Inventory Redistribution",
    intro: "A pharmacy inventory redistribution problem where slow processing and weak matching logic were limiting adoption.",
    boxes: [
      ["Problem","A Python-based process took roughly 32 minutes and struggled to generate sufficiently useful buyer-seller matches."],
      ["My approach","I helped redesign the data model and matching logic using SQL Server + Python, and brought opportunity-cost thinking from economics into the solution."],
      ["Validation","The redesigned approach was tested against historical examples and discussed with stakeholders and pilot pharmacies."],
      ["Commercial lens","The objective was not only technical speed—it was to improve the usefulness of matches and reduce lost sales and wastage."]
    ],
    results: [["~5 sec","runtime after redesign"],["22.5M","pharmacy-product opportunity space"],["Up to $11M","projected annual savings"]],
    takeaway: "This project best represents how I combine technical analysis, business reasoning and stakeholder thinking."
  },
  women4stem: {
    kicker: "Data Analytics",
    title: "Women4STEM Sponsor & Event Analytics",
    intro: "A broad analytics role focused on turning fragmented operational data into repeatable reporting and better decisions.",
    boxes: [
      ["Starting point","Data was scattered across files and reporting relied heavily on manual handling."],
      ["What I built","Automated reports, sponsor dashboards, invoice preprocessing, event analytics and data workflows around operational systems."],
      ["Business value","The work increased reporting capacity and gave stakeholders more consistent information for sponsor and event decisions."],
      ["What it taught me","Real analytics work often means improving the system around the dashboard, not only the dashboard itself."]
    ],
    results: [["60+","event reports automated"],["~80%","manual handling reduced"],["25+","events supported"]],
    takeaway: "This role demonstrates breadth: analytics, automation, reporting, stakeholder work and operational problem solving."
  },
  finance: {
    kicker: "Power BI",
    title: "Personal Finance Tracker",
    intro: "A self-built Power BI model designed to understand spending, earnings, contributions and future cash position.",
    boxes: [
      ["Model","Built a five-table star schema and used Power Query for preparation."],
      ["Measures","Used DAX for actual-versus-expected comparisons and financial KPIs."],
      ["Decision focus","The dashboard was structured around categories that actually drive personal cash-flow decisions."],
      ["Forecasting","Included a five-month forward view rather than limiting the project to historical reporting."]
    ],
    results: [["5 tables","star-schema model"],["DAX","decision-focused measures"],["5 months","forecast horizon"]],
    takeaway: "A compact example of modelling, transformation, DAX and visual storytelling working together."
  },
  gold: {
    kicker: "R / Time Series",
    title: "Gold Price Prediction",
    intro: "A forecasting project comparing multiple time-series modelling approaches rather than relying on a single default model.",
    boxes: [
      ["Question","Which model structure best captured the behaviour of historical gold prices?"],
      ["Models","Compared ARIMA, SARIMA and ARMA-GARCH approaches."],
      ["Selection","SARIMA performed best among the tested approaches."],
      ["Output","Produced a ten-month forecast based on the selected model."]
    ],
    results: [["ARIMA","tested"],["SARIMA","selected"],["10 months","forecast produced"]],
    takeaway: "This project demonstrates model comparison and selection rather than presenting one algorithm as automatically correct."
  }
};

function renderJourney(key) {
  const item = journeyData[key];
  document.getElementById("journeyDetail").innerHTML = `<span class="detail-label">${item.label}</span><h3>${item.title}</h3><p>${item.body}</p><ul class="detail-list">${item.points.map(p => `<li>${p}</li>`).join("")}</ul>`;
}
function renderThinking(key) {
  const item = thinkingData[key];
  document.getElementById("thinkingDetail").innerHTML = `<span class="detail-label">Working principle</span><h3>${item.title}</h3><p>${item.text}</p>`;
}
function renderSkill(key) {
  const item = skillData[key];
  document.getElementById("skillDetail").innerHTML = `<div class="skill-evidence"><div><span class="detail-label">Capability</span><h3>${item.title}</h3><div class="skill-stack">${item.skills.map(s => `<span class="skill-pill">${s}</span>`).join("")}</div></div><div><span class="detail-label">Evidence</span><ul class="detail-list">${item.evidence.map(e => `<li>${e}</li>`).join("")}</ul></div></div>`;
}
let lastCaseTrigger = null;
function openCase(key, trigger) {
  const item = caseStudies[key];
  document.getElementById("caseContent").innerHTML = `<div class="case-inner"><span class="detail-label">${item.kicker}</span><h2 id="caseTitle">${item.title}</h2><p>${item.intro}</p><div class="case-grid">${item.boxes.map(([t,b]) => `<div class="case-box"><h4>${t}</h4><p>${b}</p></div>`).join("")}</div><div class="case-results">${item.results.map(([v,l]) => `<div class="case-result"><strong>${v}</strong><span>${l}</span></div>`).join("")}</div><div class="case-box" style="margin-top:16px;"><h4>What I would tell an interviewer</h4><p>${item.takeaway}</p></div></div>`;
  lastCaseTrigger = trigger || document.activeElement;
  const modal = document.getElementById("caseModal");
  if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open","");
  document.getElementById("modalClose").focus();
}
function applyConfigLinks() {
  document.querySelectorAll("[data-config-link]").forEach(link => {
    const key = link.dataset.configLink;
    const value = CONFIG[key] || "";
    if (!value) {
      link.addEventListener("click", e => {
        e.preventDefault();
        alert(`Add your ${key} link in CONFIG at the top of script.js before publishing.`);
      });
      return;
    }
    link.href = key === "email" ? `mailto:${value}` : value;
  });
}

document.querySelectorAll(".timeline-item").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".timeline-item").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderJourney(button.dataset.journey);
  });
});
document.querySelectorAll(".thinking-step").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".thinking-step").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderThinking(button.dataset.thinking);
  });
});
document.querySelectorAll(".skill-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".skill-tab").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderSkill(button.dataset.skill);
  });
});
document.querySelectorAll(".case-trigger").forEach(button => {
  button.addEventListener("click", () => openCase(button.dataset.case, button));
});

const modal = document.getElementById("caseModal");
document.getElementById("modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", event => {
  const rect = modal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) modal.close();
});
modal.addEventListener("close", () => {
  if (lastCaseTrigger && typeof lastCaseTrigger.focus === "function") lastCaseTrigger.focus();
});

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mainNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded","false");
}));

document.getElementById("themeToggle").addEventListener("click", () => document.body.classList.toggle("dark"));

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }), {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}

document.getElementById("year").textContent = new Date().getFullYear();
renderJourney("flipkart");
renderThinking("understand");
renderSkill("analytics");
applyConfigLinks();

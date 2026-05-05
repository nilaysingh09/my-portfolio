export const profile = {
  name: "Nilay Singh",
  title: "Data Analyst | Aspiring Data Scientist",
  location: "Jaipur, Rajasthan, India",
  email: "nilay109singh@gmail.com",
  phone: "+91 7014557020",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  hackerrank: "https://www.hackerrank.com/",
  resume: "/NilaySingh_Resume.pdf",
  summary:
    "Computer Science undergraduate at VIT focused on data analytics and machine learning. I love turning messy datasets into clear, actionable insights — building models, dashboards, and tools that solve real problems.",
};

export const skillGroups = [
  { title: "Languages", items: ["Python", "SQL", "Java", "HTML", "CSS"] },
  { title: "ML / AI Libraries", items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"] },
  { title: "Tools & Platforms", items: ["Power BI", "MS Excel", "Jupyter Notebook", "Google Colab", "VS Code", "MySQL Workbench"] },
  { title: "Databases", items: ["MySQL"] },
  { title: "Core Concepts", items: ["EDA", "Supervised Learning", "Classification", "Regression", "Data Preprocessing", "Model Evaluation", "DBMS"] },
];

export type Project = {
  title: string;
  blurb: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AirBnB Booking Analysis",
    blurb: "EDA on 102,599 Airbnb listings to uncover pricing patterns and booking trends.",
    problem: "Hosts and analysts struggle to identify what drives Airbnb pricing and bookings across neighborhoods and room types.",
    solution: "Cleaned a 100k+ row dataset, engineered features and built rich visualizations to surface relationships between price, location, room type and availability.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
    features: [
      "Cleaned 102,599 listings — handled missing values & outliers",
      "Heatmaps, distribution & correlation plots",
      "Answered 5+ analytical questions, 8+ visualizations",
      "Pricing & booking optimization insights",
    ],
    github: "#",
    featured: true,
  },
  {
    title: "Student Score Prediction",
    blurb: "Linear Regression model predicting student scores from study hours.",
    problem: "Educators want a simple way to estimate how study time impacts performance.",
    solution: "Built a supervised learning model with Scikit-learn that learns the relationship between study hours and scores, then visualizes predictions.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Linear Regression"],
    features: ["Structured dataset & preprocessing", "Trained & evaluated regression model", "Predictions on unseen data", "Result visualization"],
    github: "#",
  },
  {
    title: "Smart Transaction Monitoring System",
    blurb: "Rule-based engine to flag suspicious financial transactions in real time.",
    problem: "Detecting fraud-like activity requires rules that adapt to amount thresholds and transaction frequency.",
    solution: "Designed a Python + MySQL system that flags transactions exceeding thresholds (e.g. >₹10,000 or rapid bursts) and visualizes anomalies.",
    tech: ["Python", "MySQL", "Pandas", "Matplotlib"],
    features: ["Rule engine for high-amount & high-frequency txns", "MySQL persistence", "Pattern visualization", "Real-time monitoring simulation"],
    github: "#",
  },
  {
    title: "Trainfo — Train Reservation System",
    blurb: "Desktop ticket reservation system with a friendly GUI and MySQL backend.",
    problem: "Non-technical users need a simple way to book tickets, view reservations and check routes.",
    solution: "Built a Python desktop app using EasyGUI, backed by MySQL via mysql.connector, pymysql and SQLAlchemy.",
    tech: ["Python", "MySQL", "SQLAlchemy", "Pandas", "EasyGUI"],
    features: ["Book & view reservations", "Train route lookup", "Relational schema for trains/users/bookings", "User-friendly GUI"],
    github: "#",
  },
];

export const education = [
  {
    school: "Vellore Institute of Technology",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Sep 2022 – Aug 2026",
    location: "India",
  },
];

export const certifications = [
  "HackerRank — SQL (Basic) Certificate",
  "4★ SQL — HackerRank",
  "Python Essentials — Vityarthi",
  "The Bits and Bytes of Computer Networking — Coursera",
  "Cloud Computing — NPTEL",
  "Solved 20+ SQL/database problems on LeetCode",
];

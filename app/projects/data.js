export const projects = [
  {
    slug: "evaliq-ai",
    title: "Evaliq.Ai",
    featured: true,
    link: "https://evaliq.xyz/",
    tagline: "AI-powered educational management platform",
    desc: "Evaliq is an AI-powered educational management platform designed to help schools and institutions manage students, track performance, and generate insights — all within a seamless, secure, and beautifully designed interface.",
    about: [
      "Evaliq is an AI-powered educational management platform designed to help schools and institutions manage students, track performance, and generate insights — all within a seamless, secure, and beautifully designed interface. It eliminates manual effort and replaces it with intelligent automation.",
    ],
    image: "/evaliq-shot.png",
    imageMode: "screenshot",
    gradient:
      "radial-gradient(120% 120% at 0% 0%, rgba(232,99,47,0.55), transparent 52%), linear-gradient(135deg, #3a1d12 0%, #21130d 55%, #150c08 100%)",
    sections: [
      {
        type: "showcase",
        logo: "/evaliq-logo.png",
        images: [
          "/evaliq-1.png",
          "/evaliq-2.png",
          "/evaliq-3.png",
          "/evaliq-4.png",
          "/evaliq-5.png",
        ],
      },
      {
        type: "features",
        title: "Why choose Evaliq",
        subtitle:
          "Measurable results that transform how institutions manage learning.",
        items: [
          {
            icon: "sparkle",
            title: "AI-Powered Insights",
            desc: "Get intelligent recommendations and predictions about student performance in real-time.",
          },
          {
            icon: "bolt",
            title: "Instant Reports",
            desc: "Generate comprehensive student reports and marksheets in seconds, not hours.",
          },
          {
            icon: "activity",
            title: "Smart Analytics",
            desc: "Transform attendance, marks, and behavior data into actionable insights automatically.",
          },
          {
            icon: "monitor",
            title: "Intuitive Interface",
            desc: "An elegant, easy-to-use design that teachers and admins love, with zero training needed.",
          },
        ],
      },
      {
        type: "list",
        title: "Analytics & Insights",
        subtitle:
          "Understand every student at a glance and act before small issues become big ones.",
        items: [
          {
            icon: "chart",
            title: "Marks Trend Analysis",
            desc: "Visualize student progress over time. Identify trends starting to form before they become permanent issues.",
          },
          {
            icon: "document",
            title: "Detailed Performance Reports",
            desc: "Get comprehensive breakdowns of every test, assignment, and activity. Export reports in seconds.",
          },
          {
            icon: "target",
            title: "Fatigue & Dropout Prediction",
            desc: "Know when students are disengaging before their grades drop using our AI-driven engagement metrics.",
          },
          {
            icon: "users",
            title: "Batch-Level Insights",
            desc: "Compare performance across different sections and batches to standardize teaching quality.",
          },
        ],
      },
      {
        type: "list",
        title: "Automated Marksheet Builder",
        subtitle:
          "Stop spending weeks on manual report cards. Generate professional, error-free marksheets for the entire batch in one click.",
        items: [
          {
            icon: "pen",
            title: "Fully Customizable Templates",
            desc: "Design report cards that match your institution's branding with our drag-and-drop editor.",
          },
          {
            icon: "award",
            title: "Auto-Grade Calculation",
            desc: "Automatically compute grades, GPAs, and ranks based on your custom grading logic.",
          },
          {
            icon: "printer",
            title: "Bulk Generation & Printing",
            desc: "Generate PDFs for hundreds of students instantly. Ready for digital distribution or physical printing.",
          },
          {
            icon: "share",
            title: "One-Click Publishing",
            desc: "Publish results directly to the student and parent mobile apps securely.",
          },
        ],
      },
      {
        type: "list",
        badge: "AI-Powered Assistant",
        title: "Meet Evaliq Copilot",
        subtitle:
          "Your personal AI teaching assistant — generate report-card comments, summarize performance, and answer questions about student progress in plain English.",
        items: [
          {
            icon: "bot",
            title: "Automated Report Summaries",
            desc: "Let AI analyze the data and write personalized performance summaries for every student instantly.",
          },
          {
            icon: "chat",
            title: "Ask Questions in Natural Language",
            desc: "Simply ask 'How is Class 10A performing in Math?' and get an immediate, data-backed answer.",
          },
          {
            icon: "bolt",
            title: "Identify At-Risk Students",
            desc: "Copilot proactively flags students who need extra attention based on subtle changes in their performance trends.",
          },
        ],
      },
    ],
  },
  {
    slug: "back-to-school",
    title: "Back To School",
    tagline: "Teacher-facing biometric tracking web app",
    desc: "Back To School is a teacher-facing web app designed to help educators monitor and manage their students' biometric data in real time. The platform enables seamless tracking of key health and attendance signals from one place.",
    about: [
      "Back To School is a teacher-facing web app designed to help educators monitor and manage their students' biometric data in real time.",
      "The platform enables seamless tracking of key health and attendance signals from one place — giving teachers a clear, real-time picture of every student so they can act early and stay organised.",
    ],
    gradient:
      "radial-gradient(120% 120% at 0% 100%, rgba(232,99,47,0.32), transparent 55%), linear-gradient(135deg, #241511 0%, #160d08 100%)",
  },
  {
    slug: "simplex",
    title: "SimpleX",
    tagline: "Reusable CSS and component toolkit",
    desc: "SimpleX is a reusable CSS and component toolkit built to streamline UI development across multiple projects. It includes a set of responsive, accessible, and theme-friendly components.",
    about: [
      "SimpleX is a reusable CSS and component toolkit built to streamline UI development across multiple projects.",
      "It includes a set of responsive, accessible, and theme-friendly components that drop into any stack — cutting boilerplate and keeping interfaces consistent from project to project.",
    ],
    gradient:
      "radial-gradient(120% 120% at 100% 0%, rgba(232,99,47,0.45), transparent 55%), linear-gradient(135deg, #2a1812 0%, #160d08 100%)",
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

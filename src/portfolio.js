// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Riccardo's Portfolio",
  description:
    "Portfolio of Riccardo Pitzanti, Computer Science graduate and Cloud Engineer at Nimbus Reply. Projects in cloud systems, social computing, cybersecurity, networking and applied machine learning.",
  og: {
    title: "Riccardo Pitzanti's Portfolio",
    type: "website",
    url: "https://ricp2015.github.io",
  },
};

//Home Page
const greeting = {
  title: "Riccardo Pitzanti",
  logo_name: "RP",
  nickname: "ricp2015",
  subTitle:
    "Computer Science graduate from Sapienza University of Rome, working at Nimbus Reply (Rome) as a Cloud Engineer since November 2026. My projects cover cloud systems, social computing, cybersecurity, networking and machine learning.",
  resumeLink: "documents/RP_cv_cloud_eng.pdf",
  portfolio_repository: "https://github.com/ricp2015",
  githubProfile: "https://github.com/ricp2015",
};

const socialMediaLinks = [
  {
    name: "GitHub",
    link: "https://github.com/ricp2015",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/riccardo-pitzanti-3b0b43312",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:riccardopitzanti@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Profile",
      fileName: "DataScienceImg",
      skills: [
        "MSc in Computer Science from Sapienza University of Rome, completed with 110/110 cum laude.",
        "Focus areas: cloud infrastructure, social computing, cybersecurity and networking.",
      ],
      softwareSkills: [],
    },
    {
      title: "Technical skills",
      fileName: "CloudInfraImg",
      skills: [
        "Languages: Python, Java, C++, SQL, JavaScript, PHP, HTML/CSS and LaTeX.",
        "Systems and tools: Git, Docker, Linux, TrueNAS, networking, firewall configuration and Excel.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:openjdk",
          style: { color: "#EA2D2E" },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#659AD2" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "mdi:database-outline",
          style: { color: "#5B9BD5" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: { color: "#777BB4" },
        },
        {
          skillName: "LaTeX",
          fontAwesomeClassname: "simple-icons:latex",
          style: { color: "#80B3A1" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#FCC624" },
        },
        {
          skillName: "TrueNAS",
          fontAwesomeClassname: "simple-icons:truenas",
          style: { color: "#0095D5" },
        },
        {
          skillName: "Networking",
          fontAwesomeClassname: "mdi:lan",
          style: { color: "#5AA9E6" },
        },
        {
          skillName: "Firewall",
          fontAwesomeClassname: "mdi:shield-lock-outline",
          style: { color: "#E06C75" },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { color: "#217346" },
        },
      ],
    },
  ],
};

const interests = {
  description:
    "Outside work, music has been a constant part of my life, and I have DJed at public and private events in Sardinia since 2016. I manage a TrueNAS home server and write about films, with a particular interest in narrative and social themes. I also read about technology, personal finance and economics.",
};

// Education Page
const educationHeader = {
  title: "Education",
  description:
    "BSc and MSc in Computer Science at Sapienza University of Rome. Graduate work focused on cloud computing, distributed systems, cybersecurity and data science.",
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sapienza Università di Roma",
      subtitle: "MSc in Computer Science (LM-18)",
      logo_path: "sapienza_logo.png",
      alt_name: "Sapienza Università di Roma",
      duration: "2024 - 2026",
      grade: "110/110 cum laude",
      descriptions: [
        "Relevant coursework: Network Performance, Cybersecurity, Distributed and Concurrent Systems, Internet of Things, Data Science, Blockchain, Machine Learning, Big Data and Cloud Computing.",
      ],
      thesis: {
        title: "Master's thesis",
        description:
          "Benchmarking and Extending Community Notes as User-Driven Moderation.",
        link: "https://github.com/ricp2015/birdwatch_x_modlog",
      },
      website_link:
        "https://corsidilaurea.uniroma1.it/it/corso/2024/29932/home",
    },
    {
      title: "Sapienza Università di Roma",
      subtitle: "BSc in Computer Science (L-31)",
      logo_path: "sapienza_logo.png",
      alt_name: "Sapienza Università di Roma",
      duration: "2020 - 2024",
      grade: "106/110",
      descriptions: [
        "Relevant coursework: Programming, Database Management, Computer Architecture, Mathematics, Networks, Theory of Computation, Algorithms, Computer Graphics, Web Development and Cybersecurity.",
      ],
      thesis: {
        title: "Bachelor's thesis",
        description:
          "Development, comparison and application of NLP techniques for extracting socio-demographic traits from self-reported social media data.",
        link: "https://github.com/ricp2015/Reddit-Demographics",
      },
      website_link:
        "https://corsidilaurea.uniroma1.it/it/corso/2023/29923/home",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Cambridge English",
      subtitle: "B2 First - Grade A (C1) - 181/190",
      logo_path: "cambridge_english_logo.svg",
      certificate_link: "documents/First_RP.pdf",
      alt_name: "Cambridge First",
      color_code: "#8C151599",
    },
    {
      title: "CyberChallenge.IT",
      subtitle: "Sapienza - 7th place in the final CTF",
      logo_path: "cyberchallenge_logo.svg",
      certificate_link: "documents/cyberchallengeit_2021_certificato.pdf",
      alt_name: "CyberChallenge.IT",
      color_code: "#00000099",
    },
    {
      title: "CyberX - Mind4Future",
      subtitle: "Leonardo - National finalist",
      logo_path: "Cyber40_logo.png",
      certificate_link:
        "documents/Attestati Finalisti CyberX Mind4Future-54.pdf",
      alt_name: "Cyberx",
      color_code: "#0C9D5899",
    },
    {
      title: "WASE Open Water Diver",
      subtitle: "Open Water Diver (OWD)",
      logo_path: "wase_logo.png",
      certificate_link:
        "https://www.wasediveducation.com/en/courses/start-diving/open-water-diver/",
      alt_name: "WASE Open Water Diver",
      color_code: "#00000099",
    },
    {
      title: "FIN Assistente Bagnanti",
      subtitle: "MIP - Pool, inland waters and sea",
      logo_path: "fin_logo.png",
      certificate_link:
        "https://www.federnuoto.it/home/formazione/sezione-salvamento/offerta-formativa-salvamento/assistenti-bagnanti.html",
      alt_name: "Federazione Italiana Nuoto - Assistente Bagnanti",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional and selected technical experience",
  description:
    "I joined Nimbus Reply as a Cloud Engineer in November 2026. My background combines cloud and security projects with more than five years of STEM tutoring.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Cloud Engineer",
          company: "Nimbus Reply",
          company_url: "https://www.reply.com/nimbus-reply/it",
          logo_path: "reply_logo.png",
          duration: "November 2026 - Present",
          location: "Rome, Italy",
          description:
            "Multi-cloud foundations, infrastructure automation, DevSecOps and security for enterprise environments.",
          color: "#2f75dc",
        },
        {
          title: "STEM Private Tutor",
          company: "Centro Studi ABC",
          company_url: "https://centrostudiabc.com/",
          logo_path: "csABC_logo.jpeg",
          duration: "February 2021 - Present",
          location: "Olbia, Italy",
          description:
            "Designed and taught tailored STEM curricula for more than 100 high-school and university students.",
          color: "#0879bf",
        },
        {
          title: "CyberX - Mind4Future Finalist",
          company: "Leonardo × Sapienza University of Rome",
          company_url:
            "https://www.leonardo.com/en/news-and-stories-detail/-/detail/mind4future_la-formazione-esperienziale_news",
          logo_path: "leonardo_logo.png",
          duration: "February 2023 - March 2023",
          location: "Rome, Italy",
          description:
            "Completed national cybersecurity training, placed in the top 20% in the CTF and joined the final attack-and-defence simulation at Leonardo's Cyber Range in Rome.",
          color: "#9b1578",
        },
        {
          title: "CyberChallenge.IT",
          company: "Sapienza University of Rome",
          company_url: "https://cyberchallenge.it/",
          logo_path: "cyberchallenge_logo.svg",
          duration: "February 2021 - May 2021",
          location: "Rome, Italy",
          description:
            "Admitted in the top 10% and placed 7th in the final CTF after training in cryptography, hardware security and web security.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Academic and personal work in cloud systems, social computing, networking, natural language processing and cybersecurity.",
  avatar_image_path: "code_image.png",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact_img.png",
    description:
      "For professional enquiries, project discussions or collaboration, drop me an email!",
  },
  addressSection: {
    title: "Location",
    subtitle: "Rome, Italy",
    locality: "Rome",
    country: "Italy",
    region: "Lazio",
    postalCode: "",
    streetAddress: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  interests,
  educationHeader,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

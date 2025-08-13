// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Recent and ongoing projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "I actively develop a variety of projects ranging from academic open source reserach codes, to interactive educational simulation tools.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Additional details are available via my OSU Experts Directory page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "If you are interested in joining our research group, please reach out to Brian Giffin by email.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-icccm8-conference-presentation-on-quot-hyper-dimensional-gap-finite-elements-for-the-enforcement-of-frictionless-contact-quot",
      
        title: "ICCCM8 Conference Presentation on &quot;Hyper-dimensional gap finite elements for the enforcement of frictionless...",
      
      description: "Hyper-dimensional gap finite elements for the enforcement of frictionless contact",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/ICCCM8/";
        
      },
    },{id: "post-usnccm18-conference-presentation-on-quot-exactly-bit-reversible-computational-methods-for-memory-efficient-adjoint-sensitivity-analysis-of-dissipative-dynamic-systems-quot",
      
        title: "USNCCM18 Conference Presentation on &quot;Exactly bit-reversible computational methods for memory-efficient adjoint sensitivity analysis...",
      
      description: "Exactly bit-reversible computational methods for memory-efficient adjoint sensitivity analysis of dissipative dynamic systems",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/USNCCM18/";
        
      },
    },{id: "post-interactive-multi-physics-analysis-in-real-time-impart",
      
        title: "Interactive Multi-Physics Analysis in Real-Time (IMPART)",
      
      description: "An interactive educational simulation tool demonstrating the varied applications of multi-physics analysis",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/impart/";
        
      },
    },{id: "post-cohesive-zone-modeling-czm-library",
      
        title: "Cohesive Zone Modeling (CZM) library",
      
      description: "An interactive educational simulation tool demonstrating the use of cohesive zone modeling for analyzing structural failure",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/czm/";
        
      },
    },{id: "news-new-course-spring-2025-finite-element-analysis-of-solids-and-structures-cive-5010",
          title: 'New course, Spring 2025: Finite Element Analysis of Solids and Structures (CIVE 5010)...',
          description: "",
          section: "News",},{id: "news-seeking-phd-students-with-an-interest-in-the-development-of-novel-computational-methods-for-applications-in-solid-and-structural-mechanics",
          title: 'Seeking PhD students with an interest in the development of novel computational methods...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/seeking_phd_students_fall_2025/";
            },},{id: "news-himamshu-poudel-will-be-delivering-a-presentation-on-the-fragility-analysis-of-transmission-towers-through-physics-based-modeling-of-tornado-induced-wind-and-debris-impact-loads-at-the-upcoming-nheri-computational-symposium",
          title: 'Himamshu Poudel will be delivering a presentation on the Fragility Analysis of Transmission...',
          description: "",
          section: "News",},{id: "projects-hyper-dimensional-contact-gap-methods",
          title: 'Hyper-dimensional contact gap methods',
          description: "A novel finite element contact discretization method",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hyperdimensional_contact/";
            },},{id: "projects-time-reversible-computational-methods",
          title: 'Time-reversible computational methods',
          description: "Exploration of exactly &quot;bit-reversible&quot; dynamic time-integrators",
          section: "Projects",handler: () => {
              window.location.href = "/projects/reverse_time_dynamics/";
            },},{id: "projects-national-student-steel-bridge-competition-resources",
          title: 'National Student Steel Bridge Competition resources',
          description: "Educational videos and tools directed at students participating in the NSSBC",
          section: "Projects",handler: () => {
              window.location.href = "/projects/steel_bridge/";
            },},{id: "projects-structural-wind-borne-debris-impact-risk-assessment-library-swirl",
          title: 'Structural Wind-borne debris Impact Risk Assessment Library (SWIRL)',
          description: "A physics-based fluid-structure-debris modeling framework",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tornado_debris_impact/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%72%69%61%6E.%67%69%66%66%69%6E@%6F%6B%73%74%61%74%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bdgiffin", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/brian-giffin-ph-d-1115037a", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0458-8492", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Brian-Giffin/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://experts.okstate.edu/brian.giffin/about", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@briandgiffin", "_blank");
        },
      },];

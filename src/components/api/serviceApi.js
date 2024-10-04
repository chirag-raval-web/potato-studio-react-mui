//  -------------------------serviceItem data ---------------
export const ServicesData = [
  {
    src: `${process.env.PUBLIC_URL}/media/services/ui-ux.svg`,
    to: "/ui-ux-services",
    alt: "UX/UI Design",
    title: "UX/UI Design",
  },
  {
    src: `${process.env.PUBLIC_URL}/media/services/mobile.svg`,
    to: "/mobile-app-design",
    alt: "Mobile App Design",
    title: "Mobile App Design",
  },
  {
    src: `${process.env.PUBLIC_URL}/media/services/website.svg`,
    to: "/website-design",
    alt: "Website Design",
    title: "Website Design",
  },
  {
    src: `${process.env.PUBLIC_URL}/media/services/dashboard.svg`,
    to: "/dashboard-design",
    alt: "Dashboard Design (SaaS)",
    title: "Dashboard Design",
    extra: "(SaaS)",
  },
  {
    src: `${process.env.PUBLIC_URL}/media/services/uxResearch.svg`,
    to: "/ux-research",
    alt: "UX Research",
    title: "UX Research",
  },
  {
    src: `${process.env.PUBLIC_URL}/media/services/branding.svg`,
    to: "/branding",
    alt: "Branding",
    title: "Branding",
  },
  {
    src: `${process.env.PUBLIC_URL}/media/services/audit.svg`,
    to: "/design-audit",
    alt: "Design Audit",
    title: "Design Audit",
  },
  {
    src: `${process.env.PUBLIC_URL}/media/services/prototype.svg`,
    to: "/prototyping-interactions",
    alt: "Prototyping & Interactions",
    title: "Prototyping & Interactions",
  },
];
// ----------------------------ApproachData------------------------------------  
export  const ApproachData = [
    {
      img: "/media/approach/apr1.webp",
      title: "Research",
      description: "The methodical study of users to derive user insights.",
      link: [
        { text: "Design Audit" },
        { text: "UX Research "},
        { text: "Competitor Analysis" },
        { text: "UX Workshop" },
      ],
    },
    {
      img: "/media/approach/apr2.webp",
      title: "Strategy",
      description: "The process of aligning accurate research insights with the goals.",
      link: [
        { text: "Design Thinking", url: "#" },
        { text: "Product Roadmap", url: "#" },
        { text: "Growth Strategy", url: "#" },
        { text: "Service Design", url: "#" },
      ],
    },
    {
      img: "/media/approach/apr3.webp",
      title: "Design",
      description: "Designing seamless experiences, solving user pain points.",
      link: [
        { text: "UX/UI Design", url: "#" },
        { text: "Wire-framing", url: "#" },
        { text: "Information Architecture", url: "#" },
        { text: "Visual Communication", url: "#" },
      ],
    },
  ];
// ----------------------------industryData------------------------------------  
export const industryData = [
    { icon: 'media/expertise/exp1.svg', title: 'Real Estate & Hospitality' },
    { icon: 'media/expertise/exp2.svg', title: 'Healthcare & Wellness' },
    { icon: 'media/expertise/exp3.svg', title: 'Retail & Ecommerce' },
    { icon: 'media/expertise/exp4.svg', title: 'Media & Entertainment' },
    { icon: 'media/expertise/exp5.svg', title: 'Automobile & Transport' },
    { icon: 'media/expertise/exp6.svg', title: 'Finance & Fintech' },
    { icon: 'media/expertise/exp7.svg', title: 'Agritech' },
    { icon: 'media/expertise/exp8.svg', title: 'Edtech & Learning' },
  ];
// ----------------------------Service Detailed Page Data ------------------------------------  


export const ServiceDetailedPageData = [
  {
    id: 1,
    title: "UX/UI Design",
    img1: "sr1.webp", 
    img2: "sr2.webp",
    AboutItem: {
      section1: {
        item1: {
          question: "What is UX/UI Design?",
          answer: "UX/UI Design focuses on creating user-friendly and visually appealing interfaces for digital products. It ensures that users can navigate and interact with a product effortlessly, enhancing their overall experience."
        },
        item2: {
          question: "Why do we need UX/UI Design?",
          answer: {
            item1: {
              title: "User Engagement",
              description: "Creates interfaces that capture attention and keep users engaged."
            },
            item2: {
              title: "Intuitive Navigation",
              description: "Simplifies user journeys, reducing confusion."
            },
            item3: {
              title: "Brand Consistency",
              description: "Ensures a cohesive visual identity across platforms."
            },
            item4: {
              title: "Business Impact",
              description: "Boosts conversions and customer satisfaction through seamless interactions."
            },
          }
        }
      },
      section2: {
        item1: {
          question: "When should I consider UX/UI Design?",
          answer: {
            item1: {
              title: "New Product Development",
              description: "Before releasing your website or app to customers."
            },
            item2: {
              title: "Redesign",
              description: "When revamping an existing product to improve usability."
            },
            item3: {
              title: "Post-Launch",
              description: "To refine and enhance the user experience based on feedback."
            },
          }
        },
        item2: {
          question: "How is UX/UI Design executed?",
          answer: {
            item1: {
              title: "Research",
              description: "Understanding user needs and pain points."
            },
            item2: {
              title: "Wireframing",
              description: "Mapping out the structure and flow."
            },
            item3: {
              title: "Design",
              description: "Creating visually appealing and functional interfaces."
            },
            item4: {
              title: "Testing",
              description: "Validating designs with real users for continuous improvement."
            },
          }
        }
      },
    }
  },
  {
    id: 2,
    title: "Mobile App Design",
    img1: "sr1.webp",
    img2: "sr2.webp",
    AboutItem: {
      section1: {
        item1: {
          question: "What is Mobile App Design?",
          answer: "Mobile App Design involves creating user interfaces and experiences specifically for mobile applications, ensuring functionality and usability across various devices."
        },
        item2: {
          question: "Why is Mobile App Design important?",
          answer: {
            item1: {
              title: "User Retention",
              description: "Engaging design keeps users coming back."
            },
            item2: {
              title: "Accessibility",
              description: "Ensures apps are usable for all users, including those with disabilities."
            },
            item3: {
              title: "Performance",
              description: "Optimized designs improve app speed and functionality."
            },
            item4: {
              title: "User Feedback",
              description: "Encourages user interaction and feedback, leading to better improvements."
            },
          }
        }
      },
      section2: {
        item1: {
          question: "When to consider Mobile App Design?",
          answer: {
            item1: {
              title: "New App Development",
              description: "At the inception of an app to establish a strong foundation."
            },
            item2: {
              title: "Feature Updates",
              description: "When adding new functionalities to enhance user experience."
            },
            item3: {
              title: "User Experience Improvement",
              description: "When feedback indicates areas for improvement."
            },
          }
        },
        item2: {
          question: "How is Mobile App Design executed?",
          answer: {
            item1: {
              title: "User Research",
              description: "Understanding the target audience and their needs."
            },
            item2: {
              title: "Prototyping",
              description: "Creating initial app models for testing and feedback."
            },
            item3: {
              title: "Visual Design",
              description: "Crafting aesthetically pleasing interfaces that attract users."
            },
            item4: {
              title: "Usability Testing",
              description: "Gathering user feedback to refine and enhance the app."
            },
          }
        }
      },
    }
  },
  {
    id: 3,
    title: "Website Design",
    img1: "sr1.webp",
    img2: "sr2.webp",
    AboutItem: {
      section1: {
        item1: {
          question: "What is Website Design?",
          answer: "Website Design is the process of planning and creating the elements of a website, including layout, content, and user experience."
        },
        item2: {
          question: "Why is Website Design crucial?",
          answer: {
            item1: {
              title: "First Impressions",
              description: "Captivating design can attract and retain visitors."
            },
            item2: {
              title: "User Experience",
              description: "A well-designed website enhances user satisfaction and usability."
            },
            item3: {
              title: "SEO Benefits",
              description: "Proper design contributes to better search engine rankings."
            },
            item4: {
              title: "Mobile Responsiveness",
              description: "Ensures accessibility on various devices and screen sizes."
            },
          }
        }
      },
      section2: {
        item1: {
          question: "When to invest in Website Design?",
          answer: {
            item1: {
              title: "New Website Launch",
              description: "At the creation of a website to ensure quality and effectiveness."
            },
            item2: {
              title: "Redesign Projects",
              description: "When existing websites need a fresh look or improved functionality."
            },
            item3: {
              title: "Brand Refresh",
              description: "When rebranding efforts are underway to align visuals with the new identity."
            },
          }
        },
        item2: {
          question: "How is Website Design executed?",
          answer: {
            item1: {
              title: "Wireframing",
              description: "Creating blueprints for website structure and navigation."
            },
            item2: {
              title: "Content Strategy",
              description: "Defining how content will be displayed and organized."
            },
            item3: {
              title: "Visual Design",
              description: "Crafting an appealing and effective visual aesthetic."
            },
            item4: {
              title: "Testing & Launch",
              description: "Conducting tests before launching the website to the public."
            },
          }
        }
      },
    }
  },
  {
    id: 4,
    title: "Dashboard Design",
    img1: "sr1.webp",
    img2: "sr2.webp",
    AboutItem: {
      section1: {
        item1: {
          question: "What is Dashboard Design?",
          answer: "Dashboard Design is the process of creating user interfaces that display key performance indicators and data insights clearly and effectively."
        },
        item2: {
          question: "Why is Dashboard Design important?",
          answer: {
            item1: {
              title: "Data Visualization",
              description: "Transforms complex data into easily understandable visuals."
            },
            item2: {
              title: "User Interaction",
              description: "Enhances user engagement with interactive elements."
            },
            item3: {
              title: "Decision Making",
              description: "Supports better decisions through clear data presentation."
            },
            item4: {
              title: "Customization",
              description: "Allows users to personalize their dashboards for relevant insights."
            },
          }
        }
      },
      section2: {
        item1: {
          question: "When should I consider Dashboard Design?",
          answer: {
            item1: {
              title: "New Analytics Tools",
              description: "When developing tools that require data visualization."
            },
            item2: {
              title: "Feature Enhancements",
              description: "When adding new functionalities to existing dashboards."
            },
            item3: {
              title: "User Feedback Incorporation",
              description: "To adapt designs based on user input and preferences."
            },
          }
        },
        item2: {
          question: "How is Dashboard Design executed?",
          answer: {
            item1: {
              title: "User Research",
              description: "Identifying user needs and data usage scenarios."
            },
            item2: {
              title: "Prototyping",
              description: "Creating initial models for testing and refinement."
            },
            item3: {
              title: "Data Integration",
              description: "Connecting relevant data sources for real-time insights."
            },
            item4: {
              title: "Usability Testing",
              description: "Gathering user feedback to optimize the dashboard experience."
            },
          }
        }
      },
    }
  },
  {
    id: 5,
    title: "UX Research",
    img1: "sr1.webp",
    img2: "sr2.webp",
    AboutItem: {
      section1: {
        item1: {
          question: "What is UX Research?",
          answer: "UX Research involves studying users and their behaviors to gather insights that inform design decisions."
        },
        item2: {
          question: "Why is UX Research essential?",
          answer: {
            item1: {
              title: "User-Centered Design",
              description: "Focuses on creating solutions tailored to user needs."
            },
            item2: {
              title: "Identifying Pain Points",
              description: "Helps uncover issues users face during interactions."
            },
            item3: {
              title: "Informed Decisions",
              description: "Guides design decisions based on real user data."
            },
            item4: {
              title: "Increased Satisfaction",
              description: "Enhances the overall user experience, leading to happier users."
            },
          }
        }
      },
      section2: {
        item1: {
          question: "When to conduct UX Research?",
          answer: {
            item1: {
              title: "Before Design Projects",
              description: "To gather insights before starting the design process."
            },
            item2: {
              title: "During Product Development",
              description: "To validate design concepts and make necessary adjustments."
            },
            item3: {
              title: "Post-Launch Evaluation",
              description: "To assess user satisfaction and areas for improvement."
            },
          }
        },
        item2: {
          question: "How is UX Research executed?",
          answer: {
            item1: {
              title: "Surveys",
              description: "Collecting user feedback through questionnaires."
            },
            item2: {
              title: "Interviews",
              description: "Conducting one-on-one discussions to gain in-depth insights."
            },
            item3: {
              title: "Usability Testing",
              description: "Observing users as they interact with products to identify issues."
            },
            item4: {
              title: "Analytics Review",
              description: "Analyzing user data to understand behavior patterns."
            },
          }
        }
      },
    }
  },
  {
    id: 6,
    title: "Branding",
    img1: "sr1.webp",
    img2: "sr2.webp",
    AboutItem: {
      section1: {
        item1: {
          question: "What is Branding?",
          answer: "Branding is the process of creating a unique identity and image for a product or company through design and marketing."
        },
        item2: {
          question: "Why is Branding vital?",
          answer: {
            item1: {
              title: "Recognition",
              description: "Establishes a memorable identity that stands out."
            },
            item2: {
              title: "Trust",
              description: "Builds credibility and fosters customer loyalty."
            },
            item3: {
              title: "Value Proposition",
              description: "Communicates what makes your brand unique and valuable."
            },
            item4: {
              title: "Consistency",
              description: "Ensures uniformity across all marketing materials and platforms."
            },
          }
        }
      },
      section2: {
        item1: {
          question: "When to focus on Branding?",
          answer: {
            item1: {
              title: "New Business Launch",
              description: "At the start to create a strong market presence."
            },
            item2: {
              title: "Rebranding Efforts",
              description: "When refreshing an existing brand to attract new customers."
            },
            item3: {
              title: "Marketing Campaigns",
              description: "To ensure all materials align with brand identity."
            },
          }
        },
        item2: {
          question: "How is Branding executed?",
          answer: {
            item1: {
              title: "Brand Strategy Development",
              description: "Defining the vision, mission, and core values."
            },
            item2: {
              title: "Visual Identity Creation",
              description: "Designing logos, color schemes, and typography."
            },
            item3: {
              title: "Messaging Framework",
              description: "Crafting key messages that resonate with the target audience."
            },
            item4: {
              title: "Implementation & Monitoring",
              description: "Applying the brand across all channels and monitoring performance."
            },
          }
        }
      },
    }
  },
  {
    id: 7,
    title: "Design Audit",
    img1: "sr1.webp",
    img2: "sr2.webp",
    AboutItem: {
      section1: {
        item1: {
          question: "What is a Design Audit?",
          answer: "A design audit evaluates a product's design effectiveness, identifying strengths, weaknesses, and areas for improvement."
        },
        item2: {
          question: "Why is a Design Audit crucial?",
          answer: {
            item1: {
              title: "Identifying Issues",
              description: "Uncovers usability and accessibility problems."
            },
            item2: {
              title: "Enhancing User Experience",
              description: "Provides recommendations to improve user satisfaction."
            },
            item3: {
              title: "Aligning with Best Practices",
              description: "Ensures design adheres to industry standards."
            },
            item4: {
              title: "Data-Driven Decisions",
              description: "Guides design improvements based on insights."
            },
          }
        }
      },
      section2: {
        item1: {
          question: "When to conduct a Design Audit?",
          answer: {
            item1: {
              title: "Before Major Redesigns",
              description: "To understand current strengths and weaknesses."
            },
            item2: {
              title: "Post-Launch Evaluations",
              description: "To assess user feedback and interaction."
            },
            item3: {
              title: "When Introducing New Features",
              description: "To ensure consistency and usability."
            },
          }
        },
        item2: {
          question: "How is a Design Audit executed?",
          answer: {
            item1: {
              title: "Heuristic Evaluation",
              description: "Assessing design against established usability principles."
            },
            item2: {
              title: "User Testing",
              description: "Observing real users to identify issues."
            },
            item3: {
              title: "Competitor Analysis",
              description: "Evaluating similar products for best practices."
            },
            item4: {
              title: "Stakeholder Interviews",
              description: "Gathering insights from team members about design perceptions."
            },
          }
        }
      },
    }
  },
  {
    id: 8,
    title: "Prototyping & Interactions",
    img1: "sr1.webp",
    img2: "sr2.webp",
    AboutItem: {
      section1: {
        item1: {
          question: "What is Prototyping?",
          answer: "Prototyping involves creating early samples or models of a product to test concepts and functionalities."
        },
        item2: {
          question: "Why is Prototyping important?",
          answer: {
            item1: {
              title: "Early Feedback",
              description: "Gathers user insights before final development."
            },
            item2: {
              title: "Design Validation",
              description: "Ensures concepts align with user needs."
            },
            item3: {
              title: "Cost-Effective Adjustments",
              description: "Identifies potential issues early to reduce later costs."
            },
            item4: {
              title: "Improved Collaboration",
              description: "Facilitates discussions among stakeholders."
            },
          }
        }
      },
      section2: {
        item1: {
          question: "When to consider Prototyping?",
          answer: {
            item1: {
              title: "During Initial Stages of Design",
              description: "To visualize ideas and gather feedback."
            },
            item2: {
              title: "Before Full Development",
              description: "To validate design concepts."
            },
            item3: {
              title: "For User Testing",
              description: "To observe interactions with the design."
            },
          }
        },
        item2: {
          question: "How is Prototyping executed?",
          answer: {
            item1: {
              title: "Wireframes",
              description: "Creating simple layouts to outline structure."
            },
            item2: {
              title: "High-Fidelity Prototypes",
              description: "Developing detailed representations of the final product."
            },
            item3: {
              title: "Interactive Mockups",
              description: "Simulating user interactions to test usability."
            },
            item4: {
              title: "Feedback Sessions",
              description: "Gathering insights from users to inform design iterations."
            },
          }
        }
      },
    }
  },
];


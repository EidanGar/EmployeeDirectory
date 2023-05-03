import { ProjectData, DepartmentsData } from "../types";

export const employeeDescriptions = [
  "a highly motivated individual with a strong work ethic and positive attitude.",
  "a team player with excellent communication skills and a passion for working with others.",
  "a detail-oriented individual who consistently meets deadlines and exceeds expectations.",
  "a creative problem solver with a passion for finding innovative solutions.",
  "a dedicated and reliable employee who always goes above and beyond.",
  "a confident and charismatic individual with a talent for building relationships with others.",
  "a flexible and adaptable worker who thrives in fast-paced and changing environments.",
  "a determined and goal-oriented employee with a strong drive for success.",
  "a kind and empathetic individual who consistently demonstrates empathy for colleagues and customers alike.",
  "a highly organized and efficient worker with a strong ability to multitask and prioritize.",
  "a natural leader with excellent interpersonal skills and a track record of successfully managing teams.",
  "a self-starter with a strong entrepreneurial spirit and a passion for innovation.",
  "a proactive and resourceful employee with a talent for finding creative solutions to complex problems.",
  "a strategic thinker with strong analytical skills and the ability to develop and implement effective plans.",
  "a highly driven and motivated individual who consistently strives to exceed expectations.",
  "a passionate and knowledgeable professional with a deep understanding of the industry and a commitment to continuous learning.",
  "a friendly and approachable individual with a talent for building strong relationships with colleagues, customers, and partners.",
  "a highly skilled and talented worker with a strong track record of delivering high-quality results.",
  "a confident and effective communicator with the ability to clearly convey ideas and collaborate with others.",
  "a dedicated and hardworking individual who consistently demonstrates a strong work ethic and commitment to excellence.",
  "a highly organized and detail-oriented individual with a strong ability to manage multiple tasks and prioritize effectively.",
  "a confident and assertive professional with excellent negotiation and conflict resolution skills.",
  "a compassionate and understanding individual who consistently demonstrates empathy and a strong commitment to helping others.",
  "a strategic and forward-thinking employee with a talent for anticipating and solving problems before they arise.",
  "a driven and ambitious worker with a strong passion for personal and professional growth.",
  "a strong communicator with a talent for building rapport and effectively communicating with others.",
  "a creative and innovative professional with a passion for exploring new ideas and finding unique solutions.",
  "a dedicated and persistent employee who consistently strives to achieve goals and overcome challenges.",
  "a highly skilled and knowledgeable professional with a strong ability to learn quickly and apply new skills.",
  "a flexible and adaptable worker with a strong ability to adjust to new and changing environments.",
];

export const FAQs = [
  {
    question: "What is an employee directory application?",
    answer:
      "An employee directory application is a software tool used to manage employee information within an organization. It typically includes features such as employee profiles, search functionality, and organizational charts.",
  },
  {
    question:
      "What kind of information is typically included in an employee directory application?",
    answer:
      "Employee directory applications typically include basic employee information such as name, job title, department, and contact information. Some applications may also include additional information such as skills, certifications, and job responsibilities.",
  },
  {
    question:
      "How is employee information managed within an employee directory application?",
    answer:
      "Employee information is typically managed through a centralized database that is accessed through the employee directory application. This database is usually maintained by the human resources department or other designated personnel.",
  },
  {
    question:
      "How can I search for specific employees within the employee directory application?",
    answer:
      "Most employee directory applications include a search function that allows users to search for employees by name, job title, department, or other criteria. Some applications may also include advanced search features that allow for more complex searches.",
  },
  {
    question:
      "Can I update my own employee information within the employee directory application?",
    answer:
      "This will depend on the specific application and the permissions granted by your organization. Some employee directory applications allow employees to update their own information, while others require that updates be made by designated personnel.",
  },
  {
    question:
      "Is employee information within the employee directory application secure?",
    answer:
      "Yes, employee information within the employee directory application should be kept secure and only accessible by authorized personnel. Most applications use encryption and other security measures to protect employee data.",
  },
  {
    question:
      "Can I access the employee directory application from outside of the office?",
    answer:
      "This will depend on the specific application and the policies of your organization. Some employee directory applications may be accessible from remote locations, while others may only be accessible from within the office network.",
  },
  {
    question:
      "Can I export employee information from the employee directory application?",
    answer:
      "This will depend on the specific application and the permissions granted by your organization. Some employee directory applications may allow for exporting of employee data in various formats, while others may not allow for any exporting of data.",
  },
];

export const projectData: ProjectData = {
  "Human Resources (HR)": [
    {
      title: "Employee Training Program",
      description:
        "Developing a training program for new hires and existing employees to enhance skills, increase job satisfaction, and retain top talent.",
    },
    {
      title: "Benefits Administration System",
      description:
        "Creating an online system for managing employee benefits to streamline administration, reduce burden on HR staff, and provide robust reporting capabilities.",
    },
    {
      title: "Recruitment Strategy Development",
      description:
        "Developing a strategy for attracting top talent and building a diverse workforce through effective sourcing, selection, and onboarding processes.",
    },
    {
      title: "Performance Management System",
      description:
        "Developing a system to track and evaluate employee performance, provide feedback and coaching, and align performance with organizational goals to retain top talent.",
    },
  ],
  Finance: [
    {
      title: "Financial Reporting Dashboard",
      description:
        "Develop a real-time dashboard for displaying critical financial metrics and key performance indicators (KPIs) that enable stakeholders to monitor financial health, make data-driven decisions, and identify trends and opportunities for improvement.",
    },
    {
      title: "Budgeting and Forecasting Tool",
      description:
        "Create a robust tool for managing and forecasting budgets and expenses. The tool will enable finance teams to set and track budgets, forecast revenue and expenses, and provide scenario analysis to improve decision-making and planning.",
    },
    {
      title: "Accounts Payable Automation System",
      description:
        "Automate the accounts payable process to improve efficiency, reduce errors, and ensure timely payments. The system will streamline invoice processing, enable automatic payment approvals, and provide real-time payment status updates to vendors.",
    },
    {
      title: "Tax Planning and Compliance Solution",
      description:
        "Develop a comprehensive tax planning and compliance tool that ensures compliance with tax laws and regulations while optimizing tax planning. The tool will provide up-to-date tax information, automate compliance reporting, and provide tax planning insights to help businesses save money and avoid penalties.",
    },
  ],
  Marketing: [
    {
      title: "Brand Awareness Campaign",
      description:
        "Develop and execute a multi-channel campaign to increase brand awareness, generate buzz, and reach a wider audience. The campaign will leverage a mix of tactics such as PR, digital marketing, and event marketing to maximize reach and impact.",
    },
    {
      title: "Content Marketing Strategy Development",
      description:
        "Develop a comprehensive content marketing strategy that aligns with the organization's goals, audience needs, and brand voice. The strategy will focus on creating and distributing valuable and relevant content that attracts, engages, and converts prospects into customers.",
    },
    {
      title: "Social Media Management Platform",
      description:
        "Develop a social media management platform that enables businesses to manage and analyze their social media accounts and campaigns in one place. The platform will provide tools for scheduling posts, monitoring social media activity, and analyzing engagement metrics to optimize performance.",
    },
    {
      title: "Market Research and Analysis Tool",
      description:
        "Develop a tool for conducting market research and analyzing data to identify trends and opportunities. The tool will provide businesses with actionable insights into market trends, competitive landscape, and customer behavior to inform strategic decision-making and improve ROI.",
    },
  ],
  Operations: [
    {
      title: "Supply Chain Optimization System",
      description:
        "Develop a data-driven supply chain optimization system that improves supplier performance, reduces lead times, and lowers transportation costs. The system will use predictive analytics and machine learning to optimize inventory levels, demand forecasting, and transportation routing.",
    },
    {
      title: "Inventory Management System",
      description:
        "Develop an inventory management system that tracks inventory levels, orders, and shipments in real-time. The system will use barcode scanning and RFID technology to automate inventory tracking and replenishment, and provide accurate data for forecasting and analysis.",
    },
    {
      title: "Quality Control System",
      description:
        "Develop a comprehensive quality control system that ensures consistent product and service quality. The system will establish quality standards, conduct inspections and audits, and implement corrective actions to continuously improve quality and minimize defects and customer complaints.",
    },
    {
      title: "Process Improvement Initiative",
      description:
        "Identify and improve inefficient or ineffective processes that impede productivity and increase costs. The initiative will use Lean Six Sigma methodology to eliminate waste, standardize processes, and streamline operations, resulting in improved efficiency, quality, and customer satisfaction.",
    },
  ],
  "Information Technology (IT)": [
    {
      title: "Cybersecurity Solution",
      description:
        "Developing a solution to ensure the organization's IT infrastructure and data are secure from cyber threats, by implementing comprehensive security measures and providing regular risk assessments.",
    },
    {
      title: "Cloud Migration Strategy Development",
      description:
        "Developing a strategy for migrating on-premises applications and data to the cloud to improve flexibility, scalability, and efficiency, and reduce infrastructure costs.",
    },
    {
      title: "Data Analytics Platform",
      description:
        "Developing a platform for collecting and analyzing data to generate insights and inform decision-making, by creating dashboards and reports to enable data-driven decision-making.",
    },
    {
      title: "Enterprise Resource Planning (ERP) System",
      description:
        "Implementing an integrated software solution for managing and automating key business processes across the organization, including finance, supply chain, and human resources, to improve operational efficiency and productivity.",
    },
  ],
  Sales: [
    {
      title: "Sales Enablement Program",
      description:
        "Developing and implementing a comprehensive sales enablement program that includes training, coaching, tools, and resources to help sales teams increase productivity, effectiveness, and revenue generation.",
    },
    {
      title: "Lead Generation and Management System",
      description:
        "Designing and implementing a lead generation and management system that leverages targeted marketing campaigns and sales outreach to attract, engage, and convert prospects into loyal customers.",
    },
    {
      title: "Customer Relationship Management (CRM) System",
      description:
        "Implementing a robust CRM system that enables sales teams to manage customer interactions, data, and analytics to improve customer satisfaction, retention, and revenue growth.",
    },
    {
      title: "Sales Performance Analysis and Optimization Tool",
      description:
        "Developing a data-driven sales performance analysis and optimization tool that helps sales teams identify key performance indicators, analyze sales data, and improve sales processes to increase revenue, customer satisfaction, and brand loyalty.",
    },
  ],
  "Customer Service": [
    {
      title: "Customer Service Training Program",
      description:
        "Developing and implementing a training program for customer service representatives to enhance their skills, increase customer satisfaction, and improve customer retention rates. The training includes modules on communication skills, problem-solving, conflict resolution, and product knowledge.",
    },
    {
      title: "Customer Feedback Management System",
      description:
        "Developing a system to collect and analyze customer feedback to identify areas for improvement in products, services, and support. The system includes tools for tracking customer feedback, prioritizing issues, and monitoring resolution times to ensure high customer satisfaction rates.",
    },
    {
      title: "Customer Service Chatbot",
      description:
        "Developing a chatbot for providing automated customer support and assistance through web and mobile channels. The chatbot utilizes machine learning and natural language processing to understand customer queries and provide accurate and timely responses, thereby reducing response times and increasing customer satisfaction rates.",
    },
    {
      title: "Service Level Agreement (SLA) Management System",
      description:
        "Implementing a system for tracking and managing service level agreements with customers to ensure timely and effective support. The system includes tools for setting SLA targets, monitoring performance against targets, and generating reports for performance analysis and improvement planning.",
    },
  ],
  "Research and Development (R&D)": [
    {
      title: "Product Development Initiative",
      description:
        "Identifying new product ideas and developing them into viable solutions to meet customer needs and remain competitive in the market, while balancing time-to-market and development costs.",
    },
    {
      title: "Research and Innovation Program",
      description:
        "Developing and implementing a comprehensive program for researching and exploring new technologies, innovation opportunities, and emerging trends to drive business growth and development, while fostering a culture of creativity and experimentation.",
    },
    {
      title: "Prototyping and Testing Platform",
      description:
        "Developing a robust platform for rapidly creating and testing prototypes to validate ideas and concepts, reducing time-to-market and minimizing development costs, while facilitating collaboration between design, engineering, and other teams.",
    },
    {
      title: "Collaboration and Knowledge Sharing Platform",
      description:
        "Developing an intuitive platform for promoting collaboration, communication, and knowledge sharing among R&D teams, enabling cross-functional collaboration, sharing of best practices, and idea generation to accelerate innovation and progress.",
    },
  ],
};

export const softSkills = [
  "Communication",
  "Collaboration",
  "Time Management",
  "Problem Solving",
  "Leadership",
  "Flexibility",
  "Critical Thinking",
  "Creativity",
  "Emotional Intelligence",
  "Teamwork",
  "Organization",
  "Adaptability",
  "Negotiation",
  "Conflict Resolution",
  "Active Listening",
  "Influencing",
  "Motivation",
  "Decision Making",
  "Goal Setting",
  "Positive Attitude",
  "Public Speaking",
  "Presentation Skills",
  "Customer Service",
  "Networking",
  "Effective Writing",
  "Stress Management",
  "Motivational Skills",
  "Patience",
  "Empathy",
  "Active Learning",
  "Continuous Improvement",
  "Building Relationships",
  "Effective Delegation",
  "Work Ethic",
  "Humility",
  "Tolerance",
  "Passion",
  "Professionalism",
  "Self-Awareness",
  "Humor",
];

export const jobDepartments: DepartmentsData = {
  "Human Resources (HR)": [
    {
      jobTitle: "HR Manager",
      hardSkills: [
        "HR policies and regulations",
        "Employee relations",
        "Performance management",
        "Recruitment and selection",
        "Compensation and benefits administration",
      ],
    },
    {
      jobTitle: "HR Generalist",
      hardSkills: [
        "HR administration",
        "Employee relations",
        "Performance management",
        "Recruitment and selection",
        "Compensation and benefits administration",
      ],
    },
    {
      jobTitle: "Recruiter",
      hardSkills: [
        "Sourcing and interviewing techniques",
        "Employee branding",
        "Talent acquisition and retention strategies",
        "Data analysis and reporting",
        "Employment law compliance",
      ],
    },
    {
      jobTitle: "Talent Acquisition Specialist",
      hardSkills: [
        "Sourcing and interviewing techniques",
        "Employee branding",
        "Talent acquisition and retention strategies",
        "Data analysis and reporting",
        "Employment law compliance",
      ],
    },
    {
      jobTitle: "Benefits Specialist",
      hardSkills: [
        "Benefits administration",
        "Employee benefits counseling",
        "Insurance and benefits laws and regulations",
        "Benefits plan design and analysis",
        "Data analysis and reporting",
      ],
    },
  ],
  Finance: [
    {
      jobTitle: "Financial Analyst",
      hardSkills: [
        "Financial modeling and analysis",
        "Data analysis and reporting",
        "Budgeting and forecasting",
        "Investment analysis and portfolio management",
        "Financial statements and reporting",
      ],
    },
    {
      jobTitle: "Accountant",
      hardSkills: [
        "Bookkeeping and accounting principles",
        "Financial statements preparation",
        "Tax compliance and planning",
        "Cost accounting",
        "Auditing and compliance",
      ],
    },
    {
      jobTitle: "Financial Manager",
      hardSkills: [
        "Financial analysis and decision making",
        "Budgeting and forecasting",
        "Risk management",
        "Investment analysis and portfolio management",
        "Financial statements and reporting",
      ],
    },
    {
      jobTitle: "Budget Analyst",
      hardSkills: [
        "Budgeting and forecasting",
        "Cost analysis and control",
        "Financial planning and analysis",
        "Data analysis and reporting",
        "Budget preparation and monitoring",
      ],
    },
    {
      jobTitle: "Controller",
      hardSkills: [
        "Financial statements preparation",
        "Financial analysis and reporting",
        "Internal controls and compliance",
        "Budget preparation and monitoring",
        "Auditing and compliance",
      ],
    },
  ],
  Marketing: [
    {
      jobTitle: "Marketing Manager",
      hardSkills: [
        "Marketing strategy and planning",
        "Brand management",
        "Market research and analysis",
        "Campaign planning and execution",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Brand Manager",
      hardSkills: [
        "Brand strategy and management",
        "Product positioning and messaging",
        "Marketing communications and advertising",
        "Consumer insights and market research",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Marketing Coordinator",
      hardSkills: [
        "Marketing operations and support",
        "Event planning and execution",
        "Marketing communications and advertising",
        "Data analysis and reporting",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Digital Marketing Specialist",
      hardSkills: [
        "Digital marketing strategy and planning",
        "Search engine optimization (SEO)",
        "Search engine marketing (SEM)",
        "Social media marketing",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Product Manager",
      hardSkills: [
        "Product strategy and planning",
        "Market research and analysis",
        "Product development and management",
        "Product positioning and messaging",
        "Performance tracking and reporting",
      ],
    },
  ],
  Operations: [
    {
      jobTitle: "Operations Manager",
      hardSkills: [
        "Operations strategy and planning",
        "Production planning and control",
        "Supply chain management",
        "Inventory management",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Supply Chain Manager",
      hardSkills: [
        "Supply chain strategy and planning",
        "Procurement and sourcing",
        "Inventory management",
        "Logistics and transportation management",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Production Manager",
      hardSkills: [
        "Production planning and control",
        "Quality control and assurance",
        "Equipment maintenance and management",
        "Process improvement and optimization",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Logistics Manager",
      hardSkills: [
        "Logistics and transportation strategy and planning",
        "Inventory management",
        "Warehouse management",
        "Freight and shipping management",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Quality Control Manager",
      hardSkills: [
        "Quality control and assurance strategy and planning",
        "Quality management systems",
        "Inspection and testing techniques",
        "Quality data analysis and reporting",
        "Performance tracking and reporting",
      ],
    },
  ],
  "Information Technology (IT)": [
    {
      jobTitle: "IT Manager",
      hardSkills: [
        "IT strategy and planning",
        "Project management",
        "Network and system administration",
        "Software development",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Network Administrator",
      hardSkills: [
        "Network design and implementation",
        "Network security and firewall management",
        "Router and switch configuration",
        "Remote access and VPN setup",
        "Performance monitoring and reporting",
      ],
    },
    {
      jobTitle: "Systems Analyst",
      hardSkills: [
        "Systems analysis and design",
        "Software development and programming",
        "Data analysis and reporting",
        "Systems testing and debugging",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Database Administrator",
      hardSkills: [
        "Database design and implementation",
        "SQL programming and database management",
        "Data backup and recovery",
        "Performance tuning and optimization",
        "Performance monitoring and reporting",
      ],
    },
    {
      jobTitle: "Software Developer",
      hardSkills: [
        "Software design and development",
        "Software testing and debugging",
        "Data analysis and reporting",
        "Performance tracking and reporting",
        "JavaScript",
        "Python",
        "R",
        "C#",
        "C/C++",
        "Ruby",
        "Kotlin",
        "React",
        "Typescript",
      ],
    },
  ],
  Sales: [
    {
      jobTitle: "Sales Manager",
      hardSkills: [
        "Sales strategy and planning",
        "Account management and development",
        "Sales team leadership and coaching",
        "Performance tracking and reporting",
        "Business development and relationship building",
      ],
    },
    {
      jobTitle: "Account Manager",
      hardSkills: [
        "Account management and development",
        "Relationship building and customer service",
        "Sales forecasting and quota attainment",
        "Performance tracking and reporting",
        "Product and service knowledge",
      ],
    },
    {
      jobTitle: "Sales Representative",
      hardSkills: [
        "Product and service knowledge",
        "Lead generation and qualification",
        "Sales presentations and demonstrations",
        "Negotiation and closing",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Business Development Manager",
      hardSkills: [
        "Business development and relationship building",
        "Market research and analysis",
        "Lead generation and qualification",
        "Sales forecasting and quota attainment",
        "Performance tracking and reporting",
      ],
    },
    {
      jobTitle: "Territory Sales Manager",
      hardSkills: [
        "Territory management and sales planning",
        "Account management and development",
        "Sales forecasting and quota attainment",
        "Performance tracking and reporting",
        "Business development and relationship building",
      ],
    },
  ],
  "Customer Service": [
    {
      jobTitle: "Customer Service Manager",
      hardSkills: [
        "Customer service strategy and planning",
        "Team leadership and coaching",
        "Problem solving and escalation management",
        "Performance tracking and reporting",
        "Relationship building and customer retention",
      ],
    },
    {
      jobTitle: "Customer Service Representative",
      hardSkills: [
        "Product and service knowledge",
        "Customer service and support",
        "Problem solving and escalation management",
        "Performance tracking and reporting",
        "Relationship building and customer retention",
      ],
    },
    {
      jobTitle: "Technical Support Specialist",
      hardSkills: [
        "Product and service knowledge",
        "Technical support and troubleshooting",
        "Problem solving and escalation management",
        "Performance tracking and reporting",
        "Relationship building and customer retention",
      ],
    },
    {
      jobTitle: "Call Center Manager",
      hardSkills: [
        "Call center operations and management",
        "Team leadership and coaching",
        "Performance tracking and reporting",
        "Problem solving and escalation management",
        "Relationship building and customer retention",
      ],
    },
    {
      jobTitle: "Help Desk Specialist",
      hardSkills: [
        "Product and service knowledge",
        "Technical support and troubleshooting",
        "Performance tracking and reporting",
        "Problem solving and escalation management",
        "Relationship building and customer retention",
      ],
    },
  ],
  "Research and Development (R&D)": [
    {
      jobTitle: "R&D Manager",
      hardSkills: [
        "Research and development strategy and planning",
        "Team leadership and coaching",
        "Budget management and resource allocation",
        "Performance tracking and reporting",
        "Collaboration and partnerships",
      ],
    },
    {
      jobTitle: "Research Scientist",
      hardSkills: [
        "Research design and execution",
        "Data analysis and interpretation",
        "Product and process development",
        "Performance tracking and reporting",
        "Collaboration and partnerships",
      ],
    },
    {
      jobTitle: "Product Development Engineer",
      hardSkills: [
        "Product design and development",
        "Engineering and technical skills",
        "Performance tracking and reporting",
        "Problem solving and root cause analysis",
        "Collaboration and partnerships",
      ],
    },
    {
      jobTitle: "Process Development Engineer",
      hardSkills: [
        "Process design and development",
        "Engineering and technical skills",
        "Performance tracking and reporting",
        "Problem solving and root cause analysis",
        "Collaboration and partnerships",
      ],
    },
    {
      jobTitle: "R&D Technician",
      hardSkills: [
        "Technical skills and laboratory techniques",
        "Data collection and analysis",
        "Performance tracking and reporting",
        "Collaboration and partnerships",
        "Problem solving and root cause analysis",
      ],
    },
  ],
};

export const departments = Object.keys(jobDepartments);
export const allJobs = departments
  .map((department) => jobDepartments[department].map((job) => job.jobTitle))
  .flat(1);
export const allDepartmentsAndJobs = departments.map((department) =>
  jobDepartments[department].map((job) => `${department}-${job.jobTitle}`)
);
export const allHardSkills = departments
  .map((department) => jobDepartments[department].map((job) => job.hardSkills))
  .flat(2);

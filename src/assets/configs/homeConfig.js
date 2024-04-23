import React from 'react';
import { AiOutlineCode } from "react-icons/ai";
import { FaFileAlt,FaGraduationCap } from 'react-icons/fa';
import myPhoto from '../images/myImage.jpg';

const homeConfig = {
    greeting: <h1 className="heading">Hi! I'm <strong className="main-name">Arnav Goel,</strong></h1>,
    titles: [
        "A Data Science Graduate",
        "A Python, R, SQL Expert",
        "An Aspiring Data Scientist & Data Analyst"
    ],
    about: {
        start: "With a Master's degree in Data Science from Drexel University and extensive experience in software engineering and data science projects, " +
               "I am passionate about turning data into actionable insights and building data-driven solutions.",
        exit: "Fluent in Python, R, SQL, and familiar with modern data science tools and platforms, " +
              "I aim to leverage machine learning and analytics to solve complex problems."
    },
    resume: {
        icon: <FaFileAlt size={50} />,
        text: "Resume",
        link: "https://drive.google.com/file/d/1egrlRm4tBPGxGkEnrxWGFke61LNOf_kJ/view?usp=sharing"
    },
    photo: myPhoto, 
    workTimeline: [
        {
            id: "work-5",
            title: "Drexel University",
            company: "Master of Science in Data Science - CGPA 3.86",
            description: [
                "Specialized in machine learning, big data analytics, and statistical methods.",
                "Completed courses on Applied ML for Data Science, Applied Cloud Computing, Database Management Systems, Deep Learning, NLP with Deep Learning."
              ],
          
            date: "September 2022 - March 2024",
            icon: <FaGraduationCap/>,
            tags: ["Machine Learning", "Big Data", "Cloud Computing", "Deep Learning", "NLP", "SQL"]
        },
        {
            id: "work-4",
            title: "Thapar Institute of Engineering and Technology",
            company: "Master of Business Administration in Finance - CGPA 3.3",
            description: [
                "Gained a strong foundation in financial management, business intelligence, and big data management.",
                "Engaged in coursework including Business Intelligence, Applied Business Research, Big Data Management, Health Informatics For Managers, Advance Excel And VBA For Managers."
              ],
            date: "August 2020 - September 2021",
            icon: <FaGraduationCap/>,
            tags: ["Advanced Excel", "Business Intelligence", "Financial Management", "Big Data", "Health Informatics"]
        },
        {
            id: "work-3",
            title: "Thapar Institute of Engineering and Technology",
            company: "Bachelor of Science in Computer Engineering - CGPA 3",
            description: [
                "Focused on software engineering principles, artificial intelligence, and cloud computing.",
                "Relevant coursework included Numerical Analysis, AI, Cloud Computing, Deep Learning."
              ],
            date: "August 2016 - June 2020",
            icon: <FaGraduationCap/>,
            tags: ["Software Engineering", "SQL", "AI", "Cloud Computing", "Deep Learning"]
        },
        {
            id: "work-2",
            title: "Oops InfoSolutions",
            company: "Data Science Engineer",
            description: [
                "Built Tableau dashboard to visualize core business KPIs, saving 10 hours per week of manual reporting work.",
                "Aggregated unstructured data from 20+ sources to build the foundation of a new product; led to $10,000 in new revenue.",
                "Designed the data pipeline architecture in a team of 5 for a new product that scaled from 0 to 12,000 daily active users."
            ],
            date: "September 2021 - August 2022",
            icon: <AiOutlineCode/>,
            tags: ["Data Science", "Machine Learning", "Data Analytics", "Data Visualization"]
        },
        {
            id: "work-1",
            title: "Oops InfoSolutions",
            company: "Intern Data Engineer",
            description: [
                "Engineered and optimized ETL processes for three key projects, enhancing data integration and workflow efficiency by 15%.",
                "Streamlined big data handling and query performance, reducing latency by 10% and improving scalability and throughput of data operations.",
                "Implemented robust data validation and automated testing frameworks, decreasing data errors by 30% and ensuring data integrity and accuracy for analytical processing."
            ],
            date: "January 2020 - June 2020",
            icon: <AiOutlineCode/>,
            tags: ["Data Engineer", "ETL", "SQL", "Database Management"]
        }
    ]
}

export default homeConfig;

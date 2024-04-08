import React from 'react';
import { AiOutlineCode } from "react-icons/ai";
import { MdWork } from "react-icons/md";
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
        link: "https://drive.google.com/file/d/1uy1n9jS8ZkqEAsaJE41xOw8mZXNcE5NC/view?usp=sharing"
    },
    photo: myPhoto, 
    workTimeline: [
        {
            id: "work-5",
            title: "Master of Science in Data Science",
            company: "Drexel University - CGPA 3.86",
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
            title: "Master of Business Administration in Finance",
            company: "Thapar Institute of Engineering and Technology - CGPA 3.3",
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
            title: "Bachelor of Science in Computer Engineering",
            company: "Thapar Institute of Engineering and Technology - CGPA 3",
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
            title: "Software Engineer",
            company: "Infosys",
            description: [
                "Guided a team of 5 to enhance application performance, achieving a 20% system efficiency increase.",
                "Led to project cost savings of ₹1.5 Crore ($180,000 USD) annually.",
                "Implemented robust data validation processes, reducing data errors by 25%.",
                "Enhanced security protocols and optimized system performance through predictive modeling.",
                "Increased data processing speed by 40% with Tableau.",
                "Integrated machine learning for better predictive analytics, boosting client revenue by ₹2.5 Crore($300,000 USD)."
            ],
            date: "September 2021 - August 2022",
            icon: <MdWork/>,
            tags: ["Python", "SQL", "Tableau", "Machine Learning"]
        },
        {
            id: "work-1",
            title: "Intern Software Engineer",
            company: "Oops InfoSolutions",
            description: [
                "Developed 3 Android mobile applications with enhanced UI designs.",
                "Accelerated development cycles by 15% and improved user engagement by 20%.",
                "Streamlined code optimization processes, reducing application memory usage by 10%.",
                "Increased operational speed by 15%, and implemented automated unit tests.",
                "Reduced bug rates by 30% and enhanced application reliability."
            ],
            date: "January 2020 - June 2020",
            icon: <AiOutlineCode/>,
            tags: ["Android", "UI/UX Design", "Code Optimization", "Automated Testing"]
        }
    ]
}

export default homeConfig;

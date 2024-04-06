import React from 'react';
import { AiOutlineCode } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaFileAlt } from 'react-icons/fa';
import myPhoto from '../images/myImage.jpg'; // Make sure to import your photo or provide a direct URL

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
    photo: myPhoto, // Path to your photo or a direct URL
    workTimeline: [
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

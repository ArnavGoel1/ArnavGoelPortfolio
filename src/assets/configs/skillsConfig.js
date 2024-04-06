import {
    SiPython,
    SiR,
    SiTableau,
    SiCplusplus,
    SiMicrosoftexcel,
    SiMicrosoftword,
    SiMicrosoftpowerpoint,
    SiMicrosoftvisio,
    SiGooglebigquery,
    SiGooglecloud,
    SiPowerbi
} from "react-icons/si";
import {
    GrMysql,
    GrHadoop
} from "react-icons/gr";
import {
    FaGitAlt,
    FaBrain
} from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";
import { GiRadarSweep } from "react-icons/gi";
import { BiSearchAlt } from "react-icons/bi";
import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiR size={50}/>,
            text: "R"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "Tableau"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiMicrosoftexcel size={50}/>,
            text: "Excel"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiCplusplus size={50}/>,
            text: "C++"
        }
    ],
    complementarySkills: [
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <FaBrain size={50}/>,
            text: " Deep Learning"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <MdChat size={50}/>,
            text: "NLP"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <AiOutlineBarChart size={50}/>,
            text: "Business Analytics"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <BiSearchAlt size={50}/>,
            text: "Data Exploration"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <GiRadarSweep size={50}/>,
            text: "Visualization"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiMicrosoftword size={50}/>,
            text: "Word"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiMicrosoftpowerpoint size={50}/>,
            text: "Power Point"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiMicrosoftvisio size={50}/>,
            text: "Visio"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <GrHadoop size={50}/>,
            text: "MongoDB"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <SiGooglecloud size={50}/>,
            text: "Google Cloud Platform"
        },
        {
            id: "skills-18",
            className: "skill-icon",
            icon: <SiGooglebigquery size={50}/>,
            text: "BigQuery"
        }
    ]
}

export default skillsConfig

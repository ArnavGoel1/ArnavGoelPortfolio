import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import portfolio from "../images/download.jpeg"
import healt from "../images/download_2.webp"
import airbnb from "../images/airbnb.png"
import lean from "../images/Six.png"
import gog from "../images/google.png"
import ibm from "../images/ibm.png"
import hac from "../images/hac.png"
import React from 'react'


const projectConfig = [
    {
        id: "project-5",
        title: "Custom Deep Learning network",
        links: [
            {
                name: "repo",
                url: "https://github.com/ArnavGoel1/DeepLearning",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/ArnavGoel1/DeepLearning/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "docs",
                url: "https://github.com/ArnavGoel1/DeepLearning/blob/main/Paper.pdf",
                icon: <ImBook/>,
            }
        ],
        image: sklearnGenetic,
        description: "Predictive Analytics of Boston Housing data using deep learning without using any ML libraries.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "SpaceX Rocket Launch Success Prediction",
        links: [
            {
                name: "repo",
                url: "https://github.com/ArnavGoel1/SpaceX",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/ArnavGoel1/SpaceX/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "docs",
                url: "https://github.com/ArnavGoel1/SpaceX/blob/main/SpaceX.pdf",
                icon: <ImBook/>,
            }
        ],
        image: graphEmbeddings,
        description: "Implemented machine learning models to predict rocket launch success, achieving 83.3% accuracy.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Video Games Sales Analysis",
        links: [
            {
                name: "repo",
                url: "https://github.com/ArnavGoel1/VideoGamesSalesAnalysis",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/ArnavGoel1/VideoGamesSalesAnalysis/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "docs",
                url: "https://github.com/ArnavGoel1/VideoGamesSalesAnalysis/blob/main/README.md",
                icon: <ImBook/>,
            }
            
        ],
        image: portfolio,
        description: "Project for Video Games Sales Analysis using python and machine learning.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Annthyroid Prediction",
        links: [
            {
                name: "repo",
                url: "https://github.com/ArnavGoel1/AnnthyroidPrediction",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/ArnavGoel1/AnnthyroidPrediction/fork",
                icon: <BiGitRepoForked/>
            }
        ],
        image: healt,
        description: "Project for Annthyroid Prediction using python and machine learning.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Airbnb Price Prediction",
        links: [
            {
                name: "repo",
                url: "https://github.com/ArnavGoel1/AirbnbPricePrediction",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/ArnavGoel1/AirbnbPricePrediction/fork",
                icon: <BiGitRepoForked/>
            },
            
        ],
        image: airbnb,
        description: "Project for Airbnb Price Prediction using python and machine learning.",
        target: "_blank"
    },
    {
        id: "project-6",
        title: "IBM Data Science Certificate",
        links: [
            {
                name: "link",
                url: "https://drive.google.com/file/d/1Ys5iYNKEwAYmYJWvzQ2MS1K0imc8nBAM/view?usp=sharing",
                icon: <ImBook/>,
            }
        ],
        image: ibm,
        description: "IBM Data Science Certificate",
        target: "_blank"
    },
    {
        id: "project-8",
        title: "Google Data Analytics Professional Certificate",
        links: [
            {
                name: "link",
                url: "https://drive.google.com/file/d/1D_onaIR_Px2dMmOYwtvrieDS8cqvoPD0/view?usp=sharing",
                icon: <ImBook/>,
            }
        ],
        image: gog,
        description: "Google Data Analytics Professional Certificate",
        target: "_blank"
    },
    {
        id: "project-7",
        title: "Lean Six-Sigma Foundation",
        links: [
            {
                name: "link",
                url: "https://drive.google.com/file/d/1KoYGgpN5zyKPnDNwVQIe2gQME3bs1CEY/view?usp=sharing",
                icon: <ImBook/>,
            }
        ],
        image: lean,
        description: "Lean Six-Sigma Foundation",
        target: "_blank"
    },
    {
        id: "project-9",
        title: "Hackerrank SQL(Advance) Certification",
        links: [
            {
                name: "link",
                url: "https://www.hackerrank.com/certificates/055b469211f0",
                icon: <ImBook/>,
            }
        ],
        image: hac,
        description: "Hackerrank SQL(Advance) Certification",
        target: "_blank"
    }
]

export default projectConfig
import React, { useState } from "react";
import "./styles.css";
import NavigitLogo from "../../assets/images/navigit-logo.png";
import GithubLogo from "../../assets/images/github.png";
import VideoIcon from "../../assets/images/video-icon.png";
import SiteIcon from "../../assets/images/net-icon.png";

const ProjectCard = ({
    className,
    color,
    name,
    text,
    github,
    image,
    demo,
    site,
}) => {
    return (
        <div className={`project-card-container ${className}`}>
            <h2 className="title">{name}</h2>
            <p className="caption">{text}</p>
            <div className="icons-container">
                {github && (
                    <img
                        src={GithubLogo}
                        alt=""
                        className="github"
                        onClick={() => github && window.open(github, "_blank")}
                    ></img>
                )}
                {demo && (
                    <img
                        src={VideoIcon}
                        alt=""
                        className="github"
                        onClick={() => demo && window.open(demo, "_blank")}
                    ></img>
                )}
                {site && (
                    <img
                        src={SiteIcon}
                        alt=""
                        className="github"
                        onClick={() => site && window.open(site, "_blank")}
                    ></img>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;

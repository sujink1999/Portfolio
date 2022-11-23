import "./styles.css";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DiverRightSwim from "../../assets/svgs/DiverRightSwim";
import { InvertedCrab } from "../../assets/svgs/InvertedCrab";
import BannerBottom from "../../assets/svgs/BannerBottom";
import Comment from "../Comment/Comment";
import { useWindowSize } from "react-use";

const Section4 = () => {
    const containerRef = useRef();
    const [pipeIndex, setPipeIndex] = useState(0);
    const { width } = useWindowSize();

    const companies = ["FUTURYZE", "MUDREX", "SWIXDAO", "GOGO"];

    const content = [
        {
            from: "May 2020",
            to: "Dec 2020",
            role: "SDE intern",
            at: {
                name: "Futuryze Digital",
                link: "https://www.linkedin.com/company/futuryze-digital/",
            },
            work: [
                "Built a backend service using Nodejs and UI using ReactJs for the app Fireside.",
                "Developed front-end for an online shopping app for iOS and Android using flutter from scratch. Published on Playstore.",
            ],
        },
        {
            from: "Aug 2021",
            to: "May 2022",
            role: "Software Engineer",
            at: {
                name: "Mudrex (YC - 19)",
                link: "https://mudrex.com/",
            },
            work: [
                "Built the Mudrex mobile app using React Native from the ground up. Implemented events tracking, real-time listeners, beautiful charts, and animation and shipped v1 in a concise period. Published on Playstore and Appstore",
                "Played a major role in building the company from Pre-seed to Series A",
            ],
        },
        {
            from: "Feb 2022",
            to: "May 2022",
            role: "Full Stack Developer (Part time)",
            at: {
                name: "SwixDAO",
                link: "https://www.swixdao.com/",
            },
            work: [
                "Built the MVP of the first crypto-native Airbnb using ReactJs, NodeJs, and Web3Js",
                "Worked on synchronization of property data on-chain and off-chain",
            ],
        },
        {
            from: "May 2022",
            to: "Present",
            role: "Web3 Frontend Engineer",
            at: {
                name: "GOGOcoin",
                link: "https://www.gogocoin.io/",
            },
            at2: {
                name: "0vix",
                link: "https://www.0vix.com/",
            },
            work: [
                "Built and lead the development of GOGOcoin (On-chain Asset Manager) and 0vix (Next Gen Money Market) protocols frontend including UI/UX design",
                "Helped to grow the TVL from 500k to 10M USD by introducing pre-mining rewards",
            ],
        },
    ];

    useEffect(() => {
        if (width < 600) return;

        let ctx = gsap.context(() => {
            let t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".four",
                    pinSpacing: false,
                    start: "-=250 top",
                    // end: "top top",
                    // scrub: 1,
                },
            });
            t1.from(".diver", {
                xPercent: -100,
                duration: 0.4,
            })
                .from(".pipe-container", {
                    xPercent: -100,
                    duration: 0.6,
                })
                .from(".crab", {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.1,
                })
                .from(".banner", {
                    opacity: 0,
                    yPercent: 100,
                    duration: 0.3,
                })

                .from(".four-comment", {
                    opacity: 0,
                    scale: 0.7,
                    duration: 0.1,
                });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const {
        from,
        to,
        role,
        at: { name: companyName, link },
        at2,
        work,
    } = content[pipeIndex];

    const { name: companyName2, link: link2 } = at2 || {};
    return (
        <div ref={containerRef}>
            <section className="four">
                <div className="diver-container float-anim">
                    <DiverRightSwim height={120} className="diver" />
                    <Comment
                        text="My Journey"
                        className="topLeft four-comment"
                    ></Comment>
                </div>
                <div className="pipe-container">
                    <Pipe style={{ flex: 1, padding: 0 }} />
                    <PipeConnector />

                    <div className="exp-pipe-container">
                        {companies.map((name, index) => {
                            const isLast = index === companies.length - 1;
                            return (
                                <>
                                    <Pipe
                                        isSelected={index === pipeIndex}
                                        key={2 * index}
                                        text={name}
                                        onClick={() => setPipeIndex(index)}
                                    />
                                    {isLast || (
                                        <PipeConnector key={2 * index + 1} />
                                    )}
                                </>
                            );
                        })}
                    </div>
                    <PipeConnector />

                    <Pipe style={{ flex: 1, padding: 0 }} />
                </div>
                <div className="banner-with-crab">
                    <InvertedCrab className="crab" />

                    <div className="banner">
                        <div className="banner-top"></div>
                        <div className="banner-sheet">
                            <div className="banner-sheet-content">
                                <h2 className="job-title">
                                    {role}{" "}
                                    <span
                                        className="company-name"
                                        onClick={() =>
                                            window.open(link, "_blank")
                                        }
                                    >
                                        @{companyName}
                                    </span>
                                    {companyName2 && (
                                        <span
                                            className="company-name2"
                                            onClick={() =>
                                                window.open(link2, "_blank")
                                            }
                                        >
                                            @{companyName2}
                                        </span>
                                    )}
                                </h2>
                                <div className="banner-content">
                                    <Stepper from={from} to={to} />
                                    <div className="banner-desc">
                                        {work.map((p, index) => {
                                            return (
                                                <p
                                                    key={index}
                                                    className="banner-text"
                                                >
                                                    {p}
                                                </p>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <BannerBottom width={"100%"} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const Pipe = ({ text, onClick, isSelected, style }) => {
    return (
        <div
            onClick={onClick}
            style={style}
            className={`pipe ${isSelected ? "pipe-selected" : ""}`}
        >
            {text}
        </div>
    );
};

const PipeConnector = () => {
    return (
        <div className="pipe-connector">
            <div className="pipe-bolt" />
            <div className="pipe-bolt" />
            <div className="pipe-bolt" />
        </div>
    );
};

const Stepper = ({ from, to }) => {
    return (
        <div className="stepper-container">
            <p className="stepper-text">{from}</p>
            <div className="stepper-point" />
            <div className="stepper-line" />
            <div className="stepper-point" />
            <p className="stepper-text">{to}</p>
        </div>
    );
};

export default Section4;

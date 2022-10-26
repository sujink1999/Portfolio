import "./styles.css";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Comment from "../Comment/Comment";
import DiverOnTop from "../../assets/svgs/DiverOnTop";
import JellyFish from "../../assets/svgs/JellyFish";

const Section2 = () => {
    const containerRef = useRef();
    const technologies = [
        {
            name: "NodeJs",
            image: "nodejs",
        },
        {
            name: "ReactJs",
            image: "reactjs",
        },
        {
            name: "JavaScript",
            image: "javascript",
        },
        {
            name: "Figma",
            image: "figma",
        },
        {
            name: "Typescript",
            image: "typescript",
        },
        {
            name: "NextJs",
            image: "nextjs",
        },
        {
            name: "MongoDB",
            image: "mongodb",
        },

        {
            name: "Flutter",
            image: "flutter",
        },

        {
            name: "HTML",
            image: "html",
        },
        {
            name: "CSS",
            image: "css",
        },
        {
            name: "MySQL",
            image: "mysql",
        },
        {
            name: "ExpressJs",
            image: "expressjs",
        },
    ];

    const tentacleHeight = [100, 70, 90, 65, 100, 80, 95];

    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let ctx = gsap.context(() => {
            let t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".two",
                    toggleActions: "play pause resume reverse",
                    // pin: true,
                    start: "-=150 top",
                    // end: "+=250",
                    // scrub: 3,
                },
            });
            t1.from(".jelly-anim", {
                scale: 0.5,
                opacity: 0,
                duration: 0.05,
                stagger: 0.05,
            })
                .from(".squid-container", {
                    scale: 0.5,
                    opacity: 0,
                    duration: 0.4,
                })
                .from(".diver-on-squid", {
                    opacity: 0,
                    yPercent: 100,
                    duration: 0.2,
                })
                .from(".two-comment", {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.1,
                });
        }, containerRef);

        return () => ctx.revert();
    }, []);
    return (
        <div ref={containerRef}>
            <section class="two">
                <div className="diver-on-squid-container">
                    <Comment
                        text="About me!"
                        className="bottomRight two-comment"
                    />
                    <DiverOnTop className="diver-on-squid " width={100} />
                </div>
                <div className="squid-container ">
                    <div className="head">
                        <span
                            style={{
                                paddingInline: 10,
                            }}
                        >
                            Hey! My name is Sujin. I am a designer and
                            full-stack developer in the web3 space who enjoys
                            building things that matter.
                        </span>
                        <br />
                        <br />
                        My interest in software development started way back in
                        2016 when I built an android app to keep track of my
                        expenses. Fast Forward to today, I've been part of many
                        hackathons building multiple projects (won 8/14), been
                        featured in{" "}
                        <a
                            className="hindu-link"
                            href="https://www.thehindu.com/sci-tech/technology/thinking-in-java/article30494245.ece"
                            target="_blank"
                            rel="noreferrer"
                        >
                            The Hindu
                        </a>{" "}
                        newspaper, contributed to 5 open source projects and
                        web3 protocols, and worked in 3 startups.
                    </div>
                    <div className="base">
                        {displayText || "Tech Stack I've worked with"}
                    </div>
                    <div className="tentacles-container ">
                        {technologies.map(({ name, image }, index) => (
                            <Tentacle
                                key={name}
                                onMouseEnter={() => setDisplayText(name)}
                                onMouseLeave={() => setDisplayText("")}
                                heightPercent={tentacleHeight[index % 7]}
                                name={name}
                                image={image}
                            />
                        ))}
                    </div>
                </div>
                <FloatingJellyFish
                    width={80}
                    className="jelly-anim jelly-fish-1"
                />

                <FloatingJellyFish
                    width={150}
                    className="jelly-anim jelly-fish-2"
                />
                <FloatingJellyFish
                    width={120}
                    className="jelly-anim jelly-fish-3"
                />
                <FloatingJellyFish
                    width={90}
                    className="jelly-anim jelly-fish-4"
                />
                <FloatingJellyFish
                    width={100}
                    className="jelly-anim jelly-fish-5"
                />
                <FloatingJellyFish
                    width={120}
                    className="jelly-anim jelly-fish-6"
                />
                <FloatingJellyFish
                    width={130}
                    className="jelly-anim jelly-fish-7"
                />
                <FloatingJellyFish
                    width={100}
                    className="jelly-anim jelly-fish-8"
                />
                <FloatingJellyFish
                    width={80}
                    className="jelly-anim jelly-fish-9"
                />
                <FloatingJellyFish
                    width={80}
                    className="jelly-anim jelly-fish-10"
                />
            </section>
        </div>
    );
};

const FloatingJellyFish = ({ width, className }) => {
    return (
        <div className={className}>
            <JellyFish width={width} className="float-anim" />
        </div>
    );
};

const Tentacle = ({ heightPercent, onMouseEnter, onMouseLeave, image }) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="tentacle half"
            style={{
                height: `${heightPercent}%`,
            }}
        >
            <div className="tentacle-icon">
                <img
                    alt=""
                    src={require(`../../assets/stack-icons/${image}.png`)}
                    className="tentacle-img"
                ></img>
            </div>
        </div>
    );
};

export default Section2;

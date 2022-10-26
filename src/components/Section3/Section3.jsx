import "./styles.css";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { DiverLookdown } from "../../assets/svgs/DiverLookdown";
import Comment from "../Comment/Comment";
import ProjectCard from "../ProjectCard/ProjectCard";

const Section3 = () => {
    const headRef = useRef();
    const boxCenter = useRef(null);
    const containerRef = useRef();

    useEffect(() => {
        let boxBoundingRect = headRef.current?.getBoundingClientRect?.();
        if (!boxBoundingRect) return;
        let center = {
            x: boxBoundingRect.left + boxBoundingRect.width / 2,
            y:
                boxBoundingRect.top +
                window.pageYOffset +
                boxBoundingRect.height / 2,
        };
        boxCenter.current = center;
    }, []);

    useEffect(() => {
        const onMouseMove = (e) => {
            if (!boxCenter) return;

            let angle =
                Math.atan2(
                    e.pageX - boxCenter.current.x,
                    -(e.pageY - boxCenter.current.y)
                ) *
                (180 / Math.PI);
            if (Math.abs(angle) > 89 && Math.abs(angle) < 181) {
                headRef.current.style.transform = `rotate(${angle - 180}deg)`;
            }
        };

        document.addEventListener("mousemove", onMouseMove);

        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    useEffect(() => {
        const onScroll = (e) => {
            let boxBoundingRect = headRef?.current?.getBoundingClientRect?.();
            if (!boxBoundingRect) return;
            let center = {
                x: boxBoundingRect.left + boxBoundingRect.width / 2,
                y:
                    boxBoundingRect.top +
                    window.pageYOffset +
                    boxBoundingRect.height / 2,
            };
            boxCenter.current = center;
        };
        document.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            let t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".three",
                    pinSpacing: false,

                    start: "-=200 top",
                    // end: "top top",
                    // scrub: 1,
                },
            });
            t1.from(".diver-lookdown", {
                opacity: 0,
                scale: 0.7,
                duration: 0.2,
            })
                .from(".project-card-container", {
                    opacity: 0,
                    scale: 0,
                    duration: 0.2,
                    stagger: 0.1,
                })
                .from(".three-comment", {
                    opacity: 0,
                    scale: 0.7,
                    duration: 0.1,
                });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef}>
            <section className="three">
                <div className="float-anim">
                    <DiverLookdown
                        headRef={headRef}
                        className="diver-lookdown"
                    />
                </div>
                <Comment
                    className="topLeft three-comment"
                    text="Things I've worked on"
                ></Comment>
                <div className="projects-container hide-scrollbar">
                    <div className="project-one float-updown no-cursor-anim">
                        <ProjectCard
                            name="Navigit"
                            text="Navigate around git without leaving your keyboard! Access repos, PR's and much more!"
                            color="#1c1a39"
                            github="https://github.com/sujink1999/NaviGit"
                            image="navigit-logo"
                            demo="https://www.youtube.com/watch?v=apYjledDU8k&feature=youtu.be"
                        />
                    </div>
                    <div className="project-two float-updown no-cursor-anim">
                        <ProjectCard
                            name="Indoor Nav AR"
                            text="Explore your way through Augmented Reality ⬅️⬆️➡️"
                            github="https://github.com/sujink1999/Indoor-Navigation-AR"
                            color="#7093E2"
                            iconText="AR"
                            demo="https://www.youtube.com/watch?v=9Xt6EeUvqns"
                        />
                    </div>
                    <div className="project-three float-updown no-cursor-anim">
                        <ProjectCard
                            name="SSNCE"
                            text="The official app of SSN College of Engineering, which helps you with GPA calculation, bus
                        route info, and timely updates on feeds, events, workshops, clubs, and placements."
                            github="https://github.com/ssn-developers/ssn-app"
                            color="#FFFFFF"
                            image="ssnce-logo"
                        />
                    </div>
                    <div className="project-four float-updown no-cursor-anim">
                        <ProjectCard
                            name="PhantomDAO"
                            text="Web3 Accelerator Protocol. Olympus’ partner in the Fantom ecosystem."
                            github="https://github.com/Phantom-DAO/phantom-frontend"
                            site="https://phantomdao.xyz/"
                        />
                    </div>
                    <div className="project-five float-updown no-cursor-anim">
                        <ProjectCard
                            name="Cryptofolio"
                            text="Portfolio tracker for your crypto assets with realtime price updates"
                            github="https://github.com/sujink1999/Cryptofolio"
                            site="https://cryptofolio.surge.sh/#/"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Section3;

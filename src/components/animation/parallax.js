import { useEffect } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Parallax = () => {
    const location = useLocation();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = document.querySelectorAll(".parallax");
        const innerHeight = window.innerHeight;

        sections.forEach((section) => {
            const bg = section.querySelector(".parallax-bg");
            const parallaxSpeed = section.getAttribute("data-parallax");

            if (bg) {
                bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`;

                gsap.to(bg, {
                    backgroundPosition: parallaxSpeed
                        ? `50% ${innerHeight / parallaxSpeed}px`
                        : `50% ${innerHeight / 2}px`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                        invalidateOnRefresh: true, // to make it responsive
                    },
                });
            }
        });

        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [location.pathname]);

    return null; // or return the JSX for the component
};

export const ParallaxImg = () => {
    const location = useLocation();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const parallaxImgs = document.querySelectorAll(".parallax-img");

        parallaxImgs.forEach((item) => {
            const img = item.querySelector(".global-image img");
            const parallaxSpeed = item.getAttribute("data-parallax");

            if (img) {
                gsap.to(img, {
                    yPercent: parallaxSpeed ? parallaxSpeed : 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: item,
                        scrub: true,
                    },
                });
            }
        });
    }, [location.pathname]);

    return null; // or return the JSX for the component
};

export const ParallaxItem = () => {
    const location = useLocation();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const parallaxItems = document.querySelectorAll(".parallax-item");

        parallaxItems.forEach((item) => {
            const parallaxSpeed = item.getAttribute("data-speed");

            gsap.to(item, {
                y: parallaxSpeed ? parallaxSpeed : 50,
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    scrub: true,
                },
            });
        });
    }, [location.pathname]);

    return null; // or return the JSX for the component
};

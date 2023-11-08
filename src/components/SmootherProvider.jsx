import React, {useLayoutEffect, useState,useEffect} from 'react';
import SmootherContext from './SmootherContext';
import {CSSPlugin, gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {useLocation} from "react-router-dom";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText,CSSPlugin);

const SmootherProvider = ({children}) => {

    const location = useLocation();
    const [state, setState] = useState('');
    const useIsomorphicLayoutEffect = typeof window !== "undefined"
        ? useLayoutEffect
        : useEffect;

    useIsomorphicLayoutEffect(() => {
        return () => {

            const box = document.querySelectorAll('.box');
            const boxplus = document.querySelectorAll('.boxr');
            const cta = document.querySelectorAll('.cta');
            let reveal = gsap.utils.toArray(".reveal");


            let smoother = gsap.context(() => {
                ScrollSmoother.create({
                    smooth: ScrollTrigger.isTouch === 1 ? false : 2, // how long (in seconds) it takes to "catch up" to the native scroll position
                    effects: ScrollTrigger.isTouch === 1 ? false : true, // looks for data-speed and data-lag attributes on elements
                    // speed: 2,
                    // normalizeScroll: true,
                    preventDefault: true,

                });
            });

            // setState(smoother)

            reveal.forEach((cont) => {
                let img = cont.querySelector("img");
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: cont,
                        toggleActions: "restart none none reset",
                    },
                });
                // parallax
                // if () {
                gsap.to(img, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: cont,
                        // markers: true,
                        scrub: true,
                    }
                });
                // }

                // image reveal
                tl.fromTo(
                    cont,
                    1.5,
                    {
                        xPercent: -100,
                        ease: "Expo.easeInOut",
                    },
                    {
                        xPercent: 0,
                        ease: "Expo.easeInOut",
                    }
                );

                tl.fromTo(
                    img,
                    1.5,
                    {
                        xPercent: 100,
                        ease: "Expo.easeInOut",
                        scale: 1.1,
                    },
                    {
                        delay: -1.5,
                        xPercent: 0,
                        scale: 1,
                        ease: "Expo.easeInOut",
                    }
                );
            });




            gsap.utils.toArray('.split-up').forEach((item, i) => {
                const parentSplit = new SplitText(item, {
                    linesClass: "split-parent",
                    type: "lines",
                });
                const childSplit = new SplitText(item, {
                    type: "lines",
                    linesClass: "split-child"
                });

                gsap.from(parentSplit.lines, {
                    duration: 1,
                    yPercent: 150,
                    ease: 'power4.out',
                    stagger: .08,
                    scrollTrigger: {
                        trigger: item,
                        toggleActions: "restart none none reset",
                        start: "top 98%",
                    }
                });
            });


            if (window.innerWidth > 767) {

                box.forEach((el, index) => {
                    gsap.fromTo(el, {
                        y: -150,
                        ease: "none",
                    }, {
                        y: 0,
                        autoAlpha: 1,
                        ease: "power2",
                        duration: 1,
                    scrollTrigger: {
                        id: `${index + 1}`,
                        trigger: el,
                        scrub: true
                    }
                });
            });

            boxplus.forEach((el, index) => {
                gsap.fromTo(el, {
                    y: 150,
                    ease: "none",
                }, {
                    y: 0,
                    autoAlpha: 1,
                    ease: "power2",
                    duration: 1,
                    scrollTrigger: {
                        id: `${index + 1}`,
                        trigger: el,
                        scrub: true
                    }
                });
            });
                cta.forEach((el, index) => {
                gsap.fromTo(el, {
                    y: -50,
                    ease: "none",
                }, {
                    y: 0,
                    autoAlpha: 1,
                    ease: "power2",
                    duration: 1,
                    scrollTrigger: {
                        id: `${index + 1}`,
                        trigger: el,
                        scrub: true
                    }
                });
            });


            }


            return () => {
                smoother.revert();
            };
        }
    });







    return (
        <SmootherContext.Provider value={state}>
            {children}
        </SmootherContext.Provider>
    );
};

export default SmootherProvider;

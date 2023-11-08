import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

export const SplitUp = () => {
    const location = useLocation();
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);

    let getPost = useSelector(state => state)


    useEffect(() => {
        ScrollTrigger.refresh();
        // document.fonts.ready.then(() => {

        gsap.utils.toArray('.split-up').forEach((item, i) => {
            const parentSplit = new SplitText(item, {
                wordsClass: "split-parent",
                type: "words",
            })
            const childSplit = new SplitText(item, {
                type: "words",
                wordsClass: "split-child"
            })

            const tl = gsap.timeline()

            // console.log('parentSplit.words', parentSplit.words)
            childSplit.words.forEach(i => {

                i.parentNode.style.height = i.clientHeight + 'px'
                i.parentNode.style.overflow = 'hidden'
                // i.parentNode.style.background = 'red'
            })

            gsap.from(childSplit.words, {
                duration: 1,
                // delay: .02,
                yPercent: 150,
                ease: 'power4.out',
                // stagger: .06,
                scrollTrigger: {
                    trigger: item,
                    toggleActions: "restart none none reset",
                    // start: '-250',
                    // start: "top top",
                    end: `+ ${item.clientHeight}`,
                    // markers: true
                }
            })
        });                          // do stuff

        // })

    }, [location.pathname, getPost])
}

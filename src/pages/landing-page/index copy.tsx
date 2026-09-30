import { useRef } from 'react'
import './index.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)
const LandingPage = () => {
    const container = useRef(null);
    const circle = useRef(null);
    useGSAP(
        () => {
            let split = SplitText.create("h1", { type: "chars" });
           
            gsap.from(split.chars, {
                // <- selector text, scoped to this component!
                opacity: 0,
                y: 100,
                ease: "back",
                duration: 1,
                stagger: 0.1
            });
        },
        { scope: container }
    );
    return (
        <div className="App">
            <div ref={container} className="container">
                <h1>GSAP SplitText + React = 💚</h1>
            </div>
        </div>
        
    )
}
export default LandingPage;
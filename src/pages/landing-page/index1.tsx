import { useRef,useEffect } from 'react'
import './index.css'
import gsap from 'gsap'
import { SplitText } from "gsap/SplitText";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(SplitText)
const LandingPage = () => {
    const container = useRef(null);
    const circle = useRef(null);
    const boxRef = useRef(null)
   
    useEffect(() => {
    // Equivalent to TweenLite.to(boxRef.current, 1, { x: 200 });
    gsap.to(boxRef.current, { 
      x: 400, 
      rotation: 360, 
      duration: 1, 
      ease: "power1.inOut" 
    });
  }, []);

    return (
       
       <>
       <div ref={boxRef}>ddddd</div>
       </>
    )
}
export default LandingPage;
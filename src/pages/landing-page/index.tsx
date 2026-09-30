import { useRef } from 'react'
import './index.css'
import gsap from 'gsap'
//import { Timeline } from "gsap/Ti"
import { SplitText } from "gsap/SplitText";
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(SplitText)
const LandingPage = () => {
    const greensock = useRef(null);
   
    
    useGSAP(() => {
        const tl = gsap.timeline();
      
        //tl.to('.logo',{autoAlpha:1,duration:2,repeat:1})
        //tl.to('.container',{x:100,ease:Linear.easeNone},1)
        tl.fromTo(".into",{autoAlpha:0,x:0,duration:3},{autoAlpha:1,x:530,duration:3})
           .to('.logo', { 
              x: -120, 
              rotation: 0, 
              duration: 1, 
              ease: "power1.out" 
            })
            .to('.nologin', { 
              x: 650, 
              rotation: 0, 
              duration: 1, 
              ease: "power1.out" 
            })
            //.to('.into',{autoAlpha:1,duration:2,repeat:0})
            //.to('.into', { 
            //  x: 60, 
            //  autoAlpha:1,
            //  duration: 2, 
            //  ease: "power1.in" 
            //})
        //.to('.into',1.45,{x:widthLogo,ease: Linear.easeNone},1.05) // 1.05: ther
        
    },
    {scope: greensock}
    );
    return (
        <div className="parent">
        <div className="greensock" ref={greensock}>
            <div className="into">Build Your Curriculum Vitae</div>
            <h1 className="logo">
                 <div className="logo">prestige<span className="span">CV</span></div>
            </h1>
            <div className="nologin">no login trap and no paywall</div>
        </div>
        </div>

    )
}
export default LandingPage;
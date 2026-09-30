import { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch} from 'react-redux';
import { AppDispatch } from '@store/index';
import { actions} from '@store/cv-reducer'
import gsap from 'gsap'
import { SplitText } from "gsap/SplitText";
import { useGSAP } from '@gsap/react'
import { fetchTemplates } from '@store/template-reducer';
import './index.css'

const getRandomIntInclusive = (): number => {
    return Math.floor(Math.random() * 4) + 1;
}
const Home = () => {
    const [random, setRandom] = useState(getRandomIntInclusive())
    const [loading, setLoading] = useState(false)
    const [imagePath, setImagePath] = useState('');
    const textContainerRef = useRef(null);

    //const timeline = useMemo(() => gsap.timeline({ paused: false}), [])
    const dispatch = useDispatch<AppDispatch>();
    useGSAP(() => {
        const tl = gsap.timeline();

        //tl.to('.logo',{autoAlpha:1,duration:2,repeat:1})
        //tl.to('.container',{x:100,ease:Linear.easeNone},1)
        //tl.fromTo(".textContainerRef",{x:-100,autoAlpha:0,duration:3},{autoAlpha:1,x:530,duration:3})
        tl.from(".text1", {
            duration: 1, 
            x: screen.width, 
            ease: "elastic.out(0.5, 0.2)",
            delay: 0
        })
        .from(".text2", {
            duration: 2.5, 
            x: screen.width, 
            ease: "elastic.in(0.5, 0.2)",
            delay: 0
        })
        .from(".text3", {
            duration: 1, 
            x: screen.width, 
            ease: "elastic.out(0.5, 0.2)",
            delay: 1
        })

        {/*
        tl.to('.free', {
            x: 120,
            rotation: 360,
            duration: 1,
            ease: "power1.out"
        })
        /*}
        //.to('.into',{autoAlpha:1,duration:2,repeat:0})
        //.to('.into', { 
        //  x: 60, 
        //  autoAlpha:1,
        //  duration: 2, 
        //  ease: "power1.in" 
        //})
        //.to('.into',1.45,{x:widthLogo,ease: Linear.easeNone},1.05) // 1.05: ther
        */}

    },
        { scope: textContainerRef }
    );

    useEffect(() => {
        // We directly call the fetch function instead of using actions
        dispatch(fetchTemplates());
    }, [dispatch]);

    useEffect(() => {
        //const tl = gsap.timeline()
        //const bannerElement = bannerRef.current
        //tl.to(square.current, 0.5, { x: 100 });
        //tl.from('.text',{
        //    y: 300,
        //    stagger:{
        //        each: 0.07
        //    }
        //});
        dispatch(actions.resetCV());
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 5000)

        setRandom(getRandomIntInclusive())
        const imageUrl = `/images/home/home_bg${random}.png`
        setImagePath(imageUrl)

    }, []);
    return (
        <div className="textContainerRef" ref={textContainerRef}>
            <div style={{ float: 'left' }}>
                 <img src="/images/home/free_icon.png" className="free"/><br/>
                <span id="text" className="text1">Designing ideas that inspire and engage.</span><br/>
                <span id="text" className="text2">Creative thinker turning concepts into compelling experiences.</span><br/>
                <span id="text" className="text3">Blending creativity with strategy to deliver impact.</span><br/>
                {/*}
            <span id="text" className="text2">Creative thinker turning concepts into compelling experiences.</span><br/>
            <span id="text" className="text3">Blending creativity with strategy to deliver impact.</span><br/>
            
            <img src="/images/home/free_icon.png" className="logo"/>
            <img src="/images/home/start_now.png" />
            */}
            </div>
            <div style={{ float: 'right' }}>
                <img src={imagePath} className="img_center" />
            </div>
            {/*
            <p>Designing ideas that inspire and engage.”
                “Creative thinker turning concepts into compelling experiences.”<br />
                “Blending creativity with strategy to deliver impact.”
            <div className="container">
                <div className="line">
                    <span>Hello!</span>
                </div>
                <div className="line">
                    <span>This is a</span>
                </div>
                <div className="line">
                    <span>text reveal animation.</span>
                </div>

            </div>
            */}
            <img src="/images/home/start_now.png" className="start_now"/>
        </div>
    )
}

export default Home;
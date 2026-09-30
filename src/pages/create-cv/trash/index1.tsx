import React, { ReactNode, Ref, useState, useEffect, useRef, Fragment } from 'react';

import './index_new.css';
import { totalSteps, SlidePage } from './page-styled';
import TimeLine  from '@components/timeline';
const CreateCV = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  //const [margin,setMargin]= useState(0)
  const [marginLeft,setMarginLeft] = useState('0px')
  useEffect(()=>{
    console.log(`curr:${currentPage}`)
    //let mgin = (600) * currentPage ;//(pageNo*400)
      //console.log(`margin:${mgin}`)
     // setMargin(mgin)
    //  setMarginLeft(`-${mgin}px`)
     // console.log(marginLeft)
     if(currentPage == 1){
      setMarginLeft('-0px')
     }
     if(currentPage == 2){
       setMarginLeft('-600px')
     }
      if(currentPage == 3){
        console.log('eee')
       setMarginLeft('-1000px')
     }
     if(currentPage == 4){
       
       setMarginLeft('-1400px')
     }
  },[currentPage])

  const next= () =>{
    
      setCurrentPage(currentPage +1)
      //console.log(currentPage)
     // let mgin = 600 * pageNo;//(pageNo*400)
      //console.log(`margin:${mgin}`)
      
      //setMarginLeft(`-${mgin}px`)
      
      //console.log(marginLeft)
  }


  
  

  const back=()=>{
      setCurrentPage(currentPage -1)
      
  }
  return (
    <div className="createcv_wrapper">
      <div className="timeline">
        <TimeLine/>
      </div>
      <div className="main_content">
        <form>
          <SlidePage margin={marginLeft}>
                <div className="person_title">Person Info:</div>
                <div className="field">
                            <div className="label">First Name</div>
                            <input type="text" required className="form_input"/>
                </div>
                <div className="field">
                            <div className="label">Last Name</div>
                            <input type="text" required />
                </div>
                <div className="field">
                            <button className="firstNext next">Next</button>
                </div>
              
          </SlidePage>
          
          <div className="page">
            <div className="objective">Objective</div>
          </div>
           <div className="page">
            <div className="experience">Experience</div>
          </div>
          <div className="page">
            <div className="education">Education</div>
          </div>
        </form >
    </div >
    <div className="nav_buttons">
      <button onClick={back}>Previous</button><button onClick={next}>Next</button>
    </div>
  </div >
)
    
}
export default CreateCV;
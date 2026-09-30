import { useState, useEffect,useRef, useImperativeHandle} from 'react'

import { useAppSelector } from '@store/hooks';
import { getDefaultColor } from '@store/color-scheme-reducer';
import { getCV } from '@store/cv-reducer'
import * as T from './index.styled'
import './index.css';
import ColorMenu from '@components/color-menu';
import TemplateLoader from '@utils/template-loader';
import StepIndicator from '@components/step-indicator';
import { Step1, Step2, Step3, Step4, Step5, Step6 } from '@components/steps';
import { useReactToPrint } from 'react-to-print';
import generatePDF, {usePDF, Resolution, Margin } from 'react-to-pdf';
import { validateStep } from '@components/validate-form';
const options = {
   // default is `save`
   //method: 'open',
   resolution: Resolution.HIGH,
   page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: {
        top: 0,
        right: 0,
        bottom: 20,
        left: 0
      },
      format: 'A4',
      //orientation: 'portrait',
   },
   canvas: {
      //mimeType: 'image/png',
      qualityRatio: 1
   },
   overrides: {
      pdf: {
         compress: true
      },
      canvas: {
         useCORS: true
      }
   },
};
const CreateCVSection = (props) => {
    console.log("Create")
    console.log(props.isImageProfileRequired)
    const [lineBreak,setLineBreak] = useState(true)
    //const [allEnabled,setAllEnabled] = useState({step1: false,step2:false,step3:false})
    const [enabledNextButton,setEnabledNextButton] = useState(true)
    const templateRef = useRef(null);
    //const pages = { 1: "Person Info", 2: "Objective", 3: "Experience",4: "Education",5: "Skills",6: "Others",7: "Complete"}
    const pages = { 1: "Person Info", 2: "Education",3: "Skills", 4: "Objective",5: "Experience",6: "Complete"}
    const defaultColorScheme = useAppSelector(getDefaultColor);
    const cv = useAppSelector(getCV)
    const [colorScheme,setColorScheme] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [colorSelected,setColorSelected] = useState(0)
    const [formErrs,setFormErrs] = useState({})
    const step1Ref = useRef(null)
    useEffect(() =>{
        setColorScheme(defaultColorScheme)
     

    },[])
    useEffect(() => {
        
    }, [currentPage])

    const onErrMessage =(errsMsg)=>{
        if (step1Ref.current) {
            step1Ref.current.triggerErrFunction(errsMsg);
        }
    }
    
    const onNextClick = () => {
       //let errsMsg = validateStep(currentPage,cv)
       console.log("err msg")
       setCurrentPage(currentPage + 1);
       //console.log(errsMsg.size)
       /*
       if (errsMsg == null || Object.keys(errsMsg).length === 0){
            setCurrentPage(currentPage + 1);
       }else{
            setFormErrs(errsMsg)
            onErrMessage(errsMsg)
            return;
       }
       */
    }
    const onBackClick = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleChangeStep1 = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        
    }
    const handleChangeStep3 = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        
    }
    const handleChange = (event) => {
        console.log(`CurrentPage:${currentPage}`)
        if (currentPage == 1) {
            return handleChangeStep1(event)
        } else if (currentPage == 3) {
            
            return handleChangeStep3(event)
        }
    }
    const colorOnSelected = (colorScheme) =>{
        //alert('d')
        console.log('sss')
        console.log(colorScheme.hex2)
        setColorScheme(colorScheme)
    }
    const handlePrint_1= useReactToPrint({
        documentTitle: 'RRR1',
        contentRef: templateRef,
        pageStyle: `
             @page { 
                size: 210mm 297mm;
                margin:0;
             }
             @media print {
                body{
                    -webkit-print-color-adjust: exact;
                    print-color-adjust:exact !important;
                    font-size: 125%; 
                }
                .page-break {
                    display: block !important;
                    break-before: page; /* Standard property for forcing a new page */
                }
                .testw{
                  display:block !important;
                  height:180px;
                }    
             }
        `,
    });
    const handlePrint= useReactToPrint({
        documentTitle: 'RRR1',
        contentRef: templateRef,
        pageStyle: `
             @page { 
                size: 210mm 297mm;
                margin-top: 120mm !important;    /* Keeps space at the top of NEXT pages */
                margin-bottom: 20mm !important; /* Keeps space at the bottom of pages */
                margin-left: 15mm;
                margin-right: 15mm;
             }
             @media print{
                body{
                    -webkit-print-color-adjust: exact;
                    print-color-adjust:exact !important;
                }
                .page-break {
                    display: block !important;
                    break-before: page; /* Standard property for forcing a new page */
                }
                .testw{
                  display:block !important;
                  height:80px;
                }    
             }
        `,
    });
    

    
    const printToPdf = (e) =>{
        e.preventDefault();
        setLineBreak(true);
        handlePrint();
        setLineBreak(false);
    }

    const openPDF = (e) => {
         e.preventDefault();
        generatePDF(templateRef, options);
    };
    return (
        <T.Container>
            <T.Left>
                <StepIndicator currentPage={currentPage} />

                <T.StepsSection >
                    <T.Header>
                        <T.Name>Step{props.isImageProfileRequired}</T.Name>
                        <T.Circle>{currentPage}</T.Circle>
                        <T.StepName>{pages[currentPage]}</T.StepName>
                    </T.Header>
                    {/*{currentPage == 1 && <Step1 errs={formErrs} imageRequired={props.imageRequired} currentPage={currentPage} handleChange1={props.handleChange} resume={props.resume} ref={step1Ref}/>}*/}
                    {currentPage == 1 && <Step1 ref={step1Ref} imageRequired={props.isImageProfileRequired}/>}
                    {currentPage == 2 && <Step2 currentPage={currentPage} handleChange={props.handleChange} resume={props.resume} />}
                    {currentPage == 3 && <Step3 currentPage={currentPage} handleChange={props.handleChange} resume={props.resume} />}
                    {currentPage == 4 && <Step4 currentPage={currentPage} handleChange={props.handleChangeStep} resume={props.resume} />}
                    {currentPage == 5 && <Step5 currentPage={currentPage} handleChange={props.handleChangeStep1} resume={props.resume} />}
                    {currentPage == 6 && <Step6 imageRequired={true} currentPage={currentPage} handleChange={props.handleChangeStep1} resume={props.resume} />}
                    {/*
                    <div>{currentPage > 1 && <button onClick={onBackClick}>Back Step {currentPage - 1}</button>}&nbsp;<button onClick={onNextClick}>Next Step {currentPage + 1}</button></div>
                    */}
                    <div className="button-wrapper">
                        <div className="button-left">
                        { currentPage > 1 &&
                        <a href="#" className="back-link" onClick={onBackClick}>
                        <span className="arrow">←</span>Back to Step {currentPage - 1}
                        </a>
                        }
                        </div>
                    
                        <div className="button-right">
                        <a href="#" className={enabledNextButton ? "forward-link" : "disabled-forward-link" } onClick={onNextClick} style={{pointerEvents:enabledNextButton ? 'auto': 'none'}}>
                        <span> Next to Step {currentPage + 1}</span>
                        <span className="arrow1">&#8594;</span>  
                        </a>
                        </div>
                    </div>
                </T.StepsSection>

            </T.Left>
            <T.Right>
                <T.TopSection>
                    <T.Section1><ColorMenu colorOnSelected={colorOnSelected}/></T.Section1>
                    <T.Section2><T.PrintButton onClick={printToPdf}>Print to PDF</T.PrintButton></T.Section2>
                     {/*<T.Section2><T.PrintButton onClick={openPDF}>Open PDF</T.PrintButton></T.Section2>
                    
                    <T.ColorMenuSetion>
                        <ColorMenu colorOnSelected={colorOnSelected}/>
                    </T.ColorMenuSetion>
                     <T.PrintButtonSetion>
                        <T.PrintButton onClick={printToPdf}>Print to PDF</T.PrintButton>
                    </T.PrintButtonSetion>
                    */}
                </T.TopSection>
                <T.ContentSectionWrapper>
                <T.ContentSection ref={templateRef}>
                    <TemplateLoader id={props.id} templateId={props.templateId} isImageProfileRequired={props.isImageProfileRquired} type={props.type} title={"Create CV"} colorScheme={colorScheme} lineBreak={lineBreak} bgImage={props.bgImage}/>
                </T.ContentSection>
                </T.ContentSectionWrapper>
            </T.Right>
        </T.Container>
    )
}
/*
const CreateCVSection1 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <T.Container>
            <T.Left>
                <StepIndicator currentPage={currentPage + 1} />
                <T.ContentSection>
                    <T.Header>
                        <T.Name>Step</T.Name>
                        <T.Circle>1</T.Circle>
                        <T.Name>Person Info</T.Name>
                    </T.Header>
                    <Step1 />
                </T.ContentSection>

            </T.Left>
            <T.Right>
                <T.TopSection>
                    <T.ColorMenuSetion><ColorMenu /></T.ColorMenuSetion>

                    <T.PrintButtonSetion>
                        <T.PrintButton>Print to PDF</T.PrintButton>
                    </T.PrintButtonSetion>
                </T.TopSection>
                <T.ContentSection >
                    <TemplateLoader index={'template17'} title={"Create CV"} />
                </T.ContentSection>
            </T.Right>
        </T.Container>
    )
}
*/
export default CreateCVSection;
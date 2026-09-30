import './test.scss';
import React, { ReactNode, Ref, useState, useEffect, useRef, Fragment } from 'react';

import ReactToPrint from "react-to-print";
import { PersonInfo, CareerObjective } from '@components/accordion';
import { useParams, useSearchParams, } from "react-router";
import { useAppDispatch,useAppSelector } from '@store/hooks'
import { useDispatch, useSelector } from 'react-redux';
//import { AppDispatch } from '@store/index';
import { useReactToPrint } from 'react-to-print';

import { PersonalDetails } from '@components/personal-details'

import { Test1 } from '@components/test1'
import { EntrySection, TemplateSection, PersonalDetailsWrapper, EducationWrapper } from './createcv.styled'
import { Button } from './form.styled';

import styles from './form.module.css';

import { UploadImage } from '@components/upload-image';

import './index.css'
import './new.css'

import { Education } from '@components/education'

import TemplateLoader from '@utils/template-loader'

import  NavigationButtons  from '@components/navigation-button';
const steps = [
  {
    label: 'Personal Details',
    step: 1,
  },
  {
    label: 'Objectives',
    step: 2,
  },
  {
    label: 'Skills',
    step: 4,
  },
  {
    label: 'Work Experiences',
    step: 5,
  },
  {
    label: 'Education',
    step: 6,
  },
  {
    label: 'Referees',
    step: 7,
  },
  {
    label: 'Complete',
    step: 8,
  },
]
/*
interface ComponentToPrintProps extends ReactElement{
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

type FooProps = {
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
}
*/
/*
const ComponentToPrint = (props: { children: ReactNode, ref: Ref<HTMLDivElement> }) => {
  return (
    <div
      ref={props.ref}
      className="print-source"
      style={{ position: "relative", height: "100%", width: "100%" }}
    >
      {props.children}
      <style type="text/css" media="print">
        {`@page { size: landscape; }`}
      </style>
    </div>
  );
};
*/
const CreateCV = (props) => {
  const page = useAppSelector((state: any) => state.page.value);
  const [currentPage,setCurrentPage] = useState(1)
  
  useEffect(() => {
     setCurrentPage(page)
  },[page])
 
  const [step, setStep] = useState(0)
  const contentRef = useRef(null);
  const chartRef = useRef(null);
  const params = useParams();
  const [search, setSearch] = useSearchParams();
  useEffect(() => {
    // console.log(`Params:${params}`)
    // setTemplateId(params.id)
    // console.log(`Search:${search.get('id')}`)
    setTemplateId(search.get('id'))
  }, [])

  const [templateId, setTemplateId] = useState('')
  const [activeStep, setActiveStep] = useState(1)
  const [isRight, setRight] = useState(false)
  const nextStep = () => {
    setActiveStep(activeStep + 1)
    setRight(!isRight);
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
    setRight(!isRight);
  }

  const totalSteps = steps.length

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`

  const displayedForm = (step: number) => {
    switch (step) {
      case 1:
        return <PersonalDetails state={{}}/>
      case 2:
        return (<>2</>)
      default:
        return (<>Default</>)
    }
  }

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    // @ts-ignore or use "as any"
    //content: () => componentRef.current,
    documentTitle: '',
    contentRef: componentRef,

    pageStyle: `
      @page { 
          margin: 150mm;
          size: auto;
      } 
      @page :first { 
          margin : 0mm;
          size: auto;
      } 
      @media print { 
       body {
        -webkit-scrollbar { width: 0 !important }
        -webkit-print-color-adjust: exact;
        print-color-adjust:exact !important;
      }
  }
  `,
  });
  const handlePrint_0ld = useReactToPrint({
    // @ts-ignore or use "as any"
    //content: () => componentRef.current,
    documentTitle: '',
    contentRef: componentRef,

    pageStyle: `
      @media print {
        @page { 
          margin: 0mm;
          size: 210mm 297mm;
        }
      }
      body {
        -webkit-scrollbar { width: 0 !important }
        -webkit-print-color-adjust: exact;
        print-color-adjust:exact !important;
      }
  }
  `,
  });
  const buttonOnClick = () => {
    alert('d')
  }
  return (
    <div className='create_cv_section'>
      <div className='ccv_header'>BUILD YOUR OWN CV1{templateId}</div>
      <div className="progress-steps">
        <div className="progress-steps__container">
          {steps.map(({ step, label }) => (
            <div className="progress-steps__item" key={step}>
              <div
                className={`progress-steps__circle ${activeStep >= step ? 'progress-steps__circle--completed' : ''
                  }`}>
                {activeStep > step ? (
                  <div className="progress-steps__checkmark">L</div>
                ) : (
                  <span className="progress-steps__count">{step}</span>
                )}
              </div>
              <div className="progress-steps__label-container">
                <span className="progress-steps__label" key={step}>
                  {label}
                </span>
              </div>
            </div>
          ))}
          <div className="progress-steps__filled-line" style={{ width: width }}></div>
        </div>
        <div className="progress-steps__buttons">
          <button className="progress-steps__button" onClick={prevStep} disabled={activeStep === 1}>
            Previous
          </button>
          <button
            className="progress-steps__button"
            onClick={nextStep}
            disabled={activeStep === totalSteps}>
            Next
          </button>
        </div>
      </div>

      <div className="mainContent">
        <Fragment>
          <div className="row">
            <div className="column1" >
              <div className={styles.main}>
                <div className='p_header'>
                <div className="circle">{currentPage}</div>
                <div>Person Info</div>
                </div>
                <UploadImage/>
                <PersonInfo expended={true} />
                <br />
                <CareerObjective expended={true} />
                <br/>
                {displayedForm(currentPage)}
                <NavigationButtons pageNo={page} backNo={currentPage -1} nextNo={currentPage +1}/>
                
              </div>

            </div>
            <div className="column2">

              <div ref={componentRef}>
                <TemplateLoader index={templateId} />
              </div>
            </div>
            <div className='column3'>
              <div className="print_button_div">
                <button className="print_button" onClick={handlePrint}>Print to PDF</button>
              </div>
            </div>
          </div>
        </Fragment>
      </div >
    </div >

  )

}

export default CreateCV;
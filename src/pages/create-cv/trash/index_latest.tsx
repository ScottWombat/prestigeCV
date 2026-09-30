import { useState, useEffect, useRef } from 'react';
import { useParams, useSearchParams, } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@store/index';
import { useAppSelector } from '@store/hooks';
import { getTemplates } from '@store/template-reducer';
import styles from './latest.module.css'
import TimeLine from '@components/timeline';
import { UploadImage } from '@components/upload-image';
import TemplateLoader from '@utils/template-loader';
import { PersonalDetails } from '@components/personal-details';
import { Step1, Step2, Step3, Step4, Step5, Step6 } from '@components/steps';
//import { IPersonInfo, IEducation ,IExperience} from "@store/resume-type";
import { actions } from '@store/cv-reducer'
import StepIndicator from '@components/step-indicator';
/*
type ResumeState = {
    template: string | null
    personInfo: IPersonInfo | null
    education: [IEducation] | IEducation[]
    experience:  [IExperience] | IExperience[]
}


interface IResume{
    personInfo: IPersonInfo;
    work: IExperience[] | [IExperience];
    education: IEducation[] | [IEducation];
    skill?: ISkill[] | [ISkill];
    tool?: ITool[] | [ITool];
    referee?: IReferee[] | [IReferee]
}
interface IPersonInfo{
    firstName: string;
    //lastName: string;
    //image: string;
    //addr: string;
    //mobile: string;
    //email: string;
}
interface IExperience{
    period: string;
    position: string;
    company: string;
    detail: string;
}
interface IEducation{
    period: string;
    instution: string;
    degree: string
}
interface ITool{
    name: string;
}
interface ISkill{
    name: string
}
interface IReferee{
    name: string;
    position: string;
    email: string;
    mobile: string;
}
*/
const CreateCV = (props) => {
    const dispatch = useDispatch<AppDispatch>();
    const templates = useAppSelector(getTemplates)
    const [resume, setResume] = useState({ personInfo: {}, work: [], education: [] })
    const componentRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [templateId, setTemplateId] = useState('')
    const [imageRequired, setImageRequired] = useState(false)
  
    const [isTemplateExisted,setExisted] = useState(false)

    const [search, setSearch] = useSearchParams();
    const [id, image] = search
    

    useEffect(() => {
        dispatch(actions.updatePersonInfo(resume.personInfo))
    }, [resume])
    
    useEffect(() => {
        setTemplateId(search.get('id'))
        setImageRequired(search.get('image') == 'no' ? false : true)
        console.log("TE")
        console.log(templates)
    }, [])
   
    const onNextClick = () => {
        setCurrentPage(currentPage + 1)
    }
    const onBackClick = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleChangeStep1 = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name)
        //setResume({...resume,...resume.personInfo,['personInfo']:{[name]: event.target.value}});
        setResume(prevResume => ({
            ...prevResume,
            personInfo: {
                ...prevResume.personInfo,
                [name]: event.target.value
            }
        }));
        //console.log(resume.work)
        //dispatch(actions.updatePersonalInfo({`${name}`: event.target.value}))
    }
    return (
       
        <div className={styles.mainContent}>
            <div className={styles.row}>
                <div className={styles.column1}>
                    <div className={styles.timeline}>
                        <StepIndicator currentPage={currentPage + 1} />
                        {/*<TimeLine currentPage={currentPage} />*/}
                    </div>
                    <div className={styles.user_content}>
                        <div className={styles.inline}><div>Step&nbsp;</div><div className={styles.circle}>1</div>&nbsp;:&nbsp; <div style={{ fontWeight: 'bold' }}> Person Info</div></div>
                        {/*
                        {imageRequired === 'yes' && <UploadImage />}
                        <PersonalDetails state={personDetails}/>
                        */}
                        <Step1 imageRequired={imageRequired} currentPage={currentPage} resume={resume} handleChange={handleChangeStep1} />
                        <Step2 currentPage={currentPage} resume={resume} handleChange={handleChangeStep1} />
                        <Step3 currentPage={currentPage} resume={resume} handleChange={handleChangeStep1}/>
                        <Step4 currentPage={currentPage} />
                        <Step5 currentPage={currentPage} />
                        <Step6 currentPage={currentPage} />
                    </div>
                    <div>{currentPage > 1 && <button className={styles.button1} onClick={onBackClick}>Back Step {currentPage - 1}</button>}&nbsp;<button className={styles.button1} onClick={onNextClick}>Next Step {currentPage + 1}</button></div>
                </div>
                <div className={styles.column2}>
                    <div ref={componentRef}>
                        <TemplateLoader index={templateId} title={"Create CV"} />
                    </div>
                </div>
                <div className={styles.column3} ><div className={styles.button}>Print to PDF</div></div>
            </div>
        </div>

    )
}
export default CreateCV;
import { useState, useEffect, useRef } from 'react';
import { useParams, useSearchParams, } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@store/index';
import { useAppSelector } from '@store/hooks';
//import { getTemplates } from '@store/template-reducer';
import { getCV } from '@store/cv-reducer';

import styles from './latest.module.css'
import TimeLine from '@components/timeline';
import { UploadImage } from '@components/upload-image';
import TemplateLoader from '@utils/template-loader';
import { PersonalDetails } from '@components/personal-details';
import { Step1, Step2, Step3, Step4, Step5, Step6 } from '@components/steps';
import { IPersonInfo} from "@store/resume-type";
import { actions,selectPersonInfo } from '@store/cv-reducer'
import StepIndicator from '@components/step-indicator';
import PageNotFound from 'pages/page-notfound';
import CreateCVSection from './create-cv-section';
 
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
const CreateCV = () => {
    const params = useParams();
  
    const dispatch = useDispatch<AppDispatch>();
    const personInfoData = useAppSelector(selectPersonInfo)
    //const templates = useAppSelector(getTemplates)
    //const [resume, setResume] = useState({ personInfo: {}, experience: [], education: [] })
    const [resume, setResume] = useState(useAppSelector(getCV))
    const [personInfo,setPersonInfo] = useState({})
    //const [personInfo,setPersonInfo] = useState(useAppSelector(selectPersonInfo))
    const componentRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [templateId, setTemplateId] = useState('')
    //const [imageRequired, setImageRequired] = useState(false)
    const [isTemplateExisted,setIsTemplateExisted] = useState(false)
    //const [search, setSearch] = useSearchParams();
    //const [id, imageRequired] = search
    /*
    const validateTemplate = (templateId) =>{
       
        import (`../../components/templates/${templateId}`)
      .then((module) => {
    
       setIsTemplateExisted(true)
      
      })
      .catch((err) => {
        console.error("Failed to load component", err);
      });
    }

    useEffect(() => {
     
    },[personInfo])

    
    useEffect(() => {
        
    }, [])
   */
    /*
    const onNextClick = () => {
        setCurrentPage(currentPage + 1)
    }
    const onBackClick = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleChangeStep1 = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setPersonInfo(prevPersonInfo => ({
            ...prevPersonInfo,
            [name]: value
        }))
        dispatch(actions.updatePersonInfo({...personInfoData,[name]: value}))
        
    }
    const handleChangeStep3 = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log("Click")
    }
    const handleChange = (event) =>{
        console.log(`CurrentPage:${currentPage}`)
        if (currentPage == 1){
            return handleChangeStep1(event)
        }else if (currentPage == 3){
          
            return handleChangeStep3(event)
        }
    }
        */
    /*
    id?: number //will combine with template text
    isImageProfileRequired:  boolean
    imageStyle: string //square,cicle
    isImageBGRequired: boolean
    */
    return (
        //<CreateCVSection templateId={params.id} imageRequired={params.imageRequired} handleChange={handleChange} handleChangeStep1={handleChangeStep1} handleChangeStep3={handleChangeStep3} />
        <CreateCVSection id={params.id} templateId={params.templateId} type={params.type} isImageProfileRequired={params.isImageProfileRequired} imageStyle={params.imageStyle} bgImage={params.bgImage}/>
        //isTemplateExisted ? <CreateCVSection templateId={templateId} handleChangeStep={handleChange} imageRequired={true} resume={resume}/>: <PageNotFound/>
    )
}
export default CreateCV;
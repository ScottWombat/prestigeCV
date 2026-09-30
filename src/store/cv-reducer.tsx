import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPersonInfo, IEducation, IExperience, IReferee, ILanguage, ITemplate, Template } from "./default-exports";
import { initClassicTemplates, initModernTemplates, initAbstractTemplates } from './templates';


type ResumeState = {
      template: string | null
      colorScheme: string | null,
      personInfo: IPersonInfo | null
      education: [IEducation] | IEducation[]
      experience: [IExperience] | IExperience[]
      referees: [IReferee] | IReferee[]
}


const initPersonInfoState: IPersonInfo = {
      position: null,
      firstName: '[Your first name]',
      profileImage: '/images/default-avatar.png',
      lastName: '[Your last name]',
      email: '',
      mobile: '',
      address: '',
      career_objective: '',
      professional_summary: ''
}
const initExperience: IExperience[] = [{
      id: 0,
      company: '',
      startYear: '',
      endYear: '',
      position: '',
      location: '',
      duty: ['']
}]

const initLanguages: ILanguage[] = [
      { id: 1, name: "English", checked: false },
      { id: 2, name: "Chinese", checked: false },
      { id: 3, name: "Arabic", checked: false },
      { id: 4, name: "Spanish", checked: false },
      { id: 5, name: "Japanese", checked: false },
      { id: 6, name: "Hindi", checked: false },
      { id: 7, name: "French", checked: false },
      { id: 8, name: "Russian", checked: false },
      { id: 9, name: "Korean", checked: false },
      { id: 10, name: "German", checked: false },
      { id: 11, name: "Italian", checked: false },
      { id: 12, name: "Thai", checked: false },
      { id: 100, name: "Other", checked: false }
]
const initTemplates: ITemplate[] = [
      { id: 1, name: "template12", image: "no", style: "classic" },
      { id: 2, name: "template38", image: "no", style: "classic" },
      { id: 3, name: "template39", image: "no", style: "classic" },
      { id: 4, name: "template40", image: "no", style: "classic" },
      { id: 5, name: "template24", image: "no", style: "classic" },
      { id: 6, name: "template25", image: "no", style: "classic" },
      { id: 7, name: "template26", image: "no", style: "classic" },
      { id: 8, name: "template27", image: "no", style: "classic" },
      { id: 9, name: "template28", image: "no", style: "classic" },
      { id: 10, name: "template29", image: "no", style: "classic" },
      { id: 11, name: "template30", image: "no", style: "classic" },
      { id: 12, name: "template22", image: "no", style: "classic" },
      { id: 13, name: "template41", image: "no", style: "classic" },
      { id: 14, name: "template31", image: "no", style: "classic" },
      { id: 15, name: "template32", image: "no", style: "classic" },
      { id: 16, name: "template5", image: "yes", style: "modern" },
      { id: 17, name: "template37", image: "yes", style: "modern" },
      { id: 18, name: "template4", image: "yes", style: "modern" },
      { id: 19, name: "template42", image: "yes", style: "modern" },
      { id: 20, name: "template43", image: "yes", style: "modern" },
      { id: 21, name: "template44", image: "yes", style: "modern" },
      { id: 22, name: "template45", image: "yes", style: "modern" },
      { id: 23, name: "template46", image: "no", style: "classic" },
      { id: 24, name: "template47", image: "no", style: "classic" },
      { id: 25, name: "template48", image: "no", style: "classic" },
      { id: 26, name: "template49", image: "no", style: "classic" },

]
const initTemplates1: ITemplate[] = [
      { id: 1, name: "template1", image: "yes", style: "abstract" },
      { id: 2, name: "template2", image: "no", style: "classic" },
      { id: 3, name: "template6", image: "no", style: "modern" },
      { id: 4, name: "template7", image: "no", style: "classic" },
      { id: 5, name: "template8", image: "no", style: "classic" },
      { id: 6, name: "template11", image: "no", style: "abstract" },
      { id: 7, name: "template23", image: "no", style: "abstract" },
      { id: 8, name: "template4", image: "yes", style: "modern" },
      { id: 9, name: "template12", image: "no", style: "classic" },
      { id: 10, name: "template5", image: "no", style: "modern" },
      { id: 11, name: "template22", image: "no", style: "modern" },
      { id: 12, name: "template24", image: "no", style: "classic" },
      { id: 13, name: "template25", image: "no", style: "classic" },
      { id: 14, name: "template26", image: "no", style: "classic" },
      { id: 15, name: "template27", image: "no", style: "classic" },
      { id: 16, name: "template28", image: "no", style: "classic" },
      { id: 17, name: "template29", image: "no", style: "classic" },
      { id: 18, name: "template30", image: "no", style: "classic" },
      { id: 19, name: "template31", image: "no", style: "modern" },
      { id: 20, name: "template32", image: "no", style: "modern" },
      { id: 21, name: "template33", image: "no", style: "modern" },
      { id: 22, name: "template34", image: "no", style: "modern" },
      { id: 23, name: "template35", image: "no", style: "modern" },
      { id: 24, name: "template14", image: "no", style: "abstract" },
      { id: 25, name: "template36", image: "yes", style: "abstract" },
      { id: 26, name: "template37", image: "yes", style: "abstract" },
]

interface MainState {
      classicTemplates: Template[] | [Template],
      modernTemplates: Template[] | [Template],
      abstractTemplates: Template[] | [Template],
      templates: ITemplate[] | [ITemplate],
      templateType: string,
      colorScheme: string,
      personInfo: IPersonInfo,
      experiences: IExperience[] | [IExperience],
      education: IEducation[] | [IEducation],
      referees: IReferee[] | [IReferee],
      referees_skip: boolean
      skills: string[] | [string],
      personalSkills: string[] | [string],
      technicalSkills: string[] | [string],
      programmingSkills: string[] | [string],
      databaseSkills: string[] | [string],
      languages: string[] | [string],
      lang: ILanguage[] | [ILanguage],
      career_objectives: string[] | [string],
      professional_summary: string[] | [string]
}
const initialState: MainState = {
      classicTemplates: initClassicTemplates,
      modernTemplates: initModernTemplates,
      abstractTemplates: initAbstractTemplates,
      templates: initTemplates,
      templateType: 'modern',
      colorScheme: '',
      personInfo: initPersonInfoState,
      experiences: [],
      //experiences: initExperience,
      education: [],
      referees: [],
      referees_skip: false,
      skills: [],
      personalSkills: [],
      technicalSkills: [],
      programmingSkills: [],
      databaseSkills: [],
      languages: [],
      lang: initLanguages,
      career_objectives: [],
      professional_summary: []
}

export const cvSlice = createSlice({
      name: 'cv',
      //initialState: {template: '',colorScheme: '',personalInfo: {'profileImage': 'dd','firstName':'[Your Name]'},education: [],experience : []} as ResumeState,
      //initialState: {template: '',colorScheme: '',personInfo: initialPersonInfoState,education: [],experience: initExperience} as ResumeState,
      initialState,
      reducers: {
            resetCV: () => initialState,
            /*
            updateTemplate: (state, { payload: { template }, }: PayloadAction<{ template: string }>) => {
                  state.template = template;
            },
            */
            updateColorScheme: (state, { payload: { colorScheme }, }: PayloadAction<{ colorScheme: string }>) => {
                  state.colorScheme = colorScheme;
            },
            updatePositionPersonInfo: (state, { payload: { str }, }: PayloadAction<{ str: string }>) => {
                  state.personInfo.position = str;
            },
            updatePersonInfo: (state, action: PayloadAction<IPersonInfo>) => {
                  state.personInfo = action.payload;
            },
            addExperience: (state, action) => {
                  state.experiences = [...state.experiences, action.payload]
            },
            resetDuties: (state) => {
                  state.experiences = []
            },
            /*
            updateExperience: (state, action) => {
                  const ex = state.experience;
                  const nme = action.payload.name
                  const val = action.payload.value
                  console.log(ex.length)
                  const existingExperience = state.experience.find(
                              ex => ex.id === action.payload.id
                  );
                  if (existingExperience === undefined){
                        const tem = { id: action.payload.id, [action.payload.name]: action.payload.value }
                        state.experience[action.payload.id]= tem
                  }else{
                        state.experience[action.payload.id] = {...existingExperience,[action.payload.name]: action.payload.value}
                  }
            },
            updateResponsibilty: (state, action) => {
                  const ex = state.experience;
                  if (state.experience[action.payload.id].responsibility === undefined){
                        state.experience[action.payload.id].responsibility=[action.payload.duty]
                  }else{
                     state.experience[action.payload.id].responsibility = [...state.experience[action.payload.id].responsibility,action.payload.duty]   
                  }
                
            },
            removeResponsibity: (state,action) =>{
                  console.log(action.payload.expIndex)
                  console.log(action.payload.respIndex)
                  let newArray =state.experience[action.payload.expIndex].responsibility.filter((_,i) => i !== action.payload.respIndex)
                 state.experience[action.payload.expIndex].responsibility = newArray;
            },
            */
            addEducation: (state, action) => {
                  state.education = [...state.education, action.payload]
            },
            updateEducation: (state, action) => {
                  const existingEducation = state.education.find(
                        ex => ex.id === action.payload.id
                  );
                  if (state.education[action.payload.id] === undefined) {
                        const tem = { id: action.payload.id, [action.payload.name]: action.payload.value }
                        state.education[action.payload.id] = tem
                  } else {
                        state.education[action.payload.id] = { ...existingEducation, [action.payload.name]: action.payload.value }
                  }

            },
            resetEducation: (state) => {
                  state.education = [];

            },
            addReferee: (state, action) => {
                  const referee = { id: action.payload.id, name: action.payload.name, email: action.payload.email, mobile: action.payload.mobile }
                  //state.referees[action.payload.id] = referee
                  state.referees = [...state.referees, referee]
            },
            resetReferees: (state) => {
                  state.referees = []
            },
            removeReferee: (state, action) => {
                  let newArray = state.referees.filter((_, i) => i !== action.payload.id)
                  state.referees = newArray
            },
            addSkills: (state, action) => {

                  if (action.payload.group === 'personal') {
                        state.personalSkills = [...state.personalSkills, action.payload.skill]
                  } else if (action.payload.group === 'technical') {
                        state.technicalSkills = [...state.technicalSkills, action.payload.skill]
                  } else if (action.payload.group === 'programming') {
                        state.programmingSkills = [...state.programmingSkills, action.payload.skill]
                  } else {
                        state.databaseSkills = [...state.databaseSkills, action.payload.skill]
                  }

            },
            removeSkills: (state, action) => {
                  let newArray = state.skills.filter((_, i) => i !== action.payload.index)
                  state.skills = newArray
            },
            updateLanguage: (state, action) => {
                  const language = state.lang.find(item => item.name === action.payload);
                  if (language) {
                        language.checked = !language.checked; // Direct mutation is safe here!
                  }
            },
            addLanguages: (state, action) => {
                  state.languages = [...state.languages, action.payload]
                  //state.languages = action.payload
            },
            removeLanguage: (state, action) => {
                  //console.log('payloa')
                  //console.log(action.payload)
                  let newArray = state.languages.filter((_, i) => _ !== action.payload)
                  state.languages = newArray
            },
            addCareerObjective: (state, action) => {
                  state.career_objectives = [...state.career_objectives, action.payload]
            },
            addProfessionalSummary: (state, action) => {
                  state.professional_summary = [...state.professional_summary, action.payload]
            },
            clearCareerObjectives: (state) => {
                  state.career_objectives = [];

            },
            clearProfessionalSummary: (state) => {
                  state.professional_summary = []
            },
            updateRefereesSkipStatus: (state, action) => {
                  state.referees_skip = !state.referees_skip
            },
            updateTemplateType: (state, action) => {
                  //console.log("EE")
                  //console.log(str)
                  state.templateType = action.payload;
            }

      }
})



export const actions = cvSlice.actions;

export const {
      resetCV,
      //updateTemplate, 
      updatePersonInfo,
      updateColorScheme,
      addExperience,
      resetDuties,
      //updateExperience,
      //removeResponsibity,
      addEducation,
      updateEducation,
      resetEducation,
      addSkills,
      removeSkills,
      addLanguages,
      removeLanguage,
      addReferee,
      resetReferees,
      removeReferee,
      addCareerObjective,
      clearCareerObjectives,
      clearProfessionalSummary,
      updateRefereesSkipStatus,
      updateTemplateType
} = cvSlice.actions;

export const getCV = (state) => state.cv;
export const getColorScheme = (state) => state.cv.colorScheme;
export const selectPersonInfo = (state) => state.cv.personInfo;
export const selectExperience = (state) => state.cv.experience;
export const selectEducation = (state) => state.cv.education;
export const selectSkills = (state) => state.cv.skills;
export const selectReferees = (state) => state.cv.referees;
export const selectCareerObjectives = (state) => state.cv.career_objectives;
export const selectProsionalSummary = (state) => state.cv.professional_summary;
export const selectLanguages = (state) => state.cv.lang;
export const selectItems = (state) => state.cv.templates;
export const getReferenceSkip = (state) => state.cv.referees_skip;
export const selectPersonalSkills = (state) => state.cv.personalSkills;
export const selectTechnicalSkills = (state) => state.cv.technicalSkills;
export const selectProgrammingSkills = (state) => state.cv.programmingSkills;
export const selectDatabSkills = (state) => state.cv.databaseSkills;
export const selectClassicTemplates = (state) => state.cv.classicTemplates;
export const selectModernTemplates = (state) => state.cv.modernTemplates;
export const selectAbstractemplates = (state) => state.cv.abstractTemplates;
export const selectTemplateType = (state) => state.cv.templateType;

export const selectTemplatesByStyle = createSelector(
      [selectItems, (state, style) => style], (items, style) => items.filter(item => item.style === style)
);
export const filterTemplatesByStyle = (state, style) => state.cv.templates.filter(item => item.style === style);


export default cvSlice.reducer;
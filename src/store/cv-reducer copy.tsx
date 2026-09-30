import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPersonInfo, IEducation ,IExperience} from "./default-exports";


type ResumeState = {
    template: string | null
    colorScheme: string | null,
    personInfo: IPersonInfo | null
    education: [IEducation] | IEducation[]
    experience:  [IExperience] | IExperience[]
}

const initialPersonInfoState: IPersonInfo = {
        position: '',
        firstName: '',
        profileImage: '',
        lastName: '',
        email: '',
        mobile: '',
        address: '',
        career_objective: ''
}
const initExperience: IExperience[] = []

export const cvSlice = createSlice({
    name: 'cv',
    //initialState: {template: '',colorScheme: '',personalInfo: {'profileImage': 'dd','firstName':'[Your Name]'},education: [],experience : []} as ResumeState,
    initialState: {template: '',colorScheme: '',personInfo: initialPersonInfoState,education: [],experience: []} as ResumeState,
    reducers: {
        updateTemplate: ( state,{ payload:{ template },}: PayloadAction<{template: string}>) =>{
                state.template = template;
        },
        updateColorScheme: ( state,{ payload:{ colorScheme },}: PayloadAction<{colorScheme: string}>) =>{
                state.template = colorScheme;
        },
        
        updatePersonInfo: (state, action: PayloadAction<IPersonInfo>) =>{
              state.personInfo = action.payload;
        },
        updateExperience: (state, action: PayloadAction<IExperience>) =>{
              state.experience.push(action.payload);
        },
        updateResponsibilty: (state, action: PayloadAction<string>) =>{
              //const responsibilty = state.experience.responsibiltiy;
        },
        addEducation: (state,{ payload: { education },}:PayloadAction<{education:IEducation}>) =>{
                state.education.push(education);
        },
        addExperience: (state,action: PayloadAction<IExperience>) =>{
              state.experience = [...state.experience,action.payload]
        }
    }
})



export const actions = cvSlice.actions;

export const { updateTemplate,updatePersonInfo,updateColorScheme,addExperience } = cvSlice.actions;

export const getCV = (state) => state.cv;
export const getColorScheme = ( state ) => state.cv.colorScheme;
export const selectPersonInfo = (state) => state.cv.personInfo;
export const selectExperience = (state) => state.cv.experience;

export default cvSlice.reducer;
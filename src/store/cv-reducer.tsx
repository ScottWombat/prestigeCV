import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PersonalInfo, Education ,Experience} from "./default-exports";


type ResumeState = {
    template: string | null
    personalInfo: PersonalInfo | null
    education: [Education] | Education[]
    experience:  [Experience] | Experience[]
}



export const cvSlice = createSlice({
    name: 'cv',
    initialState: {template: '',personalInfo: {'profileImage': 'dd'},education: [],experience : []} as ResumeState,
    reducers: {
        updateTemplate: ( state,{ payload:{ template },}: PayloadAction<{template: string}>) =>{
                state.template = template;
        },
        updatePersonalInfo: (state, action: PayloadAction<PersonalInfo>) =>{
                state.personalInfo = action.payload;
        },
        addEducation: (state,{ payload: { education },}:PayloadAction<{education:Education}>) =>{
                state.education.push(education);
        },
        addExperience: (state,action: PayloadAction<Experience>) =>{
                state.experience.push(action.payload)
        }
    }
})



export const { updatePersonalInfo} = cvSlice.actions;


export const selectPersonalInfo = (state) => state.cv.personalInfo;
export default cvSlice.reducer;
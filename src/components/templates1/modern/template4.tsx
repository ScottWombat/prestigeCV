import {useState} from 'react';
import { capitalize, upperCase } from '@components/utils/app-utils';
import {useAppSelector } from '@store/hooks';
import styles from './template4.module.css';
import * as A from '@components/templates1/app.styled';
//import * as M from '@components/templates/master-styled';
import * as T from './template4.styled';

const Template4 = ({colorScheme,id}) => {
    console.log("dddd")
    console.log(id)
    const a = { a: 1}
    const b = {a:1,b: 2,c:3};
    const cv = useAppSelector((state: any) => state.cv);
    const firstName = capitalize(cv.personInfo.firstName)
    const lastName = upperCase(cv.personInfo.lastName)
    return(
    <A.TemplateContainer>
        <T.LeftSection>

           {id === "11" && <T.LeftAngle fontColor={colorScheme.hex1} bgColor={colorScheme.hex4}/>}
           {id === "12" && <T.RightAngle fontColor={colorScheme.hex1} bgColor={colorScheme.hex4}/>}
           {id === "13" && <T.CenterSquare fontColor={colorScheme.hex1} bgColor={colorScheme.hex4}/>}
           <T.OverLay>
           <T.CircleContainer>
                <T.CircleImage src={cv.personInfo.profileImage}/>
           </T.CircleContainer>
           <T.NameWrapper>
            <T.FName>{firstName}</T.FName> 
            <T.LName>{lastName}</T.LName>
            <T.Position>{cv.personInfo.position}</T.Position>
            </T.NameWrapper>
            <T.HeaderWrapper>
                <A.StyledIcon className={'fa-solid fa-circle-notch'} fontColor={colorScheme.hex1}/>&nbsp;
                <T.TopicName fontColor={colorScheme.hex1}>Contact</T.TopicName>
            </T.HeaderWrapper>
             <T.ContactWrapper>
            <A.StyledList ulStyle={'square'}>
                <A.YAxisStyledItem>{cv.personInfo.email}</A.YAxisStyledItem>
                <A.YAxisStyledItem>{cv.personInfo.mobile}</A.YAxisStyledItem>
                 <A.YAxisStyledItem>{cv.personInfo.address}</A.YAxisStyledItem>
            </A.StyledList>
            </T.ContactWrapper>
            <T.HeaderWrapper>
                <A.StyledIcon className={'fa-solid fa-circle-notch'} fontColor={colorScheme.hex1}/>&nbsp;
                <T.TopicName fontColor={colorScheme.hex1}>Education</T.TopicName>
            </T.HeaderWrapper>
             {cv.education.map((edu, ref) => (
            <T.ContactWrapper>
              <A.RowWrapper> 
              <A.DivBullet/>
              <A.RowContent>
              <b>{edu.startYear}-{edu.endYear}</b><br/>{edu.qualification}<br/>{edu.major}<br/>{edu.institution}
              </A.RowContent>
              </A.RowWrapper>
            </T.ContactWrapper>
            ))}
            <T.HeaderWrapper>
                <A.StyledIcon className={'fa-solid fa-circle-notch'} fontColor={colorScheme.hex1}/>&nbsp;
                 <T.TopicName fontColor={colorScheme.hex1}>Languages</T.TopicName>
            </T.HeaderWrapper>
             <T.ContactWrapper>
            <A.StyledList ulStyle={'square'}>
                {cv.languages.map((lang, ref) => (
                <A.YAxisStyledItem>{lang}</A.YAxisStyledItem>
                ))}
            </A.StyledList>
            </T.ContactWrapper>
            {!cv.referees_skip &&
            <>
            <T.HeaderWrapper>
                <A.StyledIcon className={'fa-solid fa-circle-notch'} fontColor={colorScheme.hex1}/>&nbsp;
                 <T.TopicName fontColor={colorScheme.hex1}>References</T.TopicName>
            </T.HeaderWrapper>
              {cv.referees.map((re, ref) => (
                    <T.ContactWrapper>
                    <A.RowWrapper> 
                    <A.DivBullet/>
                    <A.RowContent>
                    <b>{re.name}</b><br/>{re.email}<br/>{re.mobile}
                    </A.RowContent>
                    </A.RowWrapper>
                    </T.ContactWrapper>
                ))}
            </>
            }
           </T.OverLay>
        </T.LeftSection>
        <T.RightSection>
            <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'} fontColor={colorScheme.hex1}/>&nbsp;
                 <T.TopicName fontColor={colorScheme.hex1}>Career Objectives</T.TopicName>
            </T.HeaderWrapper>
              {cv.career_objectives.map((career,index) =>  
                <>
                <T.ContactWrapper1 >
                {career}
                </T.ContactWrapper1>
                {index +1 < cv.career_objectives.length && <br/>}
                </>
                )}
             
             <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'} fontColor={colorScheme.hex1}/>&nbsp;
                 <T.TopicName fontColor={colorScheme.hex1}>Professional Summary</T.TopicName>
            </T.HeaderWrapper>
              {cv.professional_summary.map((pro,index) =>  
                <>
                <T.ContactWrapper1 >
                {pro}
                </T.ContactWrapper1>
                {index +1 < cv.professional_summary.length && <br/>}
                </>
                )}
             <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'} fontColor={colorScheme.hex1}/>&nbsp;
                 <T.TopicName fontColor={colorScheme.hex1}>Personal Skills</T.TopicName>
            </T.HeaderWrapper>
            <T.ContactWrapper2>
                   {cv.personalSkills.map((skill, index) => 
                        <A.RowWrapper>
                        <A.DivBullet/><A.RowContent width='210px'>{skill}</A.RowContent>
                       </A.RowWrapper>
                   )}
            </T.ContactWrapper2>
            {cv.technicalSkills.length > 0 &&
            <>
            <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'} fontColor={colorScheme.hex1}/>&nbsp;
                 <T.TopicName fontColor={colorScheme.hex1}>Technical Skills</T.TopicName>
            </T.HeaderWrapper>
            <T.ContactWrapper2>
                   {cv.technicalSkills.map((tec, index) => 
                        <A.RowWrapper>
                        <A.DivBullet/><A.RowContent width='210px'>{tec}</A.RowContent>
                       </A.RowWrapper>
                   )}
            </T.ContactWrapper2>
            </>
            }
            {cv.programmingSkills.length > 0 &&
            <>
            <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'} fontColor={colorScheme.hex1}/>&nbsp;
                 <T.TopicName fontColor={colorScheme.hex1}>Programming Skills</T.TopicName>
            </T.HeaderWrapper>
            <T.ContactWrapper2>
                   {cv.programmingSkills.map((pro, index) => 
                        <A.RowWrapper>
                        <A.DivBullet/><A.RowContent width='210px'>{pro}</A.RowContent>
                       </A.RowWrapper>
                   )}
            </T.ContactWrapper2>
            </>
            }
            {cv.databaseSkills.length > 0 &&
            <>
            <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'} fontColor={colorScheme.hex1}/>&nbsp;
                 <T.TopicName fontColor={colorScheme.hex1}>Database Skills</T.TopicName>
            </T.HeaderWrapper>
            <T.ContactWrapper2>
                   {cv.databaseSkills.map((db, index) => 
                        <A.RowWrapper>
                        <A.DivBullet/><A.RowContent width='210px'>{db}</A.RowContent>
                       </A.RowWrapper>
                   )}
            </T.ContactWrapper2>
            </>
            }
            <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'} fontColor={colorScheme.hex1}/>&nbsp;
                 <T.TopicName fontColor={colorScheme.hex1}>Work Experience</T.TopicName>
            </T.HeaderWrapper>
             <T.ContactWrapper2>
                  {cv.experiences.map((exp, index) => 
                    <>
                    <T.ExperiencTitleWrapper>           
                        <T.WorkTag>{exp.company}</T.WorkTag>
                        <T.WorkTag textAlign={'right'}>{exp.startYear}-{exp.endYear}</T.WorkTag>
                    </T.ExperiencTitleWrapper>
                    <T.ExperienceCompany>
                        {exp.position}
                    </T.ExperienceCompany>
                    <T.Experience>
                        
                         {exp.duty.map((du,inx) =>(
                             <A.RowWrapper>
                        <A.DivBullet/><A.RowContent width={'100%'}>{du}</A.RowContent>
                       </A.RowWrapper>
                         ))}    
                    </T.Experience>
                    </>
                  )}
             </T.ContactWrapper2>
        </T.RightSection>
    </A.TemplateContainer>
    )
}

export default Template4;
import { useState, useEffect, useRef } from 'react';
import * as T from './template2.styled';
import './main.css';
import { useAppDispatch, useAppSelector } from '@store/hooks';

const upperCase = (value: any) => {
    return value === undefined ? '' : value.toUpperCase()
}
const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const formatPosition = (str) => {
    if (!str) return '';
    const words: string[] = str.split(" ")
    let final = '';
    for (var i = 0; i < words.length; i++) {
        final = + capitalize(words[i]) + ' '
    }
    return final.trim()
}
const Template1 = ({ colorScheme }) => {

    const cv = useAppSelector((state: any) => state.cv);
    const firstName = capitalize(cv.personInfo.firstName)
    const lastName = upperCase(cv.personInfo.lastName)
    useEffect(() => {
        //console.log(cv.programmingSkills.length)
    })
    return (
        <T.Container>
            <T.BGLayer>
                <T.Overlay0 />
                <T.Overlay1 hex1={colorScheme.hex1} />
                <T.Overlay2 hex2={colorScheme.hex2} />
                <T.Overlay3>
                    <T.Header>
                        <T.NameWrapper >
                            <T.NameRow>
                                <div>
                                    <T.Fname>{firstName}1</T.Fname>
                                    <T.Lname>{lastName}</T.Lname>
                                </div>
                            </T.NameRow>
                            <T.Position>{cv.personInfo.position}</T.Position>
                        </T.NameWrapper>
                        <T.Circle hex1={colorScheme.hex1}>
                            <T.Image>
                                <img className="profile-image" src={cv.personInfo.profileImage} />
                            </T.Image>
                        </T.Circle>
                    </T.Header>
                </T.Overlay3>
            </T.BGLayer>
            <T.ContentLayer>
                <T.ContentLeft>
                    <T.LeftHeaderName>Contact</T.LeftHeaderName>
                    <T.LeftHeader style={{fontWeight:'bold'}}>Address:</T.LeftHeader>
                    <T.LeftHeaderRow>{cv.personInfo.address}</T.LeftHeaderRow>
                    <T.LeftHeader style={{fontWeight:'bold'}}>Email:</T.LeftHeader>
                    <T.LeftHeaderRow>{cv.personInfo.email}</T.LeftHeaderRow>
                    <T.LeftHeader style={{fontWeight:'bold'}}>Mobile:</T.LeftHeader>
                    <T.LeftHeaderRow>{cv.personInfo.mobile}</T.LeftHeaderRow>
                    
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                     <T.LeftHeaderName>Languages</T.LeftHeaderName>
                    <T.Skills>
                       
                        {cv.languages.map((lang, ref) => (
                            <span><T.Bullet1 /><T.SkillName>{lang}</T.SkillName></span>
                        ))}
                        
                        {/*
                            <li><T.Bullet/><T.SkillName>English</T.SkillName></li>
                            <li><T.Bullet/><T.SkillName>German</T.SkillName></li>
                        */}
                    </T.Skills>
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                    <T.LeftHeaderName>Education</T.LeftHeaderName>
                    <ul style={{marginLeft:'20px',color: 'red'}}>
                    {cv.education.map((edu, ref) => (
                        <li style={{color:'#000'}}>
                            <T.LeftHeader>{edu.qualification}/{edu.major}</T.LeftHeader>
                             <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                            <T.LeftHeader1>{edu.institution} &nbsp;&nbsp;{edu.startYear}-{edu.endYear}</T.LeftHeader1>
                        </li>
                    ))}
                    </ul>
                   
                    
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                    <T.Skills>
                        {cv.skills.map((skill, ref) => (
                            <li><T.Bullet /><T.SkillName>{skill}</T.SkillName></li>
                        ))}
                    </T.Skills>
                    {!cv.referees_skip &&
                    <>
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                   
                    <T.LeftHeaderName>References</T.LeftHeaderName>

                    {cv.referees.map((ref, index) => (
                        <div>
                            <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                            <T.LeftHeaderRow>{ref.id}.&nbsp;{ref.name}</T.LeftHeaderRow>
                            <br/>
                            <T.LeftHeaderRow>email:&nbsp;{ref.email}</T.LeftHeaderRow>
                            <br/>
                            <T.LeftHeaderRow>mobile:&nbsp;{ref.mobile}</T.LeftHeaderRow>
                        </div>
                    ))}
                    </>
                    }
                    {/*}
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                    <T.LeftHeaderRow>1. Jobcob Leak</T.LeftHeaderRow>
                    <T.LeftHeaderRow>jacob.leak@gmail.com</T.LeftHeaderRow>
                    <T.LeftHeaderRow>046265139</T.LeftHeaderRow>
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                    <T.LeftHeaderRow>2. Emma Simpsons</T.LeftHeaderRow>
                    <T.LeftHeaderRow>jacob.leak@gmail.com</T.LeftHeaderRow>
                    <T.LeftHeaderRow>046265139</T.LeftHeaderRow>
                    */}
                </T.ContentLeft>
                <T.ContentRight>
                    <T.ContentRightHeader>
                        <T.HeaderTitle><T.Dot hex1={colorScheme.hex1} ></T.Dot><T.RightHeaderName>Career Objectives</T.RightHeaderName></T.HeaderTitle>
                    </T.ContentRightHeader>
                    {/*}
                   <T.Paragraph>
                    Analytical Data Analyst with 5+ years of experience in the financial sector, specializing in predictive modeling and data mining. Leveraged SQL and Tableau to streamline data cleaning processes, improving reporting efficiency by 35%. Expert at translating complex datasets into actionable strategies for cross-functional teams.
                   </T.Paragraph>
                   */}
                    {cv.career_objectives.map((objective, index) => (
                        <T.Paragraph>
                            {objective}
                        </T.Paragraph>
                    ))}
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                    <T.ContentRightHeader>
                        <T.HeaderTitle><T.Dot hex1={colorScheme.hex1}></T.Dot><T.RightHeaderName>Professional Summary</T.RightHeaderName></T.HeaderTitle>
                    </T.ContentRightHeader>

                    {cv.professional_summary.map((summary, index) => (
                        <T.Paragraph>
                            {summary}
                        </T.Paragraph>
                    ))}
                    {/*}
                   <T.Paragraph>
                   {cv.personInfo.career_objective}
                   </T.Paragraph>
                   */}
                   {/*}
                     <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                    <T.ContentRightHeader>
                        <T.HeaderTitle><T.Dot></T.Dot><T.RightHeaderName>Education</T.RightHeaderName></T.HeaderTitle>
                    </T.ContentRightHeader>
                    {cv.education.map((edu, ref) => (
                        <>
                            <T.RightHeader><T.Bullet></T.Bullet>{edu.qualification}/{edu.major}</T.RightHeader>
                            <T.RightHeader>{edu.institution} &nbsp;&nbsp;{edu.startYear}-{edu.endYear}</T.RightHeader>
                        </>
                    ))}
                    */}
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                    <T.ContentRightHeader>
                        <T.HeaderTitle><T.Dot hex1={colorScheme.hex1}></T.Dot><T.RightHeaderName>Personal Skills</T.RightHeaderName></T.HeaderTitle>
                    </T.ContentRightHeader>
                    <T.SkillGroup>
                        {cv.personalSkills.map((skill, index) => (
                            <div style={{ display: 'inline-flex', gap: '10px' }}>
                                <T.Bullet />
                                <T.SkillContent>{skill}</T.SkillContent>
                            </div>
                        ))}
                    </T.SkillGroup>

                    {cv.technicalSkills.length > 0 &&
                        <div>
                            <T.ContentRightHeader>
                                <T.HeaderTitle><T.Dot hex1={colorScheme.hex1}></T.Dot><T.RightHeaderName>Technical Skills</T.RightHeaderName></T.HeaderTitle>
                            </T.ContentRightHeader>
                            <T.SkillGroup>
                                {cv.technicalSkills.map((skill, index) => (
                                    <span style={{ display: 'inline-flex', gap: '10px' }}>
                                        <T.Bullet />
                                        <T.SkillContent>{skill}</T.SkillContent>
                                    </span>
                                ))}
                            </T.SkillGroup>
                        </div>}

                    {cv.programmingSkills.length > 0 &&
                        <div>
                            <T.ContentRightHeader>
                                <T.HeaderTitle><T.Dot  hex1={colorScheme.hex1}></T.Dot><T.RightHeaderName>Programming Skills</T.RightHeaderName></T.HeaderTitle>
                            </T.ContentRightHeader>
                            <T.SkillGroup>
                                {cv.programmingSkills.map((skill, index) => (
                                    <span style={{ display: 'inline-flex', gap: '10px' }}>
                                        <T.Bullet />
                                        <T.SkillContent>{skill}</T.SkillContent>
                                    </span>
                                ))}
                            </T.SkillGroup>
                        </div>}
                    {cv.databaseSkills.length > 0 &&
                        <div>
                            <T.ContentRightHeader>
                                <T.HeaderTitle><T.Dot  hex1={colorScheme.hex1}></T.Dot><T.RightHeaderName>Database Management Skills</T.RightHeaderName></T.HeaderTitle>
                            </T.ContentRightHeader>
                            <T.SkillGroup>
                                {cv.databaseSkills.map((skill, index) => (
                                    <span style={{ display: 'inline-flex', gap: '10px' }}>
                                        <T.Bullet />
                                        <T.SkillContent>{skill}</T.SkillContent>
                                    </span>
                                ))}
                            </T.SkillGroup>
                        </div>}

                    <T.ContentRightHeader>
                        <T.HeaderTitle><T.Dot  hex1={colorScheme.hex1}></T.Dot><T.RightHeaderName>Work Experience</T.RightHeaderName></T.HeaderTitle>
                    </T.ContentRightHeader>
                   
                    
                    {cv.experiences.map((exp, index) => (
                       <>
                        <T.ExperienceCompany>{exp.position}</T.ExperienceCompany>
                        <T.ExperiencTitleWrapper>
                       
                        <div style={{ width: '50%',fontWeight:'bold' }}>{exp.company}</div>
                        <div style={{ width: '50%', fontWeight:'bold',textAlign: 'right' }}>{exp.startYear}-{exp.endYear}</div>
                         </T.ExperiencTitleWrapper>
                         <T.Experience>
                         <ul className="exp_ul">
                         {exp.duty.map((d,inx) =>(
                            <li className="exp_li" id={inx}>{d}</li>
                         ))}    

                         </ul>
                         </T.Experience>    
                        {/*
                        {console.log(${exp})}
                        {exp.duty.map((res,inx)=>(
                            <li>{res}</li>
                        ))}
                        */}
                       
                       
                       </>
                   
                    ))}
                    
                    {/*}
                    <T.ExperiencTitleWrapper>
                        <div style={{ width: '50%' }}>{cv.experience.position} | {cv.experience.company}</div>
                        <div style={{ width: '50%', textAlign: 'right' }}>2022-Present</div>
                    </T.ExperiencTitleWrapper>
                    <T.Experience>
                        <ul>
                            <li>tes</li>
                            <li>eee</li>
                        </ul>
                    </T.Experience>
                    */}
                    {/*}
                    <T.LeftEmptyRow>&nbsp;</T.LeftEmptyRow>
                    <T.ExperiencTitleWrapper>
                        <div style={{ width: '50%' }}>Data Analyst | IBM</div>
                        <div style={{ width: '50%', textAlign: 'right' }}>2022-Present</div>
                    </T.ExperiencTitleWrapper>
                    <T.Experience>
                        <ul>
                            <li>tes</li>
                            <li>eee</li>
                        </ul>
                    </T.Experience>
                    */}
                </T.ContentRight>
                {/*}
                <T.ContentRightHeader>
                   <T.HeaderTitle><T.Dot></T.Dot><div style={{paddingLeft:'5px'}}>Objective</div></T.HeaderTitle>
                  <div>eee</div>
                  <div>eee</div>
                </T.ContentRightHeader>
                  <T.ContentRightHeader>
                   <T.HeaderTitle><T.Dot></T.Dot><div style={{paddingLeft:'5px'}}>Objective</div></T.HeaderTitle>
                  <div>eee</div>
                  <div>eee</div>
                </T.ContentRightHeader> 
                */}
            </T.ContentLayer>
        </T.Container>
    )
}

export default Template1;
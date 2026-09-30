import {useState} from 'react';
import { capitalize, upperCase } from '@components/utils/app-utils';
import {useAppSelector } from '@store/hooks';
import styles from './template4.module.css';
import * as A from '@components/templates1/app.styled';
import * as M from '@components/templates/master-styled';
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
                <A.StyledIcon className={'fa-solid fa-circle-notch'}/>&nbsp;
                <div style={{color:colorScheme.hex1}}>Contact</div>
            </T.HeaderWrapper>
             <T.ContactWrapper>
            <A.StyledList ulStyle={'square'}>
                <A.YAxisStyledItem>{cv.personInfo.email}</A.YAxisStyledItem>
                <A.YAxisStyledItem>{cv.personInfo.mobile}</A.YAxisStyledItem>
                 <A.YAxisStyledItem>{cv.personInfo.address}</A.YAxisStyledItem>
            </A.StyledList>
            </T.ContactWrapper>
            <T.HeaderWrapper>
                <A.StyledIcon className={'fa-solid fa-circle-notch'}/>&nbsp;
                <div>Education</div>
            </T.HeaderWrapper>
             {cv.education.map((edu, ref) => (
            <T.ContactWrapper>
              <A.RowWrapper> 
              <A.DivBullet/>
              <A.RowContent>
              <b>{edu.startYear}-{edu.endYear}</b><br/>{edu.qualification}&nbsp;in&nbsp;{edu.major}<br/>{edu.institution}
              </A.RowContent>
              </A.RowWrapper>
            </T.ContactWrapper>
            ))}
            <T.HeaderWrapper>
                <A.StyledIcon className={'fa-solid fa-circle-notch'}/>&nbsp;
                <div>Languages</div>
            </T.HeaderWrapper>
             <T.ContactWrapper>
            <A.StyledList ulStyle={'square'}>
                {cv.languages.map((lang, ref) => (
                <A.YAxisStyledItem>{lang}</A.YAxisStyledItem>
                ))}
            </A.StyledList>
            </T.ContactWrapper>

            <T.HeaderWrapper>
                <A.StyledIcon className={'fa-solid fa-circle-notch'}/>&nbsp;
                <div>References</div>
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
            
           </T.OverLay>
        </T.LeftSection>
        <T.RightSection>
            <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'}/>&nbsp;
                <div>Career Objectives</div>
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
                <A.StyledIcon className={'fa-solid fa-circle-notch'}/>&nbsp;
                <div>Professional Summary</div>
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
                <A.StyledIcon className={'fa-solid fa-circle-notch'}/>&nbsp;
                <div>Personal Skills</div>
            </T.HeaderWrapper>
            <T.ContactWrapper2>
                   {cv.personalSkills.map((skill, index) => 
                        <A.RowWrapper>
                        <A.DivBullet/><A.RowContent width='210px'>{skill}</A.RowContent>
                       </A.RowWrapper>
                   )}
            </T.ContactWrapper2>
            <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'}/>&nbsp;
                <div>Technical Skills</div>
            </T.HeaderWrapper>
            <T.ContactWrapper2>
                   {cv.technicalSkills.map((tec, index) => 
                        <A.RowWrapper>
                        <A.DivBullet/><A.RowContent width='210px'>{tec}</A.RowContent>
                       </A.RowWrapper>
                   )}
            </T.ContactWrapper2>
            <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'}/>&nbsp;
                <div>Programming Skills</div>
            </T.HeaderWrapper>
            <T.ContactWrapper2>
                   {cv.programmingSkills.map((pro, index) => 
                        <A.RowWrapper>
                        <A.DivBullet/><A.RowContent width='210px'>{pro}</A.RowContent>
                       </A.RowWrapper>
                   )}
            </T.ContactWrapper2>
            <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'}/>&nbsp;
                <div>Database Skills</div>
            </T.HeaderWrapper>
            <T.ContactWrapper2>
                   {cv.databaseSkills.map((db, index) => 
                        <A.RowWrapper>
                        <A.DivBullet/><A.RowContent width='210px'>{db}</A.RowContent>
                       </A.RowWrapper>
                   )}
            </T.ContactWrapper2>
            <T.HeaderWrapper marginRight={'55px'}>
                <A.StyledIcon className={'fa-solid fa-circle-notch'}/>&nbsp;
                <div>Work Experence</div>
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
const Template4_1 = () => {
     const [fontColor, setFontColor] = useState("#bc535a")
    const cv = useAppSelector((state: any) => state.cv);
    const firstName = capitalize(cv.personInfo.firstName)
    const lastName = upperCase(cv.personInfo.lastName)
    const fullName = firstName + " " + lastName;
    return (
        <div className={styles.page_container}>
            <section className={styles.left_section}>
                <div className={styles.left_angle}></div>
                <div className={styles.over_lay}>
                    <div className={styles.image_wrapper}>
                        <img className={styles.image_cover} src={cv.personInfo.profileImage}  />
                    </div>
                    <div className={styles.name_wrapper}>
                        {fullName}
                    </div>
                    <div className={styles.title_wrapper}>
                        {cv.personInfo.position}
                    </div>
                    <span className={styles.header_wrapper}>
                        <i className="fa-solid fa-circle-notch"></i>
                        &nbsp;&nbsp;
                        <div>Contact</div>
                    </span>
                    <span className={styles.contact_wrapper}>
                        <i className="fa-solid fa-phone" style={{ fontSize:'0.6rem',color: 'rgba(0,0,0,0.6)' }}></i>
                        &nbsp;&nbsp;
                        <div style={{marginTop:'-2px'}}>{cv.personInfo.mobile}</div>
                    </span>
                    <span className={styles.contact_wrapper}>
                        <i className="fa-solid fa-envelope" style={{ fontSize:'0.6rem',color: 'rgba(0,0,0,0.6)' }}></i>
                        &nbsp;&nbsp;
                        <div style={{marginTop:'-2px'}}>{cv.personInfo.email}</div>
                    </span>
                    <span className={styles.contact_wrapper}>
                        <i className="fa-solid fa-location-dot" style={{ color: '#000' }}></i>
                        &nbsp;&nbsp;
                        <div style={{marginTop:'-2px'}}>{cv.personInfo.address}</div>
                    </span>
                    <span className={styles.header_wrapper}>
                        <i className="fa-solid fa-graduation-cap"></i>
                        &nbsp;&nbsp;
                        <div>Languages</div>
                    </span>

                    <ul className={styles.ul_wrapper}>
                        {cv.education.map((edu) =>
                        <>
                        <li className={styles.li_wrapper}><b>{edu.qualification}</b><br/>{edu.major}<br/>{edu.institution}</li>
                        <br/>
                        </>
                        )}
                    </ul>

                    <span className={styles.header_wrapper}>
                        <i className="fa-solid fa-feather-pointed"></i>
                        &nbsp;&nbsp;
                        <div>Education</div>
                    </span>
                    <ul className={styles.ul_wrapper}>
                        {cv.languages.map((lan) =>
                        <li className={styles.li_wrapper}>{lan}</li>
                        )}
                       
                    </ul>
                    <span className={styles.header_wrapper}>
                        <i className="fa-solid fa-anchor"></i>
                        &nbsp;&nbsp;
                        <div>Reference1</div>
                    </span>
                    <ul className={styles.ul_wrapper}>
                        {cv.referees.map((ref) =>
                        <>
                        <li className={styles.li_wrapper}><b>{ref.name}</b><br />{ref.email}<br />{ref.mobile}</li>
                        <br/>
                        </>
                        )}   

                    </ul>
                </div>
            </section>
            <section className={styles.right_section}>
                <br/>
                <br/>
                <span className={styles.right_header_wrapper}>
                    <i className="fa-solid fa-bullseye"></i>
                    &nbsp;&nbsp;
                    <div>Career Objectives11</div>
                </span>
                <br/>
                {cv.career_objectives.map((career) =>  
                <>
                <div className={styles.para_wrapper}>
                    <div style={{width:'100%'}}>{career}</div>
                </div>
                <br/>
                </>
                )}
                <br/>
                <span className={styles.right_header_wrapper}>
                    <i className="fa-solid  fa-cog"></i>
                    &nbsp;&nbsp;
                    <div>Professional Summary</div>
                </span>
                <br/>
                {cv.professional_summary.map((summary) =>  
                <>
                <div className={styles.para_wrapper}>
                          <div style={{width:'100%'}}>{summary}</div>
                </div>
                <br/>
                </>
                )}
                <br/>
                <span className={styles.right_header_wrapper}>
                    <i className="fa-solid  fa-coffee"></i>
                    &nbsp;&nbsp;
                    <div>Personal Skills</div>
                </span>
                 <br/>
                <span className={styles.para_wrapper}>
                        <M.SkillsWrapper>
                                {cv.personalSkills.map((pe) =>
                                <M.SkillItem><M.Bullet fontColor="#474747" />&nbsp;&nbsp;{pe}</M.SkillItem>
                                )}
                        </M.SkillsWrapper>
                </span>
                {cv.technicalSkills.length > 0 &&
                <>
                <br/>
                <span className={styles.right_header_wrapper}>
                    <i className="fa-solid  fa-cogs"></i>
                    &nbsp;&nbsp;
                    <div>Technical Skills</div>
                </span>
                <br/>
                <span className={styles.para_wrapper}>
                        <M.SkillsWrapper>
                                {cv.technicalSkills.map((ts) =>
                                <M.SkillItem><M.Bullet fontColor="#474747" />&nbsp;&nbsp;{ts}</M.SkillItem>
                                )}
                        </M.SkillsWrapper>
                </span>
                </>
                }
                {cv.programmingSkills.length > 0 &&
                <>
                <br/>
                <span className={styles.right_header_wrapper}>
                    <i className="fa-solid  fa-bug"></i>
                    &nbsp;&nbsp;
                    <div>Programming Skills</div>
                </span>
                <br/>
                <span className={styles.para_wrapper}>
                        <M.SkillsWrapper>
                                {cv.programmingSkills.map((pr) =>
                                <M.SkillItem><M.Bullet fontColor="#474747" />&nbsp;&nbsp;{pr}</M.SkillItem>
                                )}
                        </M.SkillsWrapper>
                </span>
                </>
                }
                {cv.databaseSkills.length > 0 &&
                <>
                <br/>
                <span className={styles.right_header_wrapper}>
                    <i className="fa-solid  fa-database"></i>
                    &nbsp;&nbsp;
                    <div>Database Skills</div>
                </span>
                <br/>
                <span className={styles.para_wrapper}>
                        <M.SkillsWrapper>
                                {cv.databaseSkills.map((da) =>
                                <M.SkillItem><M.Bullet fontColor="#474747" />&nbsp;&nbsp;{da}</M.SkillItem>
                                )}
                        </M.SkillsWrapper>
                </span>
                </>
                }
                <br/>
                <span className={styles.right_header_wrapper}>
                    <i className="fa-solid fa-briefcase"></i>
                    &nbsp;&nbsp;
                    <div>Experience</div>
                </span>
                <div className={styles.container}>
                    <ul>
                        {cv.experiences.map((exp) =>
                            <li className={styles.box}>
                            <span></span>
                            <div className={styles.title}>{exp.company}</div>
                            <div className={styles.sub_title}>{exp.position}</div>
                            <div className={styles.info}>
                              
                                {exp.duty.map((du) =>
                                   
                                   <M.DutyItem><M.Bullet fontColor="#474747" />&nbsp;&nbsp;<div>{du}</div>.</M.DutyItem>
                                   
                                   
                                )}
                                
                            </div>
                            <div className={styles.time}>
                                <span>{exp.startYear}-{exp.endYear}</span>
                            </div>
                           </li>
                        )}
                        {/*
                        <li className={styles.box}>
                            <span></span>
                            <div className={styles.title}>Vertical Timeline</div>
                            <div className={styles.sub_title}>created by M A R K</div>
                            <div className={styles.info}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corrupti.</div>
                            <div className={styles.time}>
                                <span>12:00pm</span>
                            </div>
                        </li>
                        <li className={styles.box}>
                            <span></span>
                            <div className={styles.title}>Big Apple</div>
                            <div className={styles.sub_title}>Web Developer</div>
                            <div className={styles.info}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corrupti.</div>
                            <div className={styles.time}>
                                <span>Mar 2021- Feb -2022</span>

                            </div>
                        </li>
                        */}
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default Template4;
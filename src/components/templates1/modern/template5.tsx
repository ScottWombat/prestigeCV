import { lazy } from 'react';
import * as M from '../layout-two-coloumn.styled'
import * as T from './template5.styled';
import * as A from '../app.styled';
import './main.css';
import { useAppSelector } from '@store/hooks';
const Template5 = ({ colorScheme }) => {
    console.log(colorScheme)
     const cv = useAppSelector((state: any) => state.cv);
    return (
        <A.TemplateContainer>
            <A.LeftSection bgColor={colorScheme.hex3}>
                <A.Empty height={'30px'}/>
                <T.LeftRow>
                <A.Frame>
                    <A.InnerFrame imgBorderColor={colorScheme.hex3}>
                        <img className="profile-image" src={cv.personInfo.profileImage} />
                    </A.InnerFrame>
                </A.Frame>
                </T.LeftRow>
                <A.Empty height={'30px'}/>
                <T.LeftRow>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Personal Info</T.HeaderName>
                        </T.TopicWrapper>
                         <T.ContactWrapper>
                                    <A.StyledList ulStyle={'square'}>
                                        <A.YAxisStyledItem>{cv.personInfo.email}</A.YAxisStyledItem>
                                        <A.YAxisStyledItem>{cv.personInfo.mobile}</A.YAxisStyledItem>
                                         <A.YAxisStyledItem>{cv.personInfo.address}</A.YAxisStyledItem>
                                    </A.StyledList>
                        </T.ContactWrapper>
                        <A.Empty height={'20px'}/>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Education</T.HeaderName>
                        </T.TopicWrapper>
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
                        <A.Empty height={'20px'}/>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Languages</T.HeaderName>
                        </T.TopicWrapper>
                         <T.ContactWrapper>
                                    <A.StyledList ulStyle={'square'}>
                                        {cv.languages.map((lang, ref) => (
                                        <A.YAxisStyledItem>{lang}</A.YAxisStyledItem>
                                        ))}
                                    </A.StyledList>
                        </T.ContactWrapper>
                        <A.Empty height={'20px'}/>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>References</T.HeaderName>
                        </T.TopicWrapper>
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
                </T.LeftRow>
            </A.LeftSection>
            <A.RightSection>
                <T.RightRow>
                                    <T.FullName>Luke Jacob<br /></T.FullName>
                                    <T.Role>SURFING INSTRUCTOR</T.Role>
                                    <T.Summary>
                                        <i className="fa-solid fa-single-quote-left"></i>Seeking a challenging role in a fast-paced tech start-up. With 5 years of experience in closing high-value deals and a history of exceeding sales targets by 20%, eager to bring these results to a new environment. Specializes in building long-term client relationships, previously leading to a 30% increase in repeat business.<i className="fa-solid fa-single-quote-left"></i>
                
                                    </T.Summary>
                </T.RightRow>
                <T.TopicWrapper>
                         <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Professional Summary</T.HeaderName>      
                </T.TopicWrapper>
                
                {cv.professional_summary.map((pro,index) =>  
                <>
                <T.ContactWrapper >
                                   {pro}
                                   </T.ContactWrapper>
                                   {index +1 < cv.professional_summary.length && <br/>}
                </>
                )}
                <A.Empty height={'20px'}/>
                <T.TopicWrapper>
                         <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Personal Skills</T.HeaderName>      
                </T.TopicWrapper>
                <T.ContactWrapper2>
                                   {cv.personalSkills.map((skill, index) => 
                                        <A.RowWrapper>
                                        <A.DivBullet/><A.RowContent width='210px'>{skill}</A.RowContent>
                                       </A.RowWrapper>
                                   )}
                </T.ContactWrapper2>
                <A.Empty height={'20px'}/>
                 <T.TopicWrapper>
                         <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Technical Skills</T.HeaderName>      
                </T.TopicWrapper>
                <T.ContactWrapper2>
                                   {cv.technicalSkills.map((tech, index) => 
                                        <A.RowWrapper>
                                        <A.DivBullet/><A.RowContent width='210px'>{tech}</A.RowContent>
                                       </A.RowWrapper>
                                   )}
                </T.ContactWrapper2>
                <A.Empty height={'20px'}/>
                <T.TopicWrapper>
                         <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Programming Skills</T.HeaderName>      
                </T.TopicWrapper>
                <T.ContactWrapper2>
                                   {cv.programmingSkills.map((pro, index) => 
                                        <A.RowWrapper>
                                        <A.DivBullet/><A.RowContent width='210px'>{pro}</A.RowContent>
                                       </A.RowWrapper>
                                   )}
                </T.ContactWrapper2>
                <A.Empty height={'20px'}/>
                <T.TopicWrapper>
                         <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Database Skills</T.HeaderName>      
                </T.TopicWrapper>
                <T.ContactWrapper2>
                                   {cv.databaseSkills.map((db, index) => 
                                        <A.RowWrapper>
                                        <A.DivBullet/><A.RowContent width='210px'>{db}</A.RowContent>
                                       </A.RowWrapper>
                                   )}
                </T.ContactWrapper2>
                <A.Empty height={'20px'}/>
                 <T.TopicWrapper>
                         <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Work Experience</T.HeaderName>      
                </T.TopicWrapper>
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
            </A.RightSection>
        </A.TemplateContainer>
    )

}
export default Template5;
/*
const Template36 = ({ colorScheme }) => {
    
    const cv = useAppSelector((state: any) => state.cv);
    return (
        <M.Container leftWidth='230px' fontFamily='Philosopher'>
            <M.LeftContainer bgColor={colorScheme.hex5}>

                <T.LeftRow>
                    <A.Frame>
                        <A.InnerFrame imgBorderColor={colorScheme.hex3}>
                            <img className="profile-image" src={cv.personInfo.profileImage} />
                        </A.InnerFrame>
                    </A.Frame>
                </T.LeftRow>
                <T.LeftRow divHeight="auto" >
                    <T.ContentRow>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Personal Info</T.HeaderName>
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow bgColor={colorScheme.hex5}>
                         <A.StyledList ulStyle={'square'} bgColor={colorScheme.hex5}>
                                        <A.YAxisStyledItem fontColor={colorScheme.hex1}>{cv.personInfo.email}</A.YAxisStyledItem>
                                        <A.YAxisStyledItem fontColor={colorScheme.hex1}>{cv.personInfo.mobile}</A.YAxisStyledItem>
                                         <A.YAxisStyledItem fontColor={colorScheme.hex1}>{cv.personInfo.address}</A.YAxisStyledItem>
                                    </A.StyledList>
                    </T.NextContentRow>
                </T.LeftRow>
                <T.LeftRow divHeight="auto" >
                    <T.ContentRow>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Education</T.HeaderName>
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.LeftRow>
                <T.LeftRow divHeight="auto" >
                    <T.ContentRow>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Languages
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <A.StyledList ulStyle={'square'}>
                        {cv.languages.map((lang, ref) => (
                                        <A.YAxisStyledItem>{lang}</A.YAxisStyledItem>
                        ))}
                        </A.StyledList>
                    </T.NextContentRow>
                </T.LeftRow>
                <T.LeftRow divHeight="auto">
                    <T.ContentRow>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;References
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
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
                    </T.NextContentRow>
                </T.LeftRow>


            </M.LeftContainer>
            <M.RightContainer>
                <T.RightRow divHeight="235px" >
                    <T.FullName>Luke Jacob<br /></T.FullName>
                    <T.Role>SURFING INSTRUCTOR</T.Role>
                    <T.Summary>

                        <i className="fa-solid fa-single-quote-left"></i>Seeking a challenging role in a fast-paced tech start-up. With 5 years of experience in closing high-value deals and a history of exceeding sales targets by 20%, eager to bring these results to a new environment. Specializes in building long-term client relationships, previously leading to a 30% increase in repeat business.<i className="fa-solid fa-single-quote-left"></i>

                    </T.Summary>
                </T.RightRow>
                <T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Professional Summary
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
                <T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Personal Skills
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
                <T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Technical Skills
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
                <T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Programming Skills
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
                <T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Database Skills
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
<T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                             <A.SquareWrapper>
                                <A.TinySquare fontColor={colorScheme.hex5} />
                                <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                            </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Work Experience
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>ddddii</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
            </M.RightContainer>
        </M.Container >
    )
}
export default Template36;
*/
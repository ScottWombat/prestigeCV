import { useState, useEffect } from 'react';
import * as T from './template1.styled';
import { useAppSelector } from '@store/hooks';
import { capitalize, upperCase } from '@components/utils/app-utils';
const Template1 = ({ colorScheme, bgImage }) => {
    const cv = useAppSelector((state: any) => state.cv);
    const firstName = capitalize(cv.personInfo.firstName)
    const lastName = upperCase(cv.personInfo.lastName)
    const [image, setImage] = useState(null)
    useEffect(() => {
        let temp = `/images/modern/${bgImage}.png`;
        //console.log(temp)
        setImage(temp)
    }, [])
    return (
        <T.TemplateContainer>
            <T.Header bgImage={image}>
                <T.ImageWrapper>
                    <T.ImageCover src={cv.personInfo.profileImage} boxShadow={colorScheme.hex1}></T.ImageCover>
                    <T.NameWrapper>
                        <T.FirstName>{firstName}</T.FirstName>
                        <T.LastName fontColor={colorScheme.hex1}>{lastName}</T.LastName>
                    </T.NameWrapper>
                    <T.Info>
                        <T.Email>{cv.personInfo.email}</T.Email>
                        <T.Bar>|</T.Bar>
                        <T.Mobile>0{cv.personInfo.mobile}</T.Mobile>
                        <T.Bar>|</T.Bar>
                        <T.Location>{cv.personInfo.address}</T.Location>
                    </T.Info>
                    <T.Position>
                        {cv.personInfo.position}
                    </T.Position>
                </T.ImageWrapper>
            </T.Header>
            <T.Content>
                <T.Topic fontColor={colorScheme.hex1}><i className="fa-solid fa-pen-to-square" style={{ color: colorScheme.hex1 }}></i>Career Objectives</T.Topic>
                <T.Row>
                    {cv.career_objectives.map((objective, index) => (
                                                                    <T.Paragraph>
                                                                        {objective}
                                                                    </T.Paragraph>
                    ))}
                </T.Row>
                <T.Empty height={'10px'}/>
                <T.Topic fontColor={colorScheme.hex1}><i className="fa-solid fa-pen-to-square" style={{ color: colorScheme.hex1 }}></i>Professional Summary</T.Topic>
                <T.Row>
                    {cv.professional_summary.map((prof, index) => (
                                                                    <T.Paragraph>
                                                                        {prof}
                                                                    </T.Paragraph>
                  ))}
                </T.Row>
                <T.Empty height={'10px'}/>
                <T.Topic fontColor={colorScheme.hex1}><i className="fa-solid fa-pen-to-square" style={{ color: colorScheme.hex1 }}></i>Personal Skills</T.Topic>
                <T.Row>
                    <T.SkillGroup>
                                                {cv.personalSkills.map((per, index) => (
                                                    <div style={{ display: 'inline-flex', gap: '10px',marginBottom:'0px'}}>
                                                        <T.Bullet />
                                                        <T.SkillContent>{per}</T.SkillContent>
                                                    </div>
                                                ))}
                    </T.SkillGroup>
                </T.Row>
                {cv.technicalSkills.length > 0 &&
                <>
                <T.Empty height={'10px'}/>
                <T.Topic fontColor={colorScheme.hex1}><i className="fa-solid fa-pen-to-square" style={{ color: colorScheme.hex1 }}></i>Technical Skills</T.Topic>
                <T.Row>
                    <T.SkillGroup>
                                                {cv.technicalSkills.map((tec, index) => (
                                                    <div style={{ display: 'inline-flex', gap: '10px' }}>
                                                        <T.Bullet />
                                                        <T.SkillContent>{tec}</T.SkillContent>
                                                    </div>
                                                ))}
                    </T.SkillGroup>
                </T.Row>
                </>
                }
                {cv.programmingSkills.length > 0 &&
                <>
                <T.Empty height={'10px'}/>
                <T.Topic fontColor={colorScheme.hex1}><i className="fa-solid fa-pen-to-square" style={{ color: colorScheme.hex1 }}></i>Programming Skills</T.Topic>
                <T.Row>
                    <T.SkillGroup>
                                                {cv.programmingSkills.map((pro, index) => (
                                                    <div style={{ display: 'inline-flex', gap: '10px' }}>
                                                        <T.Bullet />
                                                        <T.SkillContent>{pro}</T.SkillContent>
                                                    </div>
                                                ))}
                    </T.SkillGroup>
                </T.Row>
                </>
                }
                {cv.databaseSkills.length > 0 &&
                <>
                 <T.Empty height={'10px'}/>
                <T.Topic fontColor={colorScheme.hex1}><i className="fa-solid fa-pen-to-square" style={{ color: colorScheme.hex1 }}></i>Database Skills</T.Topic>
                <T.Row>
                    <T.SkillGroup>
                                                {cv.databaseSkills.map((dat, index) => (
                                                    <div style={{ display: 'inline-flex', gap: '10px' }}>
                                                        <T.Bullet />
                                                        <T.SkillContent>{dat}</T.SkillContent>
                                                    </div>
                                                ))}
                    </T.SkillGroup>
                </T.Row>
                </>
                }
                <T.Empty height={'10px'}/>
                <T.Topic fontColor={colorScheme.hex1}><i className="fa-solid fa-pen-to-square" style={{ color: colorScheme.hex1 }}></i>Education</T.Topic>
                <T.Row>
                    <T.SkillGroup>
                                                {cv.education.map((edu, index) => (
      
                                                    <div style={{ display: 'inline-flex', gap: '10px'}}>
                                                        <T.Bullet />
                                                        <T.SkillContent width={'320px'} >{edu.qualification}<br/>{edu.major}<br/>{edu.startYear}-{edu.endYear}</T.SkillContent>
                                                     
                                                    </div>

                                                ))}
                                              
                    </T.SkillGroup>
                    
                </T.Row>
                <T.Empty height={'10px'}/>
                <T.Topic fontColor={colorScheme.hex1}><i className="fa-solid fa-pen-to-square" style={{ color: colorScheme.hex1 }}></i>Languages</T.Topic>
                <T.Row>
                    <T.SkillGroup>
                                                {cv.languages.map((lang, index) => (
                                                    <div style={{ display: 'inline-flex', gap: '10px' }}>
                                                        <T.Bullet />
                                                        <T.SkillContent>{lang}</T.SkillContent>
                                                    </div>
                                                ))}
                    </T.SkillGroup>
                </T.Row>
                <T.Empty height={'15px'}/>
                <T.Topic fontColor={colorScheme.hex1}><i className="fa-solid fa-pen-to-square" style={{ color: colorScheme.hex1}}></i>Work Experience</T.Topic>
                <T.Row>
                     {cv.experiences.map((exp, index) => (
                                                                   <>
                                                                    <T.ExperiencTitleWrapper>
                                                                    <div style={{ width: '50%',fontWeight:'bold' }}>{exp.company}</div>
                                                                    <div style={{ width: '50%', fontWeight:'bold',textAlign: 'right' }}>{exp.startYear}-{exp.endYear}</div>
                                                                     </T.ExperiencTitleWrapper>
                                                                     <T.ExperienceCompany>{exp.position}</T.ExperienceCompany>
                                                                     <T.Experience>
                                                                     <ul>
                                                                     {exp.duty.map((d,inx) =>(
                                                                        <li id={inx}>{d}</li>
                                                                     ))}    
                                            
                                                                     </ul>
                                                                     </T.Experience>    
                                                                  
                                                                   
                                                                   
                                                                   </>
                                                               
                     ))}
                </T.Row>
                {!cv.referees_skip &&
                <>
                <T.Empty height={'15px'}/>
                <T.Topic fontColor={colorScheme.hex1}><i className="fa-solid fa-pen-to-square" style={{ color: colorScheme.hex1}}></i>References</T.Topic>
                <T.Row>
                    <T.SkillGroup>
                                                {cv.referees.map((ref, index) => (
                                                    <div style={{ display: 'inline-flex', gap: '10px' }}>
                                                        <T.Bullet />
                                                        <T.SkillContent>{ref.name}<br/>{ref.email}<br/>{ref.mobile}</T.SkillContent>
                                                    </div>
                                                ))}
                    </T.SkillGroup>       
                </T.Row>
                </>
                }
            </T.Content>
        </T.TemplateContainer>
    )
}
export default Template1;
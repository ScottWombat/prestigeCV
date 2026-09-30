import * as T from './template9.styled';
import * as A from '../app.styled';
import { capitalize, upperCase } from '@components/utils/app-utils';
import { useAppSelector } from '@store/hooks';
const Template9 = ({ colorScheme }) => {
    const cv = useAppSelector((state: any) => state.cv);
    const firstName = capitalize(cv.personInfo.firstName)
    const lastName = upperCase(cv.personInfo.lastName)
    return (
        <T.TemplateContainer>
            <T.CircleLayer>
                <T.BigCircle bgColor={colorScheme.hex3} />
                <T.SmallCircle bgColor={colorScheme.hex4} />
            </T.CircleLayer>
            <T.ContentLayer>
                <A.Empty height={'35px'} />
                <T.ImageWrapper src={cv.personInfo.profileImage} />
                <T.FullName color={colorScheme.hex1}>{firstName}&nbsp;{lastName}</T.FullName>
                <T.Role color={colorScheme.hex1}>{cv.personInfo.position}</T.Role>
                <T.Info>{cv.personInfo.email}&nbsp;|&nbsp;{cv.personInfo.mobile}&nbsp;|&nbsp;{cv.personInfo.address}</T.Info>
                <A.Empty height={'25px'} />
                <T.Row>
                    <T.Header color={colorScheme.hex1}>Career Objectives</T.Header>
                </T.Row>
                <T.Row>
                    <T.Content>
                        {cv.career_objectives.map((objective, index) => (
                                                <T.Paragraph>
                                                    {objective}
                                                </T.Paragraph>
                                            ))}
                    </T.Content>
                </T.Row>
                <A.Empty height={'20px'} />
                <T.Row>
                    <T.Header color={colorScheme.hex1}>Professional Summary</T.Header>
                </T.Row>
                <T.Row>
                    <T.Content>
                         {cv.professional_summary.map((summary, index) => (
                                                <T.Paragraph>
                                                    {summary}
                                                </T.Paragraph>
                                            ))}
                    </T.Content>
                </T.Row>
                <A.Empty height={'20px'} />
                <T.Row>
                    <T.Header color={colorScheme.hex1}>Personal Skills</T.Header>
                </T.Row>
                <T.Row>
                    <T.Content>
                        <T.SkillGroup>
                            {cv.personalSkills.map((per, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <T.Bullet />
                                    <T.SkillContent>{per}</T.SkillContent>
                                </div>
                            ))}
                        </T.SkillGroup>
                    </T.Content>
                </T.Row>
                <A.Empty height={'20px'} />
                <T.Row>
                    <T.Header color={colorScheme.hex1}>Technical Skills</T.Header>
                </T.Row>
                <T.Row>
                    <T.Content>
                         <T.SkillGroup>
                            {cv.technicalSkills.map((tec, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <T.Bullet />
                                    <T.SkillContent>{tec}</T.SkillContent>
                                </div>
                            ))}
                        </T.SkillGroup>
                    </T.Content>
                </T.Row>
                <A.Empty height={'25px'} />
                <T.Row>
                    <T.Header color={colorScheme.hex1}>Programming Skills</T.Header>
                </T.Row>
                <T.Row>
                    <T.Content>
                         <T.SkillGroup>
                            {cv.programmingSkills.map((pro, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <T.Bullet />
                                    <T.SkillContent>{pro}</T.SkillContent>
                                </div>
                            ))}
                        </T.SkillGroup>
                    </T.Content>
                </T.Row>
                <A.Empty height={'20px'} />
                <T.Row>
                    <T.Header color={colorScheme.hex1}>Database Skills</T.Header>
                </T.Row>
                <T.Row>
                    <T.Content>
                         <T.SkillGroup>
                            {cv.databaseSkills.map((dat, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <T.Bullet />
                                    <T.SkillContent>{dat}</T.SkillContent>
                                </div>
                            ))}
                        </T.SkillGroup>
                    </T.Content>
                </T.Row>
                <A.Empty height={'20px'} />
                <T.Row>
                    <T.Header color={colorScheme.hex1}>Education</T.Header>
                </T.Row>
                <T.Row>
                    <T.Content>
                        <T.SkillGroup>
                            {cv.education.map((edu, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <T.Bullet />
                                    <T.SkillContent width={'320px'}>{edu.qualification}<br/>{edu.major}<br/>{edu.startYear}-{edu.endYear}</T.SkillContent>
                                </div>
                            ))}
                        </T.SkillGroup>
                    </T.Content>
                </T.Row>
                <A.Empty height={'30px'} />
                <T.Row>
                    <T.Header color={colorScheme.hex1}>Work Experience</T.Header>
                </T.Row>
                <A.Empty height={'10px'} />
                <T.Row>
                    <T.Content>
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
                    </T.Content>
                </T.Row>
                <A.Empty height={'20px'} />
                <T.Row>
                    <T.Header color={colorScheme.hex1}>Languages</T.Header>
                </T.Row>
                <T.Row>
                    <T.Content>
                        <T.SkillGroup>
                            {cv.languages.map((lang, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <T.Bullet />
                                    <T.SkillContent>{lang}</T.SkillContent>
                                </div>
                            ))}
                        </T.SkillGroup>
                    </T.Content>
                </T.Row>
                <A.Empty height={'20px'} />
                <T.Row>
                    <T.Header color={colorScheme.hex1}>References</T.Header>
                </T.Row>
                <T.Row>
                    <T.Content>
                         <T.SkillGroup>
                            {cv.referees.map((ref, index) => (
                                <div style={{ display: 'inline-flex', gap: '10px' }}>
                                    <T.Bullet />
                                    <T.SkillContent>{ref.name}<br/>{ref.email}<br/>{ref.mobile}</T.SkillContent>
                                </div>
                            ))}
                        </T.SkillGroup>        

                    </T.Content>
                </T.Row>
            </T.ContentLayer>
        </T.TemplateContainer>
    )
}

export default Template9;
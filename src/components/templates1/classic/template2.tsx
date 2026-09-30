import * as T from '../app.styled';
import * as M from './template2.styled';
import * as E from '../modern/template9.styled';
import { useAppSelector } from '@store/hooks';
import { capitalize } from '@components/utils/app-utils';
const Template2 = ({ colorScheme, id }) => {
    const colors = { 5: "#44807e", 6: "#34448a", 7: "#9f62ba", 8: "#2479e5", 9: "#908264", 10: "#3d7e25", 11: "#978788" };
    const cv = useAppSelector((state: any) => state.cv);
    const firstName = capitalize(cv.personInfo.firstName)
    const lastName = capitalize(cv.personInfo.lastName)
    console.log(colorScheme)
    return (
        <T.TemplateContainer>
            <M.HeaderWrapper headerBGColor={colors[id]}>
                <M.Test headerBGColor={colors[id]} />
                <M.HeaderBGContainer>
                    <M.Image src={`/images/header/header_bg${id}.png`} />
                </M.HeaderBGContainer>
            </M.HeaderWrapper>
            <M.ContentContainer>
                <M.Title fontColor={colorScheme.hex1}>{cv.personInfo.firstName}&nbsp;{cv.personInfo.lastName}</M.Title>
                <M.Position fontColor={'#000'}>{cv.personInfo.position}</M.Position>
                <M.AddressBar fontColor={'#635e5e'}>
                    <M.Email>{cv.personInfo.email}</M.Email>
                    <T.Bar>|</T.Bar>
                    <M.Mobile>{cv.personInfo.mobile}</M.Mobile>
                     <T.Bar>|</T.Bar>
                     <M.Address>{cv.personInfo.address}</M.Address>
                </M.AddressBar>
              
                <M.ContentRow marginTop='100px'>
                    <M.Subject>
                        <M.StyledIcon className="fa-solid fa-pen-to-square" fontColor={colorScheme.hex2} />
                        <M.SubjectName fontColor={colorScheme.hex2}>Career Objectives</M.SubjectName>
                    </M.Subject>
                </M.ContentRow>
                <M.ContentRow>
                    {cv.career_objectives.map((objective, index) => (
                        <E.Paragraph>
                            {objective}
                        </E.Paragraph>
                    ))}
                </M.ContentRow>

                <M.ContentRow marginTop='10px'>
                    <M.Subject>
                        <M.StyledIcon className="fa-solid fa-pen-to-square" fontColor={colorScheme.hex2} />
                        <M.SubjectName fontColor={colorScheme.hex2}>Professional Summary</M.SubjectName>
                    </M.Subject>
                </M.ContentRow>
                <M.ContentRow>
                    {cv.professional_summary.map((summary, index) => (
                        <E.Paragraph>
                            {summary}
                        </E.Paragraph>
                    ))}
                </M.ContentRow>
                <M.ContentRow marginTop='10px'>
                    <M.Subject>
                        <M.StyledIcon className="fa-solid fa-pen-to-square" fontColor={colorScheme.hex2} />
                        <M.SubjectName fontColor={colorScheme.hex2}>Personal Skills</M.SubjectName>
                    </M.Subject>
                </M.ContentRow>
                <M.ContentRow>
                    <E.SkillGroup>
                        {cv.personalSkills.map((per, index) => (
                            <div style={{ display: 'inline-flex', gap: '10px' }}>
                                <E.Bullet color={colorScheme.hex2}/>
                                <E.SkillContent>{per}</E.SkillContent>
                            </div>
                        ))}
                    </E.SkillGroup>
                </M.ContentRow>
                {cv.technicalSkills.length > 0 &&
                    <>
                        <M.ContentRow>
                            <M.Subject>
                                <M.StyledIcon className="fa-solid fa-pen-to-square" fontColor={colorScheme.hex2} />
                                <M.SubjectName fontColor={colorScheme.hex2}>Technical Skills</M.SubjectName>
                            </M.Subject>
                        </M.ContentRow>
                        <M.ContentRow>
                            <E.SkillGroup>
                                {cv.personalSkills.map((per, index) => (
                                    <div style={{ display: 'inline-flex', gap: '10px' }}>
                                        <E.Bullet color={colorScheme.hex2}/>
                                        <E.SkillContent>{per}</E.SkillContent>
                                    </div>
                                ))}
                            </E.SkillGroup>
                        </M.ContentRow>
                    </>
                }
                {cv.programmingSkills.length > 0 &&
                    <>
                        <M.ContentRow>
                            <M.Subject>
                                <M.StyledIcon className="fa-solid fa-pen-to-square" fontColor={colorScheme.hex2} />
                                <M.SubjectName fontColor={colorScheme.hex2}>Programming Skills</M.SubjectName>
                            </M.Subject>
                        </M.ContentRow>
                        <M.ContentRow>
                            <E.SkillGroup>
                                {cv.programmingSkills.map((per, index) => (
                                    <div style={{ display: 'inline-flex', gap: '10px' }}>
                                        <E.Bullet color={colorScheme.hex2}/>
                                        <E.SkillContent>{per}</E.SkillContent>
                                    </div>
                                ))}
                            </E.SkillGroup>
                        </M.ContentRow>
                    </>
                }
                {cv.databaseSkills.length > 0 &&
                    <>
                        <M.ContentRow>
                            <M.Subject>
                                <M.StyledIcon className="fa-solid fa-pen-to-square" fontColor={colorScheme.hex2} />
                                <M.SubjectName fontColor={colorScheme.hex2}>Database Skills</M.SubjectName>
                            </M.Subject>
                        </M.ContentRow>
                        <M.ContentRow>
                            <E.SkillGroup>
                                {cv.databaseSkills.map((per, index) => (
                                    <div style={{ display: 'inline-flex', gap: '10px' }}>
                                        <E.Bullet color={colorScheme.hex2}/>
                                        <E.SkillContent>{per}</E.SkillContent>
                                    </div>
                                ))}
                            </E.SkillGroup>
                        </M.ContentRow>
                    </>
                }
                <M.ContentRow>
                    <M.Subject>
                        <M.StyledIcon className="fa-solid fa-pen-to-square" fontColor={colorScheme.hex2} />
                        <M.SubjectName fontColor={colorScheme.hex2}>Work Experience</M.SubjectName>
                    </M.Subject>
                </M.ContentRow>
                <M.ContentRow>
                    {cv.experiences.map((exp, index) => (
                        <>
                            <E.ExperiencTitleWrapper>
                                <div style={{ width: '50%', fontWeight: 'bold' }}>{exp.company}</div>
                                <div style={{ width: '50%', fontWeight: 'bold', textAlign: 'right' }}>{exp.startYear}-{exp.endYear}</div>
                            </E.ExperiencTitleWrapper>
                            <E.ExperienceCompany>{exp.position}</E.ExperienceCompany>
                            <E.Experience>
                                <ul>
                                    {exp.duty.map((d, inx) => (
                                        <li id={inx}>{d}</li>
                                    ))}

                                </ul>
                            </E.Experience>
                        </>

                    ))}
                </M.ContentRow>
                <M.ContentRow marginTop='10px'>
                    <M.Subject>
                        <M.StyledIcon className="fa-solid fa-pen-to-square" fontColor={colorScheme.hex2} />
                        <M.SubjectName fontColor={colorScheme.hex2}>Education</M.SubjectName>
                    </M.Subject>
                </M.ContentRow>
                <M.ContentRow>
                    <E.SkillGroup>
                        {cv.education.map((edu, index) => (
                            <div style={{ display: 'inline-flex', gap: '10px' }}>
                                <E.Bullet color={colorScheme.hex2}/>
                                <E.SkillContent width={'320px'}>{edu.qualification}<br />{edu.major}<br />{edu.startYear}-{edu.endYear}</E.SkillContent>
                            </div>
                        ))}
                    </E.SkillGroup>
                </M.ContentRow>
                <M.ContentRow marginTop='10px'>
                    <M.Subject>
                        <M.StyledIcon className="fa-solid fa-pen-to-square" fontColor={colorScheme.hex2} />
                        <M.SubjectName fontColor={colorScheme.hex2}>Languages</M.SubjectName>
                    </M.Subject>
                </M.ContentRow>
                <M.ContentRow>
                    <E.SkillGroup>
                        {cv.languages.map((lang, index) => (
                            <div style={{ display: 'inline-flex', gap: '10px' }}>
                                <E.Bullet color={colorScheme.hex2}/>
                                <E.SkillContent>{lang}</E.SkillContent>
                            </div>
                        ))}
                    </E.SkillGroup>
                </M.ContentRow>
                <M.ContentRow>
                    <M.Subject>
                        <M.StyledIcon className="fa-solid fa-pen-to-square" fontColor={colorScheme.hex2} />
                        <M.SubjectName fontColor={colorScheme.hex2}>References</M.SubjectName>
                    </M.Subject>
                </M.ContentRow>
                <M.ContentRow>
                    <E.SkillGroup>
                        {cv.referees.map((ref, index) => (
                            <div style={{ display: 'inline-flex', gap: '10px' }}>
                                <E.Bullet color={colorScheme.hex2}/>
                                <E.SkillContent>{ref.name}<br />{ref.email}<br />{ref.mobile}</E.SkillContent>
                            </div>
                        ))}
                    </E.SkillGroup>

                </M.ContentRow>
            </M.ContentContainer>

        </T.TemplateContainer>
    )
}
export default Template2;

import * as T from './template3.styed';

import { useAppSelector } from '@store/hooks';
import { capitalize, upperCase } from '@components/utils/app-utils';
import TextureHeaderWrapper from '@components/texture-header';
/*
Pink: {bgColor:#e1d1d7,fontColor:#dea0b7,borderColor:}

                       <>
                       <i className="fa-solid fa-single-quote-left" style={{color:colorScheme.hex5}}></i>&nbsp;<div style={{color:colorScheme.hex5}}>{car}</div>&nbsp;<i className="fa-solid fa-single-quote-right" style={{color:colorScheme.hex5}}></i><br/>
                       </>
                      
*/
const Template3 = ({ colorScheme,id }) =>{
    console.log('di')
    console.log(id)
    const cv = useAppSelector((state: any) => state.cv);
    const firstName = capitalize(cv.personInfo.firstName)
    const lastName = upperCase(cv.personInfo.lastName)
    const fullName = firstName + " " + lastName;
    return(
        <T.Container fontFamily='Poppins'>
            <T.MainHeader >
              
                 <T.Header1_3 bgColor={colorScheme.hex4}>
                    
                    {cv.career_objectives.map((car)=>
                       <T.QuoteText>
                        <i className="fa-solid fa-quote-left"></i>
                        {car}
                        <i className="fa-solid fa-quote-right"></i>
                       </T.QuoteText>
                    )}
                     </T.Header1_3>
               
                <T.Header2_3 bgColor={colorScheme.hex4}>&nbsp;</T.Header2_3>
                <T.Header2Wrapper>
                <T.CircleContainer >
                    <T.CircleImage src={cv.personInfo.profileImage} bgColor={colorScheme.hex1}/>
                </T.CircleContainer>
                </T.Header2Wrapper>
            </T.MainHeader>
            <T.Row fontWeight='bold' fontSize='2rem'>
                {fullName}
            </T.Row>
             <T.Row>
                {cv.personInfo.email} | {cv.personInfo.mobile} | {cv.personInfo.address}
            </T.Row>
            <T.Row fontFamily='Philosopher' fontSize='1.5rem'>
                {cv.personInfo.position}
            </T.Row>
            <T.RowContentHeader bgColor={colorScheme.hex1}>
                <T.SquareIcon bgColor={colorScheme.hex1}/>Professional Summary
            </T.RowContentHeader>
            <T.RowContent>
               {cv.professional_summary.map((summary) =>
                <T.Paragraph>{summary}</T.Paragraph>                                                    
                )}
            </T.RowContent>
            <T.LineBreak/>
            <T.RowContentHeader bgColor={colorScheme.hex1}>
                <T.SquareIcon bgColor={colorScheme.hex1}/>Personal Skills
            </T.RowContentHeader>
            <T.RowContent>
                <T.ListWrapper>
                    {cv.personalSkills.map((ps) =>
                        <T.ListItem><T.Bullet /><T.Item>{ps}</T.Item></T.ListItem>
                    )}
                </T.ListWrapper>
            </T.RowContent>
          
             {cv.technicalSkills.length > 0 &&
            <>
              <T.LineBreak/>
            <T.RowContentHeader bgColor={colorScheme.hex1}>
                <T.SquareIcon bgColor={colorScheme.hex1}/>Technical Skills
            </T.RowContentHeader>
            <T.RowContent>
                 <T.ListWrapper>
                    {cv.technicalSkills.map((ts) =>
                        <T.ListItem><T.Bullet /><T.Item>{ts}</T.Item></T.ListItem>
                    )}
                </T.ListWrapper>
            </T.RowContent>
           
            </>}
             {cv.programmingSkills.length > 0 &&
            <>
              <T.LineBreak/>
            <T.RowContentHeader bgColor={colorScheme.hex1}>
                <T.SquareIcon bgColor={colorScheme.hex1}/>Programming Skills
            </T.RowContentHeader>
            <T.RowContent>
                 <T.ListWrapper>
                    {cv.programmingSkills.map((ps) =>
                        <T.ListItem><T.Bullet /><T.Item>{ps}</T.Item></T.ListItem>
                    )}
                </T.ListWrapper>
            </T.RowContent>
           
            </>
            }
             {cv.databaseSkills.length > 0 &&
            <>
             <T.LineBreak/>
            <T.RowContentHeader bgColor={colorScheme.hex1}>
                <T.SquareIcon bgColor={colorScheme.hex1}/>Database Skills
            </T.RowContentHeader>
            <T.RowContent>
                <T.ListWrapper>
                    {cv.databaseSkills.map((ds) =>
                        <T.ListItem><T.Bullet /><T.Item>{ds}</T.Item></T.ListItem>
                    )}
                </T.ListWrapper>
            </T.RowContent>
            </>
            }
            <T.LineBreak/>
            <T.RowContentHeader bgColor={colorScheme.hex1}>
                <T.SquareIcon bgColor={colorScheme.hex1}/>Education
            </T.RowContentHeader>
            <T.RowContent>
                {cv.education.map((edu, inx) => 
                <>
                <T.EducationWrapper>
                    <div>{inx+1}.&nbsp;{edu.qualification}&nbsp;in&nbsp;{edu.major}</div><div>{edu.startYear}-{edu.endYear}</div>
                </T.EducationWrapper>
               
                <T.EducationWrapper>
                  <div>{edu.institution}</div><div>&nbsp;</div>
                </T.EducationWrapper>
                 {inx < cv.education.length &&  <T.LineBreak/>}
                </>
                 )}
            </T.RowContent>
            <T.LineBreak/>
            <T.RowContentHeader bgColor={colorScheme.hex1}>
                <T.SquareIcon bgColor={colorScheme.hex1}/>Languages
            </T.RowContentHeader>
            <T.RowContent>
                 <T.ListWrapper>
                    {cv.languages.map((lg) =>
                        <T.ListItem><T.Bullet /><T.Item>{lg}</T.Item></T.ListItem>
                    )}
                </T.ListWrapper>
            </T.RowContent>
            <T.LineBreak/>
            <T.RowContentHeader bgColor={colorScheme.hex1}>
                <T.SquareIcon bgColor={colorScheme.hex1}/>Work Experience
            </T.RowContentHeader>
            <T.RowContent>
                {cv.experiences.map((exp, inde) => 
                <>
               <T.WorkRowHeader>
                    <T.WorkLeft>{exp.position}</T.WorkLeft>
                    <T.WorkRight>{exp.startYear}-{exp.endYear}</T.WorkRight>
               </T.WorkRowHeader>
               <T.WorkRowHeader>
                    <T.WorkLeft>{exp.company}</T.WorkLeft>
                    <T.WorkRight>New York USA</T.WorkRight>
                </T.WorkRowHeader>
                {exp.duty.map((du, inx) =>
                    <T.WorkRowContent>
                        <T.WorkDetail><T.Bullet1 fontColor="#474747" />&nbsp;&nbsp;{du}</T.WorkDetail>
                    </T.WorkRowContent>
                )}
               </>
                )}
            </T.RowContent>
            <T.LineBreak/>
            <T.RowContentHeader bgColor={colorScheme.hex1}>
                <T.SquareIcon bgColor={colorScheme.hex1}/>References
            </T.RowContentHeader>
            <T.RowContent>
                <T.ReferenceContainer>
                    {cv.referees.map((ref,idx) =>
                    <T.Reference>
                        <div>{idx+1}. &nbsp;{ref.name}</div>
                        <div>{ref.email}</div>
                        <div>{ref.mobile}</div>
                    </T.Reference>

                    )}
                </T.ReferenceContainer>
            </T.RowContent>
        </T.Container>
    )
}
export default Template3;
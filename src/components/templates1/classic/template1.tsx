import {useState} from 'react';
import { useEffect } from 'react';
import { capitalize } from '@components/utils/app-utils';

import main from './main.module.css'
import styles from './template1.module.css';
import LineBreak1  from '@components/svg/line-break-1';
import LineBreak2  from '@components/svg/line-break-2';
import {useAppSelector } from '@store/hooks';
import { ClipPath } from '@react-pdf/renderer';

const Template1 = ({ colorScheme ,id}) => {
  
    const [Component,setComponent] = useState(null);
    const cv = useAppSelector((state: any) => state.cv);
    const firstName = capitalize(cv.personInfo.firstName)
    const lastName = capitalize(cv.personInfo.lastName)
    useEffect(() =>{
       // Dynamic import inside useEffect
    /* @vite-ignore */
    import (/* @vite-ignore */`../../svg/line-break-${id}`)
      .then((module) => {
        // Must wrap in a function to store the component itself in state
        setComponent(() => module.default);
      })
      .catch((err) => {
        console.log(err)
        console.error("Failed to load component", err);
      });
      console.log("Com")
        console.log(Component)
    },[])
   

    return (
        <div className={main.page_container}>
            <div className={styles.wrapper}>
                <div className={styles.row}><p> {firstName} {lastName}{id}:</p></div>
                <div style={{textAlign:'center',width:'100%'}}>
             
                {Component !== null && <Component fillColor={colorScheme.hex1}/>}
              
                </div>
                 <div className={styles.row}><div className={styles.address}>{cv.personInfo.email} | {cv.personInfo.mobile} | {cv.personInfo.address}</div>
                </div>
                
                <div className={styles.row}><div className={styles.title}>{cv.personInfo.position}</div></div>
               
                <div className={styles.next_row} style={{color:colorScheme.hex1}}>Career Objectives</div>
                <div className={styles.content}>
                    {cv.career_objectives.map((career) =>  
                    <>
                    <div className={styles.para_wrapper}>
                    <div style={{width:'100%'}}>{career}</div>
                    </div>
                    
                    </>
                )}
                </div>
                <div className={styles.next_row} style={{color:colorScheme.hex1}}>Professional Summary</div>
                <div className={styles.content}>
                    {cv.professional_summary.map((ps) =>  
                    <>
                    <div className={styles.para_wrapper}>
                    <div style={{width:'100%'}}>{ps}</div>
                    </div>
                   
                    </>
                    )}
                </div>
               
                <div className={styles.next_row} style={{color:colorScheme.hex1}}>Personal Skills</div>
                <div className={styles.content}>
                    <div className={styles.list_wrapper}>
                        {cv.personalSkills.map((pe) =>
                        <div className={styles.list_item}><div className={styles.bullet}/>&nbsp;{pe}</div>
                        )}
                    </div>
                </div>
                {cv.technicalSkills.length > 0 &&
                <>
                <div className={styles.next_row} style={{color:colorScheme.hex1}}>Technical Skills</div>
                <div className={styles.content}>
                    <div className={styles.list_wrapper}>
                    {cv.technicalSkills.map((ts) =>
                        <div className={styles.list_item}><div className={styles.bullet}/>&nbsp;{ts}</div>
                        )}
                    </div>
                </div>
                </>
                }
                {cv.programmingSkills.length > 0 &&
                <>
                <div className={styles.next_row} style={{color:colorScheme.hex1}}>Programming Skills</div>
                <div className={styles.content}>
                    <div className={styles.list_wrapper}>
                    {cv.programmingSkills.map((ps) =>
                        <div className={styles.list_item}><div className={styles.bullet}/>&nbsp;{ps}</div>
                        )}
                    </div>
                </div>
                </>
                }
                {cv.databaseSkills.length > 0 &&
                <>
                <div className={styles.next_row} style={{color:colorScheme.hex1}}>Database Skills</div>
                <div className={styles.content}>
                     <div className={styles.list_wrapper}>
                    {cv.databaseSkills.map((ds) =>
                        <div className={styles.list_item}><div className={styles.bullet}/>&nbsp;{ds}</div>
                        )}
                    </div>
                </div>
                </>
                }
               
                <div className={styles.next_row} style={{color:colorScheme.hex1}}>Languages</div>
                <div className={styles.content}>
                    <div className={styles.list_wrapper}>
                    {cv.languages.map((la) =>
                        <div className={styles.list_item}><div className={styles.bullet}/>&nbsp;{la}</div>
                        )}
                    </div>
                </div>
               
                 <div className={styles.next_row} style={{color:colorScheme.hex1}}>Education</div>
                <div className={styles.content}>
                        <ul style={{marginLeft:'15px'}}>
                         {cv.education.map((edu) =>
                        <>
                        <li className={styles.li_wrapper}><b>{edu.startYear}-{edu.endYear}</b>-{edu.qualification}&nbsp;&nbsp;&nbsp;{edu.major}&nbsp;&nbsp;&nbsp;{edu.institution}</li>
                        </>
                        )}
                        </ul>
                </div>
               
                <div className={styles.next_row} style={{color:colorScheme.hex1}}>Work Experience</div>
                <div className={styles.content}>
                      {cv.experiences.map((exp,ind) =>
                           <>
                            <div className={`${styles.left} ${styles.clear}`}><b>{exp.company}</b></div>
                            <div className={styles.right}>{exp.location}</div>
                            <div className={`${styles.left} ${styles.clear}`}>{exp.position}</div>
                            <div className={styles.right}>{exp.startYear} - {exp.endYear}</div>
                             <ul style={{ marginLeft: '15px' }}>
                             {exp.duty.map((du) =>   
                                <li>{du}</li>
                             )}
                            </ul>
                              {ind < cv.experiences.length && <br/>}
                           </>
                          
                       )}
                </div>
                {!cv.referees_skip &&
                <>
                <div className={styles.next_row} style={{color:colorScheme.hex1}}>References</div>
                <div className={styles.content}>
                    {cv.referees.map((ref) =>
                   <div className={`${styles.left} ${styles.clear}`}>
                   <b>{ref.name}</b><br/>{ref.email}<br/>{ref.mobile}
                    </div>
                    )}
                </div>
                </>
                }
            </div>
        </div>
    )
}
export default Template1;

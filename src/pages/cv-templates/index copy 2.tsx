import { useState, useEffect,useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router'
/*import './App.css'*/
import './index.css'
import { useAppSelector } from '@store/hooks';
                                
import { selectTemplatesByStyle ,filterTemplatesByStyle,selectAbstractemplates} from '@store/cv-reducer';
import * as T from './index.sytled'

const CVTemplates = () => {
    
    const [selectedValue, setSelectedValue] = useState("classic");
    const classicTemplates = useAppSelector(selectAbstractemplates)
    const abstractTemplates = useAppSelector(state => filterTemplatesByStyle(state,"abstract"))
    //const classicTemplates =useAppSelector(state => filterTemplatesByStyle(state,"classic"))
    const modernTemplates =useAppSelector(state => filterTemplatesByStyle(state,"modern"))
    const [templates, setTemplates] = useState(abstractTemplates)
    const [visibleCount, setVisibleCount] = useState(templates.lenght);

    // const defaultTemplateType = useMemo(() => {
    //return setTemplates(classicTemplates);
    //}, []); 
    useEffect(() => {
        setTemplates(classicTemplates);
    },[])
   
    const handleChange = (event) => {
       
        setSelectedValue(event.target.value);
        if(event.target.value === 'abstract'){
            //console.log("ddddd")
            setTemplates(abstractTemplates)
        }else if(event.target.value === 'classic'){
            
            setTemplates(classicTemplates);
        }else{
            setTemplates(modernTemplates)
        }
     
    };
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 10);
    };

    return (
        <div>
            <T.Wrapper>
                <T.FormContainer>
                                    <T.Title>Select&nbsp;Resume&nbsp;Style &nbsp;:</T.Title>
                                    <T.RadioGroup>
                                        <T.Label>
                                            <T.HiddenInput
                                                name="plan"
                                                value="classic"
                                                checked={selectedValue === "classic"}
                                                onChange={handleChange}
                                            />
                                            <T.CustomRadio />
                                            Classic
                                        </T.Label>
                                        <T.Label>
                                            <T.HiddenInput
                                                name="plan"
                                                value="modern"
                                                checked={selectedValue === "modern"}
                                                onChange={handleChange}
                                            />
                                            <T.CustomRadio />
                                            Modern
                                        </T.Label>
                                         <T.Label>
                                            <T.HiddenInput
                                                name="plan"
                                                value="abstract"
                                                checked={selectedValue === "abstract"}
                                                onChange={handleChange}
                                            />
                                            <T.CustomRadio />
                                            Abstract
                                        </T.Label>
                                        
                                    </T.RadioGroup>
                                </T.FormContainer>
            </T.Wrapper>
             
            <div className='g_wrapper'>
                <div className="gallery">
                     {templates.slice(0, visibleCount).map((data) => (
                     
                      <Link to={`/createcv/${data.name}/image/${data.image}`}>
                     <div className="thumbnail-container">
                        <img src={`/images/templates/${data.name}.png`} alt="Thumbnail" />
                         <div className="overlay">
                                    <div className="text">CREATE CV</div>
                        </div>
                     </div>
                      
                      </Link>
                     ))
                    }
                </div>
               
            </div>
            
        </div>
    )

}

export default CVTemplates;


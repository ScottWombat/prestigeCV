import { useState, useEffect,useMemo } from 'react';
import { Link } from 'react-router'
/*import './App.css'*/
import './index.css'
import { useAppSelector,selectTemplatesByStyle } from '@store/hooks';
// import { selectTemplesByStyle  } from '@store/template-reducer'
import * as T from './index.sytled'

const CVTemplates = () => {
    //const [templates, setTemplates] = useState([])
    const [selectedValue, setSelectedValue] = useState("abstract");
    const [visibleCount, setVisibleCount] = useState(10);
    //const templatesByStyle = useMemo(selectTemplesByStyle, []);
    const templates= useAppSelector(state => selectTemplatesByStyle(state,selectedValue))
    console.log(selectedValue)
    console.log(templates)
    const handleChange = (event) => {
        console.log(event.target.value)
        setSelectedValue(event.target.value);
    };
    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 10);
    };
    useEffect(() =>{


    },[templates])
    useEffect(() => {
        //useAppSelector()
        //fetch('data/templates.json').then((res) => res.json()).then((data) => {
       //     setTemplates(data)
       // })
       
       //console.log(items)

    })
    return (
        <div style={{backgroundColor:'red',width:'80%'}}>
            <T.Wrapper>
                <T.FormContainer>
                    <T.Title>Select Resume Style:</T.Title>

                    <T.RadioGroup>
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
                                value="classic"
                                checked={selectedValue === "classic"}
                                onChange={handleChange}
                            />
                            <T.CustomRadio />
                            Classic
                        </T.Label>
                    </T.RadioGroup>
                </T.FormContainer>
            </T.Wrapper>
            <div className='g_wrapper'>
                <div className="gallery">
                    {templates.slice(0, visibleCount).map((data) => (
                        <Link to={`/createcv?id=${data.name}&image=${data.image}`}>
                            <div className="thumbnail-container">
                                <img src="/images/template1.jpg" alt="Thumbnail" />
                                <div className="overlay">
                                    <div className="text">CREATE CV${data.name}</div>
                                </div>
                            </div>
                        </Link>

                    ))
                    }
                </div>

            </div>
            {visibleCount < templates.length && (
                <button onClick={loadMore}>Load More</button>
            )}
        </div>
    )

}

export default CVTemplates;


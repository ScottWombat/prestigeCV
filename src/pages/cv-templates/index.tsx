import { useState, useEffect } from 'react';
import { Link } from 'react-router'
/*import './App.css'*/
import './index.css'
import { ROUTES } from '@router/index'


const CVTemplates = () => {
    const [templates, setTemplates] = useState([])
    useEffect(() => {
        fetch('data/templates.json').then((res) => res.json()).then((data) => {

            setTemplates(data)
        })

    })
    return (
        <div className='g_wrapper'>
            <div className="gallery">

                {templates.map((data) => (

                    <Link to={`/createcv?id=${data.id}`}>
                    <div className="thumbnail-container">

                        <img src="/images/template1.jpg" alt="Thumbnail" />
                        <div className="overlay">
                            <div className="text">CREATE CV</div>
                        </div>
                    </div>
                    </Link>

                ))
                }

            </div>
        </div>
    )

}

export default CVTemplates;


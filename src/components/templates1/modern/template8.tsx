
import styles from './template8.module.css'

const Template8 = () => {
    return (
        <div className={styles.page_container}>
            <div className={styles.page_header}>
                <div className={styles.image_wrapper}>
                    <img className={styles.image_cover} src="/temp/man2.jpg" />
                    <div className={styles.name}>Json Bourne</div>
                    <div className={styles.title}>Data Scientist</div>
                    <span className={styles.page_contact}>
                        <div>
                            <i className="fa-solid fa-envelope" style={{ color: '#728FCE' }}></i>
                            &nbsp;hrevit@gmail.com
                        </div>
                        <div className={styles.bar}>|</div>
                        <div><i className="fa-solid fa-phone" style={{ color: '#728FCE' }}></i>&nbsp;+61 0403 872130</div>
                        <div className={styles.bar}>|</div>
                        <div><i className="fa-solid fa-location-dot" style={{ color: '#728FCE' }}></i>&nbsp;7 Comet St Pelican Waters QLD 4551 Australia</div>
                    </span>
                </div>
            </div>
            <div className={styles.page_row}>
                <span className={styles.header_wrapper}>
                    <div className={styles.resume__section_title}>
                        <i className="fa-solid fa-pen-to-square"></i>
                        &nbsp;&nbsp;
                        <h2>About Me</h2>
                    </div>
                </span>
                <p className={styles.para_wrapper}>
                    Results-driven, customer-focused, highly organized and analytical Software Engineer with experience in design, development, integration, and delivery of web applications. Project Management expertise from initial idea and development phase (vision/analysis), performing all design/architecture work and delivering the completed product. Strong analytical skills, with deep expertise in the end-to-end development of software products.
                </p>

                <div className={styles.row}>
                    <div className={styles.column1}>
                        <div style={{ width: '100%' }}>
                            <div className={styles.resume__section_title}>
                                <i className="fa-solid fa-pen-to-square"></i>
                                &nbsp;&nbsp;
                                <h2>History Experience</h2>
                            </div>
                            <ul className={styles.ul_style}>
                                <li>Senior Data Scientist / MLOps with 5 years of experience.</li>
                                <li>Experienced in developing commercially successful data-related products from scratch and deploying them to production.</li>
                                <li>Managed and mentored a team of data scientists.</li>
                                <li>Expert in Decision Tree-based ML models, MLOps and ML in Cloud (AWS SageMaker)</li>
                            </ul>
                            <br/>
                            <div className={styles.resume__section_title}>
                                <i className="fa-solid fa-pen-to-square"></i>
                                &nbsp;&nbsp;
                                <h2>History Experience</h2>
                            </div>
                            <ul className={styles.ul_style}>
                                <li>Senior Data Scientist / MLOps with 5 years of experience.</li>
                                <li>Experienced in developing commercially successful data-related products from scratch and deploying them to production.</li>
                                <li>Managed and mentored a team of data scientists.</li>
                                <li>Expert in Decision Tree-based ML models, MLOps and ML in Cloud (AWS SageMaker)</li>
                            </ul>
                    </div>
                    </div><div className={styles.column2} >
                        <div className={styles.resume__section_title}>
                            <i className="fa-solid fa-pen-to-square"></i>
                            &nbsp;&nbsp;
                            <h2>Education</h2>
                        </div>
                        <div style={{ width: '100%' }}>
                            <ul className={styles.ul_style}>
                                <li>Senior Data Scientist / MLOps with 5 years of experience.</li>
                                <li>Experienced in developing commercially successful data-related products from scratch and deploying them to production.</li>
                                <li>Managed and mentored a team of data scientists.</li>
                                <li>Expert in Decision Tree-based ML models, MLOps and ML in Cloud (AWS SageMaker)</li>
                            </ul>
                        </div>
                       
                        <div className={styles.resume__section_title}>
                            <i className="fa-solid fa-pen-to-square"></i>*
                            &nbsp;&nbsp;
                            <h2>Skills</h2>
                        </div>
                        <div style={{ width: '100%' }}>
                            <ul className={styles.ul_style}>
                                <li>Senior Data Scientist / MLOps with 5 years of experience.</li>
                                <li>Experienced in developing commercially successful data-related products from scratch and deploying them to production.</li>
                                <li>Managed and mentored a team of data scientists.</li>
                                <li>Expert in Decision Tree-based ML models, MLOps and ML in Cloud (AWS SageMaker)</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Template8;

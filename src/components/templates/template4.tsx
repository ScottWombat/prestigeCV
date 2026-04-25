import styles from './template4.module.css'

const Template4 = () => {
    return (
        <div className={styles.page_container}>
            <section className={styles.left_section}>
                <div className={styles.left_angle}></div>
                <div className={styles.over_lay}>
                    <div className={styles.image_wrapper}>
                        <img className={styles.image_cover} src="/temp/man2.jpg" />
                    </div>
                    <div className={styles.name_wrapper}>
                        Json Bourne
                    </div>
                    <div className={styles.title_wrapper}>
                        Margeting Manager
                    </div>
                    <span className={styles.header_wrapper}>
                        <i className="fa-solid fa-circle-notch"></i>
                        &nbsp;&nbsp;
                        <div>Contact</div>
                    </span>
                    <span className={styles.contact_wrapper}>
                        <i className="fa-solid fa-phone" style={{color:'#728FCE'}}></i>
                        &nbsp;&nbsp;
                        <div>+61 0403 872 130</div>
                    </span>
                    <span className={styles.contact_wrapper}>
                        <i className="fa-solid fa-envelope" style={{color:'#728FCE'}}></i>
                        &nbsp;&nbsp;
                        <div>hrevit@gmail.com</div>
                    </span>
                     <span className={styles.contact_wrapper}>
                        <i className="fa-solid fa-location-dot" style={{color:'#728FCE'}}></i>
                        &nbsp;&nbsp;
                        <div>7 Comet St Pelican Waters QLD 4551 Australia</div>
                    </span>
                    <span className={styles.header_wrapper}>
                        <i className="fa-solid fa-user"></i>
                        &nbsp;&nbsp;
                        <div>About Me</div>
                    </span>
                    <p className={styles.para_wrapper}>
                    Results-driven, customer-focused, highly organized and analytical Software Engineer with experience in design, development, integration, and delivery of web applications. Project Management expertise from initial idea and development phase (vision/analysis), performing all design/architecture work and delivering the completed product. Strong analytical skills, with deep expertise in the end-to-end development of software products.
                    </p>
                    <span className={styles.header_wrapper}>
                        <i className="fa-solid fa-feather-pointed"></i>
                        &nbsp;&nbsp;
                        <div>Skills</div>
                    </span>
                    <ul className={styles.ul_wrapper}>
                        <li className={styles.li_wrapper}>Management Skills</li>
                        <li className={styles.li_wrapper}>Creativity</li>
                        <li className={styles.li_wrapper}>Digital Marketing</li>
                        <li className={styles.li_wrapper}>Negotiation</li>
                        <li className={styles.li_wrapper}>Critical Thinking</li>
                        <li className={styles.li_wrapper}>Leadership</li>
                    </ul>
                </div>
            </section>
            <section className={styles.right_section}>
                <span className={styles.right_header_wrapper}>
                        <i className="fa-solid fa-graduation-cap"></i>
                        &nbsp;&nbsp;
                        <div>Education</div>
                </span>
                <div className={styles.container}>
                        <ul>
                            <li className={styles.box}>
                                <span></span>
                                <div className={styles.title}>Vertical Timeline</div>
                                <div className={styles.sub_title}>created by M A R K</div>
                                <div className={styles.info}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corrupti.</div>
                                <div className={styles.time}>
                                    <span>12:00pm</span>
                                </div>
                            </li>
                            <li className={styles.box}>
                                <span></span>
                                <div className={styles.title}>Big Apple</div>
                                <div className={styles.sub_title}>Web Developer</div>
                                <div className={styles.info}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corrupti.</div>
                                <div className={styles.time}>
                                    <span>Mar 2021- Feb -2022</span>

                                </div>
                            </li>
                        </ul>
                </div>
                <span className={styles.right_header_wrapper}>
                        <i className="fa-solid fa-briefcase"></i>
                        &nbsp;&nbsp;
                        <div>Experience</div>
                </span>
                <span className={styles.right_header_wrapper}>
                        <i className="fa-solid fa-person-chalkboard"></i>
                        &nbsp;&nbsp;
                        <div>References</div>
                </span>
            </section>
        </div>
    )
}
export default Template4;
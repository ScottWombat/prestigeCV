import styles from './template3.module.css'

const Template3 = () => {
    return (
        <div className={styles.page_container}>
            <section className={styles.left_section}>
                <div className={styles.left_content}>
                    <div className={styles.image_wrapper}>
                        <img className={styles.image_cover} src="/temp/man2.jpg" />
                    </div>
                    <div className={styles.header_wrapper}>
                        <div className={styles.small_square}></div>
                        <div className={styles.left_header}>SUMMARY</div>
                    </div>
                    <div className={styles.left_content_details}>
                        <ul className={styles.left_content_list}>
                            <li>dd</li>
                            <li>dd1</li>
                        </ul>
                    </div>
                    <div className={styles.header_wrapper}>
                        <div className={styles.small_square}></div>
                        <div className={styles.left_header}>CORE COMPETENCIES</div>
                    </div>
                    <div className={styles.left_content_details}>
                        <ul className={styles.left_content_list}>
                            <li>dd</li>
                            <li>dd1</li>
                        </ul>
                    </div>
                    <div className={styles.header_wrapper}>
                        <div className={styles.small_square}></div>
                        <div className={styles.left_header}>EDUCATION AND CERTIFICATIONS</div>
                    </div>
                    <div className={styles.left_content_details}>
                        <ul className={styles.left_content_list}>
                            <li>dd</li>
                            <li>dd1</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={styles.right_section}>
                <div className={styles.right_content}>
                    <div className={styles.right_content_grid}>
                        <div className={styles.rc_column1}>
                            <div className={styles.name}>Dexter Hassell</div>
                        </div>
                        <div className={styles.rc_column2}>
                            <div className={styles.address}>
                                <div>
                                    <i className="fas fa-map-marker-alt"></i>
                                    &nbsp;7 Comets St Pelican Waters QLD Australia
                                </div>
                                <div className={styles.phone}><i className="fas fa-phone"></i>&nbsp;61 0403872130</div>
                                <div className={styles.phone}> <i className="fas fa-envelope"></i>&nbsp;dexter.hassell@gmail.com</div>

                            </div>


                        </div>
                    </div>
                    <div className={styles.title}>
                        WEB DEVELOPER
                    </div>
                    <div className={styles.header_wrapper1}>
                        <div className={styles.small_square}></div>
                        <div className={styles.left_header}>PREFESSIONAL EXPERIENCE</div>
                    </div>

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
                    <div className={styles.header_wrapper1}>
                        <div className={styles.small_square}></div>
                        <div className={styles.left_header}>EDUCATION</div>
                    </div>
                    <div className={styles.container}>
                        <ul>
                            <li className={styles.box}>
                                <span></span>
                                <div className={styles.title}>MBA</div>
                                <div className={styles.sub_title}>Project Management</div>
                                <div className={styles.info}>University of Chicaco</div>
                                <div className={styles.time}>
                                    <span>1999-2021</span>

                                </div>
                            </li>
                            <li className={styles.box}>
                                <span></span>
                                <div className={styles.title}>Bachelor degree of Business</div>
                                <div className={styles.sub_title}>Marketing</div>
                                <div className={styles.info}>University of Boston</div>
                                <div className={styles.time}>
                                    <span>1999-1996</span>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Template3;
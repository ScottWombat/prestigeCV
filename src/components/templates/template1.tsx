import * as React from "react";
import { useRef, useState, useEffect } from "react";
import './main.css'
import './template1.css'
import styles from './template1.css'
import {

    Page,
    View,
    Text,
    Image,
    Document,
    StyleSheet,
    PDFViewer
} from "@react-pdf/renderer";

import Html from "react-pdf-html";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const Template10 = () => {
    return (
        <div className="container">
            <div className="responsive-banner">
                <span className="test1 circle-a"></span>
                <span className="test1 circle-b"></span>
                <div className="full-name">
                    <span className="first-name">John</span>
                    <span className="last-name">Doe</span>
                </div>
            </div>
        </div>

    )
}

const Template1 = () => {
    const [layoutSelection, setLayoutSelection] = useState({
        text: "A4",
        value: "size-a4"
    });

    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = event => {
        pdfExportComponent.current.save();
    };
    return (
        <div className="page-container">
            <div className="head">
                <div className="main">
                    <span className="name" >Revit&nbsp;Hathaisatpong</span>
                    <br/><br/>
                    <span className="post">Web Developer</span>
                </div>
                <div className="contacts">
                    <span className="content">231-3212-2132</span><span className="symbol">
                        <i className="fas fa-phone"></i></span><br />
                    <span className="content">samplemail@email.in</span>
                    <span className="symbol"> <i className="fas fa-envelope"></i></span>
                    <span className="content">linkedin/username.com</span><span className="symbol">
                        <i className="fab fa-linkedin"></i></span><br />
                    <span className="content">sample street-India</span><span className="symbol">&nbsp;
                        <i className="fas fa-map-marker-alt"></i>
                    </span>
                    
                </div>
            </div>
            <div className="line"></div>
           <br/>
            <div className="mainbody">
                <div className="leftside">
                   <span className="title">MY SKILLS</span><br/><br/>
                   <div className="skill">Java</div><br/><br/>
                   <span className="title">LANGUAGES</span>
                   <div className="skill">Thai</div><br/><br/>
                   <span className="title">INTERESTS</span>
                   <div className="skill">Thai</div><br/><br/>
                </div>
                <div className="border"></div>
                <div className="rightside">
                   <span className="title">PROFILE</span><br/><br/><br/>
                   <div className="skill">Java</div><br/><br/>
                </div>
            </div>
        </div>
    )
}
export default Template1;
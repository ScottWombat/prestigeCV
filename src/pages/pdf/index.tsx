import { useState, useEffect, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import generatePDF, {usePDF, Resolution, Margin } from 'react-to-pdf';
import Template from '@components/templates/template30_1';



const PDF = () => {
 const options = {
   // default is `save`
   //method: 'open',
   resolution: Resolution.HIGH,
   page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: {
        top: 20,
        right: 0,
        bottom: 20,
        left: 0
      },
      format: 'A4',
      //orientation: 'portrait',
   },
   canvas: {
      //mimeType: 'image/png',
      qualityRatio: 1
   },
   overrides: {
      pdf: {
         compress: true
      },
      canvas: {
         useCORS: true
      }
   },
};
  // 1. Create a reference to the DOM element you want to print
  const childRef = useRef(null);
  const contentRef = useRef(null);
 //const { toPDF, contentRef} = usePDF({filename: 'page.pdf'});

  const handleDownloadPdf = () => {
   
    const element = contentRef.current;
    const currentHeight = contentRef.current.offsetHeight; 
    childRef.current?.triggerChildFunction();
    
    const options = {
      margin:  0, //Margins in mm
     // pagebreak: { mode: ['css', 'avoid-all'] } ,
      filename: 'react-document.pdf',
      html2canvas: { scale: 2, useCORS: true }, // scale: 2 improves text crispness
      jsPDF: { unit: 'mm', format: 'a4', },
      //pagebreak: { mode: ['css', 'avoid-all'] } 
    };

    // 3. Execute the chainable html2pdf handler
    html2pdf().set(options).from(element).toPdf().save();
  };
  const generatePdf = () => {

  }
   const openPDF = () => {
    generatePDF(contentRef, options);
  };
  return (
    <div style={{ padding: '20px' }}>
      <div ref={contentRef} style={{ width:'800px',padding: '0px', background: '#fff', border: '0px solid #ddd' }}>
      <Template ref={childRef}/>
    
      </div>
      

      {/* Trigger Button */}
      <button
        onClick={handleDownloadPdf}
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Download as PDF
      </button>
      <button
        onClick={openPDF}
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
       React to generate PDF
      </button>
    </div>
  )
}
export default PDF;
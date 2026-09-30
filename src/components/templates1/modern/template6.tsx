import * as T from './template6.styled';
import { useAppSelector } from '@store/hooks';

const Template6 = ({ colorScheme }) => {
    const cv = useAppSelector((state: any) => state.cv);
    return (
        <T.ResumeContainer>
            <T.Left bgColor={'#fff'}>
                {/*
                <T.ImageWrapper>
                  <T.ImageEdge>
                    <T.Image src='/images/male1.png'/>
                  </T.ImageEdge>
                </T.ImageWrapper>
                */}

                 <T.RowLeftHeader borderColor={colorScheme.hex5}>
                    <T.SquareIcon fontColor={colorScheme.hex4}/><T.Header fontColor={colorScheme.hex4}>Career Objectives1</T.Header>             
                </T.RowLeftHeader>
               
                 <T.RowLeftHeader borderColor={colorScheme.hex5}>
                    <T.SquareIcon fontColor={colorScheme.hex4}/><T.Header fontColor={colorScheme.hex4}>Professional Summary</T.Header>             
                </T.RowLeftHeader>
                 <T.RowLeftHeader borderColor={colorScheme.hex5}>
                    <T.SquareIcon fontColor={colorScheme.hex4}/><T.Header fontColor={colorScheme.hex4}>Personal Skills</T.Header>             
                </T.RowLeftHeader>
               
                 <T.RowLeftHeader borderColor={colorScheme.hex5}>
                    <T.SquareIcon fontColor={colorScheme.hex4}/><T.Header fontColor={colorScheme.hex4}>Technical Skills</T.Header>             
                </T.RowLeftHeader>
                 <T.RowLeftHeader borderColor={colorScheme.hex5}>
                    <T.SquareIcon fontColor={colorScheme.hex4}/><T.Header fontColor={colorScheme.hex4}>Programming Skills</T.Header>             
                </T.RowLeftHeader>
               
                 <T.RowLeftHeader borderColor={colorScheme.hex5}>
                    <T.SquareIcon fontColor={colorScheme.hex4}/><T.Header fontColor={colorScheme.hex4}>Database Skills</T.Header>             
                </T.RowLeftHeader >
                <T.RowLeftHeader borderColor={colorScheme.hex5}>
                    <T.SquareIcon fontColor={colorScheme.hex4}/><T.Header fontColor={colorScheme.hex4}>Work Experience</T.Header>             
                </T.RowLeftHeader>
            </T.Left>
            <T.Right>
                <T.ImageWrapper>
                    <T.Image src={cv.personInfo.profileImage} fontColor={colorScheme.hex1}/>
                </T.ImageWrapper>
                <T.Name>Liam SCOTT</T.Name>
                <T.Position>Sale Representative</T.Position>
                <T.RowRightHeader borderColor={colorScheme.hex1}>
                    <T.SquareIcon fontColor={colorScheme.hex1}/><T.Header fontColor={colorScheme.hex1}>Contact</T.Header>             
                </T.RowRightHeader>
                <T.UL>
                    <li>liam.scott@gmail.com</li>
                    <li>202 2345 9876</li>
                    <li>Dallas, TX USA</li>
                </T.UL>
                <T.RowRightHeader borderColor={colorScheme.hex1}>
                    <T.SquareIcon fontColor={colorScheme.hex1}/><T.Header fontColor={colorScheme.hex1}>Education</T.Header>             
                </T.RowRightHeader>    
                <T.UL>
                    <li>Bachelor of Commerce in Business Administraition<br/>University of Texax<br/>2022-2025</li>
                    <li>Certificate of First Aid<br/>Texas College<br/>2022-2022</li>
                   
                </T.UL>
                <T.RowRightHeader borderColor={colorScheme.hex1}>
                    <T.SquareIcon fontColor={colorScheme.hex1}/><T.Header fontColor={colorScheme.hex1}>Languages</T.Header>             
                </T.RowRightHeader>    
                <T.UL>
                    <li>English</li>
                    <li>French</li>
                    
                </T.UL>
                <T.RowRightHeader borderColor={colorScheme.hex1}>
                    <T.SquareIcon fontColor={colorScheme.hex1}/><T.Header fontColor={colorScheme.hex1}>References</T.Header>             
                </T.RowRightHeader>    
                <T.UL>
                    <li>John Doe<br/>john.doe@gmail.com<br/>0301239879</li>
                    <li>Jane Cock<br/>jane.cock@gmail.com<br/>0301288879</li>
                </T.UL>
            </T.Right>

        </T.ResumeContainer>
    )
}
export default Template6;
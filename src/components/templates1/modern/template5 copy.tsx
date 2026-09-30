import { lazy } from 'react';
import * as M from '../layout-two-coloumn.styled'
import * as T from './template5.styled';
import * as A from '../app.styled';
import './main.css';
import { useAppDispatch, useAppSelector } from '@store/hooks';
const Template36 = ({ colorScheme }) => {
    //const colors ={hex1:'#e1d1d7',hex2:'#de9eb6',hex3:'#de90ad',hex4:'#de9eb6'}; --pink
    //const colors ={hex1:'#d0e8ef',hex2:'#ade1f0',hex3:'#64a9bd',hex4:'#81d7f0'}; -- blue
    //const colors ={hex1:'#b7dccd',hex2:'#ade1f0',hex3:'#64a9bd',hex4:'#81d7f0'};  --green
    //const colors ={hex1:'#cccccc',hex2:'#ade1f0',hex3:'#64a9bd',hex4:'#81d7f0'}; -- grey
    const colors = { hex1: '#e7daca', hex2: '#ade1f0', hex3: '#64a9bd', hex4: '#81d7f0' }; /*--brown*/

    // const colors ={hex1:'#dbd7e0',hex2:'#ade1f0',hex3:'#64a9bd',hex4:'#81d7f0'}; /*--purple*/
    const cv = useAppSelector((state: any) => state.cv);
    return (
        <M.Container leftWidth='230px' fontFamily='Philosopher'>
            <M.LeftContainer bgColor={colorScheme.hex5}>

                <T.LeftRow>
                    <A.Frame>
                        <A.InnerFrame imgBorderColor={colorScheme.hex3}>
                            <img className="profile-image" src={cv.personInfo.profileImage} />
                        </A.InnerFrame>
                    </A.Frame>
                </T.LeftRow>
                <T.LeftRow divHeight="auto" >
                    <T.ContentRow>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Personal Info</T.HeaderName>
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow bgColor={colorScheme.hex5}>
                         <A.StyledList ulStyle={'square'} bgColor={colorScheme.hex5}>
                                        <A.YAxisStyledItem fontColor={colorScheme.hex1}>{cv.personInfo.email}</A.YAxisStyledItem>
                                        <A.YAxisStyledItem fontColor={colorScheme.hex1}>{cv.personInfo.mobile}</A.YAxisStyledItem>
                                         <A.YAxisStyledItem fontColor={colorScheme.hex1}>{cv.personInfo.address}</A.YAxisStyledItem>
                                    </A.StyledList>
                    </T.NextContentRow>
                </T.LeftRow>
                <T.LeftRow divHeight="auto" >
                    <T.ContentRow>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer><T.HeaderName fontColor={colorScheme.hex1}>Education</T.HeaderName>
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.LeftRow>
                <T.LeftRow divHeight="auto" >
                    <T.ContentRow>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Languages
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <A.StyledList ulStyle={'square'}>
                        {cv.languages.map((lang, ref) => (
                                        <A.YAxisStyledItem>{lang}</A.YAxisStyledItem>
                        ))}
                        </A.StyledList>
                    </T.NextContentRow>
                </T.LeftRow>
                <T.LeftRow divHeight="auto">
                    <T.ContentRow>
                        <T.TopicWrapper>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                    <A.TinySquare fontColor={colorScheme.hex1} /><A.TinySquare fontColor={colorScheme.hex1} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;References
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        {cv.referees.map((re, ref) => (
                                    <T.ContactWrapper>
                                      <A.RowWrapper> 
                                      <A.DivBullet/>
                                      <A.RowContent>
                                      <b>{re.name}</b><br/>{re.email}<br/>{re.mobile}
                                      </A.RowContent>
                                      </A.RowWrapper>
                                    </T.ContactWrapper>
                                    ))}
                    </T.NextContentRow>
                </T.LeftRow>


            </M.LeftContainer>
            <M.RightContainer>
                <T.RightRow divHeight="235px" >
                    <T.FullName>Luke Jacob<br /></T.FullName>
                    <T.Role>SURFING INSTRUCTOR</T.Role>
                    <T.Summary>

                        <i className="fa-solid fa-single-quote-left"></i>Seeking a challenging role in a fast-paced tech start-up. With 5 years of experience in closing high-value deals and a history of exceeding sales targets by 20%, eager to bring these results to a new environment. Specializes in building long-term client relationships, previously leading to a 30% increase in repeat business.<i className="fa-solid fa-single-quote-left"></i>

                    </T.Summary>
                </T.RightRow>
                <T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Professional Summary
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
                <T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Personal Skills
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
                <T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Technical Skills
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
                <T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Programming Skills
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
                <T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                                <A.SquareWrapper>
                                    <A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                    <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Database Skills
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>dddd</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
<T.NextRightRow>
                    <T.ContentRow>
                        <T.TopicWrapper style={{ color: colors.hex3 }}>
                            <A.SquareContainer>
                             <A.SquareWrapper>
                                <A.TinySquare fontColor={colorScheme.hex5} />
                                <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                                <A.TinySquare fontColor={colorScheme.hex5} /><A.TinySquare fontColor={colorScheme.hex5} />
                            </A.SquareWrapper>
                            </A.SquareContainer>&nbsp;Work Experience
                        </T.TopicWrapper>
                    </T.ContentRow>
                    <T.NextContentRow>
                        <ul><li>dddd</li><li>ddddii</li></ul>
                    </T.NextContentRow>
                </T.NextRightRow>
            </M.RightContainer>
        </M.Container >
    )
}
export default Template36;
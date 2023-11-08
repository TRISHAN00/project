import React from 'react';
import Button3 from "./Button3";
import reactHtmlParser from "react-html-parser";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Video from "./Video";
import Button from "./SButton";

const Content = ({title, paraOne, paraTwo, linkText, mb, path, btnText, btnUrl, linkUrl, videoThumb, videoUrl, url}) => {



    return (
        <StyledContent>
            <div style={window.innerWidth > 767 ? {marginBottom: mb ? '0px' : '40px'} : {marginBottom: mb ? '0px' : '30px'}} className="study-abroad-content__single-blog">
                {
                    title && <div className="study-abroad-content__single-blog__title">
                        <h5>{title}</h5>
                    </div>
                }

                {
                    paraOne && <p>{reactHtmlParser(paraOne)}</p>
                }



                {/*{*/}
                {/*    btnText && <Button3 border={'1px solid #1A1A1A'}*/}
                {/*                        hoverBackground={'#F04848'}*/}
                {/*                        hoverColor={'#fff'}*/}
                {/*                        background={'transparent'}*/}
                {/*                        color={'#1A1A1A'}*/}
                {/*                        fontSize={12}*/}
                {/*                        fontWeight={500}*/}
                {/*                        lineHeight={18}*/}
                {/*                        hoverBorderColor={'#F04848'}*/}
                {/*                        text={btnText}*/}
                {/*                        src={btnUrl}*/}
                {/*    />*/}

                {/*}*/}
                {
                    btnText && <Button   color={'#1A1A1A'} hoverBorderColor={'#F04848'} hoverBackground={'#F04848'} borderColor={'#1A1A1A'} background={'transparent'} height={'40px'} fontWeight={'500'} lineHeight={'18'} fontSize={'12'} text={btnText} src={btnUrl} />
                }



                {
                    paraTwo && <p>{reactHtmlParser(paraTwo)}</p>
                }

                {
                    linkText && <Link target="_blank" to={url ? url : linkUrl}>
                        <h6>{reactHtmlParser(linkText)}</h6>
                    </Link>
                }
                {

                }
                {
                    videoThumb && <Video vidUrl={videoUrl} vidThumb={videoThumb}/>
                }

            </div>
        </StyledContent>
    );
};

const StyledContent = styled.div`
  li {
    list-style: unset!important;
    list-style-type: unset!important;
  }



  .study-abroad-content__single-blog {
    //margin-bottom: 40px;

    &__title {
      background: #F9F9F9;
      padding: 25px 30px;
      border-radius: 15px;
      overflow: hidden;
      margin-bottom: 30px;

      h5 {
        color: #1A1A1A;
        font-weight: 500;
        line-height: 26px;
      }
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: #1A1A1A;
      margin-bottom: 30px;
       span {
         color: #2D3691;
         font-weight: 500;
       }

      &:nth-of-type(2) {
        margin-top: 30px;
      }

      &:nth-last-of-type(1) {
        margin-top: 30px;
      }
    }

    h6 {
      color: #2D3691;
      font-weight: 500;
      line-height: 24px;
    }

    &:last-of-type(1) {
      margin-bottom: unset;
    }
  }


  //  responsive
  /* small mobile :320px. */
  @media (max-width: 767px) {
    .study-abroad-content__single-blog {
      &__title {
        padding: 20px 15px;
        margin-bottom: 20px;
      }

      p {
        margin-bottom: 20px;

        &:nth-of-type(2) {
          margin-top: 20px;
        }

        &:nth-last-of-type(1) {
          margin-top: 30px;
        }
      }
    }
  }

  /* Large Mobile :480px. */
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    .container {
      width: 450px
    }

  }
`

export default React.memo(Content);

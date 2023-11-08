import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "./Img";
import reactHtmlParser from "react-html-parser";
import {Link} from "react-router-dom";


const Feature = ({subtitle, leftText, rightBottomTitle, rightTopSmall, leftUrl, rightUrl}) => {
    return (
        <StyledStudyFeature className={'feature'}>
            <Container>
                <Row>
                    <Col md={12}>
                        {
                            subtitle && (
                                <div className="title split-up">
                                    <h3>{reactHtmlParser(subtitle ? subtitle : 'Follow this step')}</h3>
                                </div>
                            )
                        }

                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className={'feature__content'}>
                    <Col md={12}>
                        <div className="feature__content__img-bg">
                            <div className="feature__content__img-bg__inner">
                                <Img src={'/images/static/feature-bg.jpg'}/>
                            </div>
                        </div>
                    </Col>
                    <Col md={{span: 5, offset: 1}} className={'feature__content__text'}>
                        <h4 className={'split-up'}>{reactHtmlParser(leftText ? leftText : 'Choose a subject and we’ll find courses that match your criteria.')}</h4>

                        {
                            leftUrl && (
                                <Link to={'/find-a-university'}>
                                    <div className="svg-black">
                                        <svg id="Button_-_Nav_Button" data-name="Button - Nav Button"
                                             xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                                            <circle id="Circle_4990" data-name="Circle 4990" cx="25" cy="25" r="25"
                                                    fill="#1a1a1a"/>
                                            <circle id="Circle_4992" data-name="Circle 4992" cx="25" cy="25" r="25"
                                                    fill="#f04848"/>
                                            <g id="Group_15984" data-name="Group 15984" transform="translate(-98 -5895.5)">
                                                <line id="Line_3865" data-name="Line 3865" x2="5" y2="5"
                                                      transform="translate(120.5 5915.5)" fill="none" stroke="#f9f9f9"
                                                      stroke-linecap="round" stroke-width="1.5"/>
                                                <line id="Line_3866" data-name="Line 3866" y1="5" x2="5"
                                                      transform="translate(120.5 5920.5)" fill="none" stroke="#f9f9f9"
                                                      stroke-linecap="round" stroke-width="1.5"/>
                                            </g>
                                        </svg>
                                    </div>
                                </Link>
                            )
                        }

                    </Col>

                    <Col md={4} className="feature__content__box">
                        <div className="feature__content__box__img">
                            <div className="feature__content__box__img__inner">
                                <Img src={'/images/static/feature-blue.jpg'}/>
                            </div>
                        </div>
                        <div className="feature__content__box__info">
                            <p className={'split-up'}>{reactHtmlParser(rightTopSmall ? rightTopSmall : 'Contact with us')}</p>
                            <div className="feature__content__box__info__text">
                                <h4 className={'split-up'}>{reactHtmlParser(rightBottomTitle ? rightBottomTitle : 'For free\n' +
                                    'consoling')}</h4>
                                {
                                    rightUrl && (
                                        <Link to={'/contact-us'} >
                                            <div className="svg-white">
                                                <svg id="Button_-_Nav_Button" data-name="Button - Nav Button"
                                                     xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                                     viewBox="0 0 50 50">
                                                    <circle id="Circle_4990" data-name="Circle 4990" cx="25" cy="25" r="25"
                                                            fill="#f9f9f9"/>
                                                    <circle id="Circle_4992" data-name="Circle 4992" cx="25" cy="25" r="25"
                                                            fill="#f04848"/>
                                                    <g id="Group_15984" data-name="Group 15984"
                                                       transform="translate(-98 -5895.5)">
                                                        <line id="Line_3899" data-name="Line 3865" x2="5" y2="5"
                                                              transform="translate(120.5 5915.5)" fill="none" stroke="#f9f9f9"
                                                              stroke-linecap="round" stroke-width="1.5"/>
                                                        <line id="Line_3899" data-name="Line 3866" y1="5" x2="5"
                                                              transform="translate(120.5 5920.5)" fill="none" stroke="#f9f9f9"
                                                              stroke-linecap="round" stroke-width="1.5"/>
                                                    </g>
                                                </svg>
                                            </div>
                                        </Link>
                                    )
                                }


                            </div>
                        </div>
                    </Col>


                </Row>

            </Container>
        </StyledStudyFeature>
    );
};

const StyledStudyFeature = styled.section`
  background: #F9F9F9;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-top: 120px;
  overflow: hidden;


  .split-parent {
    overflow: hidden;
  }

  .split-child {
    overflow: hidden;
  }

  .title {
    overflow: hidden;

    h3 {
      color: #2D3691;
      font-weight: 500;
      line-height: 40px;
      margin-bottom: 30px;

    }
  }

  .feature__content__img-bg, .feature__content__box__img {
    border-radius: 15px !important;
    overflow: hidden !important;
  }

  .feature__content {
    position: relative;

    &__img-bg {
      position: relative;
      padding-top: calc(250 / 1170 * 100%);
    }

    &__box {
      position: absolute;
      content: '';
      right: 0;

      &__img {
        position: relative;
        padding-top: calc(250 / 370 * 100%);
      }

      &__info {
        position: absolute;
        content: '';
        bottom: 40px;
        width: 80%;
        left: 40px;

        p {
          font-weight: 500;
          line-height: 18px;
          color: #EAECFE;
          text-transform: uppercase;
        }

        &__text {
          display: flex;
          gap: 98px;
          justify-content: space-between;

          h4 {
            color: #F9F9F9;
            font-weight: 600;
            line-height: 22px;
            text-transform: uppercase;
            margin-top: 10px;
          }
        }
      }
    }

    &__text {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: start;
      flex-direction: column;
      justify-content: center;
      gap: 30px;

      h4 {
        color: #1A1A1A;
        font-weight: 600;
        line-height: 30px;
        //margin-bottom: 30px;
      }
    }
  }

  //  left svg animation

  svg {
    cursor: pointer;

    #Line_3899 {
      stroke: #2d3691;
      transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
    }

    #Circle_4992 {
      transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
      r: 0px;

    }


    &:hover {
      #Circle_4992 {
        fill: #f04848;
        transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
        r: 25px;
      }

      #Line_3899 {
        stroke: #f9f9f9;
      }
    }
  }

  /* Normal desktop :1200px. */
  @media (min-width: 1200px) and (max-width: 1500px) {


  }


  /* Normal desktop :992px. */
  @media (min-width: 992px) and (max-width: 1200px) {

    .feature__content {

      &__box {
        &__info {
          width: 70%;

          p {
            font-size: 12px;
          }

          &__text {
            gap: unset;

            h4 {

            }

          }
        }
      }

      &__text {
        gap: 10px;

        h4 {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: unset;
        }

        svg {
          margin-left: unset;
        }
      }
    }
  }


  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {


    .feature__content {

      &__box {
        &__info {
          width: 70%;

          p {
            font-size: 12px;
          }

          &__text {
            gap: unset;

            h4 {
              font-size: 18px;
              line-height: 18px;

            }

          }
        }
      }

      &__text {
        gap: 10px;

        h4 {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: unset;
        }

        svg {
          margin-left: unset;
        }
      }
    }

  }


  /* small mobile :320px. */
  @media (max-width: 767px) {

    .title {
      h3 {
        margin-bottom: 55px;
        font-size: 28px;
        font-weight: 500;
        line-height: 32px;
      }
    }

    .feature__content {

      &__img-bg {
        //display: none;
        padding-top: calc(250 / 345 * 100%);
        border-radius: 15px;
        overflow: hidden;
      }

      &__box {
        position: unset;
        margin-top: -10px;

        &__img {
          padding-top: calc(250 / 345 * 100%);
          border-radius: 15px;
          overflow: hidden;
        }
      }

      &__text {
        position: absolute;
        content: '';
        top: 35px;
        left: 0;
        right: 0;
        width: 92%;
        height: 100%;
        display: unset;
        align-items: start;
        flex-direction: column;
        justify-content: center;
        gap: 30px;


        h4 {
          margin-left: 15px;
        }

        svg {
          margin-left: 15px;
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

export default React.memo(Feature);

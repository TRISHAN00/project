import React from 'react';
import styled from "styled-components";
import {Col, Row} from "react-bootstrap";
import {Img} from "../Img";
import reactHtmlParser from "react-html-parser";
import {Link} from "react-router-dom";

const SingleTestimonial = ({img, desc, name, university, mt, url}) => {
    return (
        <StyledSingleTestimonial style={mt ? {marginTop: '30px'} : {marginTop: ''}}>
            <Link to={url}>
                <div className={'single-testimonial'}>
                    <Col className={'pl-0 custom-padding'} lg={4} md={12}>
                        <div className="single-testimonial__img">
                            <Img src={img}/>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                                    <g id="Group_18880" data-name="Group 18880" transform="translate(-268 -5528)">
                                        <circle id="Ellipse_4378" data-name="Ellipse 594" cx="35" cy="35" r="35"
                                                transform="translate(268 5528)" fill="#fff"/>
                                        <circle id="Ellipse_4379" data-name="Ellipse 594" cx="35" cy="35" r="35"
                                                transform="translate(268 5528)" fill="#fff"/>
                                        <path id="Icon_awesome-play" data-name="Icon awesome-play"
                                              d="M19.893,10.064,3.394.31A2.237,2.237,0,0,0,0,2.246v19.5a2.248,2.248,0,0,0,3.394,1.936l16.5-9.75A2.248,2.248,0,0,0,19.893,10.064Z"
                                              transform="translate(294.501 5550.998)" fill="#2d3691"/>
                                    </g>
                                </svg>

                            </div>
                        </div>
                    </Col>
                    <Col lg={8} md={12}>
                        <div className="single-testimonial__content">
                            <p>{reactHtmlParser(desc)}
                            </p>
                            <div className="single-testimonial__content__info">
                                <h6>{name}</h6>
                                <p>{university}</p>
                            </div>
                        </div>
                    </Col>
                </div>
            </Link>

        </StyledSingleTestimonial>
    );
};

const StyledSingleTestimonial = styled.div`
  
  
  
  .single-testimonial {
    background: #2D3691;
    display: flex;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;

    &__img {
      position: relative;
      padding-top: calc(400 / 370 * 100%);
      height: 100%;
      border-radius: 15px;
      overflow: hidden;

      .icon {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          cursor: pointer;
          line#Line_3859, line#Line_3860, line#Line_3858 {
            stroke: white;
          }

          #Ellipse_4379 {
            transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
            r: 0px;
          }

          line {
            stroke: #170c3d;
          }

          #Icon_awesome-play {
            transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);

          }

          &:hover {
            #Ellipse_4379 {
              fill: #F04848;
              transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
              r: 35px;
            }

            #Icon_awesome-play {
              fill: #fff;
            }

            g {
              line {
                stroke: #f9f9f9;
              }
            }
          }
        }
      }
    }

    &__content {
      //padding: 40px 30px 0px 0px;
      height: 100%;
      display: grid;
      align-items: center;
      padding: 40px 0px 40px 0px;
      p {
        color: #FFFFFF;
        font-weight: 400;
        line-height: 20px;
      }

      &__info {
        //padding-top: 80px;

        h6 {
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          color: #FFFFFF;
        }

        p {
          font-size: 12px;
          font-weight: 400;
          color: rgb(255, 255, 255, 0.7);
        }
      }
    }
  }


  /* Normal desktop :1200px. */
  @media (min-width: 1200px) and (max-width: 1500px) {
    .single-testimonial {
      &__img {

      }

      &__content {


        p {

        }

        &__info {
          padding-top: 40px;

          h6 {

          }

          p {

          }
        }
      }
    }

  }


  /* Normal desktop :992px. */
  @media (min-width: 992px) and (max-width: 1200px) {
    .single-testimonial {
      &__img {

      }

      &__content {


        p {

        }

        &__info {
          padding: 40px 0px 40px 0px;

          h6 {

          }

          p {

          }
        }
      }
    }

  }


  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {
    .single-testimonial {
      flex-direction: column;

      .custom-padding {
        padding-right: 0;
      }

      &__img {
        padding-top: calc(300 / 345 * 100%);
      }

      &__content {
        padding-top: 30px;

        p {

        }

        &__info {
          padding-top: 30px;
          padding-bottom: 40px;

          h6 {

          }

          p {

          }
        }
      }
    }

  }


  /* small mobile :320px. */
  @media (max-width: 767px) {
    .single-testimonial {
      flex-direction: column;

      .custom-padding {
        padding-right: 0;
      }

      &__img {
        padding-top: calc(300 / 345 * 100%);
      }

      &__content {
        padding-top: 30px;

        p {

        }

        &__info {
          padding-top: 30px;
          padding-bottom: 40px;
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
export default React.memo(SingleTestimonial);

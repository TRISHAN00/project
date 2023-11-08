import React from 'react';
import styled from 'styled-components';
import 'swiper/swiper.min.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Col, Container, Row} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Img} from "../Img";
import {Navigation} from "swiper";


const Partner = ({data}) => {

    return (
        <StyledSlide className={"pb-120 pt-120 partner"}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="d-flex navigation_wrapper partner-nav">
                            {
                                data?.subtitle && (
                                    <div style={{overflow: 'hidden'}} className="title split-up">
                                        <h3>{data?.subtitle}</h3>
                                    </div>
                                )
                            }

                            <ul className={"arrows"}>
                                <li className="prev_partner">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="52"
                                        height="52"
                                        viewBox="0 0 52 52"
                                    >
                                        <g
                                            id="Button_-_Nav_Button"
                                            data-name="Button - Nav Button"
                                            transform="translate(52 52) rotate(180)"
                                        >
                                            <circle
                                                id="Ellipse_4377"
                                                data-name="Ellipse 437"
                                                cx="26"
                                                cy="26"
                                                r="26"
                                                fill="#1A1A1A"
                                            ></circle>
                                            <circle
                                                id="Ellipse_4378"
                                                data-name="Ellipse 437"
                                                cx="26"
                                                cy="26"
                                                r="0"
                                                fill="#f9f9f9"
                                            ></circle>
                                            <g
                                                id="Group_15984"
                                                data-name="Group 15984"
                                                transform="translate(-97 -5894.5)"
                                            >
                                                <line
                                                    id="Line_3865"
                                                    data-name="Line 3865"
                                                    x2="5"
                                                    y2="5"
                                                    transform="translate(120.5 5915.5)"
                                                    fill="none"
                                                    stroke="#D80028"
                                                    stroke-linecap="round"
                                                    stroke-width="1.5"
                                                />
                                                <line
                                                    id="Line_3866"
                                                    data-name="Line 3866"
                                                    y1="5"
                                                    x2="5"
                                                    transform="translate(120.5 5920.5)"
                                                    fill="none"
                                                    stroke="#D80028"
                                                    stroke-linecap="round"
                                                    stroke-width="1.5"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </li>
                                <li className="next_partner">
                                    <svg
                                        id="Button_-_Nav_Button"
                                        data-name="Button - Nav Button"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="52"
                                        height="52"
                                        viewBox="0 0 52 52"
                                    >
                                        <circle
                                            id="Ellipse_4377"
                                            data-name="Ellipse 437"
                                            cx="26"
                                            cy="26"
                                            r="26"
                                            fill="#1A1A1A"
                                        ></circle>
                                        <circle
                                            id="Ellipse_4378"
                                            data-name="Ellipse 437"
                                            cx="26"
                                            cy="26"
                                            r="0"
                                            fill="#f9f9f9"
                                        ></circle>
                                        <g
                                            id="Group_15984"
                                            data-name="Group 15984"
                                            transform="translate(-97 -5894.5)"
                                        >
                                            <line
                                                id="Line_3865"
                                                data-name="Line 3865"
                                                x2="5"
                                                y2="5"
                                                transform="translate(120.5 5915.5)"
                                                fill="none"
                                                stroke="#fff"
                                                stroke-linecap="round"
                                                stroke-width="1.5"
                                            />
                                            <line
                                                id="Line_3866"
                                                data-name="Line 3866"
                                                y1="5"
                                                x2="5"
                                                transform="translate(120.5 5920.5)"
                                                fill="none"
                                                stroke="#D80028"
                                                stroke-linecap="round"
                                                stroke-width="1.5"
                                            />
                                        </g>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className={'partner-slide'}>
                {
                    data && (
                        <Swiper
                            // install Swiper modules
                            spaceBetween={30}
                            slidesPerView={4}
                            speed={900}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2
                                    ,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                            navigation={{
                                prevEl: ".prev_partner",
                                nextEl: ".next_partner",
                                disabledClass: "swiper-button-disabled"
                            }}
                            modules={[Navigation]}
                        >
                            {
                                data?.partners?.map((item, index) => {
                                    return (
                                        <SwiperSlide key={item?.id}>
                                            <div className={'single-partner'}>
                                                <div className="single-partner__inner">
                                                    <div className="single-partner__inner__img">
                                                        <Img src={item?.thumbnail}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    )
                }
            </Container>
        </StyledSlide>
    )

}

const StyledSlide = styled.section`
  background: #F9F9F9;

  .split-parent {
    overflow: hidden;
  }

  .split-child {
    overflow: hidden;
  }

  .title {
    overflow: hidden;
  }

  .navigation_wrapper {
    display: flex;
    justify-content: space-between;

    .title {
      overflow: hidden;

      h3 {
        font-size: 40px;
        font-weight: 500;
        line-height: 48px;
        color: #1A1A1A;
      }
    }
  }

  .swiper-button-disabled {
    opacity: 1 !important;
  }

  .partner-slide {
    margin-top: 40px;
  }

  .single-partner {
    &__inner {
      &__img {
        padding-top: calc(180 / 270 * 100%);
        position: relative;
        border-radius: 15px;
        overflow: hidden;
      }

    }
  }

  ul.arrows {
    display: flex;
    gap: 20px;
    justify-content: end;
  }

  svg {
    #Ellipse_4378 {
      transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
      r: 0px;
      cursor: pointer;
    }

    line {
      stroke: #fff;
    }

    &:hover {
      #Ellipse_4378 {
        fill: #2D3691;
        transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
        r: 26px;
      }

      g {
        line {
          stroke: #f9f9f9;
        }
      }
    }
  }

  .navigation {
    display: flex;
    gap: 15px;

    li {
      cursor: pointer;

      position: relative;
      border-radius: 50%;
      height: 52px;
      width: 52px;

      svg {
        position: relative;

        #Ellipse_4377 {
          fill: #A3A3A3;
        }

        #Ellipse_4378 {
          fill: #1A1A1A;
        }

        #Ellipse_4377 {
          transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
          r: 0;
          fill: #2D3691;

        }

        #Ellipse_4378 {
          transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
          r: 0;
          fill: #2D3691;

        }

        &:hover {
          #Ellipse_4378 {
            transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
            r: 26px;
          }

          line#Line_3865, line#Line_3866 {
            stroke: white;
          }
        }
      }
    }
  }

  @media (min-width: 1920px) {
    .navigation_wrapper {
      .title {
        h3 {
          font-size: 48px !important;
        }
      }
    }
  }

  /* small mobile :320px. */
  @media (max-width: 767px) {
    padding-top: 80px;
    padding-bottom: 80px;
    .partner-slide {
      margin-top: 30px;
    }

    .navigation_wrapper {
      .title h3 {
        font-size: 28px;
        font-weight: 500;
        line-height: 40px;
      }
    }
  }

`;


export default React.memo(Partner);

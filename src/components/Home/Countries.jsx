import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {BsPlus} from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Link} from "react-router-dom";
import {Img} from "../Img";
import reactHtmlParser from "react-html-parser";

const Strength = ({
                      padding,

                      data,
                      offset

                  }) => {




    return (
        <StyledStrength
            id={'countries'}
            offset={offset}
            className={`pionneering parallax-inner-box ${
                padding ? padding : "pt-120 pb-120"
            }  `}
        >
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="d-flex navigation_wrapper">


                            {
                                data?.title && (
                                    <div className="title split-up">
                                        <h3>{reactHtmlParser(data?.title)}</h3>
                                    </div>
                                )
                            }

                            <ul className={"arrows"}>
                                <li className="prev_swipper">
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
                                                fill="#f9f9f9"
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
                                <li className="next_swipper">
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
                                            fill="#f9f9f9"
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
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid
                       className="about-section__bottom">
                <Row style={{marginLeft: window.innerWidth > 767 && `${offset - 15}px`}}>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        slideNextClass={".next"}
                        allowSlideNext={true}
                        slidePrevClass={".prev"}
                        allowSlidePrev={true}
                        allowTouchMove={true}
                        longSwipesMs={900}
                        speed={900}
                        breakpoints={{
                            250: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        navigation={{
                            prevEl: ".prev_swipper",
                            nextEl: ".next_swipper  ",
                            disabledClass: "swiper-button-disabled"
                        }}
                        modules={[Navigation]}
                        containerClass = 'mySwiper'
                    >

                        {
                            data?.countries.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} >
                                        <Col sm={4} className="about-section__bottom__single p-0">
                                            <div className="about-section__bottom__single__inner">
                                                <Link to={item.url}>
                                                    <a/>
                                                </Link>

                                                <div className="about-section__bottom__single__inner__img">
                                                    <Img src={item?.image}/>
                                                </div>

                                                <div className="circle">
                                                    <BsPlus/>
                                                </div>

                                                <h4>{item?.title}</h4>
                                                <p>{item?.desc}</p>

                                                <div className="icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="11.207"
                                                        height="11.414"
                                                        viewBox="0 0 11.207 11.414"
                                                    >
                                                        <g
                                                            id="Group_15992"
                                                            data-name="Group 15992"
                                                            transform="translate(0.5 0.85)"
                                                        >
                                                            <line
                                                                id="Line_3858"
                                                                data-name="Line 3858"
                                                                x2="5"
                                                                y2="5"
                                                                transform="translate(5 -0.143)"
                                                                fill="none"
                                                                stroke="#f9f9f9"
                                                                stroke-linecap="round"
                                                                stroke-width="1"
                                                            />
                                                            <line
                                                                id="Line_3859"
                                                                data-name="Line 3859"
                                                                y1="5"
                                                                x2="5"
                                                                transform="translate(5 4.857)"
                                                                fill="none"
                                                                stroke="#f9f9f9"
                                                                stroke-linecap="round"
                                                                stroke-width="1"
                                                            />
                                                            <line
                                                                id="Line_3860"
                                                                data-name="Line 3860"
                                                                x1="10"
                                                                transform="translate(0 4.857)"
                                                                fill="none"
                                                                stroke="#f9f9f9"
                                                                stroke-linecap="round"
                                                                stroke-width="1"
                                                            />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </Col>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Row>
            </Container>
        </StyledStrength>
    );
};

const StyledStrength = styled.section`
  position: relative;
  overflow: hidden;
  background: #F9F9F9;

  &::before {
    position: absolute;
    content: '';
    background: #088395;
    height: 50%;
    left: 0;
    right: 0;
    top: 0;
  }


  .swiper-button-disabled {
    opacity: 1 !important;
  }

  .title_wrapper {
    display: flex;
  }

  .swiper-initialized {
    padding-right: ${props => props.offset}px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    opacity: 0;
    visibility: hidden;
  }

  ul.arrows {
    display: flex;
    gap: 20px;
    justify-content: end;
  }

  svg {
    cursor: pointer;
    line#Line_3859, line#Line_3860, line#Line_3858 {
      stroke: white;
    }

    #Ellipse_4378 {
      transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
      r: 0px;

    }

    line {
      stroke: #170c3d;
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

  .navigation_wrapper {
    justify-content: space-between;
    margin-bottom: 40px;

    .title {
      overflow: hidden;
      h3 {
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        color: #ffffff;
        overflow: hidden;
      }
    }

    .d-flex {
      justify-content: space-between;
    }

    .navigation {
      display: flex;
      gap: 15px;

      li {
        cursor: pointer;
        position: relative;
        border-radius: 50%;
        height: 50px;
        width: 50px;

        svg {
          position: relative;


        }
      }
    }
  }

  .swiper-wrapper {
    height: auto !important;
  }

  .about-section__bottom {
    //margin-top: -50px;
    position: relative;
    padding-right: 0;

    .row {
      margin-left: 0px;
      margin-right: 0px;
    }


    &::before {
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      top: 0;
      background: #088395;
      height: 50%;
      width: 100%;
    }
    

    &__single {
      max-width: 100%;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;

      &__inner {
        position: relative;
        padding-top: calc(370 / 370 * 100%);
        overflow: hidden;

        a {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0px;
          z-index: 5;
        }

        &__img {
          &:after {
            content: "";
            position: absolute;
            height: 0%;
            width: 100%;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(45, 54, 145, 0.8);
            transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
          }
        }


        .img-top {
          position: absolute;
          top: 40px;
          left: 30px;
          z-index: 2;
          opacity: 1;
          transition: 0.3s cubic-bezier(0.4, 0, 0, 1);
          height: 60px;
        }

        .circle {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          height: 40px;
          width: 40px;
          border: 1px solid #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          opacity: 1;
          transition: 0.3s cubic-bezier(0.4, 0, 0, 1);

          svg {
            color: #ffffff;
            font-size: 25px;
            transition: 0.3s cubic-bezier(0.4, 0, 0, 1);
          }
        }

        h4 {
          position: absolute;
          bottom: 40px;
          left: 30px;
          right: 30px;
          font-size: 24px;
          line-height: 30px;
          font-weight: 600;
          color: #ffffff;
          z-index: 5;
          transition: all 0.5s cubic-bezier(0.4, 0, 0, 1);
        }

        p {
          position: absolute;
          bottom: -240px;
          left: 30px;
          right: 30px;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: #ffffff;
          z-index: 5;
          transition: all 0.5s cubic-bezier(0.4, 0, 0, 1);
        }

        .icon {
          position: absolute;
          top: 30px;
          right: 30px;
          z-index: 1;
          transition: all 0.8s cubic-bezier(0.4, 0, 0, 1);
          transform: rotate(0deg);

          svg {
            li {
              transition: all 0.8s cubic-bezier(0.4, 0, 0, 1);
            }
          }
        }

        span {
          position: absolute;
          z-index: 1;
          top: 30px;
          left: 30px;
          font-size: 60px;
          font-weight: 500;
          line-height: 60px;
          color: #f9f9f9;
          transition: all 0.5s cubic-bezier(0.4, 0, 0, 1);
        }
      }

      &:hover {
        .about-section__bottom__single__inner h4 {
          bottom: 170px;
        }

        .about-section__bottom__single__inner p {
          bottom: 70px;
        }

        .about-section__bottom__single__inner__img::after {
          height: 100%;
        }

        .about-section__bottom__single__inner {
          &:after {
            height: 0;
          }

          .icon {
            transform: rotate(-45deg);

            svg {
              line {
                stroke: #fff;
                fill: #fff;
              }
            }
          }

          span {
            top: -10px;
            opacity: 0;
          }

          h4 {
            color: #ffffff !important;
          }

          p {
            transform: none;
            opacity: 1;
            color: #ffffff;
          }

          &__img:after {
            opacity: 1;
            transition-delay: 0s;
          }

          .img-top {
            transform: translateY(-20px);
            opacity: 0;
          }

          .circle {
            transform: scale(1.9);
            opacity: 0;

            svg {
              transform: rotate(50deg);
            }
          }
        }

      }
    }
  }
  /* Normal desktop :1920. */
  @media (min-width: 1920px){
    .navigation_wrapper {
      .title {
        h3 {
          font-size: 48px!important;
        }
      }
    }

  }

  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {

    .swiper-initialized {
      padding-right: 40px;
    }

    .about-section__bottom {
      .row {
        margin-left: 40px !important;
      }
    }

  }


  @media (max-width: 767px) {
    .about-section__bottom {
      padding-right: 15px;
      margin-left: unset !important;
    }

    .swiper-initialized {
      padding-right: 1px;
    }

    .title h3 {
      font-size: 28px !important;
      font-weight: 500;
      line-height: 40px;
    }
  }

`;

export default React.memo(Strength);

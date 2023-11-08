import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
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


const Universities = ({

                          id,
                          padding,
                          remove,
                          data,
                          offset

                      }) => {


    const info = data?.posts?.list;
    const [getAfter, setgetAfter] = useState(90);


    return (
        <StyledUniversities
            getAfterHeight={getAfter}
            remove={remove}
            offset={offset}
            id={`${id ? id : "Strength"}`}
            className={`pionneering parallax-inner-box ${
                padding ? padding : "pt-120 pb-120"
            }  `}
        >
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="d-flex navigation_wrapper">
                            {
                                data?.subtitle && (
                                    <div style={{overflow: 'hidden'}} className="title split-up">

                                        <h3>{reactHtmlParser(data?.subtitle)}</h3>

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
            <Container fluid
                       className="about-section__bottom">

               <Row style={{marginLeft: window.innerWidth > 767 && `${offset - 15}px`}}>
                   {
                       data && (
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
                           >

                               {
                                   data?.university?.map((item, index) => {
                                       return (
                                           <SwiperSlide key={index} >
                                               <Col sm={4} className="about-section__bottom__single p-0">
                                                   <div className="about-section__bottom__single__inner">
                                                       <div className="about-section__bottom__single__inner__top">
                                                           <h4>{item?.name}</h4>
                                                           <div className="about-section__bottom__single__inner__top__icon">
                                                               <svg width="38" height="38" viewBox="8 0 38 38">
                                                                   <g id="Group_18862" data-name="Group 18862"
                                                                      transform="translate(-1690 -1177)">
                                                                       <g transform="matrix(1, 0, 0, 1, 1690, 1177)"
                                                                          filter="url(#Ellipse_590)">
                                                                           <circle id="Ellipse_590-2" data-name="Ellipse 590" cx="10"
                                                                                   cy="10" r="10" transform="translate(9 6)" fill="#fff"/>
                                                                       </g>
                                                                       <g id="_004-pin" data-name="004-pin"
                                                                          transform="translate(1656.92 1188)">
                                                                           <g id="Group_18861" data-name="Group 18861"
                                                                              transform="translate(48.08)">
                                                                               <g id="Group_18860" data-name="Group 18860"
                                                                                  transform="translate(0)">
                                                                                   <path id="Path_8303" data-name="Path 8303"
                                                                                         d="M51.774,0A3.7,3.7,0,0,0,48.08,3.694a4.262,4.262,0,0,0,.313,1.422,5.958,5.958,0,0,0,.427.8l2.533,3.838a.482.482,0,0,0,.842,0l2.533-3.838a5.932,5.932,0,0,0,.427-.8,4.261,4.261,0,0,0,.313-1.422A3.7,3.7,0,0,0,51.774,0Zm2.98,4.948a5.458,5.458,0,0,1-.389.728L51.832,9.513c-.05.076-.066.076-.116,0L49.183,5.676a5.461,5.461,0,0,1-.389-.728,3.869,3.869,0,0,1-.279-1.253,3.259,3.259,0,0,1,6.519,0A3.872,3.872,0,0,1,54.754,4.948Z"
                                                                                         transform="translate(-48.08)" fill="#2d3691"/>
                                                                                   <path id="Path_8304" data-name="Path 8304"
                                                                                         d="M114.036,64.008a1.956,1.956,0,1,0,1.956,1.956A1.958,1.958,0,0,0,114.036,64.008Zm0,3.477a1.521,1.521,0,1,1,1.521-1.521A1.523,1.523,0,0,1,114.036,67.485Z"
                                                                                         transform="translate(-110.342 -62.269)"
                                                                                         fill="#2d3691"/>
                                                                               </g>
                                                                           </g>
                                                                       </g>
                                                                   </g>
                                                               </svg>
                                                               <p>{item?.location}</p>
                                                           </div>
                                                       </div>


                                                       <div className="circle">
                                                           <svg id="Group_18859" data-name="Group 18859" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                                               <circle id="Ellipse_452" data-name="Ellipse 452" cx="20" cy="20" r="20" fill="#fff"/>
                                                               <circle id="Ellipse_466" data-name="Ellipse 466" cx="0.5" cy="0.5" r="0.5" transform="translate(19 20)" fill="#fff"/>
                                                               <g id="Group_15053" data-name="Group 15053" transform="translate(15 15)">
                                                                   <line id="Line_3815" data-name="Line 3815" y1="10" transform="translate(5)" fill="none" stroke="#2D3691" stroke-linecap="round" stroke-width="1"/>
                                                                   <line id="Line_3816" data-name="Line 3816" y1="10" transform="translate(10 5) rotate(90)" fill="none" stroke="#2d3691" stroke-linecap="round" stroke-width="1"/>
                                                               </g>
                                                           </svg>
                                                       </div>

                                                       <div className="about-section__bottom__single__inner__img">
                                                           <div className="about-section__bottom__single__inner__img__inner">
                                                               <Img src={item?.image}/>
                                                           </div>
                                                       </div>

                                                       <div className="about-section__bottom__single__inner__text">
                                                           <p>{item?.short_desc}</p>
                                                       </div>

                                                       {
                                                           item?.url && (
                                                               <div className="about-section__bottom__single__inner__explore">
                                                                   <p><Link to={item?.url}>Explore</Link></p>
                                                               </div>
                                                           )
                                                       }


                                                   </div>
                                               </Col>
                                           </SwiperSlide>
                                       )
                                   })
                               }
                           </Swiper>
                       )
                   }
               </Row>
            </Container>
        </StyledUniversities>
    );
};

const StyledUniversities = styled.section`
  position: relative;
  overflow: hidden;
  background: #F9F9F9;

  .swiper-button-disabled {
    opacity: 1 !important;
  }

  .title_wrapper {
    display: flex;
  }

  .split-parent {
    overflow: hidden;
  }
  .split-child {
    overflow: hidden;
  }
  
  .title {
    overflow: hidden;
  }
  
  .swiper-initialized {
    padding-right: ${props => props.offset}px;
  }

  ul.arrows {
    display: flex;
    gap: 20px;
    justify-content: end;
  }

  svg {
    cursor: pointer;

    #Ellipse_4378 {
      transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
      r: 0px;

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

  .swiper-button-prev,
  .swiper-button-next {
    opacity: 0;
    visibility: hidden;
  }

  .navigation_wrapper {
    justify-content: space-between;
    margin-bottom: 40px;

    @media (max-width: 767px) {
      margin-bottom: 35px;
    }

    .title {
      overflow: hidden;
      h3 {
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        color: #1A1A1A;
      }
    }

    .d-flex {
      justify-content: space-between;
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


    &__single {
      max-width: 100%;
      border-radius: 10px;
      overflow: hidden;
      background: #1A1A1A;

      &__inner {
        position: relative;
        padding-top: calc(370 / 370 * 100%);
        overflow: hidden;

        &__top {
          position: absolute;
          top: 40px;
          left: 30px;

          &__icon {
            display: flex;
            align-items: center;
            margin-top: 10px;

            p {
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              color: #fff;
            }
          }

          h4 {
            font-size: 24px;
            font-weight: 600;
            line-height: 30px;
            color: #fff;
          }
        }


        &__img {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          width: 100%;
          transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
          transform: translateX(-50%, -50%);

          &__inner {
            position: relative;
            padding-top: calc(210 / 370 * 100%);
          }
        }

        &__text {
          position: absolute;
          bottom: 0;
          //left: 30px;
          padding-left: 30px;
          //right: 50px;
          padding-right: 50px;
          height: 0%;
          opacity: 0;
          transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
          transform: translateX(-50%, -50%);
          //background: rgb(26, 26, 26);
          p {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: #fff;
          }
        }

        &__explore {
          position: absolute;
          content: '';
          left: -230px;
          bottom: 30px;
          transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
          cursor: pointer;

          p {
            a {
              color: #fff;
              border: 1px solid #fff;
              border-radius: 50px;
              border: 1px solid #fff;
              padding: 12px 32px;
              border-radius: 50px;
              font-size: 12px;
              font-weight: 500;
              line-height: 18px;
              &:hover {
                color: #fff!important;
              }
            }
          }
        }

        .circle {
          position: absolute;
          left: 30px;
          right: 0;
          top: 0;
          bottom: 0;
          //margin: auto;
          height: 100%;
          width: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          opacity: 1;
          transition: 0.5s cubic-bezier(0.4, 0, 0, 1);

          svg {
            color: #ffffff;
            font-size: 25px;
            transition: 0.3s cubic-bezier(0.4, 0, 0, 1);

            line#Line_3815 {
              stroke: #2D3691;
            }

            line#Line_3816 {
              stroke: #2D3691;
            }
          }
        }


        .icon {
          position: absolute;
          top: 30px;
          right: 30px;
          z-index: 1;
          transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
          transform: rotate(0deg);

          svg {
            li {
              transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
            }
          }
        }

      }

      &:hover {
        .about-section__bottom__single__inner__img {
          height: 0%;
        }

        .about-section__bottom__single__inner__text {
          height: 60%;
          opacity: 1;
        }

        .about-section__bottom__single__inner__explore {
          left: 30px;
          bottom: 50px;
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
              transform: rotate(90deg);
            }
          }
        }

      }
    }
  }

  @media (min-width: 1920px){
    .navigation_wrapper {
      .title {
        h3 {
          font-size: 48px!important;
        }
      }
    }
  }

  /* Normal desktop :992px. */
  @media (min-width: 992px) and (max-width: 1200px) {
    .about-section__bottom__single__inner__text p {
      font-size: 12px;
      line-height: 14px;
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
    }

    .swiper-initialized {
      padding-right: 1px;
    }

    .title h3 {
      font-size: 28px !important;
      font-weight: 500;
      line-height: 40px;
    }

    .about-section__bottom {
      &__single {
        .about-section__bottom__single__inner__explore {
          opacity: 0;
          visibility: hidden;
        }

        .about-section__bottom__single__inner__text {
          opacity: 0;
          visibility: hidden;
        }

        &:hover {
          .about-section__bottom__single__inner__img {
            height: unset;
          }

          .about-section__bottom__single__inner__text {
            height: unset;
          }

          .about-section__bottom__single__inner__explore {
            left: unset;
          }

          .about-section__bottom__single__inner {
            &:after {
              height: unset;
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
  }
`;

export default React.memo(Universities);

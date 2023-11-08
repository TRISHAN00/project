import React, {useRef, useState} from 'react';
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
import reactHtmlParser from "react-html-parser";
import SimpleBar from "simplebar-react";
import Modal from "react-bootstrap/Modal";
import ModalVideo from "react-modal-video";
import {Link} from "react-router-dom";


const Testimonial = ({offset, data}) => {

    let [open, setOpen] = useState(false);
    let [videoId, setVideo] = useState('');

    let handelOpen = (open, id) => {
        setOpen(open);
        setVideo(id);
        setShow(true)
    };
    const modalRef = useRef(null);


    const [show, setShow] = useState(false);
    const [popupId, setPopupId] = useState()
    const [showVideo, setShowVideo] = useState(false)

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = (e) => {
        setShow(true)
        setPopupId(e)
        setVideo(true)
    }
    const handleCloseModal = () => {
        setOpen(false);
        setVideo('');
        handleClose();
    };

    return (
        <StyledSlide offset={offset} className={"pt-120 pb-120 testimonial"}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="d-flex navigation_wrapper partner-nav">
                            <div style={{overflow: 'hidden'}} className="title split-up">
                                {
                                    data?.subtitle && <h3>{reactHtmlParser(data?.subtitle)}</h3>
                                }

                            </div>
                            <ul className={"arrows"}>
                                <li className="prev_testimonial">
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
                                <li className="next_testimonial">
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
            <div style={{marginLeft: window.innerWidth > 767 ? `${offset}px` : '0px'}} className="slide-wrap">
                <Swiper
                    // install Swiper modules
                    spaceBetween={70}
                    slidesPerView={1}
                    speed={1200}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    effect="slide"

                    breakpoints={{
                        320: {
                            slidesPerView: 1
                            ,
                            spaceBetween: 30,
                        },
                        576: {
                            slidesPerView: 1
                            ,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                    }}
                    navigation={{
                        prevEl: ".prev_testimonial",
                        nextEl: ".next_testimonial",
                        disabledClass: "swiper-button-disabled"
                    }}
                    modules={[Navigation]}
                >

                    {
                        data?.testimonials?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Link to={'/testimonial'}>
                                        <div className={'single-testimonial'}>
                                            <div className="single-testimonial__inner">
                                                <Col className={'single-testimonial__inner__img p-0'} md={4}>
                                                    <div className="single-testimonial__inner__img__wrap">
                                                        {
                                                            window.innerWidth > 767 ?
                                                                <Img src={item?.thumbnail}/> :
                                                                <Img src={item?.thumbnail}/>
                                                        }
                                                        <div className="plat-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="70"
                                                                 height="70" viewBox="0 0 70 70">
                                                                <g id="Group_18880" data-name="Group 18880"
                                                                   transform="translate(-268 -5528)">
                                                                    <circle id="Ellipse_594" data-name="Ellipse 594"
                                                                            cx="35" cy="35" r="35"
                                                                            transform="translate(268 5528)"
                                                                            fill="#fff"/>
                                                                    <circle id="Ellipse_595" data-name="Ellipse 594"
                                                                            cx="35" cy="35" r="35"
                                                                            transform="translate(268 5528)"
                                                                            fill="#fff"/>
                                                                    <path id="Icon_awesome-play"
                                                                          data-name="Icon awesome-play"
                                                                          d="M19.893,10.064,3.394.31A2.237,2.237,0,0,0,0,2.246v19.5a2.248,2.248,0,0,0,3.394,1.936l16.5-9.75A2.248,2.248,0,0,0,19.893,10.064Z"
                                                                          transform="translate(294.501 5550.998)"
                                                                          fill="#2d3691"/>
                                                                    <circle id="Ellipse_594" data-name="Ellipse 594"
                                                                            cx="35" cy="35" r="0"
                                                                            transform="translate(268 5528)"
                                                                            fill="#fff"/>
                                                                    <path id="Icon_awesome-play"
                                                                          data-name="Icon awesome-play"
                                                                          d="M19.893,10.064,3.394.31A2.237,2.237,0,0,0,0,2.246v19.5a2.248,2.248,0,0,0,3.394,1.936l16.5-9.75A2.248,2.248,0,0,0,19.893,10.064Z"
                                                                          transform="translate(294.501 5550.998)"
                                                                          fill="#2d3691"/>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <Modal
                                                        show={show}
                                                        // item={item}
                                                        onHide={handleCloseModal}
                                                        backdrop="static"
                                                        keyboard={false}
                                                        className="gph_modal modal_video_popup popup-version-one"
                                                        dialogClassName="custom-modal-dialog"
                                                    >
                                                        <SimpleBar className="main_scroll " style={{height: '100vh'}}>
                                                            <Modal.Body>
                                                                <div className={'for-close'}>
                                                                    <div onClick={handleCloseModal}
                                                                         className="modal-close ">
                                                                        <svg id="Button_-_Close"
                                                                             data-name="Button - Close"
                                                                             xmlns="http://www.w3.org/2000/svg"
                                                                             width="44" height="44" viewBox="0 0 44 44">
                                                                            <g id="Ellipse_18" data-name="Ellipse 18"
                                                                               fill="none" stroke="#3c3c3b"
                                                                               stroke-width="1" opacity="0.3">
                                                                                <circle cx="22" cy="22" r="22"
                                                                                        stroke="none"/>
                                                                                <circle cx="22" cy="22" r="21.5"
                                                                                        fill="none"/>
                                                                            </g>
                                                                            <g id="Ellipse_19" data-name="Ellipse 19"
                                                                               fill="none" stroke="#3c3c3b"
                                                                               stroke-width="1" stroke-dasharray="0 142"
                                                                               opacity={'0'}>
                                                                                <circle cx="22" cy="22" r="22"
                                                                                        stroke="none"/>
                                                                                <circle cx="22" cy="22" r="21.5"
                                                                                        fill="none"/>
                                                                            </g>
                                                                            <g id="Group_18979" data-name="Group 18979"
                                                                               transform="translate(-3149 -104.5)">
                                                                                <line id="Line_4" data-name="Line 4"
                                                                                      x2="8" y2="8"
                                                                                      transform="translate(3167 122.5)"
                                                                                      fill="none" stroke="#3c3c3b"
                                                                                      strokeLinecap="round"
                                                                                      stroke-width="1"/>
                                                                                <line id="Line_3877"
                                                                                      data-name="Line 3877" x1="8"
                                                                                      y2="8"
                                                                                      transform="translate(3167 122.5)"
                                                                                      fill="none" stroke="#3c3c3b"
                                                                                      strokeLinecap="round"
                                                                                      stroke-width="1"/>
                                                                            </g>
                                                                        </svg>
                                                                    </div>
                                                                </div>


                                                                <div>
                                                                    <div className="modal-data d-flex">
                                                                        <ModalVideo channel='youtube' isOpen={open}
                                                                                    videoId={videoId}
                                                                                    onClose={handleCloseModal}/>
                                                                    </div>
                                                                </div>
                                                            </Modal.Body>
                                                        </SimpleBar>
                                                    </Modal>
                                                </Col>
                                                <Col md={8}>
                                                    <div className="testimonial__inner__content">
                                                        <p>{reactHtmlParser(item?.desc)}</p>
                                                        <div className="testimonial__inner__content__info">
                                                            <p>{reactHtmlParser(item?.author)}</p>
                                                            <span>{reactHtmlParser(item?.address)}</span>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>
        </StyledSlide>
    )

}

    const StyledSlide = styled.section`
      background: #F9F9F9;
      overflow: hidden;

      .split-parent {
        overflow: hidden;
      }

      .split-child {
        overflow: hidden;
      }

      .title {
        overflow: hidden;
      }

      .slide-wrap {
        margin-top: 40px;
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

      .swiper-initialized {
        padding-right: ${(props) => props.offset + 250}px;
      }

      .swiper-button-disabled {
        opacity: 1 !important;
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
          r: 0;
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

      //navbar
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
              r: 0px;
              fill: #2D3691;

            }

            #Ellipse_4378 {
              transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
              r: 0px;
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

      //single slide
      .single-testimonial {
        background: #2D3691;
        border-radius: 25px;
        overflow: hidden;

        &__inner {
          display: flex;
          overflow: hidden;

          &__img {
            overflow: hidden;

            &__wrap {
              padding-top: calc(400 / 370 * 100%);
              position: relative;
              overflow: hidden;

              .plat-btn {
                position: absolute;
                content: '';
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

                svg {
                  cursor: pointer;

                  line#Line_3859, line#Line_3860, line#Line_3858 {
                    stroke: white;
                  }

                  #Ellipse_595 {
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
                    #Ellipse_595 {
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

          }
        }
      }

      .testimonial__inner__content {
        padding: 40px 0px;
        display: flex;
        flex-direction: column;
        gap: 60px;
        padding-left: 10px;
        overflow: hidden;

        &__info {
          p {
            font-weight: 500 !important;
          }
        }


        p {
          color: #fff;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }

        span {
          color: #fff;
          opacity: 0.7;
          font-size: 12px;
          line-height: 20px;
          font-weight: 400;
        }
      }

      //  responsive
      @media (min-width: 1920px) {
        .testimonial__inner__content {
          padding: 60px 40px;

          span {
            font-size: 14px;
          }
        }

        .navigation_wrapper {
          .title {
            h3 {
              font-size: 48px !important;
            }
          }
        }
      }


      /* Normal desktop :1200px. */
      @media (min-width: 1200px) and (max-width: 1500px) {
        //single slide
        .single-testimonial {

          &__inner {

            &__img {

              &__wrap {
                overflow: hidden;
                padding-top: calc(500 / 370 * 100%);
                position: relative;
                border-radius: 20px;
              }

            }
          }
        }

      }


      /* Normal desktop :992px. */
      @media (min-width: 992px) and (max-width: 1200px) {

        .single-testimonial {
          &__inner {
            &__img {
              &__wrap {
                padding-top: calc(700 / 370 * 100%);
                position: relative;
                border-radius: 20px;
              }

            }
          }
        }
      }


      /* Tablet desktop :768px. */
      @media (min-width: 768px) and (max-width: 991px) {
        .swiper-initialized {
          //padding-left: 40px;
          padding-right: 58px;
        }

        .testimonial__inner__content {
          padding: 0px;
          flex-direction: column;
          gap: 0px;
          margin-top: 10px;
        }


        //single slide
        .single-testimonial {
          overflow: hidden;

          &__inner {
            display: flex;


            &__img {
              overflow: hidden;

              &__wrap {

                padding-top: calc(500 / 370 * 100%);
                position: relative;
                border-radius: 20px;
              }
            }
          }
        }

      }


      /* small mobile :320px. */
      @media (max-width: 767px) {
        padding-top: 80px;
        padding-bottom: 80px;
        .swiper-initialized {
          padding-right: unset;
        }

        .partner-slide {
          margin-top: 30px;
        }

        .navigation_wrapper {
          .title {
            overflow: hidden;

            h3 {
              font-size: 28px;
              font-weight: 500;
              line-height: 40px;
            }
          }
        }

        //single slide
        .single-testimonial {
          margin-right: 15px;
          margin-left: 15px;
          overflow: hidden;

          &__inner {
            display: flex;
            flex-direction: column;

            &__img {
              &__wrap {
                padding-top: calc(300 / 345 * 100%);
                position: relative;
              }
            }
          }
        }

        .testimonial__inner__content {
          padding: 30px 0px 40px 10px;
          gap: 30px;
        }
      }



    `;


    export default React.memo(Testimonial);

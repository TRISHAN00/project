import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "../Img";
import {BsPlus} from "react-icons/bs";
import {Link} from "react-router-dom";




const Course = ({data}) => {


    const chooseCourse = data?.choose_course;
    const findCourse = data?.find_course;
    const ielts = data?.ielts_score;
    const scholarship = data?.scholarship;
    const ranking = data?.student_ranking;


    return (
        <>
            <StyledDetail className="pt-120 pb-100">
                <Container>
                    <Row>
                        <div data-speed={0.9} className="fixed-content">
                            <div className={'parallax-text'}>
                                <p>{data?.subtitle}</p>
                            </div>
                        </div>
                        <Col
                            className={"item-para"}
                            md={{span: 4, offset: 3}}
                        >
                            <Link to={chooseCourse?.url}>
                                <div className="item-single">
                                    <div className="image-wrapper">
                                        <Img src={chooseCourse?.image}/>

                                        <div className="circle">
                                            <BsPlus/>
                                        </div>
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
                                        <h4>{chooseCourse?.title}</h4>
                                        <p className={"fade-up"}>
                                            {
                                                chooseCourse?.desc
                                            }
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col
                            className={"item-para"}
                            md={{span: 4, offset: 1}}
                        >
                            <Link to={findCourse?.url}>
                                <div className="item-single ">
                                    <div className="image-wrapper">
                                        <Img src={findCourse?.image}/>
                                        <div className="circle">
                                            <BsPlus/>
                                        </div>
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
                                        <h4>{findCourse?.title}</h4>
                                        <p className={"fade-up"}>
                                            {findCourse?.desc}
                                        </p>
                                    </div>

                                </div>
                            </Link>
                        </Col>
                        <Col
                            className={"item-para"}
                            md={{span: 4, offset: 3}}
                        >
                            <Link to={ranking?.url}>
                                <div className="item-single ">
                                    <div className="image-wrapper">
                                        <Img src={ranking?.image}/>
                                        <div className="circle">
                                            <BsPlus/>
                                        </div>
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
                                        <h4>{ranking?.title}</h4>
                                        <p className={"fade-up"}>
                                            {ranking?.desc}
                                        </p>
                                    </div>

                                </div>
                            </Link>
                        </Col>
                        <Col
                            className={"item-para"}
                            md={{span: 4, offset: 1}}
                        >
                            <Link to={scholarship?.url}>
                                <div className="item-single ">
                                    <div className="image-wrapper">
                                        <Img src={scholarship?.image}/>
                                        <div className="circle">
                                            <BsPlus/>
                                        </div>
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
                                        <h4>{scholarship?.title}</h4>
                                        <p className={"fade-up"}>
                                            {scholarship?.desc}
                                        </p>
                                    </div>

                                </div>
                            </Link>
                        </Col>
                        <Col
                            className={"item-para"}
                            md={{span: 4, offset: 3}}
                        >
                            <Link to={ielts?.url}>
                                <div className="item-single ">
                                    <div className="image-wrapper">
                                        <Img src={ielts?.image}/>
                                        <div className="circle">
                                            <BsPlus/>
                                        </div>
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
                                        <h4>{ielts?.title}</h4>
                                        <p>
                                            {ielts?.desc}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </StyledDetail>
        </>
    );
};

const StyledDetail = styled.section`

  .container {
    position: relative;
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

  .fixed-content {
    position: absolute;
    left: 0;
    top: 100px;
    display: flex;
    align-items: center;

    .parallax-text {
      p {
        font-size: 160px;
        line-height: 160px;
        color: #2D3691;
        font-weight: 500;
        position: relative;
        transform: rotate(180deg);
        writing-mode: vertical-rl;
        height: auto;
        width: auto;
      }
    }
  }


  .item-single {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      height: 0%;
      width: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(45, 54, 145, 0.8);;
      opacity: 1;
      transition: 0.5s cubic-bezier(0.4, 0, 0, 1);
    }

    .image-wrapper {
      padding-top: 100%;
      position: relative;

      span {
        font-size: 160px;
        font-weight: 400;
        line-height: 160px;
        color: #2D3691;
        position: absolute;
        z-index: 2;
        top: -80px;
        left: 30px;
      }

      h4 {
        font-size: 24px;
        font-weight: 600;
        line-height: 30px;
        color: #f9f9f9;
        position: absolute;
        left: 0;
        bottom: 40px;
        margin: 0 40px;
        transition: all 0.5s cubic-bezier(0.4, 0, 0, 1);
        z-index: 1;
        max-width: 280px;
      }

      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: #f9f9f9;
        position: absolute;
        left: 0;
        bottom: -400px;
        margin: 0 40px;
        transition: all 0.5s cubic-bezier(0.4, 0, 0, 1);
        z-index: 1;
      }
    }

    .content {
      margin: 20px 0 0;

      p {
        color: #4f616b;
      }
    }

    &:hover {
      .circle {
        transform: scale(1.9);
        opacity: 0;

        svg {
          transform: rotate(50deg);
        }
      }

      p {
        bottom: 40px;
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

      h4 {
        bottom: 160px;
      }

      &::after {
        height: 100%;
      }
    }
  }

  .col-md-4:nth-of-type(even) {
    padding-right: 0;
    margin-bottom: 60px;
  }

  .col-md-4:nth-of-type(odd) {
    padding-left: 0;
    position: relative;
    top: 60px;
    left: 0px;
  }

  //responsive

  @media (min-width: 1920px) {
    .fixed-content {
      .parallax-text {
        p {
          font-size: 160px !important;
          line-height: 160px !important;
        }
      }
    }
  }

  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {
    .item-single {
      .image-wrapper {
        h4 {
          font-size: 18px;
          line-height: 24px;
        }
      }

      &:hover {
        .circle {
          transform: scale(1.9);
          opacity: 0;

          svg {
            transform: rotate(50deg);
          }
        }

        p {
          bottom: unset;
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

        h4 {
          bottom: 40px;
        }

        &::after {
          height: unset;
        }
      }
    }
  }

  @media (min-width: 992px) {

    .fixed-content {
      position: absolute;
      left: 0;
      top: -100px;
      display: flex;
      align-items: center;
      height: 100%;

      .parallax-text {
        p {
          font-size: 160px;
          line-height: 160px;
          font-weight: 500;
          color: #2D3691;
          position: relative;
          transform: rotate(180deg);
          writing-mode: vertical-rl;
          height: auto;
          width: auto;
        }
      }
    }
  }
  @media (max-width: 992px) and (min-width: 768px) {

    .item-single {
      h4 {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
      }

      .image-wrapper {
        padding-top: 120%;

        p {
          bottom: -100px !important;
          margin: 0 15px !important;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4; /* number of lines to show */
          line-clamp: 4;
          -webkit-box-orient: vertical;

          &:hover {
            overflow: visible;
            text-overflow: unset;
            display: -webkit-box;
            -webkit-line-clamp: unset; /* number of lines to show */
            line-clamp: unset;
            -webkit-box-orient: unset;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding-top: 80px;
    padding-bottom: 80px;

    .fixed-content {
      position: relative;
      top: 0;
      margin-bottom: 30px;
      left: 15px;
    }

    .parallax-text {
      p {

        font-size: 24px !important;
        line-height: 40px !important;
        font-weight: 500;
        transform: unset !important;
        writing-mode: unset !important;
      }
    }

    .item-single {
      .image-wrapper {
        h4 {
          font-size: 20px;
          line-height: 24px;
        }

        p {
          margin: 0 15px;
        }
      }

      .content {
        padding: 0 15px;

        p {
          br {
            display: none;
          }
        }
      }

      &:hover {
        .circle {
          transform: scale(1.9);
          opacity: 0;

          svg {
            transform: rotate(50deg);
          }
        }

        p {
          bottom: unset;
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

        h4 {
          bottom: 40px;
        }

        &::after {
          height: unset;
        }
      }
    }

    .col-md-4:nth-of-type(even) {
      margin-bottom: 20px !important;
      padding: 0 !important;
      margin-left: 15px;
      margin-right: 15px;
    }

    .col-md-4:nth-of-type(odd) {
      top: 0px;
      margin-bottom: 20px !important;
      padding: 0 !important;
      left: unset;
      margin-left: 15px;
      margin-right: 15px;
    }

    .col_three {
      padding: 0 !important;
    }
  }
`;

export default React.memo(Course);

import React from 'react';
import styled from "styled-components";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";
import {BsChevronDown} from "react-icons/bs";
import VisibilitySensor from "react-visibility-sensor";

const CourseAccordion = ({data}) => {

    return (
        <StyledAddress className='address'>
            <Container className={'p-0'}>
                <Row className='address__row'>
                    <VisibilitySensor offset={{top: -150}}>
                        {({isVisible}) =>
                            <Col className={` fade-up address__accordion`} sm={12}>
                                <Accordion defaultActiveKey="0">
                                    {
                                        data?.map((item, index) => {
                                            return (
                                                <Accordion.Item key={index} eventKey={`${index}`}>
                                                    <Accordion.Header>
                                                        {reactHtmlParser(item?.title)}
                                                        <span><BsChevronDown/></span>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <p>{item?.description || item?.desc}</p>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                )

                                        })
                                    }

                                    {/*<Accordion.Item key={0} eventKey={`${0}`}>*/}
                                    {/*    <Accordion.Header>*/}
                                    {/*        {reactHtmlParser('How Can You Use University Rankings To Shortlist Universities?')}*/}
                                    {/*        <span><BsChevronDown/></span>*/}
                                    {/*    </Accordion.Header>*/}
                                    {/*    <Accordion.Body>*/}
                                    {/*        <p>You Can Further Analyse A University On The Basis Of Country/Region,*/}
                                    {/*            Course/Program, And Your Preferred Subject. For Instance, If You Wish To*/}
                                    {/*            Study Management, Look For Universities That Rank Higher In Your*/}
                                    {/*            Preferred Field Of Study. It Is Quite Possible That The University*/}
                                    {/*            Ranking The Highest Globally May Not Be The Best In Its Department Of*/}
                                    {/*            Management. Once You Have Your List Of Shortlisted Universities, Dive*/}
                                    {/*            Deeper By Studying Each Of Its Curriculum, Modules Offered, Faculties,*/}
                                    {/*            Teaching Methodologies, Culture, Campus Life, And Sustainability.</p>*/}

                                    {/*    </Accordion.Body>*/}
                                    {/*</Accordion.Item>*/}
                                    {/*<Accordion.Item key={1} eventKey={`${1}`}>*/}
                                    {/*    <Accordion.Header>*/}
                                    {/*        {reactHtmlParser('Are University Rankings Important?')}*/}
                                    {/*        <span><BsChevronDown/></span>*/}
                                    {/*    </Accordion.Header>*/}
                                    {/*    <Accordion.Body>*/}
                                    {/*        <p>You Can Further Analyse A University On The Basis Of Country/Region,*/}
                                    {/*            Course/Program, And Your Preferred Subject. For Instance, If You Wish To*/}
                                    {/*            Study Management, Look For Universities That Rank Higher In Your*/}
                                    {/*            Preferred Field Of Study. It Is Quite Possible That The University*/}
                                    {/*            Ranking The Highest Globally May Not Be The Best In Its Department Of*/}
                                    {/*            Management. Once You Have Your List Of Shortlisted Universities, Dive*/}
                                    {/*            Deeper By Studying Each Of Its Curriculum, Modules Offered, Faculties,*/}
                                    {/*            Teaching Methodologies, Culture, Campus Life, And Sustainability.</p>*/}

                                    {/*    </Accordion.Body>*/}
                                    {/*</Accordion.Item>*/}
                                </Accordion>
                            </Col>
                        }
                    </VisibilitySensor>
                </Row>
            </Container>
        </StyledAddress>
    );
};
const StyledAddress = styled.section`
  .accordion-item {
    margin-bottom: 30px;

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }

  .accordion-header {
    position: relative;
    margin: 0;

    button {
      border: none;
      background-color: transparent;
      padding-left: 0;
      color: #2D3691;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-transform: capitalize;
      padding-bottom: 30px;
      border-bottom: 1px solid #2D3691;
      width: 100%;
      text-align: left;
      //margin-bottom: 50px;
      transition: all .4s ease;

      &.collapsed {
        color: #1A1A1A;
        border-color: #1A1A1A;
        border: none;

        span {
          background-color: #1A1A1A;

          svg {
            transform: rotate(0deg);
          }

          &:after {
            background-color: #1A1A1A !important;
          }
        }
      }
    }

    span {
      position: absolute;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      color: #ffffff;
      background-color: #2D3691;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 16px;

      &:after {
        height: 0;
        width: 0;
        background-color: #2D3691;
        border-radius: 50%;
        opacity: 0;
        transition: all .4s ease;
        content: '';
        position: absolute;
      }

      svg {
        font-size: 13px;
        z-index: 2;
        transform: rotate(180deg);
      }

    }

    &:hover {
      span {
        &:after {
          height: 100%;
          width: 100%;
          opacity: 1;
        }
      }

      button {
        color: #2D3691;
        border-color: #2D3691;
      }
    }
  }

  .accordion-body {
    background: #F9F9F9;
    padding: 30px;
    border-radius: 0px 0px 15px 15px;

    h4 {
      font-size: 16px;
      line-height: 22px;
      color: rgba(34, 31, 31, 0.2);
      margin: 0 0 10px 0;
    }


    p, a {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #1A1A1A;
    }

    .contact-numbers {
      margin-top: 45px;

      ul {
        li {
          a {
            margin-bottom: 13px;
            display: flex;

            span {
              font-size: 26px;
              font-weight: bold;
              line-height: 32px;
              transition: .3s ease;
            }

            &:hover span {
              color: #2D3691;
            }
          }

          &:nth-last-of-type(1) {
            margin-bottom: 0;
          }
        }
      }
    }

    .map {
      margin-top: 45px;

      iframe {
        width: 100%;
        height: 350px;
      }
    }
  }


  .address__form {

    .form-control {
      font-size: 16px;
      line-height: 22px;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid black;
      border-radius: 0;
      padding-left: 0;
      padding-bottom: 20px;
      margin-bottom: 40px;

      &::placeholder {
        color: rgba(34, 31, 31, 0.5) !important;
        font-size: 16px;
        line-height: 22px;
        font-weight: 300;
      }
    }

    textarea {
      min-height: 90px;
      max-height: 90px;
      min-width: 100%;
      max-width: 100%;
      margin-bottom: 60px;
    }

    .divider {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .form-control {
        width: calc(50% - 15px);
      }
    }

    &__title {
      margin-bottom: 60px;

      h5 {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 20px;
        font-weight: 600;
      }

      p {
        font-size: 26px;
        font-weight: bold;
        line-height: 32px;
      }
    }
  }

  @media (max-width: 768px) {
    .address__accordion {
      min-width: 100%;
    }

    .address__form {
      min-width: 100%;
      margin-top: 60px;
    }
  }

  @media (max-width: 767px) {

    .address__row {
      flex-direction: column-reverse;
    }

    .address__form {
      margin-top: 0;
      margin-bottom: 60px;
    }

    .contact-numbers {
      flex-wrap: wrap;

      .col-sm-4 {
        min-width: 50%;

        &:nth-last-child(1) {
          margin-top: 30px;
          padding-left: 0;
        }
      }
    }
  }

`;


export default React.memo(CourseAccordion);

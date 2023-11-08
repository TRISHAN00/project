import React from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {hover} from "../styles/globalStyleVars";


const Footer = ({data}) => {
    // api data refactor

    return (<StyledFooter className="footer pt-120">
        <Container className="footer__top">
            <Row>
                <Col className="footer-col" sm={3}>
                    <Link to={'/'}>
                        <div className="group logo">
                            <img height={'80px'} width={'200px'} src={"/images/static/footer-logo.svg"} alt={'doyen'}/>
                        </div>
                    </Link>

                    <div className="group address">
                        <h4>Address:</h4>
                        <a
                            href={"https://goo.gl/maps/kygi8APMs5HbpA1x6"}
                            target={"_blank"}
                        >
                            <p>
                                House 7/E, Road 127, Apt-B1, <br/> 1st floor Gulshan-1, Dhaka 1212.
                            </p>
                        </a>
                    </div>

                    <div className="group phone">
                        <h4>Phone Number:</h4>
                        <a href="tel:+01304681832">+01304-681832</a>
                        <a href="tel:+01304681832">+01304-681832</a>
                    </div>

                    <div className="group emails">
                        <h4>Email:</h4>
                        <a href={"mailto:info@doyenassociatesbd.com"}>info@doyenassociatesbd.com</a>
                    </div>
                    <div className="group social">
                        <ul>
                            <li>
                                <a target="_blank"
                                   href="https://www.facebook.com/people/Doyen-Associates/100090837678027/?mibextid=LQQJ4d">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                         viewBox="0 0 30 30">
                                        <g id="Group_14956" data-name="Group 14956" transform="translate(-998)">
                                            <circle id="Ellipse_4344" data-name="Ellipse 434" cx="15" cy="15" r="15"
                                                    transform="translate(998)" fill="#f7f7f9"/>
                                            <circle id="Ellipse_4346" data-name="Ellipse 436" cx="15" cy="15" r="0"
                                                    transform="translate(998)" fill="#f7f7f9"/>
                                            <path id="Path_2115" data-name="Path 2115"
                                                  d="M1206.12,104.34l.406-2.652h-2.544v-1.72a1.325,1.325,0,0,1,1.495-1.432h1.157V96.278a14.1,14.1,0,0,0-2.053-.179,3.237,3.237,0,0,0-3.465,3.569v2.021h-2.329v2.652h2.329v6.409h2.866V104.34Z"
                                                  transform="translate(-189.787 -88.099)" fill="#070524"/>
                                        </g>
                                    </svg>
                                </a>

                            </li>
                            {/*<li>*/}
                            {/*    <Link to={'/'}>*/}
                            {/*        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"*/}
                            {/*             viewBox="0 0 30 30">*/}
                            {/*            <g id="Group_14957" data-name="Group 14957" transform="translate(-1048)">*/}
                            {/*                <circle id="Ellipse_4344" data-name="Ellipse 93" cx="15" cy="15" r="15"*/}
                            {/*                        transform="translate(1048)" fill="#f7f7f9"/>*/}
                            {/*                <circle id="Ellipse_4346" data-name="Ellipse 93" cx="15" cy="15" r="0"*/}
                            {/*                        transform="translate(1048)" fill="#f7f7f9"/>*/}
                            {/*                <path id="Path_2115" data-name="Path 2113"*/}
                            {/*                      d="M1237.574,104.23a5.331,5.331,0,0,1-1.306.372c.21-.035.518-.415.642-.569a2.4,2.4,0,0,0,.433-.79c.011-.023.02-.051,0-.068a.075.075,0,0,0-.069.006,6.668,6.668,0,0,1-1.548.592.1.1,0,0,1-.107-.029,1.258,1.258,0,0,0-.135-.138,2.736,2.736,0,0,0-.75-.459,2.609,2.609,0,0,0-1.15-.185,2.745,2.745,0,0,0-1.091.308,2.817,2.817,0,0,0-.88.719,2.7,2.7,0,0,0-.525,1.053,2.844,2.844,0,0,0-.028,1.111c.008.062,0,.071-.053.062a8.268,8.268,0,0,1-5.319-2.707c-.062-.071-.1-.071-.147.005a2.7,2.7,0,0,0,.46,3.186c.1.1.212.2.327.288a2.711,2.711,0,0,1-1.026-.288c-.062-.039-.094-.017-.1.054a1.62,1.62,0,0,0,.017.3,2.727,2.727,0,0,0,1.681,2.174,1.583,1.583,0,0,0,.341.1,3.04,3.04,0,0,1-1.007.031c-.073-.014-.1.023-.073.093a2.831,2.831,0,0,0,2.115,1.771c.1.017.192.017.288.039-.006.009-.012.009-.017.017a3.347,3.347,0,0,1-1.444.765,5.171,5.171,0,0,1-2.194.281c-.118-.017-.143-.016-.174,0s0,.048.034.079c.15.1.3.186.457.271a7.231,7.231,0,0,0,1.466.586,7.811,7.811,0,0,0,7.582-1.773,7.956,7.956,0,0,0,2.1-5.8c0-.083.1-.129.157-.174a5.128,5.128,0,0,0,1.032-1.073.327.327,0,0,0,.068-.205v-.011C1237.627,104.2,1237.626,104.207,1237.574,104.23Z"*/}
                            {/*                      transform="translate(-167.718 -92.957)" fill="#070524"/>*/}
                            {/*            </g>*/}
                            {/*        </svg>*/}
                            {/*    </Link>*/}

                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link to={'/'}>*/}
                            {/*        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"*/}
                            {/*             viewBox="0 0 30 30">*/}
                            {/*            <g id="Group_14958" data-name="Group 14958" transform="translate(-1098)">*/}
                            {/*                <circle id="Ellipse_4344" data-name="Ellipse 98" cx="15" cy="15" r="15"*/}
                            {/*                        transform="translate(1098)" fill="#f7f7f9"/>*/}
                            {/*                <circle id="Ellipse_4346" data-name="Ellipse 98" cx="15" cy="15" r="0"*/}
                            {/*                        transform="translate(1098)" fill="#f7f7f9"/>*/}
                            {/*                <g id="Group_1419" data-name="Group 1419" transform="translate(1106 8)">*/}
                            {/*                    <path id="Path_2115" data-name="Path 2109"*/}
                            {/*                          d="M1095.77,105.945a.854.854,0,1,0,.853.854A.854.854,0,0,0,1095.77,105.945Z"*/}
                            {/*                          transform="translate(-1084.635 -103.346)" fill="#070524"/>*/}
                            {/*                    <path id="Path_2115" data-name="Path 2110"*/}
                            {/*                          d="M1082.64,108.605a3.586,3.586,0,1,0,3.586,3.586A3.59,3.59,0,0,0,1082.64,108.605Zm0,5.882a2.3,2.3,0,1,1,2.3-2.3A2.3,2.3,0,0,1,1082.64,114.488Z"*/}
                            {/*                          transform="translate(-1075.301 -104.911)" fill="#070524"/>*/}
                            {/*                    <path id="Path_2115" data-name="Path 2111"*/}
                            {/*                          d="M1080.119,114.188h-5.813a4.379,4.379,0,0,1-4.374-4.374V104a4.378,4.378,0,0,1,4.374-4.373h5.813a4.378,4.378,0,0,1,4.374,4.373v5.813A4.379,4.379,0,0,1,1080.119,114.188ZM1074.306,101a3.007,3.007,0,0,0-3,3v5.813a3.007,3.007,0,0,0,3,3h5.813a3.007,3.007,0,0,0,3-3V104a3.007,3.007,0,0,0-3-3Z"*/}
                            {/*                          transform="translate(-1069.932 -99.628)" fill="#070524"/>*/}
                            {/*                </g>*/}
                            {/*            </g>*/}
                            {/*        </svg>*/}

                            {/*    </Link>*/}

                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link to={'/'}>*/}
                            {/*        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"*/}
                            {/*             viewBox="0 0 30 30">*/}
                            {/*            <g id="Group_14959" data-name="Group 14959" transform="translate(-1148)">*/}
                            {/*                <circle id="Ellipse_4344" data-name="Ellipse 99" cx="15" cy="15" r="15"*/}
                            {/*                        transform="translate(1148)" fill="#f7f7f9"/>*/}
                            {/*                <circle id="Ellipse_4346" data-name="Ellipse 99" cx="15" cy="15" r="0"*/}
                            {/*                        transform="translate(1148)" fill="#f7f7f9"/>*/}
                            {/*                <path id="Path_2115" data-name="Path 2114"*/}
                            {/*                      d="M1146.9,113.13a2.813,2.813,0,0,0-2.813-2.813h-7.195a2.813,2.813,0,0,0-2.813,2.813v3.348a2.813,2.813,0,0,0,2.813,2.813h7.195a2.813,2.813,0,0,0,2.813-2.813Zm-4.231,1.925-3.226,1.6c-.126.068-.556-.023-.556-.167v-3.276c0-.146.433-.237.56-.165l3.089,1.68C1142.661,114.8,1142.8,114.985,1142.666,115.056Z"*/}
                            {/*                      transform="translate(22.925 -99.317)" fill="#070524"/>*/}
                            {/*            </g>*/}
                            {/*        </svg>*/}

                            {/*    </Link>*/}

                            {/*</li>*/}
                        </ul>
                    </div>
                </Col>

                <Col className="footer-col mb-flex" sm={{span: 2, offset: 1}}>
                    {/*<h5>Home</h5>*/}
                    <div className="group mb-half">
                        <h4 className={'dark'}>Study Abroad</h4>
                        <ul>
                            <li>
                                <Link to={"/why-study-abroad"}>Why study abroad</Link>
                            </li>
                            <li>
                                <Link to={"/doyens-guide-to-study-abroad"}>Doyens guide to stydy abroad</Link>
                            </li>
                            <li>
                                <Link to={"/study-abroad-benefits"}>Study abroad benefits</Link>
                            </li>
                            <li>
                                <Link to={"/reasons-to-choose-doyen"}>
                                    Reasons to choose doyen
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="group mb-half">
                        <h4 className={'dark'}>Find a Course</h4>
                        <ul>
                            <li>
                                <Link to={"/how-to-choose-a-course"}>How to choose a course</Link>
                            </li>
                            <li>
                                <Link to={"/find-a-university"}>
                                    Find a university </Link>
                            </li>
                            <li>
                                <Link to={"/university-ranking"}>
                                    University ranking </Link>
                            </li>
                            <li>
                                <Link to={"/scholarships"}>
                                    Scholarships </Link>
                            </li>
                            <li>
                                <Link to={"/ielts-Score"}>
                                    IELTS Score </Link>
                            </li>
                        </ul>
                    </div>
                </Col>

                <Col className="footer-col mb-flex" sm={{span: 2, offset: 1}}>
                    <div className="group mb-half">
                        <h4 className={'dark'}>Countries</h4>
                        <ul>
                            <li>
                                <Link to={"/study-in-usa"}>Study in USA</Link>
                            </li>
                            <li>
                                <Link to={"/study-in-uk"}>Study in UK</Link>
                            </li>
                            <li>
                                <Link to={"/study-in-australia"}>Study in Australia</Link>
                            </li>
                            <li>
                                <Link to={"/study-in-canada"}>Study in Canada</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="group mb-half">
                        <h4 className={'dark'}>Living Abroad</h4>

                        <ul>
                            {/*<li>*/}
                            {/*    <Link to={"/study-tips"}>Study Tips</Link>*/}
                            {/*</li>*/}
                            <li>
                                <Link to={"/what-to-pack"}>What to Pack</Link>
                            </li>
                            <li>
                                <Link to={"/dealing-with-stress"}>Dealing with Stress</Link>
                            </li>
                            <li>
                                <Link to={"/networking-and-socialising"}>Networking and Socialising</Link>
                            </li>
                            <li>
                                <Link to={"/developing-skills"}>Developing Skills</Link>
                            </li>
                            <li>
                                <Link to={"/managing-money"}>Managing Money</Link>
                            </li>
                            <li>
                                <Link to={"/job-seeking-tips"}>Job Seeking Tips</Link>
                            </li>
                        </ul>
                    </div>

                </Col>


                <Col className="footer-col mb-flex" sm={{span: 2, offset: 1}}>
                    {/*<div className="group">*/}
                    {/*    <h4 className={'dark'}>Student Essential <span><svg xmlns="http://www.w3.org/2000/svg"*/}
                    {/*                                                        width="7.121" height="12.121"*/}
                    {/*                                                        viewBox="0 0 7.121 12.121">*/}
                    {/*        <g id="Group_18978" data-name="Group 18978" transform="translate(-119.439 -5914.439)">*/}
                    {/*            <line id="Line_3865" data-name="Line 3865" x2="5" y2="5"*/}
                    {/*                  transform="translate(120.5 5915.5)" fill="none" stroke="#fff"*/}
                    {/*                  stroke-linecap="round" stroke-width="1.5"/>*/}
                    {/*            <line id="Line_3866" data-name="Line 3866" y1="5" x2="5"*/}
                    {/*                  transform="translate(120.5 5920.5)" fill="none" stroke="#fff"*/}
                    {/*                  stroke-linecap="round" stroke-width="1.5"/>*/}
                    {/*        </g>*/}
                    {/*    </svg></span></h4>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <Link to={"/health-cover"}>Health Cover</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to={"/accommodation"}>Accommodation</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to={"/student-banking"}>Student Banking</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to={"/money-transfer"}>Money Transfer</Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    <div className="group mb-half top-margin">
                        <h4 className={'dark'}>What do we do?</h4>
                        <ul>
                            <li>
                                <Link to={"/free-counseling"}>Free Counseling</Link>
                            </li>
                            <li>
                                <Link to={"/visa-application-assist"}>Visa application Assist</Link>
                            </li>
                            <li>
                                <Link to={"/course-advice"}>Course Advice</Link>
                            </li>
                            <li>
                                <Link to={"/parent-guide"}>Parent Guide</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="group-wrap mb-half">
                        <div className="group">
                            <ul>
                                <li>
                                    <Link to={'/living-calculator'}>Living Calculator</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="group">
                            <ul>
                                <li>
                                    <Link to={'/success-story'}>Success Story</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="group">
                            <ul>
                                <li>
                                    <Link to={'/contact-us'}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                </Col>

            </Row>
        </Container>

        <Container className="footer__bottom">
            <Row>
                <Col>
                    <p>© 2023 Doyen & Associates. All Rights Reserved.</p>
                </Col>
                <Col className={'text-right'}>
                    <a target="_blank" href="https://www.dcastalia.com" rel="noreferrer"><p>Designed & Developed by
                        Dcastalia</p></a>
                </Col>
            </Row>
        </Container>
    </StyledFooter>);
};
const StyledFooter = styled.section`
  background-color: #1A1A1A;
  padding-bottom: 60px;
  overflow: hidden;

  //.desk-hide {
  //  display: none;
  //}

  .footer__top {
    position: relative;
    padding-bottom: 80px;

    &:after {
      content: "";
      position: absolute;
      height: 1px;
      left: 15px;
      right: 15px;
      background-color: rgba(34, 31, 31, 0.2);
      bottom: 0;
    }


    h5 {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      margin-bottom: 30px;

      span {
        visibility: hidden;
        opacity: 0;
      }
    }

    .group {
      margin-bottom: 30px;

      h4 {
        color: #ffffff;
        opacity: 0.8;
        margin: 0 0 10px 0;
        font-size: 12px;
        line-height: 18px;
        text-transform: none;
        font-weight: 500;

        span {
          visibility: hidden;
          opacity: 0;
        }
      }

      p {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #fff;
        //text-align: justify;
      }

      a {
        margin-bottom: 10px;
        display: flex;
        color: #FFFFFF;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        align-items: center;
        gap: 20px;

        &:hover {
          color: #F04848 !important;
        }

        //text-transform: capitalize;
      }

      &.emails {
        margin-bottom: 60px;

        a {
          text-transform: none;
        }
      }

      &.social {
        margin-bottom: 0;

        ul {
          display: flex;
          gap: 20px;
          height: 30px;

          li {
            a {
              svg {
                cursor: pointer;

                #Ellipse_4344 {
                  transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
                  r: 15px;
                }

                &:hover {
                  #Ellipse_4346 {
                    transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
                    r: 15px;
                    fill: #F04848;
                  }

                  #Path_2115 {
                    fill: #fff;
                  }
                }
              }
            }
          }
        }
      }
    }


    .social-menus {
      .hover:after {
        background-color: ${hover};
      }

      ul {
        li {
          height: 25px;
          width: 25px;
          border-radius: 50%;
          background-color: rgb(34, 31, 31);

          margin-bottom: 20px;

          svg {
            color: #ffffff;
            font-size: 11px;
          }

          a {
            position: relative;
            display: flex;
            z-index: 2;
            height: 100%;
            width: 100%;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }

  .footer__bottom {
    padding-top: 17px;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 15px;
      right: 15px;
      background: #707070;
      height: 1px;
    }

    p {
      font-size: 12px;
      line-height: 18px;
      font-weight: 600;
      color: #fff;
      opacity: 0.8;
    }
  }

  @media (min-width: 1920px) {
    .footer__top .group h4 {
      font-size: 14px !important;
    }
  }

  @media (max-width: 850px) {
    .footer-col {
      //min-width: 50%;
      margin: 0;

      &.social-menus {
        justify-content: flex-start !important;

        ul {
          display: flex;

          li {
            margin-right: 10px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 50px !important;
    .footer__top {
      padding-bottom: 60px;

      //h4.dark {
      //  opacity: 1 !important;
      //  font-size: 14px;
      //  font-weight: 400;
      //  line-height: 18px;
      //  display: flex;
      //  gap: 20px;
      //
      //  span {
      //    visibility: visible;
      //    opacity: 1;
      //  }
      //}

      .group {
        margin-bottom: 15px !important;
      }

      &.logo {
        margin-bottom: 40px !important;
      }

      .social {
        margin-top: 40px;
      }

      h5 {
        margin-top: 40px;
        margin-bottom: 10px;
        display: flex;
        gap: 20px;

        span {
          visibility: visible;
          opacity: 1;
        }
      }
    }

    .footer__bottom {
      padding-top: 15px;

      .row {
        flex-direction: column;
      }

      .text-right {
        text-align: unset !important;
      }
    }
  }

  @media (max-width: 767px) {
    //.group ul {
    //  display: none;
    //}
    .top-margin {
      margin-top: -25px;
    }

    .mb-half {
      width: 50%;
      margin-bottom: 30px;
    }

    .mb-flex {
      display: flex;
      margin-bottom: 30px;
    }

    .group ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .footer__top .group a {
      margin-bottom: 0px;
    }

    .hide {
      display: none;
    }

    .footer__top {
      .row {
        flex-direction: column;
      }
    }

    .social-menus {
      margin-bottom: 20px;
    }

    .footer-col:nth-of-type(1) {
      max-width: 100%;
      min-width: 100%;
    }
    
    padding-top: 60px;
    .footer-col {
      min-width: 100%;
    }

    .logo {
      width: 80%;
    }
  }
`;

export default React.memo(Footer);

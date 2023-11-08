import React, {useEffect} from 'react';
import styled from "styled-components";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Img} from "./Img";
import reactHtmlParser from "react-html-parser";

const InnerBanner = ({img, title, first, second, third, fourth, firstUrl, secondUrl, thirdUrl, fourthUrl}) => {
    return (
        <StyledInnerBanner className='InnerBanner banner'>
            {img && <Img src={img}/>}
            <Container>
                <div className="title">
                    <div className="breadcrumbs">
                        {
                            title && <ul>
                                <li><Link to={firstUrl}>{first}</Link></li>
                                <li>
                                    {second && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9.6" viewBox="0 0 8 9.6">
                                            <path id="Polygon_1" data-name="Polygon 1"
                                                  d="M3.943,1.429a1,1,0,0,1,1.715,0L8.691,6.486A1,1,0,0,1,7.834,8H1.766A1,1,0,0,1,.909,6.486Z"
                                                  transform="translate(8) rotate(90)" fill="#fff"/>
                                        </svg>
                                    )}
                                </li>
                                {secondUrl ? <li><Link to={secondUrl}>{second}</Link></li> : <li>{second}</li>}
                                <li>
                                    {third && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9.6" viewBox="0 0 8 9.6">
                                            <path id="Polygon_1" data-name="Polygon 1"
                                                  d="M3.943,1.429a1,1,0,0,1,1.715,0L8.691,6.486A1,1,0,0,1,7.834,8H1.766A1,1,0,0,1,.909,6.486Z"
                                                  transform="translate(8) rotate(90)" fill="#fff"/>
                                        </svg>
                                    )}
                                </li>
                                {thirdUrl ? <li><Link to={thirdUrl}>{third}</Link></li> : <li>{third}</li>}
                                <li>
                                    {fourth && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9.6" viewBox="0 0 8 9.6">
                                            <path id="Polygon_1" data-name="Polygon 1"
                                                  d="M3.943,1.429a1,1,0,0,1,1.715,0L8.691,6.486A1,1,0,0,1,7.834,8H1.766A1,1,0,0,1,.909,6.486Z"
                                                  transform="translate(8) rotate(90)" fill="#fff"/>
                                        </svg>
                                    )}
                                </li>
                                {fourthUrl ? <li><Link to={fourthUrl}>{fourth}</Link></li> : <li>{fourth}</li>}
                            </ul>
                        }

                    </div>
                    {title && <h2 className={`anim-active fade-up`}>{reactHtmlParser(title)}</h2>}

                </div>
            </Container>

        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
  padding-top: calc(300 / 1366 * 100%);
  position: relative;
  background-color: #DDD;


  &:after {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.25);
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

  .title {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .breadcrumbs {
    z-index: 1;
    margin-bottom: 10px;

    ul {
      display: flex;
      gap: 10px;

      li {
        a {
          color: #fff;
          font-size: 12px;
          font-weight: 500;

        }

        &:hover {
          a {
            color: #F04848 !important;
          }
        }
      }

      li {
        color: #fff;
        font-size: 12px;
        font-weight: 500;
      }
    }
  }

  p {
    color: #fff;
    display: flex;
    gap: 15px;
  }

  h2 {
    left: 15px;
    color: #ffffff;
    font-size: 32px !important;
    font-weight: 500;
    line-height: 40px;
    z-index: 2;

    span {
      font-weight: 600;
      color: #ffffff;
    }
  }

  //img {
  //  top: -50px;
  //}

  @media (min-width: 767px) {
    .title {
      width: 50%;
    }

  }


  /* Normal desktop :992px. */
  @media (min-width: 991px) and (max-width: 1200px) {
    img {
      top: -38px;
    }
  }

  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 70px;
    img {
      top: unset;
    }
  }

  @media (max-width: 767px) {
    padding-top: calc(300 / 375 * 100%);
    margin-top: 70px;
    .container {
      bottom: 69px;
    }

    .title {
      top: unset;
      bottom: 60px;
    }

    h2 {
      font-size: 28px;
      font-weight: 500;
      line-height: 32px;
    }

    .breadcrumbs {
      opacity: 0;
      visibility: hidden;
    }
  }
  /* small mobile :320px. */
  //@media (max-width: 767px) {
  //  img {
  //    top: unset;
  //  }
  //
  //}
`;

export default React.memo(InnerBanner);

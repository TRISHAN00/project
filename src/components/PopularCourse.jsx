import React from 'react';
import {Img} from "./Img";
import {BsPlus} from "react-icons/bs";
import {Col} from "react-bootstrap";
import styled from "styled-components";
import {Link} from "react-router-dom";

const PopularCourse = ({title, img, desc, mb, mb2, mt, url}) => {
    return (
        <StyledPopularCourse className={'col-md-6'} style={mt ? {marginTop: '30px'} : {marginTop: ''}}>

            <Link to={url}>
            <div
                className="item-single">
                <div className="image-wrapper parallax-img">
                    <Img src={img}/>
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
                    <h4 className={"split-up"}>{title}</h4>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
            </Link>

        </StyledPopularCourse>
    );
};

const StyledPopularCourse = styled.div`
  .item-single {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    margin-bottom: 30px;

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
        bottom: 100px;
      }

      &::after {
        height: 100%;
      }
    }
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
`

export default PopularCourse;

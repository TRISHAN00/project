import React, {useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import 'swiper/swiper.min.css';
import Title from "../Title";
import {Img} from "../Img";
import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import reactHtmlParser from "react-html-parser";
import Button from "../SButton";


const BannerSlider = ({offset, data}) => {

    const [swiper, setSwiper] = useState(null);
    const nextSlide = () => {
        if (swiper) {
            swiper?.slideNext();
        }
    };

    const prevSlide = () => {
        if (swiper) {
            swiper?.slidePrev();
        }
    };


    return (<StyledSlide offset={offset} className="landing-banner">
        <Container fluid>
            <Row>
                <Col className={'landing-banner__left'} md={8}>
                    <div className="landing-banner__img">
                        {
                            data && (
                                <Swiper
                                    onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={1}
                                    loop
                                    speed={800}
                                    navigation={{clickable: true}}
                                    className="mySwiper"
                                    initialSlide={0}
                                >

                                    {
                                        data?.banner?.map((item, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className="slider_item">
                                                        <div className="slider_item__image_wrapper">
                                                            <img src={item?.image} alt=""/>
                                                        </div>
                                                        <div style={{marginLeft: offset - 15 + 'px'}}
                                                             className="landing-banner__img__text">

                                                            <div className="landing-banner__img__text__title">
                                                                <Title
                                                                    text={item?.title}
                                                                    fontSize={'40px'}/>
                                                                <p>{reactHtmlParser(item?.desc)}</p>
                                                                <Button src={'/how-to-choose-a-course'} width={'141px'} hoverBorderColor={'#2D3691'} hoverBackground={'#2D3691'} border={'1px solid #FFFFFF'} background={'transparent'} height={'40px'} fontWeight={'500'} lineHeight={'18'} fontSize={'12'} text={'Read More'} />
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

                    </div>
                </Col>
                <Col className={'landing-banner__right'} md={4}>
                    <div className="landing-banner__service">
                        <Col sm={6}
                             className={'landing-banner__service__item__first'}>
                            <Img src={data?.course_img} height={'100'} width={'100'}/>
                            <Link to={'/find-a-university'}
                                  className="landing-banner__service__item__inner">
                                    <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                          <g id="Group_19008" data-name="Group 19008" transform="translate(-1418 -298)">
                                            <path id="Search"
                                                  d="M23.05,8.579a.93.93,0,1,1-1.315,1.315,8.382,8.382,0,0,0-11.84,0A.93.93,0,0,1,8.579,8.579,10.244,10.244,0,0,1,23.05,8.579ZM41.86,38.14a3.72,3.72,0,0,1-6.352,2.631L25.741,31a.93.93,0,0,1,0-1.315l1.315-1.315-2.063-2.063a13.978,13.978,0,1,1,1.315-1.315l2.063,2.063,1.315-1.315a.93.93,0,0,1,1.315,0l9.767,9.767A3.693,3.693,0,0,1,41.86,38.14ZM27.907,15.814A12.093,12.093,0,1,0,15.814,27.907,12.107,12.107,0,0,0,27.907,15.814ZM40,38.14a1.848,1.848,0,0,0-.545-1.315l-9.11-9.11-2.631,2.631,9.11,9.11a1.9,1.9,0,0,0,2.631,0A1.848,1.848,0,0,0,40,38.14Z"
                                                  transform="translate(1416.14 296.14)" fill="#1a1a1a"/>
                                          </g>
                                  </svg>

                                              </span>
                                {
                                    data?.courseName &&
                                    <p className={'split-up'}>{reactHtmlParser(data?.courseName)}</p>
                                }

                            </Link>
                        </Col>
                        <Col sm={6}
                             className={'landing-banner__service__item__second'}>
                            <Img src={data?.eligibility_img} height={'100'} width={'100'}/>
                            <Link
                                to={'/university-ranking'}
                                className="landing-banner__service__item__inner">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36.37" height="40"
                                             viewBox="0 0 36.37 40">
                                        <g id="Group_19007" data-name="Group 19007" transform="translate(-1.815 0)">
                                         <path id="Path_8322" data-name="Path 8322"
                                               d="M35.224,9.523a.586.586,0,1,0-1,.615A18.767,18.767,0,0,1,37,19.414H29.8A11.651,11.651,0,0,0,18.771,8.38v-7.2a18.784,18.784,0,0,1,13.909,6.8.586.586,0,0,0,.9-.749A19.954,19.954,0,0,0,18.185,0,.586.586,0,0,0,17.6.586V3.641A16.183,16.183,0,0,0,8.02,7.168a16.453,16.453,0,0,0-5.727,8.889.586.586,0,1,0,1.137.282A15.162,15.162,0,0,1,17.6,4.814V8.38A11.635,11.635,0,0,0,9.554,27.8L7.033,30.324A15.089,15.089,0,0,1,2.987,20c0-.359.012-.717.037-1.063a.586.586,0,1,0-1.169-.083c-.026.373-.04.759-.04,1.145A16.253,16.253,0,0,0,6.2,31.153L4.043,33.314a.586.586,0,0,0,0,.829,20,20,0,0,0,28.284,0,.586.586,0,0,0,0-.829l-2.161-2.161a16.241,16.241,0,0,0,4.377-10.567H37.6A.586.586,0,0,0,38.185,20,19.948,19.948,0,0,0,35.224,9.523ZM18.185,38.828A18.7,18.7,0,0,1,5.292,33.722l5.091-5.091a11.665,11.665,0,0,0,6.382,2.917.586.586,0,0,0,.141-1.163,10.486,10.486,0,0,1-6.12-2.987l0,0a10.463,10.463,0,0,1,7.4-17.857h0A10.474,10.474,0,0,1,28.648,20h0a10.394,10.394,0,0,1-3.064,7.4h0A10.5,10.5,0,0,1,19.5,30.381a.586.586,0,0,0,.146,1.163,11.676,11.676,0,0,0,6.344-2.913l5.091,5.091a18.7,18.7,0,0,1-12.892,5.106Zm11.152-8.5L26.816,27.8A11.539,11.539,0,0,0,29.8,20.586H33.37a15.076,15.076,0,0,1-4.033,9.738Z"
                                               fill="#f9f9f9"/>
                                         <path id="Path_8323" data-name="Path 8323"
                                               d="M24.025,25.874a.586.586,0,0,0,.586-.586V22.6a3.747,3.747,0,0,0-3.71-3.742,3.743,3.743,0,1,0-5.431,0,3.746,3.746,0,0,0-3.71,3.742v2.683a.586.586,0,0,0,.586.586ZM18.185,13.72a2.571,2.571,0,1,1-2.571,2.571A2.574,2.574,0,0,1,18.185,13.72ZM12.931,22.6A2.574,2.574,0,0,1,15.5,20.034h5.366A2.574,2.574,0,0,1,23.439,22.6v2.1H21.3v-.992a.586.586,0,0,0-1.172,0V24.7H16.245v-.992a.586.586,0,0,0-1.172,0V24.7H12.931Z"
                                               fill="#f9f9f9"/>
                                         </g>
                                         </svg>
                                    </span>
                                {
                                    data?.courseName &&
                                    <p className={'split-up'}>{reactHtmlParser(data?.eligibility_name)}</p>
                                }
                            </Link>
                        </Col>
                    </div>
                    <div className="landing-banner__service">

                        <Col sm={6}
                             className={'landing-banner__service__item__third'}>
                            <Img src={data?.calculator_img} height={'100'} width={'100'}/>
                            <Link
                                to={'/living-calculator'}
                                className="landing-banner__service__item__inner">
                                                <span>
                                                <svg id="calculator" xmlns="http://www.w3.org/2000/svg" width="40"
                                                     height="40" viewBox="0 0 40 40">
  <path id="Path_8292" data-name="Path 8292"
        d="M25.4,11.75a.667.667,0,0,0-.667-.667H6.083a.667.667,0,0,1-.667-.667V5.75a.667.667,0,0,1,.667-.667H25.417a.667.667,0,0,1,.667.667V9.03a.667.667,0,1,0,1.333,0V5.75a2,2,0,0,0-2-2H6.083a2,2,0,0,0-2,2v4.667a2,2,0,0,0,2,2H24.729A.667.667,0,0,0,25.4,11.75Z"
        fill="#f9f9f9"/>
  <path id="Path_8293" data-name="Path 8293"
        d="M10.5,16.51a1.762,1.762,0,0,0-1.76-1.76h-2.9a1.762,1.762,0,0,0-1.76,1.76v2.064a1.762,1.762,0,0,0,1.76,1.76h2.9a1.762,1.762,0,0,0,1.76-1.76ZM9.167,18.574A.427.427,0,0,1,8.74,19h-2.9a.427.427,0,0,1-.426-.426V16.51a.427.427,0,0,1,.426-.426h2.9a.427.427,0,0,1,.426.426Z"
        fill="#f9f9f9"/>
  <path id="Path_8294" data-name="Path 8294"
        d="M18.917,16.51a1.762,1.762,0,0,0-1.76-1.76h-2.9a1.762,1.762,0,0,0-1.76,1.76v2.064a1.762,1.762,0,0,0,1.76,1.76h2.9a1.762,1.762,0,0,0,1.76-1.76Zm-1.333,2.064a.427.427,0,0,1-.426.426h-2.9a.427.427,0,0,1-.426-.426V16.51a.427.427,0,0,1,.426-.426h2.9a.427.427,0,0,1,.426.426Z"
        fill="#f9f9f9"/>
  <path id="Path_8295" data-name="Path 8295"
        d="M25.657,14.75h-2.9A1.762,1.762,0,0,0,21,16.51v2.064a1.762,1.762,0,0,0,1.76,1.76h2.9a1.762,1.762,0,0,0,1.76-1.76V16.51A1.762,1.762,0,0,0,25.657,14.75Zm.426,3.824a.427.427,0,0,1-.426.426h-2.9a.427.427,0,0,1-.426-.426V16.51a.427.427,0,0,1,.426-.426h2.9a.427.427,0,0,1,.426.426Z"
        fill="#f9f9f9"/>
  <path id="Path_8296" data-name="Path 8296"
        d="M10.5,24.51a1.762,1.762,0,0,0-1.76-1.76h-2.9a1.762,1.762,0,0,0-1.76,1.76v2.064a1.762,1.762,0,0,0,1.76,1.76h2.9a1.762,1.762,0,0,0,1.76-1.76ZM9.167,26.574A.427.427,0,0,1,8.74,27h-2.9a.427.427,0,0,1-.426-.426V24.51a.427.427,0,0,1,.426-.426h2.9a.427.427,0,0,1,.426.426Z"
        fill="#f9f9f9"/>
  <path id="Path_8297" data-name="Path 8297"
        d="M18.917,24.51a1.762,1.762,0,0,0-1.76-1.76h-2.9a1.762,1.762,0,0,0-1.76,1.76v2.064a1.762,1.762,0,0,0,1.76,1.76h2.9a1.762,1.762,0,0,0,1.76-1.76Zm-1.333,2.064a.427.427,0,0,1-.426.426h-2.9a.427.427,0,0,1-.426-.426V24.51a.427.427,0,0,1,.426-.426h2.9a.427.427,0,0,1,.426.426Z"
        fill="#f9f9f9"/>
  <path id="Path_8298" data-name="Path 8298"
        d="M8.74,30.75h-2.9a1.762,1.762,0,0,0-1.76,1.76v2.064a1.762,1.762,0,0,0,1.76,1.76h2.9a1.762,1.762,0,0,0,1.76-1.76V32.51a1.762,1.762,0,0,0-1.76-1.76Zm.426,3.824A.427.427,0,0,1,8.74,35h-2.9a.427.427,0,0,1-.426-.426V32.51a.427.427,0,0,1,.426-.426h2.9a.427.427,0,0,1,.426.426Z"
        fill="#f9f9f9"/>
  <path id="Path_8299" data-name="Path 8299"
        d="M17.157,30.75h-2.9a1.762,1.762,0,0,0-1.76,1.76v2.064a1.762,1.762,0,0,0,1.76,1.76h2.9a1.762,1.762,0,0,0,1.76-1.76V32.51A1.762,1.762,0,0,0,17.157,30.75Zm.426,3.824a.427.427,0,0,1-.426.426h-2.9a.427.427,0,0,1-.426-.426V32.51a.427.427,0,0,1,.426-.426h2.9a.427.427,0,0,1,.426.426Z"
        fill="#f9f9f9"/>
  <path id="Path_8300" data-name="Path 8300"
        d="M31.167,25.25a.667.667,0,0,0-1.333,0v.838a2.772,2.772,0,0,0-2.484,2.531c0,1.958,1.744,2.315,3.017,2.576,1.488.3,1.951.52,1.951,1.27,0,.681-.832,1.256-1.817,1.256a2.032,2.032,0,0,1-1.612-.687.667.667,0,1,0-1.062.806A3.181,3.181,0,0,0,29.833,35v.837a.667.667,0,0,0,1.333,0V35a2.772,2.772,0,0,0,2.484-2.531c0-1.958-1.744-2.315-3.017-2.576-1.488-.3-1.951-.52-1.951-1.27,0-.681.832-1.256,1.817-1.256a2.032,2.032,0,0,1,1.612.687.667.667,0,1,0,1.062-.806,3.181,3.181,0,0,0-2.007-1.155Z"
        fill="#f9f9f9"/>
  <path id="Path_8301" data-name="Path 8301"
        d="M34.768,22.01a.667.667,0,1,0-.6,1.191,8.17,8.17,0,1,1-3.668-.868,1.149,1.149,0,0,0,.673-.087A.668.668,0,0,0,31.5,21.7c0-.021,0-18.322,0-18.364A3.337,3.337,0,0,0,28.167,0H3.333A3.337,3.337,0,0,0,0,3.333V36.667A3.337,3.337,0,0,0,3.333,40H22.126a.667.667,0,1,0,0-1.333H3.333a2,2,0,0,1-2-2V3.333a2,2,0,0,1,2-2H28.167a2,2,0,0,1,2,2V21.007a9.493,9.493,0,1,0,4.6,1Z"
        fill="#f9f9f9"/>
  <path id="Path_8302" data-name="Path 8302"
        d="M23.333,10A.667.667,0,0,0,24,9.333v-2.5a.667.667,0,0,0-.667-.667h-.667a.667.667,0,1,0,0,1.333V9.333A.667.667,0,0,0,23.333,10Z"
        fill="#f9f9f9"/>
</svg>

                                                 </span>
                                {
                                    data?.calculator_name &&
                                    <p className={'split-up'}>{reactHtmlParser(data?.calculator_name)}</p>
                                }
                            </Link>
                        </Col>
                        <Col sm={6}
                             className={'landing-banner__service__item__fourth'}>
                            <Img src={data?.location_img} height={'100'} width={'100'}/>
                            <Link
                                to={'/contact-us'}
                                className="landing-banner__service__item__inner">
                                    <span>
                                    <svg id="map" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                         viewBox="0 0 40 40">
  <g id="Group_18851" data-name="Group 18851">
    <g id="Group_18850" data-name="Group 18850">
      <path id="Path_8290" data-name="Path 8290"
            d="M20,7.289a5.326,5.326,0,0,0-3.049.953.591.591,0,0,0-.15.819.582.582,0,0,0,.813.151A4.169,4.169,0,0,1,20,8.466a4.235,4.235,0,1,1-3.742,2.29.591.591,0,0,0-.249-.794.582.582,0,0,0-.788.25,5.473,5.473,0,0,0-.605,2.5A5.384,5.384,0,1,0,20,7.289Z"
            fill="#f9f9f9"/>
    </g>
  </g>
  <g id="Group_18853" data-name="Group 18853">
    <g id="Group_18852" data-name="Group 18852">
      <path id="Path_8291" data-name="Path 8291"
            d="M39.955,39.185,34.189,25.227a.584.584,0,0,0-.539-.362H27.9a29.793,29.793,0,0,0,2.774-4.53,17.465,17.465,0,0,0,1.94-7.621,12.619,12.619,0,1,0-25.237,0,17.465,17.465,0,0,0,1.94,7.621,29.777,29.777,0,0,0,2.774,4.53H6.35a.584.584,0,0,0-.539.362L1.882,34.738a.59.59,0,0,0,.315.77.581.581,0,0,0,.764-.317l.561-1.357H7.5L5.437,38.823H1.46l.6-1.446a.59.59,0,0,0-.315-.77.582.582,0,0,0-.764.317L.045,39.185a.592.592,0,0,0,.053.553A.583.583,0,0,0,.584,40H39.416a.583.583,0,0,0,.486-.262A.592.592,0,0,0,39.955,39.185ZM8.55,12.713a11.45,11.45,0,1,1,22.9,0c0,2.667-.92,6.93-5.175,12.362l-.012.016q-.326.416-.678.84A44.948,44.948,0,0,1,20,31.537a44.878,44.878,0,0,1-5.569-5.587q-.361-.435-.694-.86l-.011-.014C9.47,19.644,8.55,15.382,8.55,12.713ZM6.74,26.042h3.977L9.266,29.553H5.289Zm3.416,12.781,3.652-8.84L24.2,38.823Zm15.855,0h0L13.952,28.565a.582.582,0,0,0-.916.224L8.891,38.823H6.7l2.211-5.352a.592.592,0,0,0-.053-.553.583.583,0,0,0-.486-.262H4.008l.8-1.926H9.656a.584.584,0,0,0,.539-.362l1.787-4.326H13q.264.332.539.663a44.077,44.077,0,0,0,6.108,6.054.581.581,0,0,0,.715,0c.069-.054,1-.782,2.318-2.028h6.616a.589.589,0,0,0,0-1.177H23.88c.81-.821,1.7-1.777,2.585-2.848q.276-.332.539-.663H33.26l1.451,3.512H31.628a.589.589,0,0,0,0,1.177H35.2l.8,1.926H23.956a.584.584,0,0,0-.547.383.592.592,0,0,0,.164.65l5.87,5.133H26.011Zm5.215,0L25.52,33.834H36.479l2.061,4.989Z"
            fill="#f9f9f9"/>
    </g>
  </g>
</svg>
</span>
                                {
                                    data?.location_name &&
                                    <p className={'split-up'}>{reactHtmlParser(data?.location_name)}</p>
                                }
                            </Link>
                        </Col>
                    </div>
                </Col>
            </Row>

            <div className="banner-slider_arrow">
                <ul className="banner-slider_arrow__both">
                    <li onClick={prevSlide} className="left">
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
                    <li onClick={nextSlide} className="right">
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
        </Container>

    </StyledSlide>)

}

const StyledSlide = styled.section`
  transition: 0.3s;
  overflow: hidden;

  .mySwiper {
    height: calc(100vh - 135px);
    margin-top: 135px;
  }

  .slider_item {
    height: 100%;
  }

  .split-parent {
    overflow: hidden;
  }

  .split-child {
    overflow: hidden;
  }

  .banner-slider_arrow {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    bottom: 20px;
    right: -100px;

    &__both {
      display: flex;
      position: absolute;
      z-index: 2;
      bottom: 20px;
    }

    padding-left: 100px;

    li {
      margin-right: 10px;

      svg {
        #Ellipse_4378 {
          transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
          r: 0px;
          cursor: pointer;
        }

        line {
          stroke: #170C3D;
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
    }
  }
}

svg {
  cursor: pointer;

  line#Line_3859, line#Line_3860, line#Line_3858 {
    stroke: white;
  }

  #Circle_4992 {
    transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
    r: 0;

  }

  line {
    stroke: #170c3d;
  }

  &:hover {
    #Circle_4992 {
      fill: #2D3691;
      transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
      r: 25;
    }

    g {
      line {
        stroke: #f9f9f9;
      }
    }
  }
}


@media (min-width: 1300px) and (max-width: 1367px) {
  .banner-slider_arrow__both {
    margin-top: -150px;
  }
}

@media (min-width: 1900px) and (max-width: 1981px) {
  .banner-slider_arrow__both {
    margin-top: -190px;
  }
}

@media (max-width: 767px ) {
  .mySwiper {
    margin-top: 0;
    height: calc(100vh - 70px);
  }

  .banner-slider_arrow__both {
    padding-left: 40%;
    margin-top: -108%;
  }
}

.swiper-button-prev, .swiper-button-next {
  display: none;
}

.landing-banner__left {
  padding: 0;
}

.landing-banner__img {
  position: relative;
  padding-top: 0 !important;

  .slider_item__image_wrapper {
    padding-top: calc(632 / 899 * 100%);

    img {
      position: absolute;
      object-fit: cover;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 1;
    }
  }

  &__text {
    position: absolute;
    bottom: 15%;
    z-index: 2;
    left: 15px;

    .swiper-container {
      position: relative !important;
      top: unset;
      left: unset;
      bottom: unset;
      right: unset;
    }

    &__title {

      h2 {
        font-size: 80px;
        font-weight: 300;
        color: #F9F9F9;
        line-height: 84px;
        text-transform: uppercase;

        strong {
          color: #FFFFFF;
          font-weight: bold;
        }

        &:first-child {
          margin-bottom: 0;
        }

        &:last-child {
          font-weight: 600;
          margin-bottom: 10px;
          color: white;
          font-size: 40px;
          line-height: 40px;
        }
      }

    }

    p {
      font-size: 14px;
      line-height: 21px;
      font-weight: 400;
      color: #F9F9F9;
      margin-bottom: 20px;
    }
  }
}

.landing-banner__right {
  background-color: white;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 135px;
}

.landing-banner__service {
  height: 100%;
  display: flex;
  flex-direction: row;

  &__item {

    &__first {
      padding-top: 40%;
      position: relative;
      overflow: hidden;

      &:hover {
        img {
          transform: scale(1.2);
          transition: transform 0.7s cubic-bezier(0.4, 0, 0, 1);
        }
      }

      img {
        transition: transform 0.7s cubic-bezier(0.4, 0, 0, 1);
      }

      p {
        color: black !important;
      }
    }


    &__second {
      padding-top: 40%;
      position: relative;
      overflow: hidden;

      &:hover {
        img {
          transform: scale(1.2);
          transition: transform 0.7s cubic-bezier(0.4, 0, 0, 1);
        }
      }

      img {
        transition: transform 0.7s cubic-bezier(0.4, 0, 0, 1);
      }
    }

    &__third {
      padding-top: 40%;
      position: relative;
      overflow: hidden;

      &:hover {
        img {
          transform: scale(1.2);
          transition: transform 0.7s cubic-bezier(0.4, 0, 0, 1);
        }
      }

      img {
        transition: transform 0.7s cubic-bezier(0.4, 0, 0, 1);
      }
    }

    &__fourth {
      padding-top: 40%;
      position: relative;
      overflow: hidden;

      &:hover {
        img {
          transform: scale(1.2);
          transition: transform 0.7s cubic-bezier(0.4, 0, 0, 1);
        }
      }

      img {
        transition: transform 0.7s cubic-bezier(0.4, 0, 0, 1);
      }
    }

    &__inner {
      position: absolute;
      left: 23px;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      padding-top: 40px;
      padding-bottom: 40px;
      flex-direction: column;
      justify-content: space-between;
      text-transform: uppercase;
      transition: all .3s cubic-bezier(0.5, 1, 0.89, 1);
      overflow: hidden;

      span {
        position: relative;
        font-size: 58px;
        font-weight: 300;
        line-height: 58px;
        color: rgba(165, 165, 166, 0.3);
        z-index: 2;
      }

      p {
        position: relative;
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        color: white;
        margin-bottom: 0;
        z-index: 2;
        padding-right: 15px;
        text-transform: none;
        /* Normal desktop :992px. */
      }

      &:hover {
        //background-color: ;

        &:before {
          opacity: 1;
          top: 0;
        }

        span {
          color: white;
        }
      }

    }
  }
}

@media (min-width: 992px) and (max-width: 1200px) {

  .landing-banner__service__item__inner p {

    padding-right: 25px;

  }

  .landing-banner__img__text__title {
    padding-left: unset;
    margin-left: 15px !important;
  }

  .landing-banner {
    &__service {
      &__inner {
        p {
          padding-right: 20px;
          /* Normal desktop :992px. */
        }
      }
    }

    &__img__text__title h2:last-child {
      font-weight: 600;
      margin-bottom: 20px;
      color: white;
      font-size: 28px;
      line-height: 30px;
    }
  }
}

/* Tablet desktop :768px. */
@media (min-width: 768px) and (max-width: 991px) {
  .mySwiper {
    height: 100vh;
    margin-top: unset;
  }
  .landing-banner__left {
    margin-top: 70px;
  }

  .landing-banner__service__item__inner {
    padding-bottom: unset;
    padding-top: unset;
    left: unset;
  }

  .landing-banner__service__item__inner p {
    font-size: 18px;
    line-height: 20px;
  }

  .landing-banner__right {
    margin-top: 0px;
  }

  .landing-banner {
    &__service {
      &__inner {
        p {

          padding-right: 20px;
          /* Normal desktop :992px. */
        }
      }
    }

    &__img__text__title h2:last-child {
      font-weight: 600;
      margin-bottom: 10px;
      color: white;
      font-size: 28px !important;
      line-height: 30px;
    }
  }

}


@media (min-width: 768px) and (max-width: 1200px) {
  .mySwiper {
    height: unset;
  }
 
  .banner-slider_arrow__both {
    display: none;
  }

  .landing-banner__img__text__title {
    padding-left: unset;
    margin-left: 15px !important;
  }

}


@media (max-width: 767px) {
  .landing-banner__right {
    margin-top: 0px;
  }

  .landing-banner__left {
    margin-top: 70px;
  }

  .mySwiper {
    height: unset;
  }

  .title h2 {
    font-size: 28px;
  }

  .landing-banner__img__text__title {
    margin-left: unset !important;
  }

  .landing-banner__service__item__inner {
    left: 0;
  }

  .banner-slider_arrow {
    opacity: 0;
    visibility: hidden;
  }

  .landing-banner__img {

    &__text {
      bottom: 60px;
      margin-left: unset !important;

      .banner-box {
        width: 220px;
        height: 220px;

        a {
          p {
            font-size: 16px;
            line-height: 20px;
          }
        }
      }

      h2 {
        font-size: 40px;
        line-height: 42px;
      }

      > p {
        font-size: 16px;
      }

      &__title {
        padding-left: unset;

        h2 {
          font-size: 28px;
          line-height: 30px;
          font-weight: 600;
          margin-bottom: 30px !important;
        }

        p {
          display: none;
        }
      }
    }
  }

  .landing-banner__text {
    padding-top: 65px;
    padding-bottom: 65px;

    > h3 {
      font-size: 24px;
      line-height: 32px;
    }

    p {
      font-size: 18px;
      line-height: 24px;
    }
  }

  .landing-banner__service {
    height: 100%;

    &__item {
      padding-top: 50%;

      &__inner {
        padding: 15px 15px;

        span {
          font-size: 50px;
        }

        p {
          font-size: 18px;
          line-height: 24px;
          font-weight: 600;

          span:after {
            content: ' ';
          }

          span.line-break {
            display: block;
          }

          span.line-break:after {
            content: none;
          }
        }
      }
    }
  }

  .slider_item__image_wrapper {
    padding-top: calc(372 / 375 * 100%) !important;
  }
}
`;

const MobileLineBreak = styled.br`
  ${props => props.mobileOnly && css`
    display: block;
    content: '';
    margin: 1em;
  `}
`;


export default React.memo(BannerSlider);

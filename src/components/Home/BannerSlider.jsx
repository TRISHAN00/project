import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import {Col} from "react-bootstrap";
import {Img} from "../Img";
import {Link} from "react-router-dom";
import { Navigation, Pagination } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
    return (
        <BannerContainer>
            <div className="col-sm-8 banner">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img
                            className="d-block w-100"
                            src="images/static/banner.jpg"
                            alt="First slide"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="d-block w-100"
                            src="images/static/University.jpg"
                            alt="First slide"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="d-block w-100"
                            src="banner3.jpg"
                            alt="Third slide"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Col className={'landing-banner__right'} md={4}>
                <div className="landing-banner__service">
                    <Col sm={6}
                         className={'landing-banner__service__item__first'}>
                        <Img src={'images/static/card-1.png'} height={'100'} width={'100'}/>
                        <div
                            className="landing-banner__service__item__inner">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 40 40">
                                                <defs>
                                               <clipPath id="clip-path">
                                               <rect id="Rectangle_5535" data-name="Rectangle 5535" width="40" height="40" transform="translate(1418 298)" fill="#1a1a1a"/>
                                               </clipPath>
                                              </defs>
                                                <g id="Mask_Group_332" data-name="Mask Group 332" transform="translate(-1418 -298)" clip-path="url(#clip-path)">
                                              <path id="Search" d="M23.05,8.579a.93.93,0,1,1-1.315,1.315,8.382,8.382,0,0,0-11.84,0A.93.93,0,0,1,8.579,8.579,10.244,10.244,0,0,1,23.05,8.579ZM41.86,38.14a3.72,3.72,0,0,1-6.352,2.631L25.741,31a.93.93,0,0,1,0-1.315l1.315-1.315-2.063-2.063a13.978,13.978,0,1,1,1.315-1.315l2.063,2.063,1.315-1.315a.93.93,0,0,1,1.315,0l9.767,9.767A3.693,3.693,0,0,1,41.86,38.14ZM27.907,15.814A12.093,12.093,0,1,0,15.814,27.907,12.107,12.107,0,0,0,27.907,15.814ZM40,38.14a1.848,1.848,0,0,0-.545-1.315l-9.11-9.11-2.631,2.631,9.11,9.11a1.9,1.9,0,0,0,2.631,0A1.848,1.848,0,0,0,40,38.14Z" transform="translate(1416.14 296.14)" fill="#1a1a1a"/>
                                             </g>
                                              </svg>
                                              </span>
                            <p>Course<span className="line-break"> </span> Search</p>
                        </div>
                    </Col>
                    <Col sm={6}
                         className={'landing-banner__service__item__second'}>
                        <Img src={'images/static/card-2.png'} height={'100'} width={'100'}/>
                        <div
                            className="landing-banner__service__item__inner">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36.37" height="40" viewBox="0 0 36.37 40">
                                        <g id="Group_19007" data-name="Group 19007" transform="translate(-1.815 0)">
                                         <path id="Path_8322" data-name="Path 8322" d="M35.224,9.523a.586.586,0,1,0-1,.615A18.767,18.767,0,0,1,37,19.414H29.8A11.651,11.651,0,0,0,18.771,8.38v-7.2a18.784,18.784,0,0,1,13.909,6.8.586.586,0,0,0,.9-.749A19.954,19.954,0,0,0,18.185,0,.586.586,0,0,0,17.6.586V3.641A16.183,16.183,0,0,0,8.02,7.168a16.453,16.453,0,0,0-5.727,8.889.586.586,0,1,0,1.137.282A15.162,15.162,0,0,1,17.6,4.814V8.38A11.635,11.635,0,0,0,9.554,27.8L7.033,30.324A15.089,15.089,0,0,1,2.987,20c0-.359.012-.717.037-1.063a.586.586,0,1,0-1.169-.083c-.026.373-.04.759-.04,1.145A16.253,16.253,0,0,0,6.2,31.153L4.043,33.314a.586.586,0,0,0,0,.829,20,20,0,0,0,28.284,0,.586.586,0,0,0,0-.829l-2.161-2.161a16.241,16.241,0,0,0,4.377-10.567H37.6A.586.586,0,0,0,38.185,20,19.948,19.948,0,0,0,35.224,9.523ZM18.185,38.828A18.7,18.7,0,0,1,5.292,33.722l5.091-5.091a11.665,11.665,0,0,0,6.382,2.917.586.586,0,0,0,.141-1.163,10.486,10.486,0,0,1-6.12-2.987l0,0a10.463,10.463,0,0,1,7.4-17.857h0A10.474,10.474,0,0,1,28.648,20h0a10.394,10.394,0,0,1-3.064,7.4h0A10.5,10.5,0,0,1,19.5,30.381a.586.586,0,0,0,.146,1.163,11.676,11.676,0,0,0,6.344-2.913l5.091,5.091a18.7,18.7,0,0,1-12.892,5.106Zm11.152-8.5L26.816,27.8A11.539,11.539,0,0,0,29.8,20.586H33.37a15.076,15.076,0,0,1-4.033,9.738Z" fill="#f9f9f9"/>
                                         <path id="Path_8323" data-name="Path 8323" d="M24.025,25.874a.586.586,0,0,0,.586-.586V22.6a3.747,3.747,0,0,0-3.71-3.742,3.743,3.743,0,1,0-5.431,0,3.746,3.746,0,0,0-3.71,3.742v2.683a.586.586,0,0,0,.586.586ZM18.185,13.72a2.571,2.571,0,1,1-2.571,2.571A2.574,2.574,0,0,1,18.185,13.72ZM12.931,22.6A2.574,2.574,0,0,1,15.5,20.034h5.366A2.574,2.574,0,0,1,23.439,22.6v2.1H21.3v-.992a.586.586,0,0,0-1.172,0V24.7H16.245v-.992a.586.586,0,0,0-1.172,0V24.7H12.931Z" fill="#f9f9f9"/>
                                         </g>
                                         </svg>
                                    </span>
                            <p>Eligibility</p>
                        </div>
                    </Col>
                </div>
                <div className="landing-banner__service">

                    <Col sm={6}
                         className={'landing-banner__service__item__third'}>
                        <Img src={'images/static/card-3.png'} height={'100'} width={'100'}/>
                        <Link
                            className="landing-banner__service__item__inner">
                                                <span>
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="36.37" height="40" viewBox="0 0 36.37 40">
                                                    <g id="Group_19007" data-name="Group 19007" transform="translate(-1.815 0)">
                                                   <path id="Path_8322" data-name="Path 8322" d="M35.224,9.523a.586.586,0,1,0-1,.615A18.767,18.767,0,0,1,37,19.414H29.8A11.651,11.651,0,0,0,18.771,8.38v-7.2a18.784,18.784,0,0,1,13.909,6.8.586.586,0,0,0,.9-.749A19.954,19.954,0,0,0,18.185,0,.586.586,0,0,0,17.6.586V3.641A16.183,16.183,0,0,0,8.02,7.168a16.453,16.453,0,0,0-5.727,8.889.586.586,0,1,0,1.137.282A15.162,15.162,0,0,1,17.6,4.814V8.38A11.635,11.635,0,0,0,9.554,27.8L7.033,30.324A15.089,15.089,0,0,1,2.987,20c0-.359.012-.717.037-1.063a.586.586,0,1,0-1.169-.083c-.026.373-.04.759-.04,1.145A16.253,16.253,0,0,0,6.2,31.153L4.043,33.314a.586.586,0,0,0,0,.829,20,20,0,0,0,28.284,0,.586.586,0,0,0,0-.829l-2.161-2.161a16.241,16.241,0,0,0,4.377-10.567H37.6A.586.586,0,0,0,38.185,20,19.948,19.948,0,0,0,35.224,9.523ZM18.185,38.828A18.7,18.7,0,0,1,5.292,33.722l5.091-5.091a11.665,11.665,0,0,0,6.382,2.917.586.586,0,0,0,.141-1.163,10.486,10.486,0,0,1-6.12-2.987l0,0a10.463,10.463,0,0,1,7.4-17.857h0A10.474,10.474,0,0,1,28.648,20h0a10.394,10.394,0,0,1-3.064,7.4h0A10.5,10.5,0,0,1,19.5,30.381a.586.586,0,0,0,.146,1.163,11.676,11.676,0,0,0,6.344-2.913l5.091,5.091a18.7,18.7,0,0,1-12.892,5.106Zm11.152-8.5L26.816,27.8A11.539,11.539,0,0,0,29.8,20.586H33.37a15.076,15.076,0,0,1-4.033,9.738Z" fill="#f9f9f9"/>
                                                    <path id="Path_8323" data-name="Path 8323" d="M24.025,25.874a.586.586,0,0,0,.586-.586V22.6a3.747,3.747,0,0,0-3.71-3.742,3.743,3.743,0,1,0-5.431,0,3.746,3.746,0,0,0-3.71,3.742v2.683a.586.586,0,0,0,.586.586ZM18.185,13.72a2.571,2.571,0,1,1-2.571,2.571A2.574,2.574,0,0,1,18.185,13.72ZM12.931,22.6A2.574,2.574,0,0,1,15.5,20.034h5.366A2.574,2.574,0,0,1,23.439,22.6v2.1H21.3v-.992a.586.586,0,0,0-1.172,0V24.7H16.245v-.992a.586.586,0,0,0-1.172,0V24.7H12.931Z" fill="#f9f9f9"/>
                                                    </g>
                                                   </svg>
                                                 </span>
                            <p>Living Cost<br/> Calculator</p>
                        </Link>
                    </Col>
                    <Col sm={6}
                         className={'landing-banner__service__item__fourth'}>
                        <Img src={'images/static/card-4.png'} height={'100'} width={'100'}/>
                        <Link

                            className="landing-banner__service__item__inner">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="40" height="40" viewBox="0 0 40 40">
                                                <defs>
                                               <clipPath id="clip-path">
                                               <rect id="Rectangle_5535" data-name="Rectangle 5535" width="40"
                                                     height="40" transform="translate(1418 298)" fill="white"/>
                                               </clipPath>
                                              </defs>
                                                <g id="Mask_Group_332" data-name="Mask Group 332"
                                                   transform="translate(-1418 -298)" clip-path="url(#clip-path)">
                                              <path id="Search"
                                                    d="M23.05,8.579a.93.93,0,1,1-1.315,1.315,8.382,8.382,0,0,0-11.84,0A.93.93,0,0,1,8.579,8.579,10.244,10.244,0,0,1,23.05,8.579ZM41.86,38.14a3.72,3.72,0,0,1-6.352,2.631L25.741,31a.93.93,0,0,1,0-1.315l1.315-1.315-2.063-2.063a13.978,13.978,0,1,1,1.315-1.315l2.063,2.063,1.315-1.315a.93.93,0,0,1,1.315,0l9.767,9.767A3.693,3.693,0,0,1,41.86,38.14ZM27.907,15.814A12.093,12.093,0,1,0,15.814,27.907,12.107,12.107,0,0,0,27.907,15.814ZM40,38.14a1.848,1.848,0,0,0-.545-1.315l-9.11-9.11-2.631,2.631,9.11,9.11a1.9,1.9,0,0,0,2.631,0A1.848,1.848,0,0,0,40,38.14Z"
                                                    transform="translate(1416.14 296.14)" fill="white"/>
                                             </g>
                                              </svg> </span>
                            <p>Come and <br/>See Us</p>
                        </Link>
                    </Col>
                </div>
            </Col>
        </BannerContainer>
    );
};


const BannerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  .banner{
    padding: unset;
    &__card{
      padding:unset;
      display: flex;
      align-items: center;
      &__top{
        card{
          padding: 50px;
        }
        padding: unset;
        &__first{
          background-color: grey;
        }
      }
      &__bottom{
        padding: unset;
        card{
          padding: 50px;
        }
      }
    }
  }
`;

const BannerCard = styled.div`
  width: 100%;
  text-align: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

export default React.memo(Banner);

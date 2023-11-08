import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import {Col, Container, Row} from "react-bootstrap";
import Title from "../../components/Title";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {Img} from "../Img";
import Button from "../SButton";
import reactHtmlParser from "react-html-parser";


const AboutUs = ({data}) => {
    return (
        <>
            <StyledAboutBottom className={'parallax-img'}>
                <Img parallax src={data?.image} className="parallax-bg" />
                <Container>
                    <Title
                        fontSize={80}
                        lineHeight={80}
                        textTransform={'none'}
                        color={"#FFFFFF"}
                        fontWeight={600}
                        margin={"0px 0px 60px 0px"}
                        text={
                            data?.title
                        }
                    />
                    <Row>
                        <Col sm={{span: 8, offset: 4}}>
                            {
                                data?.description_big &&
                                <p className={'split-up'} >{reactHtmlParser(data?.description_big)}</p>
                            }
                            {
                                data?.description_small &&
                                <p className={'split-up'}>{reactHtmlParser(data?.description_small)}</p>
                            }

                            {/*<Button src={'/doyens-guide-to-study-abroad'} color={'#fff'} width={'141px'} hoverfill={'#F04848'} fontSize={12} fontWeight={500}*/}
                            {/*        lineHeight={18} text={'Learn More'} background={'transparent'}*/}
                            {/*        borderColor={'#fff'}/>*/}
                            <Button src={'/how-to-choose-a-course'} width={'120px'} hoverBorderColor={'#F04848'} hoverBackground={'#F04848'} border={'1px solid #FFFFFF'} background={'transparent'} height={'40px'} fontWeight={'500'} lineHeight={'18'} fontSize={'12'} text={'Learn More'} />
                            <div className="about-count">

                                {
                                    data?.counters.map((item, index) => {
                                        return (
                                            <div key={index} className="about-count__single">
                                                <h4>
                                                    <CountUp start={0} end={parseInt(item?.number)}>
                                                        {({countUpRef, start}) => (
                                                            <VisibilitySensor
                                                                onChange={start}
                                                                partialVisibility={{top: 0, bottom: 20}}
                                                                delayedCall
                                                            >
                                                                <span ref={countUpRef}>+</span>
                                                            </VisibilitySensor>
                                                        )}
                                                    </CountUp>
                                                    +
                                                </h4>
                                                <p>{ReactHtmlParser(item?.title)}</p>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </StyledAboutBottom>
        </>
    );
}


const StyledAboutBanner = styled.section`
  transition: 0.3s;

  .split-child {
    overflow: hidden;
  }

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    bottom: 0;
  }

  .container {
    position: relative;
    height: 100%;
    overflow-y: visible;
  }

  .split-parent {
    overflow: hidden;
  }

  .split-child {
    overflow: hidden;
  }
  @media (max-width: 767px) {
    p {
      bottom: 30px !important;
    }

    height: 400px;
  }
`;

const StyledAboutBottom = styled.div`

  padding-top: 120px;
  padding-bottom: 120px;
  position: relative;

  .split-parent {
    overflow: hidden;
  }

  .split-child {
    overflow: hidden;
  }

  img {
    &:nth-of-type(1) {
      margin-bottom: 35px;
    }

    &:nth-of-type(2) {
      height: 40px;
    }
  }

  p {
    font-size: 18px;
    line-height: 26px;
    margin: 0;
    color: #ffffff;
    font-weight: 500;

    &:nth-of-type(1) {
      margin-bottom: 30px;
    }

    &:nth-last-of-type(1) {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 40px;
    }
  }

  .about-count {
    display: flex;
    margin-top: 60px;

    &__single {
      margin-right: 70px;

      h4 {
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;
        color: #ffffff;
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 20px;
        margin: 0;
      }

      &:nth-last-of-type(1) {
        margin-right: 0;
      }
    }
  }


  @media (max-width: 767px) {
    padding-top: 80px;
    padding-bottom: 80px;
    h2 {
      font-size: 40px!important;
      font-weight: 600!important;
      line-height: 40px!important;
    }
    .title {
      top: -20px;
      font-size: 35px;
    }

    .col-sm-3 {
      flex: 0 0 100%;
      max-width: 100%;
      img {
        display: block;
      }
    }

    .col-sm-7 {
      margin-left: 0;
      margin-top: 60px;
      flex: 0 0 100%;
      max-width: 100%;

      p {
        font-size: 18px;
      }
    }

    .about-count {
      flex-wrap: wrap;

      &__single {
        width: 50%;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: end;

        &:nth-last-of-type(1) {
          margin-top: 40px;
        }
      }
    }
  }
`;

export default React.memo(AboutUs);

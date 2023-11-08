import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import Feature from "../../components/Feature";
import CustomForm from "../../components/CustomForm";
import InnerBanner from "../../components/InnerBanner";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {fetchContactUs} from "../../api/redux/ContactUs";
import reactHtmlParser from "react-html-parser";
import Content from "../../components/Content";
import {Img} from "../../components/Img";

const ContactUs = () => {

    const dispath = useDispatch();

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.CONTACT_US
        dispath(fetchContactUs([api_url]))
    }, [])

    let getPost = useSelector(state => state.contactUs)

    const innerBanner = getPost?.posts?.page_data?.[0]?.innerBanner;
    const map = getPost?.posts?.page_data?.[0]?.map;
    const feature = getPost?.posts?.page_data?.[0]?.feature;



    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{innerBanner?.subtitle && `${innerBanner?.subtitle} | Doyen & Associate`}</title>
                <meta name="CONTACT US"
                      content="We would love to hear from you! If you have any questions, comments, or suggestions, please feel free to reach out to us using the contact form below. Our dedicated customer support team is available to assist you and will do their best to get back to you within 24 hours. Alternatively, if you prefer to speak to us directly, please feel free to visit our office in gulshan 1. We welcome your feedback as it helps us to continue improving our products and services. Thank you for your interest in our company.
"/>
            </Helmet>
            <StyledInternationStudy>
                <InnerBanner first={'Home'} firstUrl={'/'} img={innerBanner?.image}
                             title={innerBanner?.subtitle}/>
                <Container>
                    <Row>
                        <Col md={8} className={'study-abroad-content'}>
                            <h3>{reactHtmlParser('CONTACT US')}</h3>
                            <Content paraOne={map?.desc}/>
                            <Content title={map?.title}/>
                            <div className="map-img">
                                <a
                                    href={map?.map_url}
                                    target={"_blank"}
                                >
                                    <Img src={map?.image}/>
                                </a>
                            </div>
                        </Col>
                        <Col md={4} className={'study-abroad-form'}>
                            <CustomForm/>
                        </Col>
                    </Row>
                </Container>
                <Feature leftUrl={feature?.left_url} rightUrl={feature?.right_url} subtitle={feature?.subtitle} leftText={feature?.left} rightTopSmall={feature?.right_top_small} rightBottomTitle={feature?.right_bottom_title} leftUrl={feature?.left_url} rightUrl={feature?.right_url} />
            </StyledInternationStudy>
        </HelmetProvider>)

}

const StyledInternationStudy = styled.div`
  margin-top: 135px;

  .study-abroad-form {
    margin-top: 120px;
  }

  .map-img {
    position: relative;
    padding-top: calc(450 / 770 * 100%);
  }

  .study-abroad-content {
    margin-top: 120px;

    h3 {
      color: #2D3691;
      font-weight: 500;
      line-height: 40px;
      margin-bottom: 30px;
    }

    h4 {
      color: #1A1A1A;
      font-size: 24px;
      font-weight: 600;
      line-height: 30px;
      margin-bottom: 40px;
    }

    &__title {
      background: #F9F9F9;
      padding: 25px 30px;
      border-radius: 15px;
      overflow: hidden;
      margin-bottom: 30px;

      h5 {
        color: #1A1A1A;
        font-weight: 500;
        line-height: 26px;
      }
    }

    &__single {
      border-radius: 20px;
      margin-bottom: 30px;

      &__img {
        position: relative;
        padding-top: calc(250 / 370 * 100%);
      }

      &__info {
        background: #F9F9F9;
        padding: 30px 20px 37px 20px;
        border-radius: 0px 0px 15px 15px;

        h4 {
          margin-bottom: 10px;
        }

        p {
          color: #1A1A1A;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
      }

      &:nth-last-child(1) {
        margin-bottom: 0;
      }

      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }


    &__single-blog {
      margin-bottom: 40px;

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #1A1A1A;
        margin-bottom: 30px;

        span {
          color: #2D3691;
          font-weight: 500;
        }

        &:nth-of-type(2) {
          margin-top: 30px;
        }

        &:nth-last-of-type(1) {
          margin-top: 30px;
        }
      }

      h6 {
        color: #2D3691;
        font-weight: 500;
        line-height: 24px;
      }

      &:last-of-type(1) {
        margin-bottom: unset;
      }
    }
  }


  //  responsive
  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: unset;

  }


  /* small mobile :320px. */
  @media (max-width: 767px) {
    margin-top: unset;
    .study-abroad-form {
      display: none;
    }

    .feature {
      margin-top: 60px;
    }

    .study-abroad-content {
      margin-top: 60px;

      h4 {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 30px;
      }

      &__single {
        margin-bottom: 20px;

        &__img {
          padding-top: calc(250 / 370 * 100%);
        }
      }
    }
  }


`;


export default ContactUs;

import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import Feature from "../../components/Feature";
import CustomForm from "../../components/CustomForm";
import InnerBanner from "../../components/InnerBanner";
import Video from "../../components/Video";


import {
    useParams,
} from "react-router-dom";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {useDispatch, useSelector} from "react-redux";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import reactHtmlParser from "react-html-parser";
import {fetchTestimonialDetails} from "../../api/redux/Testimonial";


const TestimonialDetail = () => {

    const dispatch = useDispatch()
    const getData = useSelector(store => store.testimonial)
    let {slug} = useParams();

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.TESTIMONIAL_DETAILS
        dispatch(fetchTestimonialDetails([api_url + `/${slug}`]))
    }, [])

    const name = getData?.detail?.[0]?.post_title;
    const desc = getData?.detail?.[0]?.post_content;
    const image = getData?.detail?.[0]?.post_feature_image;
    const info = getData?.detail?.[0]?.info;
    const videoUrl = getData?.detail?.[0]?.video_url;


    return (
        <HelmetProvider>
            {/*dynamic title */}
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{getData?.detail?.title ? getData?.detail?.title : 'DC React App'}</title>
                <meta name="description" content="Description"/>
            </Helmet>
            <StyledInternationStudy>
                <InnerBanner first={'Home'} img={'/images/static/banner-bg.jpg'} title={'Testimonial'} />
                <Container>
                    <Row>

                        <Col md={8} className={'study-abroad-content'}>
                            <Video vidThumb={image} vidUrl={videoUrl}/>
                            <div className="study-abroad-content__text">
                                <p>{reactHtmlParser(desc)}</p>
                            </div>
                            <div className="study-abroad-content__info">
                                <h6>{name}</h6>
                                <span>{info}</span>
                            </div>
                        </Col>
                        <Col md={4} className={'study-abroad-form'}>
                            <CustomForm/>
                        </Col>
                    </Row>
                </Container>
                <Feature/>
            </StyledInternationStudy>
        </HelmetProvider>
    )

}

const StyledInternationStudy = styled.div`
  margin-top: 135px;

  .study-abroad-form {
    padding-top: 120px;
  }

  .study-abroad-content {
    margin-top: 120px;

    &__text {
      margin-top: 40px;

      p {
        color: #1A1A1A;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }

    &__info {
      margin-top: 60px;

      h6 {
        font-size: #1A1A1A;
        font-weight: 500;
        line-height: 24px;
      }

      span {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        opacity: 0.7;
      }
    }
  }

  .study-abroad-form {

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

      h3 {
        font-size: 28px;
        font-weight: 500;
        line-height: 36px;
        margin-bottom: 20px;
      }

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

      &__single-blog {
        margin-bottom: 40px;

        &__title {
          padding: 20px 15px;
          margin-bottom: 20px;
        }

        p {
          margin-bottom: 20px;
          &:nth-last-of-type(1) {
            margin-top: 20px;
          }
        }
      }
    }
  }
  

`;


export default TestimonialDetail;

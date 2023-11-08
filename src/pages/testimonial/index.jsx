import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import Feature from "../../components/Feature";
import CustomForm from "../../components/CustomForm";
import SingleTestimonial from "../../components/Testimonial/SingleTestimonial";
import InnerBanner from "../../components/InnerBanner";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {fetchTestimonial, fetchTestimonialPage} from "../../api/redux/Testimonial";

const TestimonialPage = () => {

    const dispath = useDispatch();

    // api call
    useEffect(() => {
        let api_url = apiEndPoints?.TESTIMONIAL
        dispath(fetchTestimonial([api_url]))

        let api_url2 = apiEndPoints?.GET_TESTIMONIAL
        dispath(fetchTestimonialPage([api_url2]))
    }, [dispath])

    let getPost = useSelector(state => state?.testimonial);

    const innerBanner = getPost?.posts?.page_data?.[0]?.innerBanner;
    const feature = getPost?.posts?.page_data?.[0]?.feature;


    const details = getPost?.page_data;



    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{innerBanner?.subtitle && `${innerBanner?.subtitle} | Doyen & Associate`}</title>
                <meta name="Testimonial"
                      content="5 Benefits Of Studying Abroad"/>
            </Helmet>
            <StyledInternationStudy>
                <InnerBanner first={'Testimonial'} img={innerBanner?.image} title={innerBanner?.subtitle}/>

                <Container>
                    <Row>
                        <Col lg={8} md={12} sm={12} xs={12} className={'study-abroad-content'}>
                            {
                                details?.map((item, index) => {
                                    return (
                                        <SingleTestimonial key={index} url={`testimonial/${item?.post_name}`} name={item?.post_title} desc={item?.post_content} img={item?.post_feature_image} />
                                    )

                                })
                            }

                        </Col>
                        <Col md={4} className={'study-abroad-form'}>
                            <CustomForm/>
                        </Col>
                    </Row>
                </Container>
                <Feature subtitle={feature?.subtitle} leftText={feature?.left} rightTopSmall={feature?.right_top_small}
                         rightBottomTitle={feature?.right_bottom_title}/>
            </StyledInternationStudy></HelmetProvider>)

}

const StyledInternationStudy = styled.div`
  margin-top: 135px;
  .study-abroad-form {
    margin-top: 120px;
  }

  .study-abroad-content {
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    gap: 30px;

    h4 {
      color: #1A1A1A;
      font-size: 24px;
      font-weight: 600;
      line-height: 30px;
      margin-bottom: 40px;
    }

    &__single {
      border-radius: 20px;
      margin-bottom: 30px;

      &__img {
        position: relative;
        padding-top: calc(250 / 370 * 100%);
        height: 100%;
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

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #1A1A1A;
        margin-bottom: 30px;

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
    .form {
      display: none;
    }

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


export default TestimonialPage;

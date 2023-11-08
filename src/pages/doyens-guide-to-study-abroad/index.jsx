import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import Feature from "../../components/Feature";
import CustomForm from "../../components/CustomForm";
import Content from "../../components/Content";
import InnerBanner from "../../components/InnerBanner";
import {HelmetProvider, Helmet} from 'react-helmet-async';
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {fetchDoyenGuidToStudyAbroad} from "../../api/redux/DoyenGuidToStudyAbroad";
import reactHtmlParser from "react-html-parser";

const DoyensGuideToStudyAbroad = () => {

    const dispath = useDispatch();

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.DOYEN_GUID_STUDY_ABROAD
        dispath(fetchDoyenGuidToStudyAbroad([api_url]))
    }, [dispath])

    let getPost = useSelector(state => state.doyenGuidToStudyAbroad)

    const innerBanner = getPost?.posts?.page_data?.[0]?.innerBanner;
    const content = getPost?.posts?.page_data?.[0]?.content;
    const feature = getPost?.posts?.page_data?.[0]?.feature;


    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{innerBanner?.subtitle && `${innerBanner?.subtitle} | Doyen & Associate`}</title>
                <meta name="Doyens guide to study abroad"
                      content="Doyen is an expert in finding the perfect match for students and ensuring their success."/>
            </Helmet>
            <StyledInternationStudy>
                <InnerBanner first={'Home'} firstUrl={'/'} second={'Study Abroad'} img={innerBanner?.image}
                             title={innerBanner?.subtitle}/>

                <Container>
                    <Row>

                        <Col md={8} className={'study-abroad-content'}>

                            <h3>{reactHtmlParser(content?.subtitle)}</h3>

                            <h4>{reactHtmlParser(content?.title)}</h4>
                            {
                                content?.content_text?.map((item, index) => {
                                    return (
                                        <Content key={index} btnText={item?.button_text} btnUrl={item?.button_url} title={item?.title} paraOne={item?.description1} paraTwo={item?.description2}
                                                 linkText={item?.link_text} linkUrl={item?.link_url}/>
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
                         rightBottomTitle={feature?.right_bottom_title} leftUrl={feature?.left_url} rightUrl={feature?.right_url} />
            </StyledInternationStudy>
        </HelmetProvider>)

}

const StyledInternationStudy = styled.div`
  margin-top: 135px;
  .study-abroad-form {
    margin-top: 120px;
  }

  //common css start
  .video {
    margin-top: 30px;
  }

  .table {
    margin-top: 30px;
  }
  //common css start

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

  .study-abroad-form {

  }


  //  responsive
  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: unset;
    .study-abroad-form {
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


export default DoyensGuideToStudyAbroad;

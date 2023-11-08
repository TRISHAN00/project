import React, {useEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";

import {
    useParams,
} from "react-router-dom";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {useDispatch, useSelector} from "react-redux";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import InnerBanner from "../../components/InnerBanner";
import Content from "../../components/Content";
import CustomForm from "../../components/CustomForm";
import Feature from "../../components/Feature";
import reactHtmlParser from "react-html-parser";
import PopularCourse from "../../components/PopularCourse";
import CustomAccordion from "../../components/CustomAccordion";
import CustomTable from "../../components/RankingDesire/CustomTable";
import {fetchWhyStudyAbroadDetails} from "../../api/redux/WhyStudyAbroad";

const WhyStudyAbroadDetails = () => {

    const dispatch = useDispatch()
    const getData = useSelector(store => store.whyStudyAbroad)
    let {slug} = useParams();

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.WHY_STUDY_ABROAD_DETAILS
        dispatch(fetchWhyStudyAbroadDetails([api_url + `/${slug}`]))
    })


    const innerBanner = getData?.detail?.[0]?.innerBanner;
    const content = getData?.detail?.[0]?.scholarship_content;
    const title = getData?.detail?.[0]?.title;
    const subtitle = getData?.detail?.[0]?.subtitle;
    const table = getData?.detail?.[0]?.table;
    const accordion = getData?.detail?.[0]?.accordion?.details;
    const popularCourse = getData?.detail?.[0]?.popular_course;
    const cta = getData?.detail?.[0]?.cta;


    return (

        <HelmetProvider>
            {/*dynamic title */}
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{getData?.detail?.[0]?.post_title ? getData?.detail?.[0]?.post_title : ''}</title>
                <meta name="Step-By-Step Guide To International Study
" content="With 50 years’ experience and more than 450,000 successful student placements around the world, IDP knows what it takes to find a good match and set you up for success.
"/>
            </Helmet>

            <StyledInternationStudy>
                <InnerBanner first={'Home'} firstUrl={'/'} second={'Study Abroad'} third={getData?.detail?.[0]?.post_title}
                             img={innerBanner?.image} title={innerBanner?.subtitle}/>
                <Container>
                    <Row>
                        <Col lg={8} mb={12} className={'study-abroad-content'}>

                            {
                                subtitle && <h3>{reactHtmlParser(subtitle)}</h3>
                            }


                            {
                                title && <h4>{reactHtmlParser(title)}</h4>
                            }




                            {
                                content?.map((item, index) => {
                                    console.log(item, 'details')
                                    return (
                                        <Content key={index} title={item?.title} paraOne={item?.paragraph_one}
                                                 btnText={item?.btn_text} paraTwo={item?.paragraph_two}
                                                 videoThumb={item?.video_thumb} videoUrl={item?.video_url}
                                                 linkText={item?.link_text} btnUrl={item?.btn_url} linkUrl={item?.link_url} />
                                    )
                                })
                            }
                            {
                                table && <CustomTable data={table}/>
                            }
                            <Row>
                                <Container>
                                    {
                                        accordion && <CustomAccordion data={accordion}/>
                                    }
                                </Container>
                            </Row>



                            <Row>
                                {
                                    popularCourse?.map((item, index) => {
                                        return (
                                            <PopularCourse
                                                mt
                                                url={item?.url}
                                                key={index}
                                                desc={item?.short_desc}
                                                img={item?.image} title={item?.title}/>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                        <Col md={4} className={'study-abroad-form'}>
                            <CustomForm/>
                        </Col>
                    </Row>
                </Container>
                {
                    cta && <Feature subtitle={cta?.subtitle} leftText={cta?.left_text} rightTopSmall={cta?.right_top} rightBottomTitle={cta?.right_bottom} />
                }

            </StyledInternationStudy>)
        </HelmetProvider>

    );
};

const StyledInternationStudy = styled.section`
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
    }

  }

  /* Large Mobile :480px. */
  @media only screen and (min-width: 480px) and (max-width: 767px) {
    .container {
      width: 450px
    }
  }

`;

export default WhyStudyAbroadDetails;

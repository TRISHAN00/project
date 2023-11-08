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
import {fetchFindUniversityDetails} from "../../api/redux/FindUniversity";
import Card from "../../components/Card";
import PopularCourse from "../../components/PopularCourse";

const FindUniversityDetails = () => {

    const dispatch = useDispatch()
    const getData = useSelector(store => store.findUniversity)
    let {slug} = useParams();

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.FIND_UNIVERSITY_DETAILS
        dispatch(fetchFindUniversityDetails([api_url + `/${slug}`]))
    }, [])

    const postTitle = getData?.detail?.[0]?.post_title;
    const postImage = getData?.detail?.[0]?.post_feature_image;
    const content = getData?.detail?.[0]?.content;
    const cta = getData?.detail?.[0]?.cta;

    const details = content?.details;

    const card = getData?.detail?.[0]?.card;
    const course = getData?.detail?.[0]?.popular_course;


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
                <InnerBanner first={'Course'} secondUrl={'/find-a-university'} second={'Find a University'}
                             third={postTitle}
                             img={postImage} title={postTitle}/>
                <Container>
                    <Row>
                        <Col lg={8} mb={12} className={'study-abroad-content'}>
                            {
                                content?.subtitle && <h3>{reactHtmlParser(content?.subtitle)}</h3>
                            }
                            {
                                content?.title && <h4>{reactHtmlParser(content?.title)}</h4>
                            }

                            {
                                details && details?.map((item) => <Content title={item?.title}
                                                                           paraOne={item?.paragraph_one}/>)
                            }

                            <Row>
                                {
                                    card && card?.map((item, index) => {
                                        return (
                                            <Card url={card?.url} key={index}
                                                  img={item?.image}
                                                  title={item?.title}
                                                  desc={item?.short_desc}/>
                                        )
                                    })
                                }
                            </Row>
                            {
                                course?.length > 0 &&  <div className="course-title">
                                    <h3>{reactHtmlParser('Popular Course')}</h3>
                                </div>
                            }

                            <Row>
                                {
                                    course?.map((item, index) => {
                                        return (
                                            <PopularCourse
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
                    cta && <Feature rightUrl={cta?.right_url} leftUrl={cta?.left_url} subtitle={cta?.subtitle}
                                    leftText={cta?.left_text} rightTopSmall={cta?.right_top}
                                    rightBottomTitle={cta?.right_bottom}/>
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
.course-title {
  margin-top: 60px;
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

`;

export default FindUniversityDetails;

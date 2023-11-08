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
import reactHtmlParser from "react-html-parser";
import AddressCard from "../../components/AddressCard";
import Card from "../../components/Card";
import PopularCourse from "../../components/PopularCourse";
import CustomAccordion from "../../components/CustomAccordion";
import CustomTable from "../../components/RankingDesire/CustomTable";
import SingleTestimonial from "../../components/Testimonial/SingleTestimonial";
import {fetchMoneyTransfer} from "../../api/redux/MoneyTransfer";

const MoneyTransfer = () => {

    const dispath = useDispatch();

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.MONEY_TRANSFER
        dispath(fetchMoneyTransfer([api_url]))
    }, [dispath])

    let getPost = useSelector(state => state.moneyTransfer)

    const innerBanner = getPost?.posts?.page_data?.[0]?.innerBanner;
    const contentData = getPost?.posts?.page_data?.[0]?.content_data;
    const address = getPost?.posts?.page_data?.[0]?.address;
    const studyCard = getPost?.posts?.page_data?.[0]?.study_card?.details;
    const popularCourse = getPost?.posts?.page_data?.[0]?.popular_course?.details;
    const accordion = getPost?.posts?.page_data?.[0]?.accordion?.details;
    const table = getPost?.posts?.page_data?.[0]?.table;
    const videoPopup = getPost?.posts?.page_data?.[0]?.video_popup?.details;
    const cta = getPost?.posts?.page_data?.[0]?.cta;



    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{innerBanner?.subtitle && `${innerBanner?.subtitle} | Doyen & Associate`}</title>
                <meta name="Reasons to choose doyen"
                      content="Studying abroad is an exciting opportunity that offers immense personal and professional growth. As a Bangladeshi student, choosing the right student consultancy firm is crucial for a smooth and successful international education journey. "/>
            </Helmet>
            <StyledInternationStudy>
                <InnerBanner first={'Home'} second={innerBanner?.subtitle} title={innerBanner?.subtitle}
                             img={innerBanner?.image}/>

                <Container>
                    <Row>

                        <Col md={8} className={'study-abroad-content'}>

                            {
                                contentData?.subtitle && <h3>{reactHtmlParser(contentData?.subtitle)}</h3>
                            }


                            {
                                contentData?.title && <h4>{reactHtmlParser(contentData?.title)}</h4>
                            }

                            {
                                contentData?.content?.map((item, index) => {
                                    return (
                                        <Content key={index} title={item?.subtitle} paraOne={item?.desc_one}
                                                 btnText={item?.button_text}
                                                 btnUrl={item?.button_url}
                                                 linkText={item?.link_text}
                                                 linkUrl={item?.link_url}
                                                 paraTwo={item?.desc_two}
                                                 videoThumb={item?.video_thumb} videoUrl={item?.video_url}/>
                                    )
                                })
                            }


                            <Row>
                                {
                                    address?.details?.map((item, index) => {
                                        return (
                                            <Col md={6}>
                                                <AddressCard key={index} name={item?.name} address={item?.address}
                                                             phone={item?.phone} IELTS={item?.ielts} email={item?.email}
                                                             timing={item?.timing}/>
                                            </Col>
                                        )

                                    })
                                }
                            </Row>

                            <Row>
                                {
                                    studyCard?.map((item, index) => {
                                        return (
                                            <Card url={item?.url} key={index} img={item?.image}
                                                  title={item?.title}
                                                  desc={item?.short_desc}/>
                                        )
                                    })
                                }
                            </Row>

                            <Row>
                                {
                                    popularCourse?.map((item, index) => {
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
                            <Row>
                                <Container>
                                    {
                                        accordion && <CustomAccordion data={accordion}/>
                                    }
                                </Container>
                            </Row>


                            {
                                table && <CustomTable data={table}/>
                            }

                            {
                                videoPopup && videoPopup?.map((item, index) => {
                                    return (
                                        <SingleTestimonial key={index} img={item?.thumb} desc={item?.desc} name={item?.author} url={item?.url} university={item?.info} />
                                    )
                                })
                            }


                        </Col>
                        <Col md={4} className={'study-abroad-form'}>
                            <CustomForm/>
                        </Col>
                    </Row>
                </Container>
                <Feature subtitle={cta?.subtitle} leftText={cta?.left_text} rightTopSmall={cta?.right_top} rightBottomTitle={cta?.right_bottom} />
            </StyledInternationStudy>
        </HelmetProvider>)

}

const StyledInternationStudy = styled.section`
  margin-top: 135px;

  .study-abroad-form {
    margin-top: 120px;
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

  //  responsive
  
  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {
    .study-abroad-form {
      display: none;
    }
  }


  /* small mobile :320px. */
  @media (max-width: 767px) {

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


export default MoneyTransfer;

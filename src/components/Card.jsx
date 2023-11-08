import React from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import {Img} from "./Img";
import {Link} from "react-router-dom";
import reactHtmlParser from "react-html-parser";
import AddressCard from "./AddressCard";

const Card = ({img, title, desc, mb, url}) => {


    return (
        <StyledStudyCard className={'col-lg-6 col-md-6'}>
            <Link to={url}>
                <div style={window.innerWidth > 767 ? {marginBottom: mb ? '0px' : '30px'} : {marginBottom: mb ? '0px' : '20px'}} className={'study-abroad-content__single'}>
                    <div className="study-abroad-content__single__img">
                        <Img src={img}/>
                    </div>
                    <div className="study-abroad-content__single__info  split-up">
                        <h4>{reactHtmlParser(title)}</h4>
                        <p>{desc}</p>
                    </div>
                </div>
            </Link>
        </StyledStudyCard>

    )

}

const StyledStudyCard = styled.div`

  .study-abroad-content__single {
    border-radius: 20px;
    background: #F9F9F9;
    min-height: 94%;
    overflow: hidden;
    //margin-bottom: 30px;
    cursor: pointer;
      

    &__img {
      position: relative;
      padding-top: calc(250 / 370 * 100%);
    }

    &__info {
      padding: 30px 20px 37px 20px;
      border-radius: 0px 0px 15px 15px;

      h4 {
        margin-bottom: 10px !important;
        color: #1A1A1A !important;
        font-size: 24px !important;
        font-weight: 600 !important;
        line-height: 30px !important;
        transition: 0.3s;
      }

      p {
        color: #1A1A1A;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }
  }

  .study-abroad-content__single:hover .study-abroad-content__single__info h4 {
    color: #2D3691 !important;
  }


  /* small mobile :320px. */
  @media (max-width: 767px) {
    .study-abroad-content {
      h4 {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 30px;
      }

      &__single {
        margin-bottom: 20px;

        &__img {
          padding-top: calc(240 / 345 * 100%);
        }

        &__info {
          padding: 25px 15px 30px 15px;

          h4 {

          }

          p {

          }
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


export default React.memo(Card);

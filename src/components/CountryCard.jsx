import React from 'react';
import styled from "styled-components";
import {Img} from "./Img";
import {Link} from "react-router-dom";

const CountryCard = ({img, name, rate}) => {
    return (
        <StyledAddressCardComponent>
                <div className="country-card ">
                    <div className="country-card__single">
                        <div className="country-card__single__img">
                            <Img src={img}/>
                        </div>
                        <div className="country-card__single__text split-up">
                            <h4>{name}</h4>
                            {
                                rate && <h5>{rate}</h5>
                            }

                        </div>
                    </div>
                </div>
        </StyledAddressCardComponent>
    );
};

const StyledAddressCardComponent = styled.div`
  .country-card {
    border-radius: 15px;
    overflow: hidden;
    //box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-shadow: 0 5px 30px rgba(45, 54, 145, 0.08);

    &__single {
      &__img {
        position: relative;
        padding-top: calc(250 / 370 * 100%);
      }

      &__text {
        padding: 30px 20px;

        h4 {
          margin-bottom: unset !important;
          text-transform: capitalize;
        }

        h5 {
          color: #f04848;
          font-weight: 500;
          line-height: 26px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .country-card {
      margin-bottom: 30px;
    }
  }
`;

export default React.memo(CountryCard);

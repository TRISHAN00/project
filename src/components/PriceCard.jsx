import React from 'react';
import styled from "styled-components";
import Button from "./SButton";

const PriceCard = ({title, gbp, bdt}) => {
    return (
        <StyledPriceCard className={'price-card'}>
            <div className="price-card__single">
                <div className="price-card__single__top">
                    <h5>{title}</h5>
                </div>
                <div className="price-card__single__price">
                    <h2>{gbp}</h2>
                    <h4>{bdt}</h4>
                    <Button height={'50'} borderRadius={'25'} fontWeight={500} fontSize={14} lineHeight={18} background={'transparent'} hoverBackground={'#2D3691'} text={'Help me study abroad'} color={'#1A1A1A'} borderColor={'#1A1A1A'} hoverBorderColor={'#2D3691'} src={'/why-study-abroad'} />
                </div>

            </div>
        </StyledPriceCard>
    );
};

const StyledPriceCard = styled.div`
  .dc-btn {
    a {
      width: 100%;
    }
  }
  .price-card {
    &__single {
      border-radius: 15px;
      overflow: hidden;
      background: #EAECFF;
      box-shadow: 0 5px 30px rgba(45, 54, 145, 0.08);

      &__top {
        background: #2D3691;
        h5 {
          color: #FFFFFF;
          font-weight: 500;
          line-height: 26px;
          text-align: center;
          padding: 30px 20px;
        }
      }
      &__price {
        padding: 60px 30px;
        text-align: center;
        h2 {
          margin-bottom: 20px;
          font-size: 40px;
          font-weight: 500;
          line-height: 48px;
          color: #2D3691;
        }
        h4 {
          margin-bottom: 40px;
          color: #1A1A1A;
          font-weight: 600;
          line-height: 30px;
          font-size: 24px;
        }
      }
    }
  }
`

export default PriceCard;

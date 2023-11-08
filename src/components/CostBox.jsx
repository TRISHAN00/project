import React from 'react';
import styled from "styled-components";
import Content from "./Content";

const CostBox = ({price, subtitle}) => {

    return (
        <StyledCostBoxComponent className={'cost-box'}>
            <div className="cost-box__wrap">
                <h3>{price}</h3>
                <p>{subtitle}</p>
            </div>
        </StyledCostBoxComponent>
    );
};

const StyledCostBoxComponent = styled.div`
  .cost-box {
    &__wrap {
      background: #ffffff;
      box-shadow: 0 5px 30px rgba(45, 54, 145, 0.08);

      padding: 50px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      overflow: hidden;
      h3 {
        color: #2D3691;
        font-weight: 500;
        line-height: 40px;
      }
      p {
        font-weight: 400;
        line-height: 20px;
        color: #1A1A1A;
      }
    }
  }
`

export default React.memo(CostBox);

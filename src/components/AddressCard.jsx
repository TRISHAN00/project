import React from 'react';
import styled from "styled-components";

const AddressCard = ({name, address, phone, IELTS, email, timing, mb}) => {
    return (
        <StyledAddressCardComponent className={'address-card'}>
            <div style={window.innerWidth > 767 ? {marginBottom: mb ? '0px' : '40px'} : {marginBottom: mb ? '0px' : '30px'}} className="address-card__single split-up">
                {name && <h5>{name}</h5>}
                {address && <h6>{address}</h6>}
                {phone && <h6><span>Phone: </span>{phone}</h6>}
                {IELTS && <h6><span>IELTS: </span>{IELTS}</h6>}
                {email && <h6><span>Email: </span>{email}</h6>}
                {timing && <h6><span>Timings: </span>{timing}</h6>}
            </div>
        </StyledAddressCardComponent>
    );
};

const StyledAddressCardComponent = styled.div`
  
  .address-card {
    &__single {
      margin-bottom: 30px;
      background: #F9F9F9;
      border-radius: 15px;
      overflow: hidden;
      padding: 40px 25px;
      
      h5 {
        color: #1A1A1A;
        font-weight: 500;
        line-height: 26px;
        margin-bottom: 10px;
      }
      h6 {
        margin-bottom: 10px;
        font-weight: 400;
        line-height: 24px;
        color: #1A1A1A;
        span {
          color: #2D3691;
        }
      }
    }
  }
  


`

export default React.memo(AddressCard);

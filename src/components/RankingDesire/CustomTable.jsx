import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import reactHtmlParser from "react-html-parser";

const CustomTable = ({data, mt}) => {
    return (
        <StyledMyComponent style={mt ? {marginTop: '40px'} : {marginTop: '0px'}} className={'table-custom'}>
            <Container className={'p-0'}>
                <Row>
                    <Col className={'p-0'} md={12}>
                        <div className="col">
                            {
                                reactHtmlParser(data?.code)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledMyComponent>
    );
};

const StyledMyComponent = styled.section`
  h4 {
    color: rgba(34, 34, 34, 0.5);
    line-height: 30px;
    font-weight: 600;
    margin: 0px 0px 25px;
    font-size: 20px;
    text-transform: uppercase;
  }

  .table {
    margin: 0px 0px 25px;
    border: 1px solid rgb(233, 233, 233);

    tr {
      width: 100%;
      display: flex;

      &:nth-of-type(2n+1) {
        background: rgb(249, 249, 249);
      }

      &:nth-of-type(2n) {
        background: white;
      }

      td {
        padding: 20px 5px;
        width: 100%;
        display: inline-flex;
        text-align: center;
        border-right: 1px solid rgb(233, 233, 233);
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;

        &:last-child {
          border-right: none;
        }
      }
    }
  }

  @media (max-width: 767px) {
    table.table {
      display: block;
      overflow-x: scroll;

      td {
        min-width: 225px;
      }
    }
  }
`;

export default React.memo(CustomTable);

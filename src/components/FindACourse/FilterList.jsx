import React, {useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FilterList = ({ itemsToShow}) => {
    return (
        <StyledFilterList className={'filter-list'}>
            <Row>
                {itemsToShow?.map((item, index) => {
                    return (
                        <Col key={item.id} md={6}>
                            <Link to={`find-a-university/${item?.post_name}`}>
                                <div className="filter-list__single">
                                    <p>{item.post_title}</p>
                                </div>
                            </Link>
                        </Col>
                    );
                })}
            </Row>
        </StyledFilterList>
    );
};

const StyledFilterList = styled.div`
  .filter-list {
    &__single {
      background-color: #f9f9f9;
      padding: 15px 20px;
      border-radius: 5px;
      margin-bottom: 20px;

      p {
        color: #1a1a1a;
        line-height: 20px;
      }
    }
  }
`;

export default React.memo(FilterList);

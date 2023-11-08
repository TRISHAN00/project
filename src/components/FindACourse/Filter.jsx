import React, {useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import ReactSelectComponent from "../ReactSelectComponent";
import InputField from "../InputField";
import Select from "react-select";

const FILTER_STATE = {
    country: '',
    city: '',
}

const Filter = ({university, handleOnchange, setQuery, query, countryArray, list}) => {

    const [filterState, setFilterState] = useState({...FILTER_STATE})

    const {country, city} = filterState;


    let filteredData = list?.filter((item, index) => {
        return item?.selected_country?.includes(country?.label)
    })


    const cityData = filteredData?.map(item => item?.selected_city);

    const uniqueCities = new Set();
    (cityData || []).forEach(subarray => {
        (subarray || []).forEach(city => {
            if (city !== undefined) {
                uniqueCities.add(city);
            }
        });
    });
    const flatUniqueCities = Array.from(uniqueCities);

// Now flatUniqueCities contains the merged city names without duplicates
    let allCity = flatUniqueCities.map(city => ({
        value: city,
        label: city
    }));


    return (
        <StyledFilter className={'filter'}>
            <Row className={'filter-row'}>
                <Col  lg={4} md={12} sm={12} xs={12}>
                    <Select
                        options={countryArray}
                        value={country}
                        onChange={(selectedOption) => setFilterState({...filterState, country: selectedOption})}
                    />
                </Col>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <Select
                        options={allCity}
                        value={city}
                        onChange={(selectedOption) => setFilterState({...filterState, city: selectedOption})}
                    />
                </Col>
                <Col lg={4} md={12} sm={12} xs={12}>
                    <InputField setQuery={setQuery} query={query} handleOnchange={handleOnchange} university={university} search placeholder={'University'} />
                </Col>
            </Row>
        </StyledFilter>
    );
};

const StyledFilter = styled.div`
  //filter style
  .filter-row {
    background-color: #F9F9F9;
    padding: 30px 20px;
    border-radius: 15px;
    margin-bottom: 40px;
    margin-left: 0;
    margin-right: 0;
  }

  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {

    .filter-row {
      padding: 20px 15px;
      margin-bottom: 30px;
      gap: 15px;
    }
  }


  /* small mobile :320px. */
  @media (max-width: 767px) {
    .filter-row {
      padding: 20px 15px;
      margin-bottom: 30px;
      gap: 15px;
    }

  }
  
`

export default React.memo(Filter);

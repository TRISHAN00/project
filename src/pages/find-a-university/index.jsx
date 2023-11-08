import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Col, Container, Row} from "react-bootstrap";
import Feature from "../../components/Feature";
import CustomForm from "../../components/CustomForm";
import reactHtmlParser from "react-html-parser";
import Filter from "../../components/FindACourse/Filter";
import FilterList from "../../components/FindACourse/FilterList";
import InnerBanner from "../../components/InnerBanner";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {fetchFindUniversity, fetchPageFindUniversity} from "../../api/redux/FindUniversity";
import Select, {components} from "react-select";
import InputField from "../../components/InputField";


const FILTER_STATE = {
    country: '',
    city: '',
}

const FindAUniversity = () => {

    const DropdownIndicator = (props) => (
        <components.DropdownIndicator {...props}>

            <svg xmlns="http://www.w3.org/2000/svg" width="14.121" height="8.121" viewBox="0 0 14.121 8.121">
                <g id="Group_18840" data-name="Group 18840" transform="translate(1.061 1.061)">
                    <line id="Line_3797" data-name="Line 3797" x2="6" y2="6"
                          transform="translate(12) rotate(90)"
                          fill="none" stroke="#ccc" strokeLinecap="round" strokeWidth="1.5"/>
                    <line id="Line_3798" data-name="Line 3798" y1="6" x2="6" transform="translate(6) rotate(90)"
                          fill="none"
                          stroke="#ccc" strokeLinecap="round" strokeWidth="1.5"/>
                </g>
            </svg>


        </components.DropdownIndicator>
    );

    const customStyles = {

        control: (provided, state) => ({
            ...provided,
            borderRadius: '20px',
            border: '1px solid rgba(45, 54, 145, 0.2)',
            background: 'none',
            paddingRight: '30px', // Add right padding for the indicator
            fontSize: '12px',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'rgba(7, 5, 36, 0.5)',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '20px',
            verticalAlign: 'middle',
            paddingLeft: '10px', // Add left padding of 10 pixels
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            '& svg': {
                width: '20px',
                height: '20px',
                fill: '#ccc', // Customize the color of the SVG icon
                // Add any other styles for the SVG if needed
            },
            marginRight: '-20px', // Add right margin of 20px

        }),
        indicatorSeparator: () => null, // Remove the indicator separator
        menu: (provided) => ({
            ...provided,
            fontSize: '14px', // Set the font size for the dropdown menu
        }),
    };


    // filter code
    const [countryStatus, setCountryStatus] = useState('');
    const [cityStatus, setCityStatus] = useState('');
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState();


    // Handle search input change
    const handleChange = (event) => {
        const query = event.target.value.toLowerCase();
        setQuery(query);

        // Filter itemsToShow based on search query
        const filtered = list.filter((item) =>
            item.post_title.toLowerCase().includes(query)
        );

        setFilteredItems(filtered);
    };




    const dispatch = useDispatch();

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.FIND_UNIVERSITY
        dispatch(fetchFindUniversity([api_url]))

        let api_url2 = apiEndPoints?.GET_UNIVERSITY
        dispatch(fetchPageFindUniversity([api_url2]))

    }, [countryStatus, cityStatus])



    let getPost = useSelector(state => state.findUniversity)


    const innerBanner = getPost?.posts?.[0]?.innerBanner;
    const contentTitle = getPost?.posts?.[0]?.content_title;
    const filter = getPost?.posts?.[0]?.filter;

    let countryArray = filter?.country;
    let cityArray = filter?.city;
    let list = getPost?.page_data?.list
    let feature = getPost?.posts?.[0]?.feature;



    const [filterState, setFilterState] = useState({...FILTER_STATE})

    const {country, city} = filterState;


    let filteredDataByCountry = list?.filter((item, index) => {
        return item?.selected_country?.includes(country?.label)
    })

    const cityData = filteredDataByCountry?.map(item => item?.selected_city);

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

    let filteredDataByCity = list?.filter((item, index) => {
        return item?.selected_city?.includes(city?.value)
    })

    // Determine which type of data to show
    let itemsToShow;
    if (filteredDataByCity?.length > 0) {
        itemsToShow = filteredDataByCity;

    } else if (filteredDataByCountry?.length > 0) {
        itemsToShow = filteredDataByCountry;

    } else if (filteredItems) {
        itemsToShow = filteredItems;
    } else {
        // Default to showing the list
        itemsToShow = list;

    }



    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{innerBanner?.subtitle && `${innerBanner?.subtitle} | Doyen & Associate`}</title>
                <meta name="Find a University"
                      content="Find University To Study Abroad"/>
            </Helmet>
            <StyledInternationStudy>
                <InnerBanner first={'Home'} firstUrl={'/'} second={'course'} img={innerBanner?.image}
                             title={innerBanner?.subtitle}/>
                <Container>
                    <Row>
                        <Col lg={8} md={12} className={'study-abroad-content'}>
                            <h3>{reactHtmlParser(contentTitle?.subtitle)}</h3>
                            <h4>{reactHtmlParser(contentTitle?.title)}</h4>
                            <StyledFilter className={'filter'}>
                                <Row className={'filter-row'}>
                                    <Col  lg={4} md={12} sm={12} xs={12}>
                                        <Select
                                            options={countryArray}
                                            value={country}
                                            onChange={(selectedOption) => setFilterState({...filterState, country: selectedOption, city: ''})}
                                            components={{DropdownIndicator}}
                                            styles={customStyles}
                                        />
                                    </Col>
                                    <Col lg={4} md={12} sm={12} xs={12}>
                                        <Select
                                            options={allCity}
                                            value={city}
                                            onChange={(selectedOption) => setFilterState({...filterState, city: selectedOption})}
                                            components={{DropdownIndicator}}
                                            styles={customStyles}
                                        />
                                    </Col>
                                    <Col lg={4} md={12} sm={12} xs={12}>
                                        <InputField handleChange={handleChange} search placeholder={'University'} />
                                    </Col>
                                </Row>
                            </StyledFilter>
                            <FilterList  itemsToShow={itemsToShow}  />
                        </Col>
                        <Col md={4} className={'study-abroad-form'}>
                            <CustomForm/>
                        </Col>
                    </Row>
                </Container>
                <Feature leftUrl={feature?.left_url} rightUrl={feature?.right_url} subtitle={feature?.subtitle} leftText={feature?.left} rightTopSmall={feature?.right_top_small} rightBottomTitle={feature?.right_bottom_title} />
            </StyledInternationStudy>
        </HelmetProvider>)

}

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

  .react-select__control {
    width: 200px; /* Adjust the width as needed */
    height: 40px;
  }

  .css-qbdosj-Input {
    padding-left: 10px;
  }

  .css-1dimb5e-singleValue {
    margin-left: 10px;
    color: rgba(7, 5, 36, 0.5);
  }

  .css-1dimb5e-singleValue {
    margin-left: 10px;
    position: absolute;
    top: 0;
    line-height: 40px;
  }

  .css-1fdsijx-ValueContainer {
    height: 40px;
  }

  .css-hlgwow {
    height: 40px;
  }
  .css-1hwxt6p-placeholder {
    top: -1px;
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
      margin-bottom: 15px;
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
    .form {
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


export default FindAUniversity;

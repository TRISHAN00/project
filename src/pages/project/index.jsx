import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Select, {components} from 'react-select';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useHistory, Link
} from "react-router-dom";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import postReducer, {fetchPostDetail, fetchPosts} from "../../api/redux/post";
import {useDispatch, useSelector} from "react-redux";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import {Loading} from "../../components/Loading";

const MyComponent = () => {

    const dispath = useDispatch()

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.POSTS
        dispath(fetchPosts([api_url]))
    }, [])

    let getPost = useSelector(state => state.posts)

    // Sample data for countries and cities
    const countries = [
        { value: 'usa', label: 'USA' },
        { value: 'canada', label: 'Canada' },
        { value: 'uk', label: 'UK' },
    ];

    const citiesByCountry = {
        usa: [
            { value: 'newyork', label: 'New York' },
            { value: 'losangeles', label: 'Los Angeles' },
            { value: 'chicago', label: 'Chicago' },
        ],
        canada: [
            { value: 'toronto', label: 'Toronto' },
            { value: 'vancouver', label: 'Vancouver' },
            { value: 'montreal', label: 'Montreal' },
        ],
        uk: [
            { value: 'london', label: 'London' },
            { value: 'manchester', label: 'Manchester' },
            { value: 'birmingham', label: 'Birmingham' },
        ],
    };

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setSelectedCity(null); // Reset the city when the country changes
    };

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
    };

    const citiesOptions = selectedCountry ? citiesByCountry[selectedCountry.value] : [];


    return (
        <HelmetProvider>
            {/*dynamic title */}
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Projects</title>
                <meta name="description" content="Description"/>
            </Helmet>

            <StyledComponent>
                <div className="post-wrap">
                    <h3>Projects</h3>
                    <h2>Select a Country:</h2>
                    <Select
                        value={selectedCountry}
                        options={countries}
                        onChange={handleCountryChange}
                        isClearable
                        placeholder="Select a country..."
                        isSearchable={false}
                    />

                            <h2>Select a City in {selectedCountry.label}:</h2>
                            <Select
                                value={selectedCity}
                                options={citiesOptions}
                                onChange={handleCityChange}
                                isClearable
                                placeholder={`Select a city in ${selectedCountry.label}...`}
                                isSearchable={false}
                            />

                </div>
            </StyledComponent>
        </HelmetProvider>

    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;

import React, {useEffect} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {HelmetProvider, Helmet} from 'react-helmet-async'

const MyComponent = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Title</title>
                <meta name="description" content="Description"/>
            </Helmet>

            <StyledComponent>

            </StyledComponent>
        </HelmetProvider>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;

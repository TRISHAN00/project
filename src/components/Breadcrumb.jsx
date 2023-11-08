import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styled from "styled-components";

// Custom function to determine the name from the path
const getNameFromPath = (path) => {
    // Add your own logic to determine the name based on the path
    // Here's a simple example where the path is capitalized and spaces are replaced with "-"
    return path.replace(/-/g, ' ').toUpperCase();
};

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(path => path !== '');

    let previousPageName = 'Home'; // Default name for the home breadcrumb

    // Get the previous path name if it exists
    if (paths.length >= 2) {
        const previousPath = paths.slice(-2, -1)[0];
        previousPageName = getNameFromPath(previousPath); // Call the custom function
    }

    return (
        <StyledBreadcrumb>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">{previousPageName}</Link>
                    </li>
                    {paths.map((path, index) => (
                        <li className="breadcrumb-item" key={index}>
                            <Link to={`/${paths.slice(0, index + 1).join('/')}`}>{path}</Link>
                        </li>
                    ))}
                </ol>
            </nav>
        </StyledBreadcrumb>
    );
};

const StyledBreadcrumb = styled.div`


`

export default Breadcrumb;

import React, {useEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useHistory
} from "react-router-dom";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import postReducer, {fetchPostDetail} from "../../api/redux/post";
import {useDispatch, useSelector} from "react-redux";
import {HelmetProvider, Helmet} from 'react-helmet-async'
import {Loading} from "../../components/Loading";

const MyComponent = () => {

    const dispatch = useDispatch()
    const getData = useSelector(store => store.posts)
    let {slug} = useParams();

    console.log('slugs',slug)

    console.log(getData)

    // api call
    useEffect(() => {
        let api_url = apiEndPoints.POSTS
        dispatch(fetchPostDetail([api_url + `/${slug}`]))
    }, [])

    return (

        <HelmetProvider>
            {/*dynamic title */}
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{getData?.detail?.title ? getData?.detail?.title : 'DC React App'}</title>
                <meta name="description" content="Description"/>
            </Helmet>

            <StyledComponent>
                <h1>{'On detail'}</h1>
                {getData?.detailLoading ? <Loading/> :
                    <>
                        <h2>{getData?.detail?.title}</h2>
                        <p>{getData?.detail?.body}</p>
                    </>
                }

            </StyledComponent>
        </HelmetProvider>

    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;

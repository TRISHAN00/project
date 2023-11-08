import React, { useEffect } from "react";
import styled from "styled-components";
import Banner from "../../components/Home/Banner";
import AboutUs from "../../components/Home/Counter";
import Countries from "../../components/Home/Countries";
import Course from "../../components/Home/Course";
import Partner from "../../components/Home/Partner";
import Universities from "../../components/Home/Universities";
import AssistanceForm from "../../components/Home/AssistanceForm";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";

import { apiEndPoints } from "../../api/network/apiEndPoints";
import { fetchHome } from "../../api/redux/Home";

const Home = ({ offset }) => {
  const dispath = useDispatch();

  // api call
  useEffect(() => {
    let api_url = apiEndPoints.HOME;
    dispath(fetchHome([api_url]));
  }, []);

  let getPost = useSelector((state) => state.home);

  //Refactor Data
  const banner = getPost?.posts?.page_data?.[0]?.banner;
  const counter = getPost?.posts?.page_data?.[0]?.counter;
  const countries = getPost?.posts?.page_data?.[0]?.countries;
  const course = getPost?.posts?.page_data?.[0]?.course;
  const partner = getPost?.posts?.page_data?.[0]?.partner;
  const assistance = getPost?.posts?.page_data?.[0]?.assistance;
  const universities = getPost?.posts?.page_data?.[0]?.universities;

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doyen & Associate</title>
        <meta
          name="Doyen & Associates"
          content="Doyen & Associates Is A Premier Education Consultancy Firm Specializing In Guiding And Supporting International Students On Their Journey To Study Abroad."
        />
      </Helmet>
      <StyledSection>
        <Banner data={banner} offset={offset} />
        <AboutUs data={counter} />
        <Countries data={countries} offset={offset} />
        <AssistanceForm data={assistance} offset={offset} />
        <Universities data={universities} offset={offset} />
        <Course data={course} />
        <Partner data={partner} />
      </StyledSection>
    </HelmetProvider>
  );
};

const StyledSection = styled.div``;

export default Home;

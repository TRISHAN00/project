import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Accordion, Col, Container, Form, Row } from "react-bootstrap";

import { hover } from "../styles/globalStyleVars";
import { CSSPlugin, gsap, TimelineLite } from "gsap";
import { BsChevronRight } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import {  FaChevronDown } from "react-icons/fa";


const Menu = () => {
  const location = useLocation();

  gsap.registerPlugin(CSSPlugin);
  const mobileMenuRaf = useRef();
  const menuRef = useRef();
  const hamburgerRef = useRef();
  const hamburgerCloseRef = useRef();
  const containerRef = useRef();
  const scrollMenuRef = useRef();

  const [innerHeight, setInnerHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // menu fixed on scroll
  useEffect(() => {
    if (document.body.classList.contains("scroll-down")) {
      document.body.classList.remove("scroll-down");
    }

    window.addEventListener("resize", () => {
      setInnerHeight(window.innerHeight);
    });
  });

  useEffect(() => {
    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    let howMuchScroll = 135;

    window.addEventListener("scroll", () => {
      let currentScroll = window.pageYOffset;

      if (currentScroll <= howMuchScroll) {
        body.classList.remove(scrollUp);
        return;
      }
      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
      ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });

    if (document.body.classList.contains("scroll-down")) {
      document.body.classList.remove("scroll-down");
    }
  }, []);

  useEffect(() => {
    // menu click on mobile
    const openMenuHandler = () => {
      setMenuOpen(true);
      document.body.classList.add("menu-open");

      hamburgerRef.current.addEventListener("click", () => {
        document.querySelector(".hamburger").classList.add("menu-open");
        document
          .querySelector(".Mobile-menu-wrap")
          .classList.add("menu-visible");
        document.body.classList.add("menu-showed");

        gsap.to(menuRef.current, {
          display: "block",
        });
        gsap.to(menuRef.current, {
          opacity: 1,
          duration: ".3",
        });
      });
    };

    const closeMenuHandler = () => {
      // ... your close menu code ...
      setMenuOpen(false);
      document.body.classList.remove("menu-open");

      hamburgerCloseRef.current.addEventListener("click", () => {
        document.querySelector(".hamburger").classList.remove("menu-open");
        document
          .querySelector(".Mobile-menu-wrap")
          .classList.remove("menu-visible");
        document
          .querySelector(".Mobile-menu-wrap")
          .classList.remove("contact-slided");
        document.body.style.overflow = ""; // Restore scrolling
        gsap.to(menuRef.current, {
          opacity: 0,
          duration: ".2",
        });
        gsap.to(menuRef.current, {
          display: "none",
        });
      });
    };

    const linkClickHandler = () => {
      // ... your link click code ...
      let getLinkTag = document.querySelectorAll(".Mobile-menu-wrap a");

      for (let i of getLinkTag) {
        i.addEventListener("click", () => {
          document.querySelector(".hamburger").classList.remove("menu-open");
          document
            .querySelector(".Mobile-menu-wrap")
            .classList.remove("menu-visible");
          document
            .querySelector(".Mobile-menu-wrap")
            .classList.remove("contact-slided");
          document.body.classList.remove("menu-showed");
          gsap.to(menuRef.current, {
            opacity: 0,
            duration: ".2",
          });
          gsap.to(
            menuRef.current,
            {
              display: "none",
            },
            "-=.2"
          );

          gsap.to(".desktop-menu__bottom ul li ul", {
            opacity: 0,
            visibility: "hidden",
            top: "70px",
            duration: 0.2,
            zIndex: -2,
          });
          setTimeout(() => {
            let getAllSub = document.querySelectorAll(
              ".desktop-menu__bottom ul li ul"
            );
            getAllSub.forEach(function (e) {
              e.removeAttribute("style");
            });
          }, 800);
        });
      }
    };


    const attachEventListeners = () => {
      if (hamburgerRef.current) {
        hamburgerRef.current.addEventListener("click", openMenuHandler);
      }

      if (hamburgerCloseRef.current) {
        hamburgerCloseRef.current.addEventListener("click", closeMenuHandler);
      }

      let getLinkTag = document.querySelectorAll(".Mobile-menu-wrap a");
      for (let i of getLinkTag) {
        i.addEventListener("click", linkClickHandler);
      }
    };

    const removeEventListeners = () => {
      if (hamburgerRef.current) {
        hamburgerRef.current.removeEventListener("click", openMenuHandler);
      }

      if (hamburgerCloseRef.current) {
        hamburgerCloseRef.current.removeEventListener(
          "click",
          closeMenuHandler
        );
      }

      let getLinkTag = document.querySelectorAll(".Mobile-menu-wrap a");
      for (let i of getLinkTag) {
        i.removeEventListener("click", linkClickHandler);
      }
    };

    attachEventListeners();

    return () => {
      removeEventListeners();
    };
  }, []);

  const closeAccordion = () => {
    document.querySelectorAll(".accordion-collapse.show").forEach((item) => {
      if (item) {
        item.classList.remove("show");
      }
    });

    document.querySelectorAll(".accordion-button").forEach((item) => {
      if (item) {
        item.classList.add("collapsed");
      }
    });
  };

  // mobile contact slide

  useEffect(() => {
    // Remove the "menu-open" class and reset the menu state when the page changes
    return () => {
      document.body.classList.remove("menu-open");
      setMenuOpen(false);
    };
  }, [location.pathname]);

  // active menu
  // const aboutClass = location.pathname.match(/^\/about-infratech/) ? "active" : "";

  return (
    <>
      <StyledDesktopMenu innerHeight={innerHeight} className={`desktop-menu`}>
        <Container ref={containerRef}>
          <Row className="desktop-menu__top">
            <Col className="desktop-menu__top__logo">
              <Link to={"/"}>
                <img height={'200px'} width={'100px'} alt="logo" src={"/images/static/logo.svg"} />
              </Link>
            </Col>

            <Col className="d-flex justify-content-end">
              <li className="call hover">
                <a href="tel:+8801304681832">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.032"
                    height="16"
                    viewBox="0 0 16.032 16"
                  >
                    <g
                      id="Group_19249"
                      data-name="Group 19249"
                      transform="translate(0.028 -0.042)"
                    >
                      <path
                        id="Path_1566"
                        data-name="Path 1566"
                        d="M13.025,29.826a7.625,7.625,0,0,0-.551-.551c-.088-.088-.188-.175-.276-.276l-.8-.8a1.639,1.639,0,0,0-1.152-.526,1.59,1.59,0,0,0-1.152.526l-.25.25c-.188.188-.388.376-.576.589a5.535,5.535,0,0,1-1.09-.714,9.78,9.78,0,0,1-1.365-1.315.594.594,0,0,0-.889.789A12.01,12.01,0,0,0,6.438,29.25H6.45a6.662,6.662,0,0,0,1.591.977.046.046,0,0,0,.038.013.794.794,0,0,0,.864-.2l.025-.025c.225-.25.463-.488.714-.726.088-.088.175-.163.25-.25a.524.524,0,0,1,.326-.175.527.527,0,0,1,.313.175l.8.8c.1.1.2.188.288.288.188.175.351.351.526.526a.012.012,0,0,0,.013.013.371.371,0,0,1-.013.6l-1,1a1.144,1.144,0,0,1-.751.351,4.113,4.113,0,0,1-1.766-.313A12.022,12.022,0,0,1,5.2,30.226a13.122,13.122,0,0,1-3.369-4.3A6.388,6.388,0,0,1,1.153,23.7a1.294,1.294,0,0,1,.4-1.09c.225-.188.413-.388.6-.576a4.632,4.632,0,0,1,.351-.351h0a.4.4,0,0,1,.651-.013L4.784,23.3l.013.013a.382.382,0,0,1,.15.276.51.51,0,0,1-.163.313l-1,1a.593.593,0,0,0,.839.839l1-1a1.629,1.629,0,0,0,.513-1.165,1.5,1.5,0,0,0-.513-1.115L4,20.846a1.572,1.572,0,0,0-2.3-.013c-.138.125-.263.263-.388.388-.175.175-.338.351-.513.5l-.025.025a2.469,2.469,0,0,0-.789,2.029,7.3,7.3,0,0,0,.789,2.655h0a14.149,14.149,0,0,0,3.669,4.684,12.635,12.635,0,0,0,3.807,2.279,5.7,5.7,0,0,0,1.954.4,2.618,2.618,0,0,0,.313-.013h0A2.4,2.4,0,0,0,12,33.094l1-1,.013-.013a1.545,1.545,0,0,0,.013-2.254Zm0,0"
                        transform="translate(0 -17.754)"
                        fill="#fff"
                      />
                      <path
                        id="Path_1567"
                        data-name="Path 1567"
                        d="M63.934,30.533a5.87,5.87,0,0,0-4.8-4.784.6.6,0,0,0-.2,1.177,4.664,4.664,0,0,1,2.517,1.3,4.483,4.483,0,0,1,1.315,2.5.592.592,0,0,0,.589.488.276.276,0,0,0,.1-.013.583.583,0,0,0,.476-.676Zm0,0"
                        transform="translate(-51.146 -22.481)"
                        fill="#fff"
                      />
                      <path
                        id="Path_1568"
                        data-name="Path 1568"
                        d="M68.278,7.9A9.634,9.634,0,0,0,60.438.049a.6.6,0,0,0-.689.488.6.6,0,0,0,.488.689,8.4,8.4,0,0,1,4.534,2.342A8.314,8.314,0,0,1,67.113,8.1a.592.592,0,0,0,.589.488.276.276,0,0,0,.1-.013.577.577,0,0,0,.476-.676Zm0,0"
                        transform="translate(-52.284)"
                        fill="#fff"
                      />
                    </g>
                  </svg>

                  <span>+8801304681832</span>
                </a>
              </li>
            </Col>
          </Row>

          <div className="desktop-menu__bottom">
            <ul>
              <li
                className={`has-child ${
                  location.pathname === "/about-infratech" ? "active" : ""
                }`}
              >
                <span>Study Abroad</span>
                <FaChevronDown />
                <ul>
                  <li
                    className={
                      location.pathname === "/about-infratech" ? "active" : ""
                    }
                  >
                    <Link to={"/why-study-abroad"}>
                      {" "}
                      Why Study Abroad <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClassName={"active"}
                      to={"/doyens-guide-to-study-abroad"}
                    >
                      {" "}
                      Doyens Guide to Study Abroad <BsChevronRight />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/study-abroad-benefits"}>
                      {" "}
                      Study Abroad Benefits <BsChevronRight />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/reasons-to-choose-doyen"}>
                      Reasons to Choose Doyen <BsChevronRight />
                    </Link>
                  </li>
                  {/*<li>*/}
                  {/*    <Link to={"/are-you-ready-to-apply"}>Are You Ready to*/}
                  {/*        Apply? <BsChevronRight/></Link>*/}
                  {/*</li>*/}
                </ul>
              </li>
              <li
                className={`has-child ${
                  location.pathname === "/find-a-university" ? "active" : ""
                }`}
              >
                <span>Course</span>
                <FaChevronDown />
                <ul>
                  <li
                    className={
                      location.pathname === "/how-to-choose-a-course"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to={"/how-to-choose-a-course"}>
                      How to choose a course
                      <BsChevronRight />
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/find-a-university" ? "active" : ""
                    }
                  >
                    <Link to={"/find-a-university"}>
                      Find a University
                      <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/university-ranking"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to={"/university-ranking"}>
                      University Ranking
                      <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/scholarships" ? "active" : ""
                    }
                  >
                    <Link to={"/scholarships"}>
                      Scholarships <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/ielts-Score" ? "active" : ""
                    }
                  >
                    <Link to={"/ielts-Score"}>
                      IELTS Score <BsChevronRight />{" "}
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`has-child ${
                  location.pathname === "/countries" ? "active" : ""
                }`}
              >
                <span>Countries</span>
                <FaChevronDown />
                <ul>
                  <li
                    className={
                      location.pathname === "/study-in-usa" ? "active" : ""
                    }
                  >
                    <Link to={"/study-in-usa"}>
                      Study in USA
                      <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/study-in-uk" ? "active" : ""
                    }
                  >
                    <Link to={"/study-in-uk"}>
                      Study in UK
                      <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/study-in-australia"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to={"/study-in-australia"}>
                      Study in Australia
                      <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/study-in-canada" ? "active" : ""
                    }
                  >
                    <Link to={"/study-in-canada"}>
                      Study in Canada
                      <BsChevronRight />{" "}
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`has-child ${
                  location.pathname === "/living-abroad" ? "active" : ""
                }`}
              >
                <span>Living Abroad</span>
                <FaChevronDown />
                <ul>
                  {/*<li className={location.pathname === '/study-tips' ? 'active' : ''}>*/}
                  {/*    <Link to={"/study-tips"}>Study Tips<BsChevronRight/> </Link>*/}
                  {/*</li>*/}
                  <li
                    className={
                      location.pathname === "/what-to-pack" ? "active" : ""
                    }
                  >
                    <Link to={"/what-to-pack"}>
                      What to pack
                      <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/dealing-with-stress"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to={"/dealing-with-stress"}>
                      Dealing with stress
                      <BsChevronRight />
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/networking-and-socialising"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to={"/networking-and-socialising"}>
                      Networking and Socialising
                      <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/developing-skills" ? "active" : ""
                    }
                  >
                    <Link to={"/developing-skills"}>
                      Developing Skills
                      <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/managing-money" ? "active" : ""
                    }
                  >
                    <Link to={"/managing-money"}>
                      Managing Money
                      <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/job-seeking-tips" ? "active" : ""
                    }
                  >
                    <Link to={"/job-seeking-tips"}>
                      Job seeking tips
                      <BsChevronRight />{" "}
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={
                  location.pathname === "/success-story" ? "active" : ""
                }
              >
                <Link to={"/success-story"}>
                  <span>Success Story</span>
                </Link>
              </li>

              <li
                className={location.pathname === "/testimonial" ? "active" : ""}
              >
                <Link to={"/testimonial"}>
                  <span>Testimonial</span>
                </Link>
              </li>
              {/*onClick={() => handleShow(0)}*/}
              <li
                className={
                  location.pathname === "/living-calculator" ? "active" : ""
                }
              >
                <Link to={"/living-calculator"}>
                  <span>Living Calculator</span>
                </Link>
              </li>
              <li
                className={`has-child ${
                  location.pathname === "/what-do-we-do?" ? "active" : ""
                }`}
              >
                <span>What do we do?</span>
                <FaChevronDown />
                <ul>
                  <li
                    className={
                      location.pathname === "/free-counseling" ? "active" : ""
                    }
                  >
                    <Link to={"/free-counseling"}>
                      {" "}
                      Free Counseling <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/visa-application-assist"
                        ? "active"
                        : ""
                    }
                  >
                    <Link to={"/visa-application-assist"}>
                      {" "}
                      Visa application assist <BsChevronRight />
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/course-advice" ? "active" : ""
                    }
                  >
                    <Link to={"/course-advice"}>
                      {" "}
                      Course advice <BsChevronRight />{" "}
                    </Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/parent-guide" ? "active" : ""
                    }
                  >
                    <Link to={"/parent-guide"}>
                      {" "}
                      Parent Guide <BsChevronRight />{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={location.pathname === "/contact-us" ? "active" : ""}
              >
                <Link to={"/contact-us"}>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </StyledDesktopMenu>
      {window.innerWidth < 991 && (
        <StyledMobileMenu
          ref={scrollMenuRef}
          className={`Mobile-menu-wrap up menu-bar`}
        >
          <Container>
            <Row className="mobile-menu" ref={mobileMenuRaf}>
              <Col xs={4}>
                <Link to={"/"}>
                  <img height={'200px'} width={'100px'} alt="logo" src={"/images/static/mobile-logo.svg"} />
                </Link>
              </Col>

              <Col xs={6} className={"d-flex justify-content-end"}>
                <li className="call-mb hover">
                  <a href="tel:+8801304681832">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.032"
                      height="16"
                      viewBox="0 0 16.032 16"
                    >
                      <g id="svgexport-46" transform="translate(0.028 -0.042)">
                        <path
                          id="Path_1566"
                          data-name="Path 1566"
                          d="M13.025,29.826a7.625,7.625,0,0,0-.551-.551c-.088-.088-.188-.175-.276-.276l-.8-.8a1.639,1.639,0,0,0-1.152-.526,1.59,1.59,0,0,0-1.152.526l-.25.25c-.188.188-.388.376-.576.589a5.535,5.535,0,0,1-1.09-.714,9.78,9.78,0,0,1-1.365-1.315.594.594,0,0,0-.889.789A12.01,12.01,0,0,0,6.438,29.25H6.45a6.662,6.662,0,0,0,1.591.977.046.046,0,0,0,.038.013.794.794,0,0,0,.864-.2l.025-.025c.225-.25.463-.488.714-.726.088-.088.175-.163.25-.25a.524.524,0,0,1,.326-.175.527.527,0,0,1,.313.175l.8.8c.1.1.2.188.288.288.188.175.351.351.526.526a.012.012,0,0,0,.013.013.371.371,0,0,1-.013.6l-1,1a1.144,1.144,0,0,1-.751.351,4.113,4.113,0,0,1-1.766-.313A12.022,12.022,0,0,1,5.2,30.226a13.122,13.122,0,0,1-3.369-4.3A6.388,6.388,0,0,1,1.153,23.7a1.294,1.294,0,0,1,.4-1.09c.225-.188.413-.388.6-.576a4.632,4.632,0,0,1,.351-.351h0a.4.4,0,0,1,.651-.013L4.784,23.3l.013.013a.382.382,0,0,1,.15.276.51.51,0,0,1-.163.313l-1,1a.593.593,0,0,0,.839.839l1-1a1.629,1.629,0,0,0,.513-1.165,1.5,1.5,0,0,0-.513-1.115L4,20.846a1.572,1.572,0,0,0-2.3-.013c-.138.125-.263.263-.388.388-.175.175-.338.351-.513.5l-.025.025a2.469,2.469,0,0,0-.789,2.029,7.3,7.3,0,0,0,.789,2.655h0a14.149,14.149,0,0,0,3.669,4.684,12.635,12.635,0,0,0,3.807,2.279,5.7,5.7,0,0,0,1.954.4,2.618,2.618,0,0,0,.313-.013h0A2.4,2.4,0,0,0,12,33.094l1-1,.013-.013a1.545,1.545,0,0,0,.013-2.254Zm0,0"
                          transform="translate(0 -17.754)"
                          fill="#1a1a1a"
                        />
                        <path
                          id="Path_1567"
                          data-name="Path 1567"
                          d="M63.934,30.533a5.87,5.87,0,0,0-4.8-4.784.6.6,0,0,0-.2,1.177,4.664,4.664,0,0,1,2.517,1.3,4.483,4.483,0,0,1,1.315,2.5.592.592,0,0,0,.589.488.276.276,0,0,0,.1-.013.583.583,0,0,0,.476-.676Zm0,0"
                          transform="translate(-51.147 -22.481)"
                          fill="#1a1a1a"
                        />
                        <path
                          id="Path_1568"
                          data-name="Path 1568"
                          d="M68.278,7.9A9.634,9.634,0,0,0,60.438.049a.6.6,0,0,0-.689.488.6.6,0,0,0,.488.689,8.4,8.4,0,0,1,4.534,2.342A8.314,8.314,0,0,1,67.113,8.1a.592.592,0,0,0,.589.488.276.276,0,0,0,.1-.013.577.577,0,0,0,.476-.676Zm0,0"
                          transform="translate(-52.285)"
                          fill="#1a1a1a"
                        />
                      </g>
                    </svg>
                    <span>+8801304681832</span>
                  </a>
                </li>
              </Col>

              <Col xs={2} className="hamburger">
                <span ref={hamburgerRef}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <g
                      id="Group_18914"
                      data-name="Group 18914"
                      transform="translate(-320 -20)"
                    >
                      <rect
                        id="Rectangle_5550"
                        data-name="Rectangle 5550"
                        width="40"
                        height="40"
                        rx="20"
                        transform="translate(320 20)"
                        fill="#2d3691"
                      />
                      <g
                        id="Group_18913"
                        data-name="Group 18913"
                        transform="translate(0.5 -0.5)"
                      >
                        <line
                          id="Line_3998"
                          data-name="Line 3998"
                          x2="10"
                          transform="translate(334.5 46.5)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-width="1"
                        />
                        <line
                          id="Line_3997"
                          data-name="Line 3997"
                          x2="16"
                          transform="translate(331.5 40.5)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-width="1"
                        />
                        <line
                          id="Line_3996"
                          data-name="Line 3996"
                          x2="10"
                          transform="translate(334.5 34.5)"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-width="1"
                        />
                      </g>
                    </g>
                  </svg>
                </span>

                <span ref={hamburgerCloseRef}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <g
                      id="Group_18914"
                      data-name="Group 18914"
                      transform="translate(-320 -20)"
                    >
                      <rect
                        id="Rectangle_5550"
                        data-name="Rectangle 5550"
                        width="40"
                        height="40"
                        rx="20"
                        transform="translate(320 20)"
                        fill="#2d3691"
                      />
                      <line
                        id="Line_3997"
                        data-name="Line 3997"
                        x2="16"
                        transform="translate(334.343 34.343) rotate(45)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-width="1"
                      />
                      <line
                        id="Line_4028"
                        data-name="Line 4028"
                        x2="16"
                        transform="translate(334.343 45.657) rotate(-45)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                </span>
              </Col>

              <div className="mobile-menu__items" ref={menuRef}>
                <ul className="mobile-menu__items__ul">
                  <Accordion>
                    <li className={location.pathname === "/" ? "" : ""}>
                      <Link to={"/"}>Home</Link>
                    </li>

                    <Accordion.Item eventKey="1" id="accordion-item-1">
                      <Accordion.Header className={`has-child`}>
                        Study Abroad{" "}
                        <img
                          className={"black"}
                          src={"/images/static/mobile-caret-down.svg"}
                        />
                        <img
                          className={"blue"}
                          src={"/images/static/mobile-caret-up.svg"}
                        />
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/why-study-abroad"}
                            >
                              {" "}
                              Why Study Abroad
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/doyens-guide-to-study-abroad"}
                            >
                              {" "}
                              Doyens Guide To Study Abroad
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/study-abroad-benefits"}
                            >
                              {" "}
                              Study Abroad Benefits{" "}
                            </Link>
                          </li>
                          <li onClick={() => closeAccordion()}>
                            <Link to={"/reasons-to-choose-doyen"}>
                              Reasons To Choose Doyen{" "}
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" id="accordion-item-2">
                      <Accordion.Header className={`has-child`}>
                        Course{" "}
                        <img src={"/images/static/mobile-caret-down.svg"} />
                        <img src={"/images/static/mobile-caret-up.svg"} />
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/how-to-choose-a-course"}
                            >
                              How to choose a course
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/find-a-university"}
                            >
                              Find a University
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/university-ranking"}
                            >
                              University Ranking
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/scholarships"}
                            >
                              Scholarships
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/ielts-score"}
                            >
                              IELTS Score
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" id="accordion-item-3">
                      <Accordion.Header>
                        Countries{" "}
                        <img src={"/images/static/mobile-caret-down.svg"} />
                        <img src={"/images/static/mobile-caret-up.svg"} />
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/study-in-usa"}
                            >
                              Study in usa
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/study-in-uk"}
                            >
                              Study in uk
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/study-in-australia"}
                            >
                              Study in australia
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/study-in-canada"}
                            >
                              Study in canada
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" id="accordion-item-4">
                      <Accordion.Header>
                        Living Abroad{" "}
                        <img src={"/images/static/mobile-caret-down.svg"} />
                        <img src={"/images/static/mobile-caret-up.svg"} />
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/what-to-pack"}
                            >
                              What to pack
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/dealing-with-stress"}
                            >
                              Dealing with stress
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/networking-and-socialising"}
                            >
                              Networking and Socialising
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/developing-skills"}
                            >
                              Developing Skills
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/managing-money"}
                            >
                              Managing Money
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/job-seeking-tips"}
                            >
                              Job seeking tips
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <li
                      className={
                        location.pathname === "/success-story" ? "active" : ""
                      }
                    >
                      <Link to={"/success-story"}>Success Story </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/testimonial" ? "active" : ""
                      }
                    >
                      <Link to={"/testimonial"}>Testimonial </Link>
                    </li>
                    <li
                      className={
                        location.pathname === "/living-calculator"
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={"/living-calculator"}>living calculator</Link>
                    </li>
                    <Accordion.Item eventKey="5" id="accordion-item-5">
                      <Accordion.Header>
                        What do we do?{" "}
                        <img src={"/images/static/mobile-caret-down.svg"} />{" "}
                        <img src={"/images/static/mobile-caret-up.svg"} />
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/free-counseling"}
                            >
                              Free Counseling
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/visa-application-assist"}
                            >
                              Visa application assist
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/course-advice"}
                            >
                              Course advice
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={() => closeAccordion()}
                              to={"/parent-guide"}
                            >
                              Parent Guide
                            </Link>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <li
                      className={
                        location.pathname === "/contact-us"
                          ? "active"
                          : "border-class"
                      }
                    >
                      <Link to={"/contact-us"}>Contact Us</Link>
                    </li>
                    <li className={"border-class"}></li>
                    <li className={"border-class"}></li>
                  </Accordion>
                </ul>
              </div>
            </Row>
          </Container>
        </StyledMobileMenu>
      )}
    </>
  );
};

const StyledDesktopMenu = styled.section`
  z-index: 9999;
  width: 100%;
  background: #ffffff;
  position: fixed;
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1) 0s;

  path#Path_1566,
  path#Path_1567,
  path#Path_1568 {
    fill: white;
    stroke: white;
  }

  .desktop-menu__top {
    height: 100px;
    display: flex;
    align-items: center;
    z-index: 99;
    position: relative;

    .call {
      width: 156px;
      height: 40px;
      background-color: #2d3691;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      //header call svg color

      a {
        z-index: 1;
      }

      img {
        position: relative;
        z-index: 2;
      }

      span {
        margin-left: 10px;
        color: #ffffff;
        font-size: 12px;
        line-height: 18px;
        font-weight: 600;
        z-index: 2;
      }

      &:hover {
        &:after {
          background-color: #f04848;
        }
      }
    }

    &__logo {
      a {
        display: flex;
      }

      img {
        height: 45px;
      }
    }

    ul {
      li {
        //width: 101px;
        //height: 35px;
        background-color: #221f1f;
        color: #1a1a1a;
        margin-right: 30px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        //padding: 0px 20px 0 35px;
        cursor: pointer;
        height: 35px;
        align-items: center;
        justify-content: center;

        &:nth-of-type(1) {
          width: 101px;
        }

        &:nth-of-type(2) {
          width: 117px;
        }

        &:nth-last-child(1) {
          margin-right: 0;
          background-color: ${hover};
          width: 101px;

          &.hover:after {
            background-color: #221f1f;
          }
        }

        a {
          display: flex;
          align-items: center;
          text-transform: capitalize;
          height: 100%;
          width: 100%;
          justify-content: center;
          z-index: 1;
        }

        img {
          z-index: 2;
        }

        span {
          margin-left: 20px;
          color: #1a1a1a;
          font-size: 12px;
          line-height: 18px;
          font-weight: 600;
        }

        &:nth-last-of-type(1) {
          a {
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
          }
        }
      }
    }

    .contact-button {
      position: relative;

      &__content {
        width: 270px;
        background-color: #ffffff;
        position: absolute;
        right: 0;
        padding: 30px;
        top: 70px;
        display: none;
        height: 0;
        overflow: hidden;
        opacity: 0;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);

        &__top {
          a {
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
            position: relative;
            width: 100%;
            display: flex;
            padding-bottom: 30px;
            margin-bottom: 30px;
            //border-bottom: 1px solid #707070;

            span {
              position: absolute;
              height: 20px;
              width: 20px;
              border-radius: 50%;
              border: 1px solid #404040;
              display: flex;
              align-items: center;
              justify-content: center;
              right: 0;
              top: 2px;

              svg {
                color: #404040;
                font-size: 10px;
              }
            }
          }
        }

        h4 {
          font-size: 12px;
          line-height: 24px;
          color: rgba(59, 56, 56, 0.5);
        }

        a {
          font-size: 16px;
          line-height: 24px;
          color: #3b3838;
          display: block;
          font-weight: 500;
        }

        p {
          font-weight: 500;
          line-height: 24px;
          font-size: 16px;
        }
      }
    }
  }

  //bottom menu
  .desktop-menu__bottom {
    height: 50px;
    border-top: 1px solid rgba(26, 26, 26, 0.2);

    ul {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-between;

      li {
        display: flex;
        margin-right: 30px;
        //border-top: 1px solid rgba(255, 255, 255, 0.50);
        font-size: 12px;
        font-weight: 600;
        //padding-top: 13px;
        cursor: pointer;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          height: 3px;
          width: 0;
          left: 0;
          bottom: 0;

          background-color: #2d3691;
          transition: width 0.6s cubic-bezier(0.87, 0, 0.13, 1);
        }

        span {
          width: 100%;
          position: relative;
          z-index: 2;
          padding-top: 13px;
          color: #1a1a1a;
          font-size: 12px;
          font-weight: 400;
          line-height: 18px;
        }

        > svg {
          color: #fff;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0px;
          font-size: 17px;
          line-height: 24px;
          margin: auto;
        }

        a {
          font-size: 12px;
          font-weight: 400;
          display: flex;
          width: 100%;
          line-height: 18px;
          color: #ffffff;
        }

        &:nth-last-child(1) {
          margin-right: 0;
        }

        ul {
          box-shadow: inset 0 5px 30px rgba(45, 54, 145, 0.08);

          position: absolute;
          flex-wrap: wrap;
          top: 70px;
          left: -15px;
          background: #fff;
          width: 265px;
          z-index: 9;
          padding: 30px 0 30px 0;
          opacity: 0;
          height: auto;
          display: block;
          visibility: hidden;
          transition: all 0.5s ease;

          li {
            display: block;
            min-width: 100%;
            border: none;
            padding: 0 30px 0 30px;
            //opacity: 0;

            a {
              display: flex;
              padding: 15px 0 15px 0;
              //border-bottom: 1px solid rgba(34, 31, 31, 0.1);
              color: #3b3838;
              width: 100%;
              margin-bottom: 0;
              position: relative;
              border-bottom: 1px solid rgba(26, 26, 26, 0.1);

              svg {
                position: absolute;
                right: 30px;
                color: ${hover};
                opacity: 0;
                transition: all 0.3s ease;
                top: 0;
                bottom: 0;
                margin: auto;
              }

              &:hover {
                color: ${hover} !important;
              }
            }

            &:after {
              display: none !important;
            }

            &:nth-last-child(1) {
              a {
                margin-bottom: 0;
                border: none;
                padding-bottom: 15px;
              }
            }

            &:hover {
              svg {
                right: 0;
                opacity: 1;
              }
            }

            ul {
              display: block !important;
              height: auto !important;
              position: absolute;
              background-color: #f2f2f2;
              width: 270px;
              z-index: 2;
              left: calc(100% + 0px);
              top: -5px;
              opacity: 0;
              transition: opacity 0.3s ease;

              &:before {
                content: none;
              }

              li {
                opacity: 1 !important;
              }
            }

            &:hover {
              ul {
                opacity: 1 !important;
              }
            }
          }
        }

        &.active {
          &:after {
            width: 100%;
          }
        }

        &:hover {
          &:after {
            width: 100%;
          }

          ul {
            opacity: 1;
            visibility: visible;
            top: 50px;
          }
        }

        // &.active > a {
        //   color: ${hover};
        // }
        //
        // &.has-child.active > span {
        //   color: ${hover};
        // }
      }
    }
  }

  //search
  @media (min-width: 993px) and (max-width: 1180px) {
    .desktop-menu__bottom {
      height: 60px;
    }
  }

  @media (max-width: 992px) {
    display: none;
  }

  @media (max-width: 1100px) {
    .desktop-menu__bottom ul li span {
      font-size: 13px;
    }
  }
`;

const StyledMobileMenu = styled.section`
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 9999;
  background-color: #fff;
  display: flex;
  align-items: center;
  overflow: scroll !important;
  position: fixed;
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1) 0s;

  //box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  //display: none;

  li.border-class {
    border-bottom: none !important;
  }

  .dc-btn {
    width: 100%;
  }

  &:after {
    content: "";
    position: absolute;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    left: 15px;
    right: 15px;
    bottom: 0;
  }

  .mobile-menu {
    .call-mb {
      width: 156px;
      height: 40px;
      background-color: transparent;
      border: 1px solid #2d3691;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border 0.3s; /* Add a transition for smoother hover effect */

      a {
        z-index: 1;
      }

      img {
        position: relative;
        z-index: 2;
      }

      span {
        margin-left: 10px;
        color: #1a1a1a;
        font-size: 12px;
        line-height: 18px;
        font-weight: 500;
        z-index: 2;
      }
    }

    .logo {
      display: flex;
      align-items: center;

      img {
        height: 35px !important;

        &:nth-last-of-type(1) {
          display: none;
        }
      }
    }

    .hamburger {
      position: relative;
      display: flex;
      align-items: center;
      //justify-content: flex-end;

      span {
        position: absolute !important;
        right: 15px !important;
        //height: 25px !important;

        &:nth-of-type(2) {
          display: none !important;
        }
      }

      &.menu-open span {
        &:nth-of-type(1) {
          display: none !important;
        }

        &:nth-of-type(2) {
          display: block !important;
          right: 15px !important;
        }
      }
    }

    &__items {
      display: none;
      position: fixed;
      opacity: 0;
      background: #ffffff;
      height: ${(props) => (props.innerHeight ? props.innerHeight : "100vh")};
      top: 70px;
      left: 0;
      width: 100%;
      z-index: 9999;
      padding: 55px 15px 60px 15px;
      //overflow: auto;
      transition: all 0.4s ease;
      overflow: auto;

      .mobile-menu__items__contact {
        height: 40px;
        width: 100%;
        border-radius: 24px;
        text-align: center;
        background-color: ${hover};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 70px;
        margin-top: 10px;

        p {
          font-size: 16px;
          font-weight: 500;
          color: #ffffff;
          line-height: 24px;
        }
      }

      &__top {
        ul {
          li {
            a {
              height: 35px;
              border-radius: 18px;
              background-color: rgba(136, 136, 136, 0.5);
              color: #ffffff;
              font-size: 12px;
              font-weight: 600;
              line-height: 18px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 30px;

              img {
                margin-right: 10px !important;
              }
            }

            &:nth-last-child(1) a {
              margin-bottom: 60px;
              background-color: ${hover};

              &:hover {
                color: #ffffff !important;
              }
            }
          }
        }
      }

      &__ul {
        li {
          padding-bottom: 20px;
          border-bottom: 1px solid #e9e9e9;
          margin-bottom: 20px;

          &:nth-last-child(1) {
            border-bottom: 0;
            border-bottom: none;
          }

          a {
            color: #1a1a1a;
            font-weight: 500;
            font-size: 18px;
            line-height: 26px;
          }

          &.active {
            border-color: ${hover};

            a {
              color: ${hover};
            }
          }
        }
      }
    }

    &.menu-open {
      .mobile-menu__items {
        display: block;
      }
    }

    //accordion
    .accordion-item {
      .accordion-header {
        .accordion-button {
          background-color: transparent;
          text-transform: capitalize;
          width: 100%;
          text-align: left;
          display: flex;
          justify-content: space-between;
          padding: 0;
          box-shadow: none;
          border: none;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid ${hover};
          color: #1a1a1a;
          font-weight: 500;
          font-size: 18px;
          line-height: 26px;

          &.collapsed {
            border-bottom: 1px solid #e1e4e6;
            color: #1a1a1a;
          }

          img {
            height: 20px;
            margin-top: 6px;

            &:nth-last-child(2) {
              display: none !important;
            }

            &:nth-last-child(1) {
              display: block !important;
            }
          }

          &.collapsed {
            img {
              &:nth-last-child(2) {
                display: block !important;
              }

              &:nth-last-child(1) {
                display: none !important;
              }
            }
          }

          &.collapsed {
            border-bottom: 1px solid #e1e4e6;
          }
        }

        &.active {
          .accordion-button {
            border-bottom: 1px solid rgb(25, 97, 172);
            color: rgb(25, 97, 172);
          }
        }
      }

      .accordion-body {
        padding-bottom: 25px;
        //padding-top: 20px;

        ul {
          li {
            border: none;
            padding: 0;
            margin: 0;

            a {
              font-size: 16px;
              line-height: 24px;
              font-weight: 500;
              color: #1a1a1a;
              padding: 20px 0;
              //margin-bottom: 20px;
              border-bottom: 1px solid #e9e9e9;
              display: block;
            }

            &:nth-of-type(1) a {
              padding-top: 0;
            }

            &:nth-last-of-type(1) a {
              border: none;
            }
          }
        }
      }

      &:nth-last-child(1) {
        .accordion-button {
          &.collapsed {
            border: none;
          }
        }
      }
    }
  }

  @media (min-width: 993px) {
    display: none;
  }

  .contact-info {
    position: fixed;
    height: 100vh;
    top: 70px;
    left: 0px;
    right: 0px;
    background-color: rgb(246, 246, 246);
    padding: 50px 15px 20px 15px;
    transform: translate3d(100vw, 0px, 0px) !important;
    transition: all 0.4s ease;

    &__top {
      p {
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        color: #1961ac;
        display: flex;
        margin-bottom: 60px;

        img {
          margin-right: 20px;
        }
      }

      a {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: #1a1a1a !important;
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-bottom: 20px;
        border-bottom: 1px solid #e9e9e9;
        margin-bottom: 40px;
      }
    }

    &__desc {
      &__single {
        &:nth-of-type(1) {
          margin-bottom: 40px;
        }

        h4 {
          font-size: 12px;
          line-height: 24px;
          color: rgba(59, 56, 56, 0.5);
        }

        a {
          color: #3b3838 !important;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
          border: 0;
        }
      }
    }
  }
`;

export default React.memo(Menu);

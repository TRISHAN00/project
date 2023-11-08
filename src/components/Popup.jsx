import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Modal from "react-bootstrap/Modal";
import {Col, Container, Row} from "react-bootstrap";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import {Img} from "./Img";
import {Link} from "react-router-dom";
import PriceCard from "./PriceCard";
import CostBox from "./CostBox";
import Timeline from "./Timeline";

const Popup = ({
                   show,
                   handleClose,
                   no_img,
                   item,
                   title,
                   description,
                   data,
                   subtitle,
                   img
               }) => {

    const popupData = data;
    const [winWidth, setWinWidth] = useState(true)
    useEffect(() => {
        if (window.innerWidth > 767) {
            setWinWidth(true)
        } else {
            setWinWidth(false)
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth > 767) {
                setWinWidth(true)
            } else {
                setWinWidth(false)
            }
        });
    }, [])

    return (

        <StyledModal>
            <Modal
                show={show}
                item={item}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="gph_modal popup-version-one cv-modal product-popup"
            >
                <SimpleBar className="main_scroll" style={{height: '100vh'}}>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col md={12} className={'d-flex justify-content-between align-items-center'}>
                                    <div className="modal-title">
                                        <h4>Living Calculator</h4>
                                    </div>
                                    <div onClick={handleClose} className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110"
                                             viewBox="0 0 110 110">
                                            <defs>
                                                <filter id="Ellipse_604" x="0" y="0" width="110" height="110"
                                                        filterUnits="userSpaceOnUse">
                                                    <feOffset dy="10" input="SourceAlpha"/>
                                                    <feGaussianBlur stdDeviation="10" result="blur"/>
                                                    <feFlood flood-opacity="0.051"/>
                                                    <feComposite operator="in" in2="blur"/>
                                                    <feComposite in="SourceGraphic"/>
                                                </filter>
                                            </defs>
                                            <g id="Group_19249" data-name="Group 19249"
                                               transform="translate(-1188 -20)">
                                                <g transform="matrix(1, 0, 0, 1, 1188, 20)" filter="url(#Ellipse_604)">
                                                    <g id="Ellipse_604-2" data-name="Ellipse 604"
                                                       transform="translate(30 20)" fill="none" stroke="#1a1a1a"
                                                       stroke-width="2">
                                                        <circle cx="25" cy="25" r="25" stroke="none"/>
                                                        <circle cx="25" cy="25" r="24" fill="none"/>
                                                    </g>
                                                </g>
                                                <g id="Group_16760" data-name="Group 16760"
                                                   transform="translate(4.5 -7.5)">
                                                    <line id="Line_3878" data-name="Line 3878" x2="8" y2="8"
                                                          transform="translate(1234.5 68.5)" fill="none"
                                                          stroke="#1a1a1a"
                                                          stroke-linecap="round" stroke-width="2"/>
                                                    <line id="Line_3879" data-name="Line 3879" x1="8" y2="8"
                                                          transform="translate(1234.5 68.5)" fill="none"
                                                          stroke="#1a1a1a"
                                                          stroke-linecap="round" stroke-width="2"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </Col>
                                <Col md={12} className={'d-flex justify-content-between align-items-center desc'}>
                                    <p>Knowing the cost of living is vital when preparing to study abroad. Use our cost
                                        of living calculator to estimate how much you will need to cover all your
                                        expenses as an international student. You can also get an up-to-date cost of
                                        living comparison for various country and accommodation options.</p>
                                </Col>
                                <Col md={8}>
                                    <div className="timeline">
                                        <Timeline/>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <PriceCard title={'Monthly Total'} gbp={'GBP 958'} bdt={'BDT 100,015'}/>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </SimpleBar>
            </Modal>
        </StyledModal>

    )
};


const StyledModal = styled.section`
  .modal-dialog {
    max-width: 100% !important;
  }
  
  .dc-btn {
    width: unset;
  }


`;


export default Popup;

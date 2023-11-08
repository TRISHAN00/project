import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import InputField from "./InputField";
import ReactSelectComponent from "./ReactSelectComponent";
import Button from "./Button";
import {Col, Form, Row} from "react-bootstrap";
import CostBox from "./CostBox";
import CountryCard from "./CountryCard";
import Button1 from "./Button1";
import TimelineSelect from "./Timeline/TimelineSelect";

const Timeline = () => {
    const increaseColor = useRef(null);

    const [currentStep, setCurrentStep] = useState(1);
    const [prevSteps, setPrevSteps] = useState([false, false, false, false, false]);
    const [selectedRangeValue, setSelectedRangeValue] = useState(null);
    const [selectedRangePriceGBP, setSelectedRangePriceGBP] = useState(0);
    const [selectedRangePriceBDT, setSelectedRangePriceBDT] = useState(0);



    const [step1Data, setStep1Data] = useState({
        country: '',
        city: '',
        accommodationType: '',
        range: '',
        live: ''
    });

    console.log(step1Data)

    const handleCountryChange = (selectedOption) => {
        setStep1Data((prevData) => ({...prevData, country: selectedOption.value}));
    };

    const handleCityChange = (selectedOption) => {
        setStep1Data((prevData) => ({...prevData, city: selectedOption.value}));
    };

    const handleAccommodationChange = (selectedOption) => {
        setStep1Data((prevData) => ({...prevData, accommodationType: selectedOption.value}));
    };
    const handleLiveChange = (selectedOption) => {
        setStep1Data((prevData) => ({...prevData, live: selectedOption.value}));
    };

    const handleRangeChange = (selectedOption) => {
        setSelectedRangeValue(selectedOption.value);
        const selectedRange = range.find((item) => item.value === selectedOption.value);
        if (selectedRange) {
            setSelectedRangePriceGBP(selectedRange.priceGBP);
            setSelectedRangePriceBDT(selectedRange.priceBDT);
        } else {
            setSelectedRangePriceGBP(0);
            setSelectedRangePriceBDT(0);
        }
    };



    const handleOnSubmit = (e) => {
        e.preventDefault()
    }

    const handleContinue = (step) => {
        // Save the data from the first step when moving to the next step
        // if (currentStep === 1) {
        //     setStep1Data((prevData) => ({...prevData, country: selectedCountryValue}));
        //     setStep1Data((prevData) => ({...prevData, accommodationType: selectedAccommodationValue}));
        //     setStep1Data((prevData) => ({...prevData, accommodationRange: selectedRangeValue}));
        // }

        setCurrentStep(step);
        setPrevSteps((prevSteps) => {
            const updatedPrevSteps = [...prevSteps];
            updatedPrevSteps[step - 2] = true;
            for (let i = step - 1; i < updatedPrevSteps.length; i++) {
                updatedPrevSteps[i] = false;
            }
            return updatedPrevSteps;
        });
        if (step <= 5) {
            const newWidth = (step - 1) * 23.8 + '%';
            increaseColor.current.style.setProperty('--circle-wrap-after-width', newWidth);
        }
    };



    const renderCircle = (step) => {
        const isActive = step === currentStep;
        const isCompleted = prevSteps[step - 1];
        const isFirstCircle = step === 0;

        return (
            <div
                className={`circle ${isActive ? 'active' : ''}`}
                onClick={() => handleContinue(step)}
            >
                <div
                    className={`circle-number ${isActive ? 'active-number' : ''} ${
                        isCompleted ? 'completed-number' : ''
                    } ${isFirstCircle ? 'first-circle' : ''}`}
                >
                    {step}
                </div>
                <div className={`circle-label ${isActive ? 'active-number' : ''} ${
                    isCompleted ? 'completed-number' : ''
                } ${isFirstCircle ? 'first-circle' : ''}`}>
                    {step === 1 && 'Housing'}
                    {step === 2 && 'Food'}
                    {step === 3 && 'Daily Life'}
                    {step === 4 && 'Clothing'}
                    {step === 5 && 'Costs'}
                </div>
            </div>
        );
    };

    const countries = [
        {label: 'USA', value: 'usa'},
        {label: 'Canada', value: 'canada'},
        {label: 'Australia', value: 'australia'},
        {label: 'United Kingdom', value: 'uk'},
    ];

    const cities = {
        usa: [
            {label: 'New York', value: 'new_york'},
            {label: 'Los Angeles', value: 'los_angeles'},
            // Add more cities for USA
        ],
        canada: [
            {label: 'Toronto', value: 'toronto'},
            {label: 'Vancouver', value: 'vancouver'},
            // Add more cities for Canada
        ],
        australia: [
            {label: 'Sydney', value: 'sydney'},
            {label: 'Melbourne', value: 'melbourne'},
            // Add more cities for Australia
        ],
        uk: [
            {label: 'London', value: 'london'},
            {label: 'Manchester', value: 'manchester'},
            // Add more cities for UK
        ],
    };

    const live = [
        {value: 'city_center', label: 'City Center'},
        {value: 'suburbs', label: 'Suburbs'},
    ]

    const accommodation = [
        {value: 'shared_room', label: 'Shared Room'},
        {value: 'studio_apartment', label: 'Studio Apartment'},
    ]

    const range = [
        { value: 'basic', label: 'Basic', priceGBP: 100, priceBDT: 8000 },
        { value: 'standard', label: 'Standard', priceGBP: 200, priceBDT: 16000 },
        { value: 'premium', label: 'Premium', priceGBP: 300, priceBDT: 24000 },
    ];


    return (
        <StyledTimeline>
            <div className="timeline">
                <div ref={increaseColor} className="circle-wrap">
                    {renderCircle(1)}
                    {renderCircle(2)}
                    {renderCircle(3)}
                    {renderCircle(4)}
                    {renderCircle(5)}
                </div>
                <div className={'show-content'}>
                    <Form onSubmit={handleOnSubmit} >
                        {
                            currentStep === 1 && <div>
                                <p>Price in GBP: {selectedRangePriceGBP} GBP</p>
                                <p>Price in BDT: {selectedRangePriceBDT} BDT</p>
                                <div className="show-content__single">
                                    <p>What country would you like to study in?</p>
                                    <TimelineSelect placeholder={'Select Country'} onChange={handleCountryChange}
                                                    options={countries}/>
                                </div>
                                <div className="show-content__single">
                                    <p>What city would you like to live in?</p>
                                    <TimelineSelect onChange={handleCityChange} placeholder={'Select City'} options={cities[step1Data?.country]}/>
                                </div>
                                <div className="show-content__single">
                                    <p>What type of accommodation do you prefer?</p>
                                    <TimelineSelect options={accommodation}
                                                    placeholder={'Select your prefer'}
                                                    onChange={handleAccommodationChange}/>
                                </div>
                                <div className="show-content__single">
                                    <p>Where would you like to live?</p>
                                    <TimelineSelect options={live}
                                                    placeholder={'Select your prefer'}
                                                    onChange={handleLiveChange}/>
                                </div>
                                <div className="show-content__single">
                                    <p>Select Your Range</p>
                                    <TimelineSelect options={range}
                                                    placeholder={'Select your prefer'}
                                                    onChange={handleRangeChange}/>
                                </div>

                            </div>
                        }
                        {
                            currentStep === 2 && <div>
                                <div className="show-content__single">
                                    <p>How often do you eat out each week in breakfast?</p>
                                    <ReactSelectComponent isSearch placeholder={'Select no of breakfast'}/>
                                </div>
                                <div className="show-content__single">
                                    <p>How often do you eat out each week in Lunch?</p>
                                    <ReactSelectComponent isSearch placeholder={'Select no of lunch'}/>
                                </div>
                                <div className="show-content__single">
                                    <p>How often do you eat out each week in Dinner?</p>
                                    <ReactSelectComponent isSearch placeholder={'Select no of dinner'}/>
                                </div>
                                <div className="show-content__single">
                                    <p>How much do you spend on food?</p>
                                    <InputField placeholder={'Select your range'}/>
                                </div>

                            </div>
                        }
                        {
                            currentStep === 3 && <div>
                                <div className="show-content__single">
                                    <p>How often will you use public transport?</p>
                                    <ReactSelectComponent isSearch placeholder={'Select one'}/>
                                </div>
                                <div className="show-content__single">
                                    <p>How often do you go out to socialise with friends?</p>
                                    <ReactSelectComponent isSearch placeholder={'Select one'}/>
                                </div>
                                <div className="show-content__single">
                                    <p>How much will you spend on your phone plan?</p>
                                    <ReactSelectComponent isSearch placeholder={'Select one'}/>
                                </div>
                                <div className="show-content__single">
                                    <p>What type of exercise do you prefer?</p>
                                    <ReactSelectComponent isSearch placeholder={'Select one'}/>
                                </div>
                            </div>
                        }
                        {
                            currentStep === 4 && <div>
                                <div className="show-content__single">
                                    <p>How many items of clothing are you buying a month?</p>
                                    <ReactSelectComponent isSearch placeholder={'Select one'}/>
                                </div>
                                <div className="show-content__single">
                                    <p>How much do you spend on new clothes?</p>
                                    <ReactSelectComponent isSearch placeholder={'Select one'}/>
                                </div>

                            </div>
                        }
                    </Form>
                </div>
                <div>
                    {
                        currentStep === 5 && <div>
                            <div className="modal-title">
                                <h4>Your cost of living for Bangor, United Kingdom</h4>
                            </div>
                            <Row className={'price-box'}>
                                <Col lg={3}>
                                    <CostBox price={'£265'} subtitle={'Housing'}/>
                                </Col>
                                <Col lg={3}>
                                    <CostBox price={'£265'} subtitle={'Housing'}/>
                                </Col>
                                <Col lg={3}>
                                    <CostBox price={'£265'} subtitle={'Housing'}/>
                                </Col>
                                <Col lg={3}>
                                    <CostBox price={'£265'} subtitle={'Housing'}/>
                                </Col>
                            </Row>
                            <div className="modal-title">
                                <h4>Your cost of living for Bangor, United Kingdom</h4>
                            </div>
                            <div className="modal-country">
                                <Row>
                                    <Col md={6}>
                                        <CountryCard img={'/images/dynamic/london.png'} name={'London'} rate={'GBP 2749'}/>
                                    </Col>
                                    <Col md={6}>
                                        <CountryCard img={'/images/dynamic/london.png'} name={'London'} rate={'GBP 2749'}/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    }
                </div>
                <Button1
                    width={'130px'}
                    hoverBackground={'#F04848'}
                    background={'none'}
                    border={'1px solid #1A1A1A'}
                    color={'#1A1A1A'}
                    text={'Continue'}
                    onClick={() => handleContinue(currentStep + 1)} // Make sure it's an arrow function
                />
            </div>

        </StyledTimeline>
    );
};

const StyledTimeline = styled.div`

  .circle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 99;
  }

  .circle-wrap {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .circle-wrap:before {
    position: absolute;
    content: '';
    left: 15px;
    right: 0;
    width: 95%;
    background: #2D3691;
    opacity: 0.2;
    height: 2px;
    top: 30%;
  }

  .circle-wrap:after {
    position: absolute;
    content: '';
    left: 15px;
    right: 0;
    width: var(--circle-wrap-after-width, 0%);
    background: #F04848;
    height: 2px;
    top: 30%;
  }

  .circle-number {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: 1px solid rgba(45, 54, 145, 0.5);
    position: relative;
    background: #fff; /* Add background color for the default state */
    transition: 0.3s ease-in-out;
    color: rgba(45, 54, 145, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }

  //.circle-number.first-circle {
  //  background: #f04848;
  //  color: #fff;
  //  border: none;
  //}

  .circle-number.active-number {
    border: 1px solid rgba(45, 54, 145);
    color: #2D3691;
  }

  .circle-number.completed-number {
    background: #F04848;
    color: #fff;
    border: none;
  }

  .circle-label {
    margin-top: 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #2D3691;
    line-height: 20px;
  }

  .circle-label.completed-number {
    color: #F04848;
  }

  //.circle.active > .circle-label {
  //  color: #F04848;
  //}


  .continue-button {
    margin-top: 16px;
    padding: 8px 16px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }


  .show-content {
    &__single {
      margin-bottom: 30px;
      margin-top: 40px;

      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #070524;
        opacity: 0.5;
        margin-bottom: 10px;
      }
    }

    p {
      margin-bottom: 10px !important;
    }
  }

  .modal-country {
    margin-top: 30px;
  }

  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
    margin-top: 40px;
  }

  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {
    .price-box {
      gap: 30px;
    }

    .circle-wrap {
      width: 100%;
    }
  }


  /* small mobile :320px. */
  @media (max-width: 767px) {
    .price-box {
      gap: 30px;
    }

    .circle-wrap {
      width: 100%;
    }
  }
`;

export default Timeline;

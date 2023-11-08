import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Button from "./Button";
import {Form} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route, useLocation, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";


const Calc = ({
                      ticketDetails,
                      adult,
                      setAdult,
                      child,
                      setChild,
                      adultPrice,
                      setAdultPrice,
                      childPrice,
                      setChildPrice,
                      adultCounter,
                      setAdultCounter,
                      childCounter,
                      setChildCounter,
                      total,
                      date, setDate
                  }) => {


    let calenderItemRef = useRef(null)
    const router = useLocation()
    const [loading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [address, setAddress] = useState()
    const [postcode, setPostcode] = useState()
    const dispatch = useDispatch()
    const userData = useSelector(state => state?.auth?.userData?.data);
    const salesProgram = useSelector(state => state?.ticket?.ticketInfo?.Envelope?.Body?.SalesProgram?.SalesProgramID?._text);


    const handleCalender = (Date, value) => {
        setDate(Date)

    }

    console.log(salesProgram);



    // password hidden
    const [showPassword1, setShowPassword1] = useState(false);
    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const [showPassword2, setShowPassword2] = useState(false);
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };


    const [currentStep, setCurrentStep] = useState('date');
    const location = useLocation();
    const history = useHistory();
    const params = useParams()




    //get params for each circle
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const status = queryParams.get('status');
        if (status) {
            setCurrentStep(status);
        }
    }, [location.search]);


    const [completedSteps, setCompletedSteps] = useState([]);

// Function to update completed steps
    const updateCompletedSteps = (step) => {
        setCompletedSteps((prevSteps) => [...prevSteps, step]);
    };



    const renderCircle = (status) => {
        const stepNumber = ['date', 'ticket', 'details', 'payment'].indexOf(status) + 1;
        const isActive = status === currentStep;
        const isCompletedStep = completedSteps.includes(status);
        const shouldReplaceWithCheckmark = ['date', 'ticket', 'details', 'payment']
            .indexOf(currentStep) >= ['date', 'ticket', 'details', 'payment'].indexOf(status);

        return (
            <div
                className={`circle ${isActive ? 'active' : ''}`}
                onClick={() => handleContinue(status)}
            >
                <div className={`circle-number ${isActive || isCompletedStep || shouldReplaceWithCheckmark ? 'active-number' : ''}`}>
                    {isCompletedStep || shouldReplaceWithCheckmark ? <span className="checkmark-icon">&#10003;</span> : stepNumber}
                </div>
                <div className="circle-label">
                    {status === 'date' && 'Date'}
                    {status === 'ticket' && 'Ticket'}
                    {status === 'details' && 'Details'}
                    {status === 'payment' && 'Payment'}
                </div>
            </div>
        );
    };



    const handleContinue = (status) => {
        const steps = ['date', 'ticket', 'details', 'payment'];
        const currentStepIndex = steps.indexOf(currentStep);
        const nextStepIndex = steps.indexOf(status);

        if (nextStepIndex === currentStepIndex + 1 || nextStepIndex === currentStepIndex - 1) {
            setCurrentStep(status);
            const queryParams = new URLSearchParams(location.search);
            queryParams.set('status', status);
            history.push({ search: queryParams.toString() });

            // Update completed steps
            updateCompletedSteps(status);
        }
    };


    return (
        <Router>
            <StyledTimeline currentStep={currentStep}>
                <div className="timeline">
                    <div className="circle-wrap">
                        {renderCircle('date')}
                        {renderCircle('ticket')}
                        {renderCircle('details')}
                        {renderCircle('payment')}
                    </div>
                    <div className="show-content">
                        {/*<Switch>*/}
                        {/*<Route exact path="ticket">*/}
                        {/* Render the appropriate component based on currentStep */}
                        {currentStep === 'date' && (
                            <div>
                                <div className={'detail'}>
                                    <div className={'visiting d-flex'}>
                                        <div className={'visiting-title'}>
                                            <h3>Visiting Day</h3>
                                        </div>
                                        <div className={'visiting-data'}>
                                    <span>
                                        <p>Cavana Status:</p>
                                    </span>
                                            <span className={'status'}>
                                        <ul>
                                       <li>
                                           Not Avaialable
                                       </li>
                                       <li>
                                           Selected
                                       </li>
                                   </ul>
                                    </span>

                                        </div>
                                    </div>
                                </div>
                                <div className="process-btn d-flex justify-content-center">
                                    <Button
                                        color="#92278F"
                                        borderColor="#92278F"
                                        hoverfill="#92278F"
                                        text="Continue"
                                        onClick={() => handleContinue('ticket')}
                                    />
                                </div>
                            </div>
                        )}
                        {currentStep === 'ticket' && (
                            <div>
                                <div className="process-btn d-flex justify-content-center">
                                    <Button
                                        color="#1A1818"
                                        borderColor="#1A1818"
                                        hoverfill="#1A1818"
                                        text="Back"
                                        onClick={() => handleContinue('date')}
                                    />
                                    <Button
                                        color="#92278F"
                                        borderColor="#92278F"
                                        hoverfill="#92278F"
                                        text="Continue"
                                        onClick={() => handleContinue('details')}
                                    />
                                </div>
                            </div>
                        )}
                        {currentStep === 'details' && (
                            <div>
                                hello
                            </div>
                        )}
                        {currentStep === 'payment' && (
                            <div>
                                <div className={'details'}>
                                    <h3>Payment</h3>
                                    <div className={'account__form'}>
                                        <div className={'form__fields'}>
                                            <div className="account__form__container">
                                                <div className="form-group-wrap">
                                                    <Form className={'form'}>
                                                        <div className="checkbox-single">
                                                            <Form.Group>
                                                                <label className="container">
                                                                    <input type="checkbox" checked/>
                                                                    <span className="checkmark"></span>
                                                                    <span
                                                                        className="label-text">Pay with SSLCommerz</span>
                                                                </label>
                                                            </Form.Group>
                                                        </div>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="process-btn d-flex justify-content-center">
                                    <Button
                                        color="#1A1818"
                                        borderColor="#1A1818"
                                        hoverfill="#1A1818"
                                        text="Back"
                                        onClick={() => handleContinue('details')}
                                    />

                                </div>
                            </div>
                        )}
                        {/*</Route>*/}
                        {/*</Switch>*/}
                    </div>
                </div>
            </StyledTimeline>
        </Router>
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
    width: 60%;
  }

  .circle-wrap:before {
    position: absolute;
    content: '';
    left: 15px;
    right: 0;
    background: #2D3691;
    opacity: 0.2;
    height: 2px;
    top: 30%;
    width: 90%;
  }

  //.circle-wrap:after {
  //  position: absolute;
  //  content: '';
  //  left: 15px;
  //  right: 0;
  //  width: 25%;
  //  background: red;
  //  height: 2px;
  //  top: 30%;
  //}

  .circle-wrap:after {
    position: absolute;
    content: '';
    left: 15px;
    right: 0;
    height: 2px;
    top: 30%;
    background: #92278F;
    width: ${props => {
    switch (props.currentStep) {
        case 'date':
            return '0%';
        case 'ticket':
            return '35%';
        case 'details':
            return '55%';
        case 'payment':
            return '90%';
        default:
            return '0%';
    }
}};
  }
  
 

  .circle-wrap:last-child:after {
    display: none !important;
  }

  .circle-number {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: 1px solid #92278F;
    position: relative;
    background: #FFFFFF;
    color: #92278F;
    transition: 0.3s ease-in-out;
  }

  .circle-number.active-number {
    background: #92278F;
    color: #fff;
    border: none;
  }
  
  .circle-label {
    margin-top: 8px;
    text-align: center;
    font-size: 12px;
    line-height: 14px;
    font-weight: 300;
    color: #1A1818;
  }

  .circle.active > .circle-label {
    color: #92278F;
  }


  .process-btn {
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #ffffff;
    gap: 20px;
    margin-top: 40px;
  }


  .show-content {
    margin-top: 40px;

    .tc {
      border: 1px solid #E8E8E8;
      margin-top: 30px;
      //border-top: 1px solid #E8E8E8;

      .title {
        h3 {
          color: #1A1818;
          font-size: 20px;
          line-height: 32px;
          font-weight: 500;
          padding-top: 17px;
          padding-bottom: 19px;
          padding-left: 20px;
          border-bottom: 1px solid #E8E8E8;
          //background-color: #F9F9F9;
        }
      }

    }

    .details {
      margin-top: 30px;
      background-color: #f9f9f9;
      border: 1px solid #E8E8E8;

      h3 {
        color: #1A1818;
        font-size: 20px;
        line-height: 32px;
        font-weight: 500;
        padding-top: 17px;
        padding-bottom: 19px;
        padding-left: 20px;
        background-color: #f9f9f9;
        border: 1px solid #E9E9E9;
      }

      .account__form {
        padding: 20px 30px 40px 30px;
        background-color: #ffffff;
        //box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 5px;

        .checkbox-single {
          margin-bottom: 25px;
          padding-top: 25px;

          .container {
            padding-bottom: 25px;
            border-bottom: 1px solid #E8E8E8;
            margin-bottom: 25px;
          }
        }

        .flex {
          display: flex;
          flex-wrap: wrap;
          //justify-content: space-between;

          .form-group {
            &:last-child {
              flex: 0 0 100%;
              width: 100%;
            }
          }
        }
      }
    }

    .detail {
      margin-top: 20px;

      .visiting {
        justify-content: space-between;
        background-color: #E9E9E9;
        padding: 20px 17px;

        .visiting-title {
          h3 {
            color: #1A1818;
            font-size: 20px;
            line-height: 32px;
            font-weight: 500;
          }
        }

        .visiting-data {
          display: flex;
          justify-content: space-between;
          align-self: center;
          gap: 20px;

          p {
            color: #1A1818;
            font-size: 12px;
            line-height: 14px;
            font-weight: 300;
            margin-right: 16px;
          }

          .status {
            ul {
              display: flex;
              justify-content: space-between;
              //gap: 20px;

              li {
                position: relative;
                color: #1A1818;
                font-size: 12px;
                line-height: 14px;
                font-weight: 300;
                margin-right: 20px;

                &:last-child {
                  margin-right: 0;

                  &::before {
                    position: absolute;
                    content: "";
                    top: -5px;
                    left: -25px;
                    border-radius: 50%;
                    background-color: rgb(90, 209, 209);
                    opacity: 100%;
                  }
                }

                &::before {
                  position: absolute;
                  content: "";
                  top: -5px;
                  left: -25px;
                  padding: 10px !important;
                  //left: -40px;
                  display: inline-block;
                  width: 5px !important;
                  height: 5px !important;
                  //margin-left: 20px;
                  margin-left: 0 !important;
                  border-radius: 50%;
                  opacity: 10%;
                  background-color: #EC1B34;
                }

                &:after {
                  display: none !important;
                }
              }
            }
          }
        }
      }

      .calendar {
        background-color: #fff;
        //padding: 40px 33px 53px 50px;

        .calender-all-item {

          .react-calendar {
            width: 100% !important;
            max-width: 100% !important;
            border: none;

            .react-calendar__navigation {
              margin: 25px;
              .react-calendar__navigation__prev2-button {
                display: none;
              }
            }
          }

          .react-calendar__navigation__label__labelText{
            font-size: 24px;
            line-height: 32px;
            font-weight: 400;
            font-family: "Bonn BF";
          }

          .react-calendar__navigation__prev-button{
            font-size: 0;
            background: none;
            border: none;
            cursor: pointer;
            position: relative;
          }

          .react-calendar__navigation__prev-button::before {
            content: ""; /* Required for pseudo-elements */
            display: inline-block; /* Ensure the element takes up space */
            width: 40px; /* Set the width of your custom arrow container (including the background) */
            height: 40px; /* Set the height of your custom arrow container (including the background) */
            background-color: #ffffff; /* Set the background color for the circular background */
            border-radius: 50%; /* Make the background circular */
            position: absolute; /* Position the pseudo-element absolutely within the button */
            top: 50%; /* Vertically center the pseudo-element */
            left: 50%; /* Horizontally center the pseudo-element */
            transform: translate(-50%, -50%);
            box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);/* Move the pseudo-element to center it properly */
          }


          .react-calendar__navigation__prev-button::after {
            content: "";
            display: inline-block;
            height: 16px;
            width: 8px;
            background-image: url('/images/static/prev.svg');
            background-size: cover;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-60%, -50%);
          }

          .react-calendar__navigation__next-button{
            font-size: 0;
            background: none;
            border: none;
            cursor: pointer;
            position: relative;
          }

          .react-calendar__navigation__next-button::before {
            content: ""; 
            display: inline-block; 
            width: 40px; 
            height: 40px;
            background-color: #ffffff; 
            border-radius: 50%;
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%);
            box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
          }

          .react-calendar__navigation__next-button::after {
            content: "";
            display: inline-block;
            height: 16px;
            width: 8px;
            background-image: url('/images/static/next.svg');
            background-size: cover;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-60%, -50%);
          }


          .react-calendar__month-view__weekdays{
            color: #1A1818;
            font-size: 24px;
            line-height: 29px;
            font-weight: 400;
            font-family: "Bonn BF";
            //margin: 0 50px;
          }

          .react-calendar__tile--now{
            color: #1A1818;
            font-size: 24px;
            line-height: 29px;
            font-weight: 400;
            font-family: "Bonn BF";
          }

          .react-calendar__month-view__days{
            //margin-left: 50px;
            //margin-right: 50px;
          }

          .react-calendar__month-view__days__day{
            color: #1A1818;
            font-size: 24px;
            line-height: 29px;
            font-weight: 400;
            font-family: "Bonn BF";
            padding: 13px 13px;
            margin-bottom: 15px;
          }

          .react-calendar__month-view__days__day:disabled {
            padding: 10px;
            color: #1A1818 !important;
            font-size: 24px;
            line-height: 29px;
            position: relative;
          }

          .react-calendar__month-view__days__day:disabled::after {
            content: ""; /* Required for pseudo-elements */
            display: inline-block; /* Ensure the element takes up space */
            width: 50px; /* Set the width of your custom arrow container (including the background) */
            height: 50px; /* Set the height of your custom arrow container (including the background) */
            background-color: #EC1B34; /* Set the background color for the circular background */
            border-radius: 50%; /* Make the background circular */
            position: absolute; /* Position the pseudo-element absolutely within the button */
            top: 50%; /* Vertically center the pseudo-element */
            left: 50%; /* Horizontally center the pseudo-element */
            transform: translate(-50%, -50%);
            opacity: 50%;
            color: #fff;
            //box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);/* Move the pseudo-element to center it properly */
          }


          .react-calendar__month-view__days__day--neighboringMonth{
            display: none;
          }

          .react-calendar__month-view__days {
            //gap: 16px;

            .react-calendar__month-view__weekdays__weekday {
              //padding: 35px 58px;
            }

            .react-calendar__tile {
              background-color: #fff;
            }



            .react-calendar__tile--now {
              border-radius: 50%;
              background-color: unset !important;
              //background: rgb(90,209,209) !important;
              padding: 23px;
              color: white;
            }

            .react-calendar__tile {
              //padding: 35px 58px;
              color: #989898;
              font-size: 24px;
              line-height: 29px;
              font-weight: 400;
            }

            .react-calendar__tile--active {
              background: rgb(90, 209, 209) !important;
              border-radius: 50%;
              padding: 20px;
              color: white;
            }

            .react-calendar__navigation__prev2-button {
              display: none;
            }
          }
        }
      }

      //.calendar {
      //  background-color: #fff;
      //  //padding: 40px 33px 53px 50px;
      //
      //  .calender-all-item {
      //
      //    .react-calendar {
      //      //width: 100% !important;
      //      // max-width: 100% !important;
      //      border: none;
      //
      //      .react-calendar__navigation {
      //        .react-calendar__navigation__prev2-button {
      //          display: none;
      //        }
      //      }
      //    }
      //
      //    .react-calendar__month-view__weekdays__weekday {
      //      color: #989898;
      //      font-size: 24px;
      //      line-height: 29px;
      //      font-weight: 400;
      //    }
      //
      //    .react-calendar__month-view__days {
      //      gap: 16px;
      //
      //      .react-calendar__month-view__weekdays__weekday {
      //        //padding: 35px 58px;
      //      }
      //
      //      .react-calendar__tile {
      //        background-color: #fff;
      //      }
      //
      //      .react-calendar__tile:disabled {
      //        background-color: red !important;
      //        opacity: 10%;
      //        border-radius: 50%;
      //        padding: 23px;
      //        color: white;
      //      }
      //
      //      .react-calendar__tile--now {
      //        border-radius: 50%;
      //        background-color: unset !important;
      //        //background: rgb(90,209,209) !important;
      //        padding: 23px;
      //        color: white;
      //      }
      //
      //      .react-calendar__tile {
      //        //padding: 35px 58px;
      //        color: #989898;
      //        font-size: 24px;
      //        line-height: 29px;
      //        font-weight: 400;
      //      }
      //
      //      .react-calendar__tile--active {
      //        background: rgb(90, 209, 209) !important;
      //        border-radius: 50%;
      //        padding: 20px;
      //        color: white;
      //      }
      //
      //      .react-calendar__navigation__prev2-button {
      //        display: none;
      //      }
      //    }
      //  }
      //}

    }
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

export default Calc;

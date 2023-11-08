import React, { useEffect, useState } from "react";
import RadioComponent from "./RadioComponent";
import styled from "styled-components";
import InputField from "./InputField";
import { Form } from "react-bootstrap";
import ReactSelectComponent from "./ReactSelectComponent";
import Button1 from "./Button1";
import { apiEndPoints } from "../api/network/apiEndPoints";
import { useDispatch, useSelector } from "react-redux";
import { postForm } from "../api/redux/ContactUs";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {
  fetchFindUniversity,
  fetchPageFindUniversity,
} from "../api/redux/FindUniversity";
import Select, { components } from "react-select";
import Button from "./SButton";

const CustomForm = ({ isSearch }) => {
  const FORM_STATE = {
    city: "",
    university: "",
    councelling: "",
  };

  const IndicatorSeparator = () => null; // Custom component to remove the separator

  const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.121"
        height="8.121"
        viewBox="0 0 14.121 8.121"
      >
        <g
          id="Group_18840"
          data-name="Group 18840"
          transform="translate(1.061 1.061)"
        >
          <line
            id="Line_3797"
            data-name="Line 3797"
            x2="6"
            y2="6"
            transform="translate(12) rotate(90)"
            fill="none"
            stroke="#ccc"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <line
            id="Line_3798"
            data-name="Line 3798"
            y1="6"
            x2="6"
            transform="translate(6) rotate(90)"
            fill="none"
            stroke="#ccc"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </components.DropdownIndicator>
  );

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "20px",
      border: "1px solid rgba(45, 54, 145, 0.2)",
      background: "none",
      paddingRight: "30px", // Add right padding for the indicator
      fontSize: "12px",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "rgba(7, 5, 36, 0.5)",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "20px",
      verticalAlign: "middle",
      paddingLeft: "10px", // Add left padding of 10 pixels
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      "& svg": {
        width: "20px",
        height: "20px",
        fill: "#ccc", // Customize the color of the SVG icon
        // Add any other styles for the SVG if needed
      },
      marginRight: "-20px", // Add right margin of 20px
    }),
    indicatorSeparator: () => null, // Remove the indicator separator
    menu: (provided) => ({
      ...provided,
      fontSize: "14px", // Set the font size for the dropdown menu
    }),
  };

  const dispatch = useDispatch();
  const responseData = useSelector((state) => state?.contactUs);

  const [countryStatus, setCountryStatus] = useState("");
  const [cityStatus, setCityStatus] = useState("");
  const [formData, setFormData] = useState({ ...FORM_STATE });

  const { city, university, councelling } = formData;

  const { register, handleSubmit, formState, reset } = useForm();

  const [radioOpen, setRadioOpen] = useState({
    isAgree: false,
    isContact: false,
    isEmail: false,
  });

  const { isAgree, isContact, isEmail } = radioOpen;

  useEffect(() => {
    let api_url = apiEndPoints.FIND_UNIVERSITY;
    dispatch(fetchFindUniversity([api_url]));

    let api_url2 = apiEndPoints?.GET_UNIVERSITY;
    dispatch(fetchPageFindUniversity([api_url2]));
  }, [countryStatus, cityStatus]);

  let getPost = useSelector((state) => state.findUniversity);

  const allCity = getPost?.page_data?.filter?.city;
  let list = getPost?.page_data?.list;

  let filteredDataByCity = list?.filter((item, index) => {
    return item?.selected_city?.includes(city?.label);
  });

  let universityName = filteredDataByCity?.map((item) => item?.post_title);

  let universityNameArray = universityName?.map((universityName) => ({
    value: universityName,
    label: universityName,
  }));

  const handleRadioOnChange = (radioName) => {
    setRadioOpen((prevState) => ({
      ...prevState,
      [radioName]: !prevState[radioName],
    }));
  };

  //--- form submit
  const success = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 4000,
      closeOnClick: true,
      progress: undefined,
    });

  const error = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 4000,
      closeOnClick: true,
      progress: undefined,
    });

  const handleBlur = () => {
    // Perform onBlur logic here
  };

  const handleChange = () => {
    // Perform onChange logic here
  };

  const onSubmit = (e) => {
    // Check if all fields are filled
    if (
      !e?.firstName ||
      !e?.lastName ||
      !e?.phone ||
      !city?.label ||
      !university?.label ||
      !councelling?.label ||
      !isAgree ||
      !isContact ||
      !isEmail
    ) {
      error("Please fill out all required fields");
      return; // Prevent form submission
    }

    // Rest of your form submission logic
    let api_services = apiEndPoints?.FORM;

    var formData = new FormData();
    formData?.append("first-name", e?.firstName);
    formData?.append("last-name", e?.lastName);
    formData?.append("phone", e?.phone);
    formData?.append("email", e?.email);
    formData?.append("select-city", city?.label);
    formData?.append("study-destination", university?.label);
    formData?.append("counselling-mode", councelling?.label);
    formData?.append("terms-agreement", isAgree);
    formData?.append("contact-preference", isContact);
    formData?.append("receive-emails", isEmail);

    dispatch(postForm([api_services, formData]));
    // success("Successfully Submitted");
    setFormData({ ...FORM_STATE});
    setRadioOpen({
      isAgree: false,
      isContact: false,
      isEmail: false
    });
    reset();
  };

  let count = 0;
  const onError = (errors) => {

    // Initialize error flags
    let hasFirstName = false;
    let hasLastName = false;
    let hasEmail = false;
    let hasPhone = false;


    // Check each field for errors and set the error flags
    if (errors.firstName) {
      hasFirstName = true;
      toast.error(errors.firstName.message);
    }

    if (errors.lastName) {
      hasLastName = true;
      toast.error(errors.lastName.message);
    }

    if (errors.email) {
      hasEmail = true;
      toast.error(errors.email.message);
    }

    if (errors.phone) {
      hasPhone = true;
      toast.error(errors.phone.message);
    }

    if(!city) {
      toast.error('Select a city');
    }

    if(!university) {
      toast.error('Select a University');
    }

    if(!councelling) {
      toast.error('Select a counselling');
    }

    Object?.values(errors)?.forEach((error) => {
      count++;
    });
    if (count > 0) {
      toast?.error("please fill out the correct inputs");
    }
    count = 0;
  };
  useEffect(() => {
    if (responseData && responseData?.error !== "") {
      error(responseData?.error);
    }
    if (responseData && responseData?.success !== "") {
      // success(responseData?.success)
    }
  }, [responseData]);

  return (
    <StyledFormComponent className={"form"}>
      <div className="form__box">
        <h5>Interested In Studying Abroad With D&A?</h5>
        <p>
          Enter your details below and we’ll call you back when it suits you.
        </p>
      </div>

      <div className="form__input">
        <Form
          className={"custom-form"}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <Form.Control
            className={
              formState?.errors?.name?.message
                ? "has-error form-control-lg"
                : "form-control-lg"
            }
            {...register("firstName", {
              required: "First Name is required",
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,}$/,
                message: "First Name must contain only letters",
              },
            })}
            autocomplete="off"
            type="text"
            placeholder="First Name"
          />

          <Form.Control
            className={
              formState?.errors?.name?.message
                ? "has-error form-control-lg"
                : "form-control-lg"
            }
            {...register("lastName", {
              required: "Last Name is required",
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,}$/,
                message: "Last Name must contain only letters",
              },
            })}
            autocomplete="off"
            type="text"
            placeholder="Last Name"
          />

          <Form.Control
            className={
              formState?.errors?.name?.message
                ? "has-error form-control-lg"
                : "form-control-lg"
            }
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email format",
              },
            })}
            autocomplete="off"
            type="email"
            placeholder="Email"
          />

          <Form.Control
            className={
              formState?.errors?.name?.message
                ? "has-error form-control-lg"
                : "form-control-lg"
            }
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^01[0-9]{9}$/,
                message: "Phone must contain only Charactar",
              },
            })}
            autocomplete="off"
            type="tel"
            placeholder="Phone"
          />

          <Select
            {...register("selectCity", {
              required: {
                // value:true,
                message: "please enter your city",
              },
            })}
            placeholder={"Select Your City"}
            options={allCity}
            components={{ DropdownIndicator }}
            styles={customStyles}
            value={city}
            isSearchable={false}
            onChange={(selectedOption) =>
              setFormData({
                ...formData,
                city: selectedOption,
              })
            }
          />
          <Select
            {...register("studyDestination", {
              required: {
                // value:true,
                message: "please enter your destination",
              },
            })}
            placeholder={"Select Your Destination"}
            options={universityNameArray}
            components={{ DropdownIndicator }}
            styles={customStyles}
            value={university}
            isSearchable={false}
            onChange={(selectedOption) =>
              setFormData({
                ...formData,
                university: selectedOption,
              })
            }
          />
          <Select
            {...register("counsellingMode", {
              required: {
                // value:true,
                message: "please enter your destination",
              },
            })}
            placeholder={"Preferred Mode of Councelling"}
            options={[
              { value: "In-person", label: "In-person" },
              { value: "Virtual Counselling", label: "Virtual Counselling" },
            ]}
            components={{ DropdownIndicator }}
            styles={customStyles}
            value={councelling}
            isSearchable={false}
            onChange={(selectedOption) =>
              setFormData({
                ...formData,
                councelling: selectedOption,
              })
            }
          />
          <div className="custom-form__agree">
            <span>
              * Doyen & Associates will not share your details with others
              without your permission
            </span>
            <RadioComponent
              text={
                "I agree to Doyen & Associates <span> Terms and Privacy Policy<span>"
              }
              radioOpen={radioOpen?.isAgree}
              handleRadioOnChange={() => handleRadioOnChange("isAgree")}
            />
            <RadioComponent
              text={
                "Please contact me by phone, email or SMS to assist with my enquiry"
              }
              radioOpen={radioOpen?.isContact}
              handleRadioOnChange={() => handleRadioOnChange("isContact")}
            />
            <RadioComponent
              text={
                "I'd love to get useful emails from PFEC Global about why-study-abroad abroad and scholarships"
              }
              radioOpen={radioOpen?.isEmail}
              handleRadioOnChange={() => handleRadioOnChange("isEmail")}
            />
          </div>
          <div className="cutom-form__btn">
            <Button onClick={handleSubmit(onSubmit, onError)}  color={'#1A1A1A'} hoverBorderColor={'#2D3691'} hoverBackground={'#2D3691'} borderColor={'#1A1A1A'} background={'transparent'} height={'40px'} fontWeight={'500'} lineHeight={'18'} fontSize={'12'} text={'Submit Form'} />
          </div>
        </Form>
      </div>
    </StyledFormComponent>
  );
};

const StyledFormComponent = styled.div`
  background: #eaecff;
  border-radius: 15px;
  overflow: hidden;
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

  .css-1fdsijx-ValueContainer {
    height: 40px;
  }

  .css-1hwxt6p-placeholder {
    line-height: 40px;
    top: 0;
    position: absolute;
  }

  .css-e1r84p-control {
    height: 40px;
  }

  .css-hlgwow {
    height: 40px;
  }

  .notify-checkbox {
    p {
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      color: #1a1a1a;
      margin-top: 10px;
    }
  }

  .form-check-label {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #070524;
    margin-left: 16px;

    span {
      color: #e84b37;
    }
  }

  input.form-check-input {
    color: #100697;
    height: 20px;
    width: 20px;
  }

  .btn-section-dark {
    margin-top: 40px;
  }

  .form-group {
    margin-bottom: 30px;
  }

  .form-group:last-child {
    margin-bottom: 40px;
  }

  .dc-btn a {
    width: 100%;
  }

  //only form input css
  .custom-form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    span {
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      color: #1a1a1a;
    }

    &__agree {
      margin-top: 10px;
    }
  }

  .form {
    box-shadow: 0 5px 30px rgba(45, 54, 145, 0.08);
    &__box {
      background: #2d3691;
      padding: 30px 20px;
      text-align: center;
      border-radius: 15px;
      overflow: hidden;

      h5 {
        font-weight: 500;
        line-height: 26px;
        color: #ffffff;
      }

      p {
        color: #fff;
        font-weight: 400;
        line-height: 20px;
      }
    }

    &__input {
      padding: 40px 30px;
    }
  }

  //  input field
  input {
    background: transparent;
    border-radius: 20px;
    border: 1px solid rgba(45, 54, 145, 0.2);
    height: 40px;
    padding-left: 20px;
    caret-color: rgba(7, 5, 36, 0.5);
    font-size: 12px;

    ::placeholder {
      color: rgba(7, 5, 36, 0.5);
      font-size: 12px;
      font-weight: 400;
      line-height: 40px;
      vertical-align: middle; /* Added vertical alignment */
    }

    :focus {
      border-color: rgba(45, 54, 145, 0.2); /* Add a focus border color */
      outline: none; /* Remove the default outline */
      background-color: transparent; /* Set the background color to transparent for the focused state */
    }
  }

  .icon {
    position: absolute;
    top: 0;
    right: 20px;
    bottom: 0;
    display: flex;
    align-items: center;
  }
`;

export default React.memo(CustomForm);

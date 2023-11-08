import React, {useState} from 'react';
import styled from "styled-components";
import {Form} from "react-bootstrap";
import {useForm} from "react-hook-form";

const InputField = ({placeholder, type, search, setQuery, query, handleBlur, handleChange}) => {
    const {register} = useForm();
    return (
        <StyledInputFieldComponent>
            <Form.Control autoComplete="off" // Disable browser autofill
                          {...register("message", {
                              required: {
                                  // value:true,
                                  message: "please enter your email",
                              },
                          })} onBlur={handleBlur} onChange={(e) => {
                if (handleChange) {
                    handleChange(e);
                }
                setQuery && setQuery(e.target.value);
            }} value={query} type={type} placeholder={placeholder}/>
            {
                search && <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path id="Search"
                              d="M10.336,4.548a.372.372,0,1,1-.526.526,3.353,3.353,0,0,0-4.736,0,.372.372,0,0,1-.526-.526A4.1,4.1,0,0,1,10.336,4.548ZM17.86,16.372a1.488,1.488,0,0,1-2.541,1.052l-3.907-3.907a.372.372,0,0,1,0-.526l.526-.526-.825-.825a5.591,5.591,0,1,1,.526-.526l.825.825.526-.526a.372.372,0,0,1,.526,0l3.907,3.907A1.477,1.477,0,0,1,17.86,16.372Zm-5.581-8.93a4.837,4.837,0,1,0-4.837,4.837A4.843,4.843,0,0,0,12.279,7.442Zm4.837,8.93a.739.739,0,0,0-.218-.526L13.254,12.2,12.2,13.254,15.846,16.9a.762.762,0,0,0,1.052,0,.739.739,0,0,0,.218-.526Z"
                              transform="translate(-1.86 -1.86)" fill="#ccc"/>
                    </svg>
                </div>
            }
        </StyledInputFieldComponent>
    );
};

const StyledInputFieldComponent = styled.div`
  position: relative;

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

export default InputField;

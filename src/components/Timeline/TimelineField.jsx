import React from 'react';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import styled from "styled-components";

const StyledDynamicFieldComponent = styled.div`
  position: relative;

  input,
  select {
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
      vertical-align: middle;
    }

    :focus {
      border-color: rgba(45, 54, 145, 0.2);
      outline: none;
      background-color: transparent;
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

const TimelineField = ({ label, type, options, value, onChange }) => {
    const handleChange = (event) => {
        console.log(event.target.value);
    };

    const renderField = () => {
        switch (type) {
            case 'text':
                return (
                    <FormControl type="text" value={value} onChange={handleChange} />
                );
        }
    };

    return (
        <StyledDynamicFieldComponent>
            <FormGroup>
                <FormLabel>{label}</FormLabel>
                {renderField()}
            </FormGroup>
        </StyledDynamicFieldComponent>
    );
};

export default TimelineField;

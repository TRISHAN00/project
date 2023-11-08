import React from 'react';
import Select, {components} from 'react-select';
import styled from 'styled-components';
import {useForm} from "react-hook-form";


const ReactSelectComponent = ({placeholder, search, isSearch, option, onChangeHandler, handleChange, ...rest}) => {
    const {register} = useForm();

    const options = [
        {value: 'option1', label: 'Option 1'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'},
    ];

    const DropdownIndicator = (props) => (
        <components.DropdownIndicator {...props}>

            {
                search ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path id="Search"
                              d="M10.336,4.548a.372.372,0,1,1-.526.526,3.353,3.353,0,0,0-4.736,0,.372.372,0,0,1-.526-.526A4.1,4.1,0,0,1,10.336,4.548ZM17.86,16.372a1.488,1.488,0,0,1-2.541,1.052l-3.907-3.907a.372.372,0,0,1,0-.526l.526-.526-.825-.825a5.591,5.591,0,1,1,.526-.526l.825.825.526-.526a.372.372,0,0,1,.526,0l3.907,3.907A1.477,1.477,0,0,1,17.86,16.372Zm-5.581-8.93a4.837,4.837,0,1,0-4.837,4.837A4.843,4.843,0,0,0,12.279,7.442Zm4.837,8.93a.739.739,0,0,0-.218-.526L13.254,12.2,12.2,13.254,15.846,16.9a.762.762,0,0,0,1.052,0,.739.739,0,0,0,.218-.526Z"
                              transform="translate(-1.86 -1.86)" fill="#ccc"/>
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.121" height="8.121" viewBox="0 0 14.121 8.121">
                        <g id="Group_18840" data-name="Group 18840" transform="translate(1.061 1.061)">
                            <line id="Line_3797" data-name="Line 3797" x2="6" y2="6"
                                  transform="translate(12) rotate(90)"
                                  fill="none" stroke="#ccc" strokeLinecap="round" strokeWidth="1.5"/>
                            <line id="Line_3798" data-name="Line 3798" y1="6" x2="6" transform="translate(6) rotate(90)"
                                  fill="none"
                                  stroke="#ccc" strokeLinecap="round" strokeWidth="1.5"/>
                        </g>
                    </svg>
            }


        </components.DropdownIndicator>
    );

    const customStyles = {

        control: (provided, state) => ({
            ...provided,
            borderRadius: '20px',
            border: '1px solid rgba(45, 54, 145, 0.2)',
            background: 'none',
            paddingRight: '30px', // Add right padding for the indicator
            fontSize: '12px',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'rgba(7, 5, 36, 0.5)',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '20px',
            verticalAlign: 'middle',
            paddingLeft: '10px', // Add left padding of 10 pixels
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            '& svg': {
                width: '20px',
                height: '20px',
                fill: '#ccc', // Customize the color of the SVG icon
                // Add any other styles for the SVG if needed
            },
            marginRight: '-20px', // Add right margin of 20px

        }),
        indicatorSeparator: () => null, // Remove the indicator separator
        menu: (provided) => ({
            ...provided,
            fontSize: '14px', // Set the font size for the dropdown menu
        }),
    };


    return (
        <StyledReactSelectComponent>
            <Select
                {...register("message", {
                    required: {
                        // value:true,
                        message: "please enter your email",
                    },
                })}


                onChange={e => {
                    if (handleChange) {
                        handleChange(e);
                    }
                    onChangeHandler && onChangeHandler(e);
                }}
                options={option ? option : options}
                styles={customStyles}
                placeholder={placeholder}
                components={{DropdownIndicator}}
                isSearchable={isSearch && false}
                {...rest}
            />
        </StyledReactSelectComponent>
    );
};

const StyledReactSelectComponent = styled.div`
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
`;

export default ReactSelectComponent;

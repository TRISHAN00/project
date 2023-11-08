import React from 'react';
import Select, {components} from "react-select";
import styled from "styled-components";

const TimelineSelect = ({isSearch, placeholder, options, onChange, value, ...rest}) => {

    const DropdownIndicator = (props) => (
        <components.DropdownIndicator {...props}>

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
        <StyledTimelineSelect>
            <Select
                value={value}
                styles={customStyles}
                isSearchable={isSearch}
                placeholder={placeholder}
                options={options}
                components={{DropdownIndicator}}
                onChange={onChange} // Pass the onChange function to the Select component
                {...rest}
            />
        </StyledTimelineSelect>
    );
};

const StyledTimelineSelect = styled.div`
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
export default TimelineSelect;

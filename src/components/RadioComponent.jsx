import React from 'react';
import styled from "styled-components";
import reactHtmlParser from "react-html-parser";

const RadioComponent = ({handleRadioOnChange, radioOpen, text}) => {

    return (
        <StyledRadioComponent>
            <div style={{display: 'flex',  gap: '15px'}} onClick={handleRadioOnChange}
                 className="radio-container">

                {radioOpen ? (
                    <div className="svg-container">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g id="Group_19249" data-name="Group 19249" transform="translate(-768 -4048)">
                                <circle id="Ellipse_444" data-name="Ellipse 444" cx="10" cy="10" r="10"
                                        transform="translate(768 4048)" fill="#100697"/>
                                <g id="Group_14865" data-name="Group 14865" transform="translate(0.5 1.5)">
                                    <line id="Line_3799" data-name="Line 3799" x2="3" y2="3"
                                          transform="translate(773.5 4056.5)"
                                          fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                                    <line id="Line_3800" data-name="Line 3800" y1="6" x2="6"
                                          transform="translate(776.5 4053.5)"
                                          fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                ) : (
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g id="Ellipse_442" data-name="Ellipse 442" fill="none" stroke="#070524" strokeWidth="1">
                                <circle cx="10" cy="10" r="10" stroke="none"/>
                                <circle cx="10" cy="10" r="9.5" fill="none"/>
                            </g>
                        </svg>
                    </div>
                )}

                <p>{reactHtmlParser(text)}</p>
            </div>
        </StyledRadioComponent>
    );
};

const StyledRadioComponent = styled.div`
  .radio-container {
    margin-top: 20px;
    cursor: pointer;

    .svg-container {
      width: 20px;   /* Adjust the width as needed */
      height: 20px;  /* Adjust the height as needed */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: #070524;

      span {
        color: #E84B37;
      }
    }
  }
`;

export default RadioComponent;

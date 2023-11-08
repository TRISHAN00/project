import React from 'react';
import styled from 'styled-components';
import {hover, text, title, title_ms60} from "../styles/globalStyleVars";
import ReactHtmlParser from "react-html-parser";

const Title = ({
                   text,
                   fontSize,
                   fontWeight,
                   color,
                   letterSpacing,
                   lineHeight,
                   textTransform,
                   margin,
                   padding,
                   borderColor,
                   varient,
                   center,
                   classname,
                   small_text
               }) => {


    return (

        <StyledTitle className={`title fade-up ${classname}`}
                     fontSize={fontSize}
                     fontWeight={fontWeight}
                     color={color}
                     lineHeight={lineHeight}
                     LetterSpacing={letterSpacing}
                     textTransform={textTransform}
                     margin={margin}
                     padding={padding}
                     varient={varient}
                     center={center}
                     borderColor={borderColor}>
            <h1 className={''}>{ReactHtmlParser(text)} </h1>


        </StyledTitle>

    )
};


const StyledTitle = styled.div`
  margin: ${props => props.margin || '0px'};
  position: relative;
  width: 100%;
  font-family: ${title};
  text-align: ${props => props?.center ? 'center' : ''};
  padding: ${p => p.padding};

  h1 {
    font-size: ${props => props.fontSize || 80}px;
    line-height: ${props => props.lineHeight || 80}px;
    text-transform: uppercase;
    font-weight: ${props => props.fontWeight || '700'};
    color: ${props => props.color || 'black'};
  }
  

  
  //Mobile
  @media (max-width: 767px) {
    margin-bottom: 40px;
    padding: 0;
    h1 {
      font-size: 40px !important;
      line-height: 40px !important;
    }
  }
`;


export default Title;















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
            <h5 className={''}>{ReactHtmlParser(text)} </h5>


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

  h5 {
    font-size: ${props => props.fontSize || 18}px;
    line-height: ${props => props.lineHeight || 26}px;
    text-transform: uppercase;
    font-weight: ${props => props.fontWeight || '500'};
    color: ${props => props.color || 'black'};
  }
  
`;


export default Title;















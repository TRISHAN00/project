import React from 'react';
import styled from 'styled-components';
import {hover, text} from "../styles/globalStyleVars";
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
                   marginMobile,
                   padding,
                   borderColor,
                   center,
                   classname
               }) => {


    return (

        <StyledTitle className={`title ${classname}`}
                     fontSize={fontSize}
                     fontWeight={fontWeight}
                     color={color}
                     lineHeight={lineHeight}
                     LetterSpacing={letterSpacing}
                     textTransform={textTransform}
                     margin={margin}
                     marginMobile={marginMobile}
                     padding={padding}
                     center={center}
                     borderColor={borderColor}>
            {text && <h2 className={'split-up'}>{ReactHtmlParser(text)} </h2>}


        </StyledTitle>

    )
};


const StyledTitle = styled.div`
  margin: ${props => props.margin || '0px'};
  position: relative;
  width: 100%;
  text-align: ${props => props?.center ? 'center' : ''};
  padding: ${p => p.padding};
  overflow: hidden;
  

  h2 {
    font-size: ${props => props.fontSize || 40}px;
    line-height: ${props => props.lineHeight || 48}px;
    font-weight: ${props => props.fontWeight || '500'};
    color: ${props => props.color || text};

    span {
      color: ${hover};
    }
  }


  @media (max-width: 767px) {
    margin: ${props => props.marginMobile || '0px'};
    h2 {
      font-size: 32px !important;
      line-height: 40px !important;
    }
  }
`;


export default Title;















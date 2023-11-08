import React from 'react';
import styled from 'styled-components';
import {hover} from "../styles/globalStyleVars";
import {Link} from "react-router-dom";


const Button5 = ({
                    onSubmit,
                    text,
                    src,
                    img,
                    hoverImg,
                    fontSize,
                    fontWeight,
                    color,
                    letterSpacing,
                    lineHeight,
                    margin,
                    background,
                    borderRadius,
                    border,
                    width,
                    height,
                    hoverBackground,
                    target,
                    borderColor,
                    hoverColor
                }) => {


    return (
        <StyledBtn className={`dc-btn fade-up`}
                   fontSize={fontSize}
                   fontWeight={fontWeight}
                   color={color}
                   background={background}
                   lineHeight={lineHeight}
                   letterSpacing={letterSpacing}
                   margin={margin}
                   border={border}
                   img={img}
                   borderRadius={borderRadius}
                   width={width}
                   hoverImg={hoverImg}
                   hoverBackground={hoverBackground}
                   height={height}
                   borderColor={borderColor}
                   target={target}
                   hoverColor={hoverColor}
        >
            {src ? (
                <Link href={src || '/'}>
                    <a target={target || '_self'}>
                        <span> {text}  </span>
                    </a>
                </Link>
            ) : (
                <a target={target || '_self'}>
                    <span>{text}</span>
                </a>
            )}
        </StyledBtn>
    )
};

const StyledBtn = styled.div`
  &.dc-btn {
    margin: ${props => props.margin || '0'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '44'}px;
    cursor: pointer;

    a {
      display: flex;
      width: fit-content;
      height: 100%;
      align-items: center;
      justify-content: center;
      font-size: ${props => props.fontSize || '16'}px;
      font-weight: ${props => props.fontWeight || 600};
      margin: 0;
      line-height: ${props => props.lineHeight || '20'}px;
      background-color: ${props => props.background || `#1C1718`};
      position: relative;
      border-radius: ${props => props.borderRadius || '22'}px;
      overflow: hidden;
      z-index: 0;
      transition: border .3s ease;
      padding: 16px 36px;
      box-sizing: border-box;
      border: 1px solid white;
      span {
        transition: color .3s ease;
        color: ${props => props.color || `#FFF`};
        position: relative;
        z-index: 2;
      }


      &:before {
        bottom: 0;
        content: "";
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        background-color: ${p => p.hoverBackground || hover};
        height: 0%;
        width: 0%;
        margin: auto;
        transition: all .5s ease;
        border-radius: 22px;
      }

      &:hover {
        span {
          color: ${props => props.hoverColor || `#FFF`};
        }

        svg {
          line {
            stroke: ${props => props.hoverColor || '#FFF'};
          }
        }

        &:before {
          height: 100%;
          width: 100%;
        }
      }

      &:focus {
        color: #222222;
      }
    }
  }

`;


export default Button5;

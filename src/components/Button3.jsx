import React from 'react';
import styled from 'styled-components';
import {hover} from "../styles/globalStyleVars";
import {Link} from "react-router-dom";


const Button3 = ({
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
                    marginMobile,
                    background,
                    borderRadius,
                    border,
                    width,
                    height,
                    hoverBackground,
                    target,
                    borderColor,
                    hoverColor,
                    hoverBorderColor,
                    onClick,download,file
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
                   marginMobile={marginMobile}
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
                   hoverBorderColor={hoverBorderColor}
                   onSubmit={onSubmit}
                   onClick={onClick}
        >
            {
                download? <a href={`${file}`} download>
                        <span> {text}  </span>
                    </a> :
                    <>
                        {src ?
                            <Link onClick={onClick} to={src}>
                                <span> {text}  </span>
                            </Link>
                            :
                            <Link onClick={onClick} to={'/'} onClick={e => e.preventDefault()}>
                                <span> {text}  </span>
                            </Link>
                        }
                    </>
            }




        </StyledBtn>
    )
};

const StyledBtn = styled.div`
  &.dc-btn {
    margin: ${props => props.margin || '0'};
    width: ${props => props.width || 'fit-content'};
    height: ${props => props.height || '40'}px;
    cursor: pointer;

    a {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-size: ${props => props.fontSize || '16'}px;
      font-weight: ${props => props.fontWeight || 500};
      margin: 0;
      line-height: ${props => props.lineHeight || '24'}px;
      background-color: ${props => props.background || hover};
      position: relative;
      border-radius: ${props => props.borderRadius || '24'}px;
      overflow: hidden;
      z-index: 0;
      transition: border .3s ease;
      padding: 12px 36px;
      box-sizing: border-box;
      border: ${p => p.border};

      span {
        transition: color .3s ease;
        color: ${props => props.color || `#FFF`};
        position: relative;
        z-index: 2;
        width: max-content;
      }


      &:before {
        top: 100%;
        content: "";
        display: block;
        position: absolute;
        right: 0;
        left: 0;
        background-color: ${p => p.hoverBackground || '#404040'};
        height: 100%;
        width: 100%;
        margin: auto;
        transition: all .5s ease;
        border-radius: 24px;
      }

      &:hover {
        span {
          color: ${props => props.hoverColor || `#FFF`};
        }

        &:before {
          top: 0
        }

        border-color: ${p => p.hoverBorderColor};
      }

      &:focus {
        color: #222222;
      }
    }

    @media (max-width: 767px) {
      margin: ${p => p.marginMobile};
    }
  }



`;


export default Button3;

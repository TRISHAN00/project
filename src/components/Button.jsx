import React from 'react';
import {hover} from '../styles/globalStyleVars';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Button = ({
    type,
                    text,
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
                    hoverfill,
                    hoverborder,
                    src,
                    icon,
                    iconhover,
                    onClick
                }) => {
    return (
        <StyledBtn
            className={`dc-btn`}
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
            hoverfill={hoverfill}
            hoverborder={hoverborder}
            icon={icon}
            iconhover={iconhover}
            onClick={onClick}
            type={type}
        >
            <Link className={'clipped'} to={src}>
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="100" viewBox="0 0 170 66.697">
                    <path
                        id="Path_7756"
                        data-name="Path 7756"
                        d="M0,0A95.619,95.619,0,0,1,40.907-8.682C63.823-8.238,75.745.8,91.665,1.775c17.942,1.094,42.23-8.58,56.227-9.167C165.231-8.12,170,0,170,0V58H0Z"
                        transform="translate(0 8.697)"
                        fill="#fcb940"
                    />
                </svg>

                <span>
                    {icon && <IconWrapper dangerouslySetInnerHTML={{ __html: icon }} />}
                    {/*{icon && <img src={'/images/static/phone-icon.svg'}/>}*/}
                    {text}
                </span>
            </Link>
        </StyledBtn>
    );
};

const StyledBtn = styled.div`
  &.dc-btn {
    margin: ${props => props.margin || '0'};
      //width: ${props => props.width || '170px'};
    display: inline-block;
    height: ${props => props.height || '48'}px;
    cursor: pointer;
    position: relative;
    
    a {
      display: flex;
      height: 100%;
      width: 100%;
      align-items: center;
      justify-content: center;
      font-size: ${props => props.fontSize || '14'}px;
      font-weight: ${props => props.fontWeight || 500};
      margin: 0;
      line-height: ${props => props.lineHeight || '20'}px;
      text-transform: none;
      border: 1px solid ${props => props.borderColor || '#FCB940'};
      border-radius: 30px;
      background-color: ${props => props.background || `transparent`};
      letter-spacing: ${props => props.letterSpacing || `2px`};
      position: relative;
      overflow: hidden;
      z-index: 0;
      transition: border .3s ease, color .3s ease;
      padding: 0 25px;
      box-sizing: border-box;
      type: ${props => props.type || 'button'};


      svg {
        position: absolute;
        z-index: -5;

        path {
          fill: transparent !important;
          transition: fill 0.7s ease, transform 0.7s ease;
          transform-origin: bottom;
          transform: scaleY(0);
        }
      }

      span {
        transition: color .3s ease;
        color: ${props => props.color || `#FCB940`};
        display: flex;
        gap: 10px;
        svg{
          position: unset;
          z-index: unset;
          path {
            fill: #1A1818 !important;
            transition: fill 0.7s ease, transform 0.7s ease;
            transform-origin: unset;
            transform: unset;
          }
        }
      }

      &:hover {
        border-color: ${props => hover || `transparent`};

        span {
          color: #FFF;
        }

        svg {
          path {
            fill: #FCB940 !important;
            //transform: scaleY(1);
            top: auto;
            transition: fill 0.7s ease, transform 0.7s ease;
          }
        }
      }

      &:focus {
        color: #222222;
      }

      @media (max-width: 767px) {
        line-height: 16px;
      }
    }

    &:hover {
      a {
        border-color: ${props => props.hoverborder || `transparent`};

        span {
          color: #FFF;
          svg{
            path{
              fill: ${props => props.iconhover || `#fff`} !important;
            }
          }
        }

        svg {
          path {
            fill: ${props => props.hoverfill || `#FCB940`} !important;

            transform: scaleY(1);
            top: auto;
            transition: fill 0.7s ease, transform 0.7s ease;
          }
        }
      }
    }
  }
`;

const IconWrapper = styled.span`
  margin-right: 8px; /* Adjust spacing between icon and text */
`;

export default Button;

import styled from "styled-components";


export const Img = ({
                        src,
                        position,
                        objectFit,
                        height,
                        width,
                        banner,
                        alt,
                        left,
                        margin,
                        right,
                        top,
                        bottom,
                        parallax,
                        dataSpeed
                    }) => {
    return (
        <StyledImg src={src} className={`global-image`} objectFit={objectFit}
                   margin={margin}
                   position={position} left={left}
                   right={right} top={top}
                   bottom={bottom} height={height} width={width}
            // style={parallax && window.innerWidth > 991 && {
            //     backgroundImage: `url(${src})`
            // }}

        >
            {parallax && window.innerWidth < 991 &&
                <img src={src ? src : 'images/static/blur.jpg'} alt={alt || ''}/>
            }
            {!parallax &&
                <img src={src ? src : 'images/static/blur.jpg'} alt={alt || ''}/>
            }

        </StyledImg>

    );
};

const StyledImg = styled.div`
  position: ${props => props.position || 'absolute'};
  height: ${props => props.height || '100%'};
  width: ${props => props.width || '100%'};
  top: ${props => props.top || 0};
  left: ${props => props.left || 0};
  bottom: ${props => props.bottom || 0};
  right: ${props => props.right || 0};
  margin: ${props => props.margin || 0};
  overflow: hidden;
  @media (min-width: 992px) {
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat !important;
  }
  
  &.parallax-bg {
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat !important;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: ${props => props.objectFit || 'cover'};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //transform-origin: top;
  }
`;

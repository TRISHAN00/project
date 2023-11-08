import React from 'react';
import {Img} from "../Img";
import styled from "styled-components";


const Map = ({ url }) => {
    // Check if the URL has a protocol prefix (e.g., http:// or https://)
    const formattedUrl = url.startsWith('http://') || url.startsWith('https://')
        ? url
        : `http://${url}`; // If no prefix is present, add 'http://' as the default.

    return (
        <StyledMap className={'map'}>
            <a href={formattedUrl} target="_blank" rel="noopener noreferrer">
                <div className="map__img">
                    <Img src={'/images/static/map.jpg'} />
                </div>
            </a>
        </StyledMap>
    );
};


const StyledMap = styled.section`
.map {
  
  &__img {
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    padding-top: calc(450/770 * 100%);
  }
}
`

export default React.memo(Map);

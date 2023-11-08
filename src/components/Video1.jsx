import React, {useState} from 'react';
import {Img} from "./Img";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.min.css';

const Video = ({vidThumb,vidUrl}) => {
    let [open, setOpen] = useState(false);
    let [videoId, setVideo] = useState('');

    let handelOpen = (open, id) => {
        setOpen(open);
        setVideo(id);
    };
    return (
        <StyledVideoComponent className="video">

            <div className="video__inner">
                <div className="video__inner__img" onClick={() => handelOpen(true, vidUrl)}>
                    <Img src={vidThumb}/>
                </div>
                <div className="video__inner__play" onClick={() => handelOpen(true, vidUrl)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                        <g id="Group_18880" data-name="Group 18880" transform="translate(-268 -5528)">
                            <circle id="Ellipse_594" data-name="Ellipse 594" cx="35" cy="35" r="35"
                                    transform="translate(268 5528)" fill="#fff"/>
                            <path id="Icon_awesome-play" data-name="Icon awesome-play"
                                  d="M19.893,10.064,3.394.31A2.237,2.237,0,0,0,0,2.246v19.5a2.248,2.248,0,0,0,3.394,1.936l16.5-9.75A2.248,2.248,0,0,0,19.893,10.064Z"
                                  transform="translate(294.501 5550.998)" fill="#2d3691"/>
                        </g>
                    </svg>

                </div>
            </div>
            <ModalVideo channel='youtube' isOpen={open}
                        videoId={videoId}
                        onClose={() => handelOpen(false, videoId)}/>
        </StyledVideoComponent>
    );
};

const StyledVideoComponent = styled.section`
  .video {
    &__inner {
      border-radius: 15px;
      overflow: hidden;
      position: relative;
      cursor: pointer;

      &__img {
        position: relative;
        padding-top: calc(350 / 770 * 100%);
      }

      &__play {
        position: absolute;
        content: '';
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .modal-video-close-btn::before, .modal-video-close-btn::after {
    background-color: white;
  }

`

export default React.memo(Video);

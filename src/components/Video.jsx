import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import ModalVideo from "react-modal-video";
import 'react-modal-video/css/modal-video.min.css';
import {Img} from "./Img";
import Title from "./Title";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Modal from "react-bootstrap/Modal";


const Video = ({vidTitle, vidThumb, vidUrl, smallThumb}) => {
    let [open, setOpen] = useState(false);
    let [videoId, setVideo] = useState('');


    // remove https://
    function removeHttps(str) {
        // Use the replace method with a regular expression to remove "https://" from the string
        return str.replace(/^https:\/\//i, '');
    }

    let handelOpen = (open, id) => {
        setOpen(open);
        setVideo(removeHttps(vidUrl));
        setShow(true);
        handleShow(); // Show the video player when opening the popup
    };
    const modalRef = useRef(null);


    const [show, setShow] = useState(false);
    const [popupId, setPopupId] = useState()
    const [showVideo, setShowVideo] = useState(false)

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
        setShowVideo(true); // Set showVideo to true to conditionally render the video player
    };
    const handleCloseModal = () => {
        setOpen(false);
        setVideo('');
        handleClose();
    };
    return (
        <StyledComponent className={'video'}>
            <div className="video__inner">
                <div className="video__inner__img" onClick={() => handelOpen(true, vidUrl)}>
                    <Img src={vidThumb}/>
                </div>
                <div className="video__inner__play" onClick={() => handelOpen(true, vidUrl)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">
                        <g id="Group_18880" data-name="Group 18880" transform="translate(-268 -5528)">
                            <circle id="Ellipse_4378" data-name="Ellipse 594" cx="35" cy="35" r="35"
                                    transform="translate(268 5528)" fill="#fff"/>
                            <circle id="Ellipse_4379" data-name="Ellipse 594" cx="35" cy="35" r="35"
                                    transform="translate(268 5528)" fill="#fff"/>
                            <path id="Icon_awesome-play" data-name="Icon awesome-play"
                                  d="M19.893,10.064,3.394.31A2.237,2.237,0,0,0,0,2.246v19.5a2.248,2.248,0,0,0,3.394,1.936l16.5-9.75A2.248,2.248,0,0,0,19.893,10.064Z"
                                  transform="translate(294.501 5550.998)" fill="#2d3691"/>
                        </g>
                    </svg>

                </div>
            </div>
            <Modal
                show={show}
                // item={item}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
                className="gph_modal modal_video_popup popup-version-one"
                dialogClassName="custom-modal-dialog"
            >
                <SimpleBar className="main_scroll " style={{ height: '100vh' }}>
                    <Modal.Body>
                        {/* ... (existing code) */}
                        {showVideo && (
                            <div className="modal-data d-flex">
                                <ModalVideo
                                    channel="youtube"
                                    isOpen={open}
                                    videoId={videoId}
                                    onClose={handleCloseModal}
                                    autoplay // Add the autoplay prop to enable video autoplay
                                />
                            </div>
                        )}
                    </Modal.Body>
                </SimpleBar>
            </Modal>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
 
  .video {
    &__inner {
      border-radius: 15px;
      overflow: hidden;
      position: relative;
      cursor: pointer;

      &__img {
        position: relative;
        padding-top: calc(450 / 770 * 100%);
      }

      &__play {
        position: absolute;
        content: '';
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          cursor: pointer;
          line#Line_3859, line#Line_3860, line#Line_3858 {
            stroke: white;
          }

          #Ellipse_4379 {
            transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
            r: 0px;
          }

          line {
            stroke: #170c3d;
          }

          #Icon_awesome-play {
            transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
            
          }

          &:hover {
            #Ellipse_4379 {
              fill: #F04848;
              transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
              r: 35px;
            }

            #Icon_awesome-play {
              fill: #fff;
            }

            g {
              line {
                stroke: #f9f9f9;
              }
            }
          }
        }
      }
    }
    &__title {
      position: relative;
      z-index: 5;
    }

    &__video {
      position: relative;
      border-radius: 15px;
      overflow: hidden;

      .modal-video {
        position: absolute;
        z-index: 9999999;

        .modal-video-inner {
          //width: 100% !important;
          //padding: 0 !important;
        }
      }

      &__image {
        cursor: pointer;
        position: relative;
        padding-top: calc(450 / 770 * 100%);

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &__button {
        position: absolute;
        cursor: pointer;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .svg-container {
    display: inline-block;
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  #hover-color {
    fill: transparent;
    transition: fill 0.8s;
  }

  #circle-border {
    transition: all 1s;
  }


  .svg-container:hover {

    #hover-color {
      fill: #736640;
      animation: fillAnimation 0.8s forwards;
    }

    #circle-border {
      stroke-width: 0;
    }
  }


  .svg-container:not(:hover) #hover-color {
    fill: transparent;
    animation: reverseFillAnimation 0.8s backwards;
  }

  @keyframes fillAnimation {
    0% {
      r: 0px;
    }
    100% {
      r: 70px;
    }
  }
  @keyframes reverseFillAnimation {
    0% {
      r: 69.5px;
    }
    100% {
      r: 0px;
    }
  }

  @media (max-width: 767px) {
    .video {
      &__title {
        .title {
          margin-bottom: 0 !important;

          h2 {
            font-size: 36px;
            line-height: 48px;
          }
        }

      }
      
    }
  }

  .modal-dialog {
    margin: 0;
  }


`;

export default React.memo(Video);

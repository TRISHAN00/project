import { createGlobalStyle, css } from 'styled-components';
import { hover, text, title } from './globalStyleVars';

function createCSS() {
    let styles = '';

    for (let i = 2; i < 20; i += 1) {
        styles += `
        .anim-active.fade-up:nth-child(${i}) {
          transition-delay: ${i * .12}s;
        }
     `
    }

    for (let a = 2; a < 100; a += 1) {
        styles += `
        .anim-active.fade-right span:nth-child(${a}) {
          transition-delay: ${a * .03}s;
        }
     `
    }

    return css`${styles}`;
}


export default createGlobalStyle`

  ${createCSS()}
  #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-ExtraLight.woff2') format('woff2'),
    url('/fonts/Poppins-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-ExtraBold.woff2') format('woff2'),
    url('/fonts/Poppins-ExtraBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Bold.woff2') format('woff2'),
    url('/fonts/Poppins-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Regular.woff2') format('woff2'),
    url('/fonts/Poppins-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Medium.woff2') format('woff2'),
    url('/fonts/Poppins-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Thin.woff2') format('woff2'),
    url('/fonts/Poppins-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Light.woff2') format('woff2'),
    url('/fonts/Poppins-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-SemiBold.woff2') format('woff2'),
    url('/fonts/Poppins-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }


  body {
    font-family: Poppins, 'Euclid Square', Arial, Helvetica, freesans, sans-serif !important;
    font-style: normal;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    min-height: 100vh;
    scroll-behavior: smooth;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &::-moz-scrollbar {
      display: none;

    }

    -ms-overflow-style: none; /* IE 11 */
    scrollbar-width: none;
  }

  a {
    transition: color .3s ease;
    text-decoration: none;

    &:hover {
      color: ${hover} !important;
      text-decoration: none;
      outline: none;
      box-shadow: none;
    }

    &:focus {
      text-decoration: none;
      outline: none;
      box-shadow: none;
      color: ${text};
    }
  }

  ::selection {
    background: ${hover};
    color: #FFF;
  }

  p, a, h4, h3, h5, h6 {
    color: ${text};
    font-weight: 400;
    margin: 0;
  }

  h1, h2 {
      //font-family: ${title};
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0
  }

  li {
    list-style: none;
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }

  h1 {
    font-size: 80px;
    font-weight: 600;
    line-height: 80px;
  }


  //h2 {
  //  font-size: 40px!important;
  //  @media (max-width: 1920px){
  //    font-size: 48px!important;
  //  }
  //}

  h3 {
    font-size: 32px;
    @media (min-width: 1920px) {
      font-size: 36px !important;
    }
  }

  h4 {
    font-size: 24px;
    @media (min-width: 1920px) {
      font-size: 28px !important;
    }
  }

  h5 {
    font-size: 18px;
  }

  h6 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
    @media (min-width: 1920px) {
      font-size: 16px !important;
    }
  }

  .btn:focus, button:focus, button:active:focus, .btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {
    outline: none;
    box-shadow: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid rgba(0, 0, 0, 0);
    -webkit-text-fill-color: #000;
    -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
  }


  table {
    width: 100%;
  }

  form div {
    position: relative;
  }

  .form-control {
    box-shadow: none;
    outline: 0;
    border-radius: 0;

    &:focus {
      box-shadow: none;
    }
  }

  .p-0 {
    padding: 0 !important;
  }

  .pl-0 {
    padding-left: 0;
  }

  .pr-0 {
    padding-right: 0;
  }

  .pt-200 {
    padding-top: 200px;
    @media (max-width: 767px) {
      padding-top: 100px;
    }
  }

  .pb-200 {
    padding-bottom: 200px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }

  .pt-160 {
    padding-top: 160px;
    @media (max-width: 767px) {
      padding-top: 100px;
    }
  }

  .pb-160 {
    padding-bottom: 160px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }

  .pb-130 {
    padding-bottom: 130px;
    @media (max-width: 767px) {
      padding-bottom: 100px;
    }
  }

  .pt-100 {
    padding-top: 100px;
    @media (max-width: 767px) {
      padding-top: 60px;
    }
  }


  .pb-100 {
    padding-bottom: 100px;
    @media (max-width: 767px) {
      padding-bottom: 60px;
    }
  }

  .pt-120 {
    padding-top: 120px;
    @media (max-width: 767px) {
      padding-top: 60px;
    }
  }

  .pb-120 {
    padding-bottom: 120px;
    @media (max-width: 767px) {
      padding-bottom: 60px;
    }
  }


  .pt-80 {
    padding-top: 80px;
    @media (max-width: 767px) {
      padding-top: 40px;
    }
  }

  .pb-80 {
    padding-bottom: 80px;
    @media (max-width: 767px) {
      padding-bottom: 40px;
    }
  }

  body.menu-open {
    overflow-y: hidden;
  }

  .MuiDrawer-paper {
    width: 500px !important;
    padding: 20px;
    @media (max-width: 767px) {
      width: 100% !important;
    }
  }

  .swiper-button-disabled {
    opacity: 0 !important;
  }

  @media (min-width: 1500px) {
    .container {
      //min-width: 1366px;
      min-width: 85%;
      margin: auto;
    }
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    .container, .container-lg, .container-md, .container-sm {
      max-width: 90%;
      margin: auto;
    }
  }


  @media (max-width: 767px) {
    .container, .container-sm {
      max-width: 100%;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }


  //react select
  .css-yk16xz-control, .css-1pahdxg-control {
    height: 50px;
    border-radius: 0 !important;
    padding-left: 5px;
    font-size: 16px;
    outline: none !important;
    border-color: #D9D9D9 !important;
    box-shadow: none !important;

    .css-1wa3eu0-placeholder {
      font-weight: 300;
      line-height: 21px;
      color: rgba(0, 0, 0, 0.5);
      outline: none;
    }

    .css-1okebmr-indicatorSeparator {
      display: none;
    }

    .css-tlfecz-indicatorContainer, .css-1gtu0rj-indicatorContainer {
      margin-right: 10px;
    }
  }

  .css-2613qy-menu {
    border-radius: 0 !important;
    margin-top: 0 !important;
  }

  //modal
  .modal-open .modal {
    overflow: hidden !important;
  }

  .simplebar-content-wrapper {
    background: #FAFBFF;
  }

  .desc {
    margin-bottom: 40px !important;

    p {
      padding-top: 60px;
      border-top: 1px solid #1a1a1a;
    }
  }

  .icon {
    cursor: pointer;
  }

  .modal-title h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }

  .timeline {
    margin-bottom: 40px;
  }

  .price-box {
    margin-top: 30px;
  }

  .cv-modal {
    padding-left: 0 !important;
    z-index: 99999999;

    @media (min-width: 320px) {
      .modal-dialog {
        max-width: unset;
        margin: 0;
        height: 100vh;
      }
    }

    .modal-content {
      height: 100vh;
      color: #323232;
      padding-bottom: 200px;
    }

    .modal-data__content {
      position: relative;

      h3 {
        color: #E50019;
        font-size: 28px;
        line-height: 32px;
        font-weight: 500;
        margin-bottom: 60px;
        padding-bottom: 10px;
        @media (max-width: 767px) {
          font-size: 24px;
          margin-bottom: 50px;
        }
      }

      .form-control {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #B2A89F;
        margin-bottom: 40px;
        color: #FFFDFB;
        padding-left: 0;

        &::placeholder {
          color: #323232;
        }
      }

      .form__phoneEmail {
        display: flex;
        gap: 20px;
        @media (max-width: 767px) {
          flex-direction: column;
          input {
            width: 100% !important;
          }
        }

        input {
          width: 49% !important;
        }
      }

      input[type="textarea"] {
        padding-top: 10px;
        padding-bottom: 80px;
      }

      .button-group {
        display: flex;
        gap: 40px;
        margin-bottom: 10px;

        .attach-cv {
          background-color: #323232;
          width: 178px;
          cursor: pointer;
          border: 1px solid #fff;
          border-radius: 28px;
          height: 49px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          label {
            padding-top: 5px;
            font-size: 20px;
            line-height: 24px;
            font-weight: 500;
            color: #FFFFFF;
            margin-bottom: 0;
            cursor: pointer;
          }
        }

        @media (max-width: 767px) {
          flex-direction: column;
        }

        .dc-btn {
          width: 162px;
          height: 49px;
        }
      }

      .file-name {
        font-size: 14px;
        opacity: 0.8;
        color: #FFFDFB;
        padding-left: 10px;
      }

      p {
        color: #FFFDFB;
        margin-bottom: 60px;
        @media (max-width: 767px) {
          margin-bottom: 40px;
        }
      }
    }

    .for-close {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 60px;
      margin-top: 30px;
      @keyframes fillAnimation {
        0% {
          r: 0;
        }
        100% {
          r: 34.5;
        }
      }
      @keyframes reverseFillAnimation {
        0% {
          r: 34.5;
        }
        100% {
          r: 0;
        }
      }
    }

    .modal-data {
      justify-content: unset;

      .pop-subtitle p {
        color: #323232;
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        margin-bottom: 20px;
      }
    }
  }


  //product popup
  .product-popup {
    background-color: #FFFFFF;

    .legacy-left__image-wrapper {
      padding-top: calc(505 / 232 * 100%);

      img {
        border: 20px solid rgb(233 233 233);
      }
    }
  }

  //animation class


  .info-window {
    max-width: 200px;
  }

  .gm-style-iw {
    border-radius: 0 !important;
  }

  .swiper-pagination-bullet {
    outline: none;
  }

  .css-nmuc1a-menu {
    z-index: 5 !important;
  }


  .map-info__img {
    img {
      height: 100px;
      margin-bottom: 12px;
      object-fit: cover;
    }
  }

  .map-info__content {
    h4 {
      font-size: 20px;
    }

    p {
      margin-bottom: 5px;
    }
  }

  .overlay {
    position: fixed;
    height: 100vh;
    width: 100%;
    //background-color: rgba(0,0,0,0.5);
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    display: none;

    &.show {
      display: block;
    }
  }

  .form-control.has-error {
    border-color: #dc004e !important;
  }

  .has-error .find-retainer-filter__control {
    border-color: #dc004e !important;
  }

  //preloader
  .content-loader {
    position: absolute;
    height: 70%;
    width: 70%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .loading-before-submit {
    position: fixed;
    height: 100vh;
    width: 100%;
    bottom: 0;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.65);
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
    }
  }


  .swiper-slide {
    height: auto;
  }

  .slick-slide {
    div {
      outline: none !important
    }
  }

  button, button:active, button:focus, button:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }


  .hover {
    position: relative;
    overflow: hidden;

    span {
      z-index: 2;
    }

    &:after {
      content: '';
      position: absolute;
      height: 0;
      width: 0;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      //background-color: ${hover};
      transition: all .5s ease;
      border-radius: 19px;
    }

    &:hover {
      &:after {
        height: 100%;
        width: 100%;
      }

    }
  }


  .modal-backdrop {
    background-color: rgb(34 31 31 / 90%);
    min-width: 100%;
    //z-index: 9999;

    &.show {
      opacity: 1;
    }
  }


  .valid {
    color: ${hover};
    position: absolute;
    font-size: 12px;
    top: 44px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }


  //menu fixed
  //menu fixed
  .scroll-down .desktop-menu .Mobile-menu-wrap {
    transform: translate3d(0, -100%, 0);
    background: rgba(255, 255, 255, 1) !important;
  }

  body.scroll-up {
    //header call svg color
    .desktop-menu .Mobile-menu-wrap  {
      background: rgba(255, 255, 255, 1) !important;
      //border-bottom: 1px solid rgba(60, 60, 59, 0.1);

      .burger-click {
        line {
          stroke: #3C3C3B !important;
        }
      }

      .normal_logo {
        opacity: 0;
        visibility: hidden;
        display: none;

      }

      .sticky_logo {

        opacity: 1;
        visibility: visible;
        display: block;
      }

      #Ellipse_18, #Ellipse_19 {
        stroke: #3C3C3B;
      }

      #Path_8648 {
        fill: #3C3C3B;
      }

      .call {
        g, #Ellipse_18, #Ellipse_19 {
          stroke: #3C3C3B;
        }

        #_16634, #Path_8647 {
          fill: #3C3C3B;
        }

        #Group_4811 {
          stroke: none;
        }
      }
    }

    .mobile-menu__items {
      transform: translate3d(-100vw, 0px, 0px) !important;
    }

    .Mobile-menu-wrap {
      background: #fff !important;
      

      .forNormal {
        display: none;
      }

      .forClose {
        display: block !important;
      }

      //.hamburger {
      //  line {
      //    stroke: #3C3C3B;
      //  }
      //}
    }
  }

  //menu fixed
  .scroll-down .desktop-menu {
    transform: translate3d(0, -100%, 0);
  }

  .scroll-down .Mobile-menu-wrap {
    transform: translate3d(0, -100%, 0);
  }


  .desktop-menu__hamburger .controller svg {
    path {
      fill: #191818;
    }

    line {
      stroke: #191818;
    }
  }

  .dc-btn a {
    color: #191818;

    &:hover {
      color: #191818 !important;
    }

    &:after, &:before {
      box-shadow: 0 0 0 1px #191818;
    }
  }

  }

  .form-control:disabled {
    background-color: transparent;
  }

  @media (max-width: 600px) {
    .prevent-overflow {
      overflow: hidden;
      height: 100vh;
    }
  }

  .Toastify__toast-container {
    z-index: 99999999;
  }

  .mobile-menu {
    #fb-root, .fb_reset {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }
  }

  .slick-slide {
    -webkit-transform: translate3d(0, 0, 0);
  }

  .reveal, .revealFast {
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;

    img {
      transform-origin: left;
    }

    .global-image {
      background: transparent;
    }
  }

  //react select


  .react-select__control {
    width: 200px; /* Adjust the width as needed */
    height: 40px;
  }

  .css-qbdosj-Input {
    padding-left: 10px;
  }

  .css-1dimb5e-singleValue {
    margin-left: 10px;
    color: rgba(7, 5, 36, 0.5);
  }

  .css-1dimb5e-singleValue {
    margin-left: 10px;
    position: absolute;
    top: 0;
    line-height: 40px;
  }

  .css-1fdsijx-ValueContainer {
    height: 40px;
  }

  .css-hlgwow {
    height: 40px;
  }

  .css-1hwxt6p-placeholder {

    top: -1px;

  }

  .react-select__control {
    width: 200px; /* Adjust the width as needed */
    height: 40px;
  }

  .css-qbdosj-Input {
    padding-left: 10px;
  }

  .css-1dimb5e-singleValue {
    margin-left: 10px;
    color: rgba(7, 5, 36, 0.5);
  }

  .css-1dimb5e-singleValue {
    margin-left: 10px;
    position: absolute;
    top: 0;
    line-height: 40px;
  }

  .css-1fdsijx-ValueContainer {
    height: 40px;
  }

  .css-hlgwow {
    height: 40px;
  }

  .css-1hwxt6p-placeholder {

    top: -1px;

  }

  //calender
  ._3efP_GeH5kyBAzqnLzL._kN_bCa3VNYpqFLH311L {
    border-radius: 0 !important;
  }

  //video modal 
  .modal-video-close-btn:before, .modal-video-close-btn:after {
    background-color: ${hover};
  }

  .page-loader {
    position: fixed;
    background-color: rgb(36, 24, 67);
    width: 100vw;
    z-index: 999999999;
    overflow: hidden;
    //opacity: 0;
    //height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    //left: 0; //width: 0;
    //transition: all 2.6s ease;
    //.anim-logo {
    //  width: 130px;
    //  overflow: hidden;
    //  height: fit-content;
    //  position: absolute;
    //  left: 0;
    //  right: 0;
    //  top: 0;
    //  bottom: 0;
    //  opacity: 0;
    //  margin: auto;
    //  z-index: 2;
    //
    //  img {
    //    height: 55px;
    //  }
    //}

    //.hide-logo {
    //  background-color: #010A1A;
    //  width: 50%;
    //  height: 100vh;
    //  top: 0;
    //  left: 0;
    //  right: 0;
    //  margin: auto;
    //  position: absolute;
    //  z-index: 999;
    //}

    .pre-loader__img {
      //position: fixed;
      height: 100px;
      width: 100px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgb(36, 24, 67);
      z-index: 99999999;

      //flex: 1;
      margin: auto;
      opacity: 0;

      img {
        display: block;
      }

      .top {
        height: 8px;
      }

      .bottom {
        height: 30px;
        margin-top: 5px;
        animation: flip 1s linear infinite;
      }

      @keyframes flip {
        0% {
          transform: rotateY(0deg)
        }
        100% {
          transform: rotateY(180deg)
        }
      }
    }

  }

  .modal_video_popup {
    .modal-content, .modal-video, .modal-dialog {
      border: none !important;
      box-shadow: none !important;
      outline: none !important;

    }

    .modal-dialog {
      border: 0 !important;
      margin: 0 !important;
      max-width: unset !important;
      width: 100% !important;
      height: 100% !important;
    }

    .modal-body {
      border: none !important;
      box-shadow: none !important;
    }

    .modal-video-close-btn::before, .modal-video-close-btn::after {
      background-color: #fff;
    }

    .modal-close {
      opacity: 0;
    }
  }

`;




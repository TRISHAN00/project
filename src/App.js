import {Route, Switch, useLocation} from 'react-router-dom';
import Error from './pages/404';
import GlobalStyle from "./styles/globalStyle";

// page imports
import Components from './pages/components';
import Home from './pages/home';
import Project from './pages/project';
import ProjectDetail from './pages/project/single';
import {useEffect, useRef, useState} from "react";
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";
import {gsap} from "gsap";
import WhyStudyAbroad from "./pages/why-study-abroad";
import DoyensGuideToStudyAbroad from "./pages/doyens-guide-to-study-abroad";
import StudyAbroadBenefits from "./pages/study-abroad-benefits";
import AreYouReadyToApply from "./pages/are-you-ready-to-apply";
import FindAUniversity from "./pages/find-a-university";
import TestimonialPage from "./pages/testimonial";
import ContactUs from "./pages/contact-us";
import TestimonialDetail from "./pages/testimonial/single";
import WhyStudyAbroadDetails from "./pages/why-study-abroad/single";
import Menu from "./components/Menu";
import FindUniversityDetails from "./pages/find-a-university/single";
import {Parallax} from "./components/animation/parallax";
import {SplitUp} from "./components/animation/TextAnimation";
import Scholarships from "./pages/scholarships";
import ScholarshipDetails from "./pages/scholarships/single";
import ReasonToChooseDoyen from "./pages/reason_to_choose_doyen";
import HowToChooseACourse from "./pages/howToChooseACourse";
import StudyTips from "./pages/StudyTips";
import WhatToPack from "./pages/whatToPack";
import DealingWithStress from "./pages/Dealing-with-stress-Page";
import NetworkAndSocial from "./pages/NetworkAndSocial";
import DevelopingSkills from "./pages/DevelopingSkills";
import ManagingMoney from "./pages/ManagingMoney";
import JobSeekingTips from "./pages/JobSeekingTips";
import StudentBanking from "./pages/StudentBanking";
import MoneyTransfer from "./pages/MoneyTransfer";
import SuccessStory from "./pages/SuccessStory";
import FreeCounseling from "./pages/FreeCounseling";
import VisaApplication from "./pages/VisaApplication";
import CourseAdvice from "./pages/CourseAdvice";
import ParentGuide from "./pages/ParentGuide";
import IeltsScore from "./pages/ielts-score";
import IeltsScoreDetails from "./pages/ielts-score/single";
import StudyInUsa from "./pages/studyInUsa";
import StudyInUsaDetails from "./pages/studyInUsa/single";
import StudyInUk from "./pages/studyInUk";
import StudyInUkDetails from "./pages/studyInUk/single";
import StudyInAustralia from "./pages/studyInAustralia";
import StudyInAustraliaDetails from "./pages/studyInAustralia/single";
import StudyInCanada from "./pages/studyInCanada";
import StudyInCanadaDetails from "./pages/studyInCanada/single";
import HealthCover from "./pages/HealthCover";
import HealthCoverDetails from "./pages/HealthCover/single";
import UniversityRanking from "./pages/UniversityRanking";
import UniversityRankingDetails from "./pages/UniversityRanking/single";
import LivingCalculator from "./pages/living-calculator";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {SplitText} from "gsap/SplitText";


function App() {


    const [offset, setOffset] = useState(90);

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    Parallax()
    SplitUp()


    useEffect(() => {
        if (window.innerWidth > 767) {
            setOffset(document.querySelector('.container').offsetLeft)
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth > 767) {
                setOffset(document.querySelector('.container').offsetLeft + 15)
            }
        })
        window.addEventListener('load', () => {
            if (window.innerWidth > 767) {
                setOffset(document.querySelector('.container').offsetLeft + 15)
            }
        })
    }, [])


    return (
        <>

            <Menu/>
            <Container/>
            <GlobalStyle/>
            <ToastContainer/>
            <Switch>
                <Route exact path="/"><Home offset={offset}/></Route>
                <Route exact path="/components" component={Components}/>
                <Route exact path="/why-study-abroad" component={WhyStudyAbroad}/>
                <Route exact path={`/why-study-abroad/:slug`} component={WhyStudyAbroadDetails}/>
                <Route exact path="/doyens-guide-to-study-abroad" component={DoyensGuideToStudyAbroad}/>
                <Route exact path="/are-you-ready-to-apply" component={AreYouReadyToApply}/>
                <Route exact path="/study-abroad-benefits" component={StudyAbroadBenefits}/>
                <Route exact path="/find-a-university" component={FindAUniversity}/>
                <Route exact path={`/find-a-university/:slug`} component={FindUniversityDetails}/>
                <Route exact path="/testimonial" component={TestimonialPage}/>
                <Route exact path={`/testimonial/:slug`} component={TestimonialDetail}/>
                <Route exact path="/contact-us" component={ContactUs}/>
                <Route exact path="/scholarships" component={Scholarships}/>
                <Route exact path="/scholarships/:slug" component={ScholarshipDetails}/>
                <Route exact path="/living-calculator" component={LivingCalculator}/>
                <Route exact path={`/project`} component={Project}/>
                <Route exact path={`/project/:slug`} component={ProjectDetail}/>

                {/*-------------*/}
                <Route exact path="/reasons-to-choose-doyen" component={ReasonToChooseDoyen}/>
                <Route exact path="/how-to-choose-a-course" component={HowToChooseACourse}/>
                <Route exact path="/study-tips" component={StudyTips}/>
                <Route exact path="/what-to-pack" component={WhatToPack}/>
                <Route exact path="/dealing-with-stress" component={DealingWithStress}/>
                <Route exact path="/networking-and-socialising" component={NetworkAndSocial}/>
                <Route exact path="/developing-skills" component={DevelopingSkills}/>
                <Route exact path="/managing-money" component={ManagingMoney}/>
                <Route exact path="/job-seeking-tips" component={JobSeekingTips}/>
                {/*<Route exact path="/accommodation" component={Accommodation}/>*/}
                <Route exact path="/student-banking" component={StudentBanking}/>
                <Route exact path="/money-transfer" component={MoneyTransfer}/>
                <Route exact path="/success-story" component={SuccessStory}/>
                <Route exact path="/free-counseling" component={FreeCounseling}/>
                <Route exact path="/visa-application-assist" component={VisaApplication}/>
                <Route exact path="/course-advice" component={CourseAdvice}/>
                <Route exact path="/parent-guide" component={ParentGuide}/>
                <Route exact path="/ielts-score" component={IeltsScore}/>
                <Route exact path="/ielts-score/:slug" component={IeltsScoreDetails}/>
                <Route exact path="/study-in-usa" component={StudyInUsa}/>
                <Route exact path="/study-in-usa/:slug" component={StudyInUsaDetails}/>
                <Route exact path="/study-in-uk" component={StudyInUk}/>
                <Route exact path="/study-in-uk/:slug" component={StudyInUkDetails}/>
                <Route exact path="/study-in-australia" component={StudyInAustralia}/>
                <Route exact path="/study-in-australia/:slug" component={StudyInAustraliaDetails}/>
                <Route exact path="/study-in-canada" component={StudyInCanada}/>
                <Route exact path="/study-in-canada/:slug" component={StudyInCanadaDetails}/>
                <Route exact path="/health-cover" component={HealthCover}/>
                <Route exact path="/health-cover/:slug" component={HealthCoverDetails}/>
                <Route exact path="/university-ranking" component={UniversityRanking}/>
                <Route exact path="/university-ranking/:slug" component={UniversityRankingDetails}/>
                {/*---------------------*/}
                <Route component={Error}/>
            </Switch>

            <Footer/>

        </>


    );
}

export default App;

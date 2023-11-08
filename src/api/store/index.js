import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../redux/post";
import homeReducer from "../redux/Home";
import whyStudyAbroadReducer from "../redux/WhyStudyAbroad";
import doyenGuidToStudyAbroadReducer from "../redux/DoyenGuidToStudyAbroad";
import studyAbroadBenefitsReducer from "../redux/StudyAbroadBenefits";
import ReadyToApplyReducer from "../redux/AreYouReadyToApply";
import FindUniversityReducer from "../redux/FindUniversity";
import contactUsReducer from "../redux/ContactUs";
import ReasonToChooseDoyenReducer from "../redux/ReasonToChooseDoyen";
import HowToChooseACourseReducer from "../redux/HowToChooseACourse";
import StudyTipsReducer from "../redux/StudyTips";
import WhatToPackReducer from "../redux/WhatToPack";
import DealingWithStressReducer from "../redux/DealingWithStress";
import NetworkAndSocialReducer from "../redux/NetworkAndSocial";
import DevelopingSkillReducer from "../redux/DevelopingSkill";
import ManagingMoneyReducer from "../redux/ManaginMoney";
import JobSeekingTipsReducer from "../redux/JobSeekingTips";
import AccommodationReducer from "../redux/Accommodation";
import StudentBankingReducer from "../redux/StudentBanking";
import MoneyTransferReducer from "../redux/MoneyTransfer";
import SuccessStoryReducer from "../redux/SuccessStory";
import FreeCounselingReducer from "../redux/FreeCounseling";
import VisaAssistancerReducer from "../redux/VisaAssistance";
import CourseAdviceReducer from "../redux/CourseAdvice";
import ParentGuideReducer from "../redux/ParentGuide";
import ScholarshipsReducer from "../redux/Scholarships";
import IeltsScoreReducer from "../redux/IeltsScore";
import StudyInUsaReducer from "../redux/StudyInUsa";
import StudyInUkReducer from "../redux/StudyInUk";
import StudyInAustraliaReducer from "../redux/StudyInAustralia";
import StudyInCanadaReducer from "../redux/StudyInCanada";
import TestimonialReducer from "../redux/Testimonial";
import HealthCoverReducer from "../redux/HealthCover";
import UniversityRankingReducer from "../redux/UniversityRanking";
import CalculatorReducer from "../redux/Calculator";

const store = configureStore({
  reducer: {
    posts: postReducer,
    home: homeReducer,
    whyStudyAbroad: whyStudyAbroadReducer,
    doyenGuidToStudyAbroad: doyenGuidToStudyAbroadReducer,
    studyAbroadBenefits: studyAbroadBenefitsReducer,
    readyToApply: ReadyToApplyReducer,
    findUniversity: FindUniversityReducer,
    contactUs: contactUsReducer,
    reasonToChooseDoyen: ReasonToChooseDoyenReducer,
    howToChooseACourseReducer: HowToChooseACourseReducer,
    studyTips: StudyTipsReducer,
    whatToPack: WhatToPackReducer,
    dealingWithStress: DealingWithStressReducer,
    networkAndSocial: NetworkAndSocialReducer,
    developingSkill: DevelopingSkillReducer,
    managingMoney: ManagingMoneyReducer,
    jobSeekingTips: JobSeekingTipsReducer,
    accommodation: AccommodationReducer,
    studentBanking: StudentBankingReducer,
    moneyTransfer: MoneyTransferReducer,
    successStory: SuccessStoryReducer,
    freeCounseling: FreeCounselingReducer,
    visaAssistancer: VisaAssistancerReducer,
    courseAdvice: CourseAdviceReducer,
    parentGuid: ParentGuideReducer,
    scholarships: ScholarshipsReducer,
    ieltsScore: IeltsScoreReducer,
    studyInUsa: StudyInUsaReducer,
    studyInUk: StudyInUkReducer,
    studyInAustralia: StudyInAustraliaReducer,
    StudyInCanada: StudyInCanadaReducer,
    testimonial: TestimonialReducer,
    healthCover: HealthCoverReducer,
    universityRanking: UniversityRankingReducer,
    calculator: CalculatorReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;

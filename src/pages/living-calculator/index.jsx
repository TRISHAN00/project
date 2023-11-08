import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Col, Container, Form, Row} from "react-bootstrap";
import Feature from "../../components/Feature";
import InnerBanner from "../../components/InnerBanner";
import {HelmetProvider, Helmet} from 'react-helmet-async';
import PriceCard from "../../components/PriceCard";
import reactHtmlParser from "react-html-parser";
import CostBox from "../../components/CostBox";
import CountryCard from "../../components/CountryCard";
import {useDispatch, useSelector} from "react-redux";
import {apiEndPoints} from "../../api/network/apiEndPoints";
import {fetchCalculator, fetchPageCalculator} from "../../api/redux/Calculator";
import {toast} from "react-toastify";
import stringToNumber from "../../util/data";
import Select, {components} from "react-select";
import Button from "../../components/SButton";

const HOUSING_FORM_INIT_STATE = {
    country: '',
    city: '',
    houseRange: '',
    live: '',
    accommodation: ''
}

const FOOD_FORM_INIT_STATE = {
    foodRange: '',
    breakfast: '',
    lunch: '',
    dinner: '',
}

const DAILY_LIFE_INIT_STATE = {
    transport: '',
    phone: '',
    exercise: ''
}

const CLOTHING_INIT_STATE = {
    buyCloth: '',
    spendCloth: ''
}


const LivingCalculator = () => {
    const customStyles = {

        control: (provided, state) => ({
            ...provided,
            borderRadius: '20px',
            border: '1px solid rgba(45, 54, 145, 0.2)',
            background: 'none',
            paddingRight: '30px', // Add right padding for the indicator
            fontSize: '12px',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'rgba(7, 5, 36, 0.5)',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '20px',
            verticalAlign: 'middle',
            paddingLeft: '10px', // Add left padding of 10 pixels
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            '& svg': {
                width: '20px',
                height: '20px',
                fill: '#ccc', // Customize the color of the SVG icon
                // Add any other styles for the SVG if needed
            },
            marginRight: '-20px', // Add right margin of 20px

        }),
        indicatorSeparator: () => null, // Remove the indicator separator
        menu: (provided) => ({
            ...provided,
            fontSize: '14px', // Set the font size for the dropdown menu
        }),
    };

    // arrow icon
    const DropdownIndicator = (props) => (
        <components.DropdownIndicator {...props}>

            <svg xmlns="http://www.w3.org/2000/svg" width="14.121" height="8.121" viewBox="0 0 14.121 8.121">
                <g id="Group_18840" data-name="Group 18840" transform="translate(1.061 1.061)">
                    <line id="Line_3797" data-name="Line 3797" x2="6" y2="6"
                          transform="translate(12) rotate(90)"
                          fill="none" stroke="#ccc" strokeLinecap="round" strokeWidth="1.5"/>
                    <line id="Line_3798" data-name="Line 3798" y1="6" x2="6" transform="translate(6) rotate(90)"
                          fill="none"
                          stroke="#ccc" strokeLinecap="round" strokeWidth="1.5"/>
                </g>
            </svg>


        </components.DropdownIndicator>
    );

    const [housingValues, setHousingValues] = useState({...HOUSING_FORM_INIT_STATE})
    const [foodValues, setFoodValues] = useState({...FOOD_FORM_INIT_STATE})
    const [dailyLifeValues, setDailyLifeValues] = useState({...DAILY_LIFE_INIT_STATE})
    const [clothValues, setClothValues] = useState({...CLOTHING_INIT_STATE})

    // store step item data
    const [housingPrice, setHousingPrice] = useState(0)
    const [foodPrice, setFoodPrice] = useState(0)
    const [dailyLifePrice, setDailyLifePrice] = useState(0)
    const [clothingPrice, setClothingPrice] = useState(0)
    const [cityArray, setCityArray] = useState();


    const {country, city, houseRange, whereLive, accommodation} = housingValues;
    const {foodRange, breakfast, lunch, dinner} = foodValues;
    const {transport, phone, exercise} = dailyLifeValues;
    const {buyCloth, spendCloth} = clothValues;


    const increaseColor = useRef(null);

    const [currentStep, setCurrentStep] = useState(1);
    const [prevSteps, setPrevSteps] = useState([false, false, false, false, false]);
    const [progressValue, setProgressValue] = useState(0)
    const [trackStep, setTrackStep] = useState(1)


    const [housingData, setHousingData] = useState(0)
    const [foodData, setFoodData] = useState(0)
    const [dailyLifeData, setDailyLifeData] = useState(0)
    const [clothingData, setClothingData] = useState(0)

    const [total, setTotal] = useState(0)

    const scrollToSectionRef = useRef(null);


    const dispath = useDispatch();

    // api call start
    useEffect(() => {
        let api_url = apiEndPoints?.CALCULATOR
        dispath(fetchCalculator([api_url]))

        let api_url2 = apiEndPoints?.GET_CALCULATOR
        dispath(fetchPageCalculator([api_url2]))
    }, [dispath])

    let getPost = useSelector(state => state?.calculator)

    const innerBanner = getPost?.posts?.page_data?.[0]?.innerBanner;
    const feature = getPost?.posts?.page_data?.[0]?.feature;
    const rate = getPost?.posts?.page_data?.[0]?.rate;


    // refactor api
    const range = getPost?.page_data[0]?.range;
    const citySource = getPost?.page_data;
    let cityData = citySource?.map((item, index) => {
        return item.post_title
    })
    const pageData = getPost?.page_data;


    function formatBDT(amountInBDT) {
        return amountInBDT.toLocaleString('en-IN');
    }

    function usdToBdtConverter(amountInUSD) {
        if (typeof amountInUSD !== 'number') {
            return 'Invalid input';
        }

        const exchangeRate = stringToNumber(rate); // Example exchange rate (1 USD to BDT)
        const amountInBDT = Math.floor(amountInUSD * exchangeRate);
        return formatBDT(amountInBDT);
    }

    const handleClothingChange = (e) => {
        setClothValues({
            ...clothValues,
            [e.target.name]: e.target.value
        })
    }

    const scrollTop = () => {
        if (scrollToSectionRef.current) {
            scrollToSectionRef.current.scrollIntoView({
                behavior: 'smooth', // You can change this to 'auto' for instant scrolling
            });
        }
    }

    const handleOnOnSubmit = (e) => {
        if (currentStep === 1 && housingValues.country && housingValues.city && housingValues.houseRange && housingValues.whereLive && housingValues.accommodation) {
            getHousingData(housingPrice);
            handleContinue(currentStep + 1)
            prevSteps[0] = true;
            setProgressValue(22)
            setTrackStep(1); // Set trackStep to 2 when step 1 is completed
            scrollTop()
        } else if (currentStep === 2 && foodValues.foodRange && foodValues.breakfast && foodValues.lunch && foodValues.dinner) {
            getFoodData(foodPrice);
            handleContinue(currentStep + 1);
            prevSteps[1] = true;
            setProgressValue(44)
            scrollTop()
        } else if (currentStep === 3 && dailyLifeValues.transport && dailyLifeValues.phone && dailyLifeValues.exercise) {
            getDailyLifeData(dailyLifePrice)
            handleContinue(currentStep + 1)
            prevSteps[2] = true;
            setProgressValue(66)
            scrollTop()
        } else if (currentStep === 4 && clothValues.buyCloth && clothValues.spendCloth) {
            getClothingData(clothingPrice)
            handleContinue(currentStep + 1)
            prevSteps[3] = true;
            prevSteps[4] = true;
            setProgressValue(90);
            scrollTop()
        } else if (currentStep === 5) {
            handleContinue(currentStep + 1)
            prevSteps[4] = true;
            scrollTop()
        } else {
            toast.error('Please fill up all the fields.');
        }
        e.preventDefault()
    }

    const yourArray = pageData;

// Create a Set to store unique selected_country values
    const uniqueSelectedCountries = new Set();

// Iterate through the original array
    yourArray.forEach(item => {
        if (Array.isArray(item.selected_country)) {
            item.selected_country.forEach(country => {
                // Add the country to the Set (duplicates will be automatically removed)
                uniqueSelectedCountries.add(country);
            });
        }
    });

// Convert the Set back to an array if needed
    const uniqueSelectedCountriesArray = Array.from(uniqueSelectedCountries);

    const formattedArray = uniqueSelectedCountriesArray.map(country => ({
        value: country,
        label: country
    }));

    const filteredData = pageData?.filter(item => {
        let averageCost = item?.average_cost;
        return (
            averageCost >= total
        );
    });

    useEffect(() => {
        let selectedCountry = country?.value
        let filteredByCountry = pageData?.filter((item) => {
            return item?.selected_country?.includes(selectedCountry)
        })

        const postTitlesArray = filteredByCountry?.map(item => item?.post_title);

        let transformedCity = postTitlesArray.map(city => ({
            value: city,
            label: city
        }));

        setCityArray(transformedCity)

        if (filteredByCountry) {
            filteredByCountry?.map((item) => {

                // for housing step
                if (city?.value?.toLowerCase() === item?.post_title.toLowerCase()) {
                    const filteredData = item?.[houseRange?.value?.toLowerCase()]

                    let housingTotal = 0
                    switch (whereLive?.value) {
                        case "City Side": {
                            const citySide = filteredData?.pkg_detail?.[0];
                            const {shareRent, studioRent} = citySide;

                            if (accommodation?.value === "Shared Room") {
                                // setHousing(shareRent);
                                housingTotal = stringToNumber(shareRent)
                            } else if (accommodation?.value === "Studio Apartment") {
                                // setHousing(studioRent);
                                housingTotal = stringToNumber(studioRent)
                            }
                            break;
                        }
                        case "Suburbs": {
                            const suburbs = filteredData?.pkg_detail?.[1];
                            const {shareRent, studioRent} = suburbs;

                            if (accommodation?.value === "Shared Room") {
                                // setHousing(shareRent);
                                housingTotal = stringToNumber(shareRent)
                            } else if (accommodation?.value === "Studio Apartment") {
                                // setHousing(studioRent);
                                housingTotal = stringToNumber(studioRent)
                            }
                            break;
                        }
                        // Add more cases if needed
                        default:
                            // Default case
                            break;
                    }

                    setHousingPrice(() => housingTotal)


                    //     for food step
                    let foodTotal = 0;
                    switch (foodRange.value) {
                        case "Basic": {
                            const foodBasic = item?.food_basic;
                            const {basic_breakfast_price, basic_lunch_price, basic_dinner_price} = foodBasic;


                            // if selected value is Never
                            const breakfastPrice = basic_breakfast_price * breakfast?.value;
                            const lunchPrice = basic_lunch_price * lunch?.value;
                            const dinnerPrice = basic_dinner_price * dinner?.value;

                            if (breakfastPrice && lunchPrice && dinnerPrice) {
                                foodTotal = breakfastPrice + lunchPrice + dinnerPrice;
                            }
                            break;
                        }
                        case "Standard": {
                            const foodStandard = item?.food_standard;
                            const {
                                standard_breakfast_price,
                                standard_lunch_price,
                                standard_dinner_price
                            } = foodStandard;

                            const breakfastPrice = standard_breakfast_price * breakfast?.value;
                            const lunchPrice = standard_lunch_price * lunch?.value;
                            const dinnerPrice = standard_dinner_price * dinner?.value;

                            if (breakfastPrice && lunchPrice && dinnerPrice) {
                                foodTotal = breakfastPrice + lunchPrice + dinnerPrice;

                            }
                            break;
                        }
                        case "Premium": {
                            const foodPremium = item?.food_premium;
                            const {premium_breakfast_price, premium_lunch_price, premium_dinner_price} = foodPremium;


                            const breakfastPrice = premium_breakfast_price * breakfast?.value;
                            const lunchPrice = premium_lunch_price * lunch?.value;
                            const dinnerPrice = premium_dinner_price * dinner?.value;

                            if (breakfastPrice && lunchPrice && dinnerPrice) {
                                foodTotal = breakfastPrice + lunchPrice + dinnerPrice;
                            }
                            break;
                        }
                        // Add more cases if needed
                        default:
                            // Default case
                            break;
                    }
                    setFoodPrice(() => foodTotal)


                    // Transport
                    let transportTotal = 0;
                    switch (transport?.value) {
                        case "Never":
                            const neverTransport = 0
                            transportTotal = neverTransport;

                            break;
                        case "Everyday":
                            const everydayTransport = stringToNumber(item?.daily_life_transport?.transport_everyday);
                            transportTotal = everydayTransport;
                            break;
                        case "Sometimes":
                            const sometimesTransport = stringToNumber(item?.daily_life_transport?.transport_sometimes)
                            transportTotal = sometimesTransport;
                            break;
                        default:
                            // Default case if none of the above conditions match
                            break;
                    }


                    // Phone Plan
                    let phonePlanTotal = 0;
                    switch (phone?.value) {
                        case "Basic":
                            const basicPhonePlan = stringToNumber(item?.phone_plan?.basic);
                            phonePlanTotal = basicPhonePlan;

                            break;
                        case "Standard":
                            const standardPhonePlan = stringToNumber(item?.phone_plan?.standard);
                            phonePlanTotal = standardPhonePlan;
                            break;
                        case "Premium":
                            const premiumPhonePlan = stringToNumber(item?.phone_plan?.premium)
                            phonePlanTotal = premiumPhonePlan;
                            break;
                        default:
                            // Default case if none of the above conditions match
                            break;
                    }


                    // Exercise
                    let totalExercise = 0;
                    switch (exercise?.value) {
                        case "No Exercise":
                            const noExercise = 0
                            totalExercise = noExercise;
                            break;
                        case "Gym":
                            const gym = stringToNumber(item?.exercise);
                            totalExercise = gym
                            break;
                        default:
                            // Default case if none of the above conditions match
                            break;
                    }

                    let totalDailyLife = transportTotal + phonePlanTotal + totalExercise;
                    setDailyLifePrice(() => totalDailyLife)


                    // Clothing
                    let totalCloth = 0
                    const input = stringToNumber(buyCloth)

                    let totalSpendClothing = 0;
                    switch (spendCloth?.value) {
                        case "Basic":
                            const basicSpendPlan = stringToNumber(item?.clothing?.basic);
                            totalSpendClothing = basicSpendPlan;

                            break;
                        case "Standard":
                            const standardSpendPlan = stringToNumber(item?.clothing?.standard);
                            totalSpendClothing = standardSpendPlan;

                            break;
                        case "Premium":
                            const premiumSpendPlan = stringToNumber(item?.clothing?.premium)
                            totalSpendClothing = premiumSpendPlan;
                            break;
                        default:
                            // Default case if none of the above conditions match
                            break;
                    }

                    let totalCloths = totalCloth + totalSpendClothing * input;
                    setClothingPrice(() => totalCloths)
                }
            })
        }

    }, [pageData, houseRange, whereLive, accommodation, foodRange, breakfast, lunch, dinner, transport, phone, exercise, buyCloth, spendCloth])

    // housingValues.price = stringToNumber(housing);
    foodValues.price = foodPrice;
    dailyLifeValues.price = dailyLifePrice

    const handleContinue = (step) => {
        setCurrentStep(step);
    };


    const renderCircle = (step) => {
        const isActive = step === trackStep;
        const isCompleted = prevSteps[step - 1];
        const isFirstCircle = step === 1;
        // Check if the current step is active or completed
        const isClickable = isActive || isCompleted;

        return (
            <div
                className={`circle ${isActive ? 'active' : ''}`}
                onClick={() => isClickable && handleContinue(step)} // Only allow clicking if isClickable is true

            >
                <div
                    className={`circle-number ${isActive ? 'active-number' : ''} ${
                        isCompleted ? 'completed-number' : ''
                    } ${isFirstCircle ? 'first-circle' : ''}`}

                >
                    {step}
                </div>
                <div className={`circle-label ${isActive ? 'active-number' : ''} ${
                    isCompleted ? 'completed-number' : ''
                } ${isFirstCircle ? 'first-circle' : ''}`}>
                    {step === 1 && 'Housing'}
                    {step === 2 && 'Food'}
                    {step === 3 && 'Daily Life'}
                    {step === 4 && 'Clothing'}
                    {step === 5 && 'Your Costs'}
                </div>
            </div>
        );
    };


    // style end


    const getHousingData = (values) => {
        setHousingData(values)
    }

    const getFoodData = (values) => {
        setFoodData(values)
    }


    const getDailyLifeData = (values) => {
        setDailyLifeData(values)
    }

    const getClothingData = (values) => {
        setClothingData(values)
    }

    const calculateTotal = () => {
        return housingData + foodData + dailyLifeData + clothingData; // Add more values as needed
    };



    useEffect(() => {
        const calculatedTotal = calculateTotal();
        setTotal(calculatedTotal);
    }, [housingData, foodData, dailyLifeData, clothingData]);

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{`Living Calculator | Doyen & Associate`}</title>
                <meta name="Reasons to choose doyen"
                      content="Studying abroad is an exciting opportunity that offers immense personal and professional growth. As a Bangladeshi student, choosing the right student consultancy firm is crucial for a smooth and successful international education journey. "/>
            </Helmet>
            <StyledInternationStudy>
                <InnerBanner first={'Home'} firstUrl={'/'} title={innerBanner?.subtitle}
                             img={innerBanner?.image}/>

                <Container>
                    <Row>
                        <Col md={7} id={"timeline"} ref={scrollToSectionRef} className={'study-abroad-content'}>
                            <h4>{reactHtmlParser('Living Calculator')}</h4>
                            <p>{reactHtmlParser('Knowing the cost of living is vital when preparing to study abroad. Use our cost of living calculator to estimate how much you will need to cover all your expenses as an international student. You can also get an up-to-date cost of living comparison for various country and accommodation options.')}</p>

                            <StyledTimeline progressValue={progressValue}>
                                <div className="timeline">
                                    <div ref={increaseColor} className="circle-wrap">
                                        {renderCircle(1)}
                                        {renderCircle(2)}
                                        {renderCircle(3)}
                                        {renderCircle(4)}
                                        {renderCircle(5)}
                                    </div>
                                    <div className={'show-content'}>
                                        <Form autocomplete="off" onSubmit={handleOnOnSubmit}>
                                            {
                                                currentStep === 1 && <div>

                                                    <div className={'form-item'}>
                                                        <label htmlFor="range">Select Your Country</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={country}
                                                            onChange={(selectedOption) => setHousingValues({
                                                                ...housingValues,
                                                                country: selectedOption
                                                            })}
                                                            options={formattedArray}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>
                                                    <div className={'form-item'}>
                                                        <label htmlFor="houseRange">Select Your Range</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={houseRange}
                                                            onChange={(selectedOption) => setHousingValues({
                                                                ...housingValues,
                                                                houseRange: selectedOption
                                                            })}
                                                            options={[
                                                                {value: "Basic", label: "Basic"},
                                                                {value: "Standard", label: "Standard"},
                                                                {value: "Premium", label: "Premium"},
                                                            ]}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>
                                                    <div className={'form-item'}>
                                                        <label htmlFor="range">Select Your City</label>
                                                        <Select
                                                            value={city}
                                                            onChange={(selectedOption) => setHousingValues({
                                                                ...housingValues,
                                                                city: selectedOption
                                                            })}
                                                            options={cityArray}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>

                                                    <div className={'form-item'}>
                                                        <label htmlFor="range">Where would you like to live?</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={whereLive}
                                                            onChange={(selectedOption) => setHousingValues({
                                                                ...housingValues,
                                                                whereLive: selectedOption
                                                            })}
                                                            options={[
                                                                {value: "City Side", label: "City Side"},
                                                                {value: "Suburbs", label: "Suburbs"},
                                                            ]}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>

                                                    <div className={'form-item'}>
                                                        <label htmlFor="range">What type of accommodation do you
                                                            prefer?</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={accommodation}
                                                            onChange={(selectedOption) => setHousingValues({
                                                                ...housingValues,
                                                                accommodation: selectedOption
                                                            })}
                                                            options={[
                                                                {value: "Shared Room", label: "Shared Room"},
                                                                {value: "Studio Apartment", label: "Studio Apartment"},
                                                            ]}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>
                                                </div>
                                            }

                                            {
                                                currentStep === 2 && <div>
                                                    <div className={'form-item'}>
                                                        <label htmlFor="foodRange">Select Your Range</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={foodRange}
                                                            onChange={(selectedOption) => setFoodValues({
                                                                ...foodValues,
                                                                foodRange: selectedOption
                                                            })}
                                                            options={[
                                                                {value: "Basic", label: "Basic"},
                                                                {value: "Standard", label: "Standard"},
                                                                {value: "Premium", label: "Premium"},
                                                            ]}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>
                                                    <div className={'form-item'}>
                                                        <label htmlFor="breakfast">How often do you eat out each week in
                                                            breakfast?</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={breakfast}
                                                            onChange={(selectedOption) => setFoodValues({
                                                                ...foodValues,
                                                                breakfast: selectedOption
                                                            })}
                                                            options={[
                                                                {value: "Never", label: "Never"},
                                                                {value: "1", label: "1"},
                                                                {value: "2", label: "2"},
                                                                {value: "3", label: "3"},
                                                                {value: "4", label: "4"},
                                                                {value: "5", label: "5"},
                                                                {value: "6", label: "6"},
                                                                {value: "7", label: "7"},
                                                            ]}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>
                                                    <div className={'form-item'}>
                                                        <label htmlFor="lunch">How often do you eat out each week in
                                                            Lunch?</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={lunch}
                                                            onChange={(selectedOption) => setFoodValues({
                                                                ...foodValues,
                                                                lunch: selectedOption
                                                            })}
                                                            options={[
                                                                {value: "Never", label: "Never"},
                                                                {value: "1", label: "1"},
                                                                {value: "2", label: "2"},
                                                                {value: "3", label: "3"},
                                                                {value: "4", label: "4"},
                                                                {value: "5", label: "5"},
                                                                {value: "6", label: "6"},
                                                                {value: "7", label: "7"},
                                                            ]}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>
                                                    <div className={'form-item'}>
                                                        <label htmlFor="dinner">How often do you eat out each week in
                                                            Dinner?</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={dinner}
                                                            onChange={(selectedOption) => setFoodValues({
                                                                ...foodValues,
                                                                dinner: selectedOption
                                                            })}
                                                            options={[
                                                                {value: "Never", label: "Never"},
                                                                {value: "1", label: "1"},
                                                                {value: "2", label: "2"},
                                                                {value: "3", label: "3"},
                                                                {value: "4", label: "4"},
                                                                {value: "5", label: "5"},
                                                                {value: "6", label: "6"},
                                                                {value: "7", label: "7"},
                                                            ]}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>

                                                </div>
                                            }
                                            {
                                                currentStep === 3 && <div>
                                                    <div className={'form-item'}>
                                                        <label htmlFor="transport">How often will you use public
                                                            transport?</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={transport}
                                                            onChange={(selectedOption) => setDailyLifeValues({
                                                                ...dailyLifeValues,
                                                                transport: selectedOption
                                                            })}
                                                            options={[
                                                                {value: "Never", label: "Never"},
                                                                {value: "Everyday", label: "Everyday"},
                                                                {value: "Sometimes", label: "Sometimes"},
                                                            ]}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>

                                                    <div className={'form-item'}>
                                                        <label htmlFor="phone">How much will you spend on your phone
                                                            plan?</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={phone}
                                                            onChange={(selectedOption) => setDailyLifeValues({
                                                                ...dailyLifeValues,
                                                                phone: selectedOption
                                                            })}
                                                            options={[
                                                                {value: "Basic", label: "Basic"},
                                                                {value: "Standard", label: "Standard"},
                                                                {value: "Premium", label: "Premium"},
                                                            ]}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>

                                                    <div className={'form-item'}>
                                                        <label htmlFor="exercise">What type of exercise do you
                                                            prefer?</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={exercise}
                                                            onChange={(selectedOption) => setDailyLifeValues({
                                                                ...dailyLifeValues,
                                                                exercise: selectedOption
                                                            })}
                                                            options={[
                                                                {value: "No Exercise", label: "No Exercise"},
                                                                {value: "Gym", label: "Gym"},
                                                            ]}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>
                                                </div>
                                            }
                                            {
                                                currentStep === 4 && <div>
                                                    <div className={'form-item'}>
                                                        <label htmlFor="buyCloth">How many items of clothing are you buying
                                                            a month?</label>
                                                        <input className={'cloth'} type="number"
                                                               onChange={handleClothingChange} name={"buyCloth"}
                                                               id={"buyCloth"}
                                                               value={buyCloth}/>
                                                    </div>

                                                    <div className={'form-item'}>
                                                        <label htmlFor="spendCloth">How much do you spend on new
                                                            clothes?</label>
                                                        <Select
                                                            isSearchable={false}
                                                            value={spendCloth}
                                                            onChange={(selectedOption) => setClothValues({
                                                                ...clothValues,
                                                                spendCloth: selectedOption
                                                            })}
                                                            options={[
                                                                {value: "Basic", label: "Basic"},
                                                                {value: "Standard", label: "Standard"},
                                                                {value: "Premium", label: "Premium"},
                                                            ]}
                                                            styles={customStyles}
                                                            components={{DropdownIndicator}}
                                                        />
                                                    </div>
                                                </div>
                                            }
                                            {
                                                currentStep === 5 && <div>
                                                    <div className="modal-title">
                                                        <h4>Your cost of living for {city?.value}, {country?.value}</h4>
                                                    </div>
                                                    <Row className={'price-box'}>
                                                        <Col lg={3}>
                                                            <CostBox price={`£${housingPrice ? housingPrice : 0}`}
                                                                     subtitle={'Housing'}/>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <CostBox price={`£${foodPrice ? foodPrice : 0}`}
                                                                     subtitle={'Food'}/>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <CostBox price={`£${dailyLifePrice}`} subtitle={'Daily Life'}/>
                                                        </Col>
                                                        <Col lg={3}>
                                                            <CostBox price={`£${clothingPrice}`} subtitle={'Clothing'}/>
                                                        </Col>
                                                    </Row>
                                                    <div className="modal-title">
                                                        <h4>Your costs of living in other cities.</h4>
                                                    </div>
                                                    <div className="modal-country">
                                                        <Row>
                                                            {
                                                                filteredData?.map((item, index) => {
                                                                    return (

                                                                        <Col md={6}>
                                                                            <div className={"modal-country__item"}>
                                                                                <CountryCard img={item?.post_feature_image}
                                                                                             name={item?.post_name}
                                                                                             rate={`GBP ${item?.average_cost}`}/>
                                                                            </div>
                                                                        </Col>

                                                                    )
                                                                })
                                                            }
                                                        </Row>
                                                    </div>
                                                </div>
                                            }

                                            {
                                                currentStep < 5 &&
                                                <Button onClick={handleOnOnSubmit} width={'200px'} color={'#1A1A1A'}
                                                        hoverBorderColor={'#2D3691'} hoverBackground={'#2D3691'}
                                                        borderColor={'#1A1A1A'} background={'transparent'}
                                                        height={'40px'} fontWeight={'500'} lineHeight={'18'}
                                                        fontSize={'12'} text={'Continue'}/>
                                            }
                                        </Form>
                                    </div>
                                </div>
                            </StyledTimeline>

                        </Col>
                        <Col md={{span: 4, offset: 1}} className={'study-abroad-form'}>
                            <div className="scrollable-box">
                                <PriceCard title={'Monthly Total'} gbp={`GBP ${total ? total : 0}`}
                                           bdt={`BDT ${usdToBdtConverter(total ? total : 0)}`}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Feature leftUrl={feature?.left_url} rightUrl={feature?.right_url} subtitle={feature?.subtitle}
                         leftText={feature?.left} rightTopSmall={feature?.right_top_small}
                         rightBottomTitle={feature?.right_bottom_title}/>

            </StyledInternationStudy>
        </HelmetProvider>)

}

const StyledTimeline = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 40px;
  }
  
  .modal-country__item {
    margin-bottom: 30px;
  }

  /* Add this CSS to your stylesheet or component's styles */

  .scrollable-box {
    max-height: 300px; /* Adjust the max height as needed */
    overflow-y: auto;
    position: sticky;
    top: 20px; /* Adjust the top position as needed */
    background-color: white; /* Add a background color if needed */
    border: 1px solid #ccc; /* Add a border if needed */
    padding: 10px; /* Add padding as needed */
  }

  input.submit {
    background: transparent;
    height: 40px;
    width: 119px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    border: 1px solid #1A1A1A;
    position: relative;
    transition: 0.3s ease, transform 0.3s ease;
  }

  input.submit:hover {
    background: #2D3691;
    border: none;
    color: #fff;

  }

  input.cloth {
    background: transparent;
    border-radius: 20px;
    border: 1px solid rgba(45, 54, 145, 0.2);
    height: 40px;
    padding-left: 20px;
    caret-color: rgba(7, 5, 36, 0.5);
    font-size: 12px;

    ::placeholder {
      color: rgba(7, 5, 36, 0.5);
      font-size: 12px;
      font-weight: 400;
      line-height: 40px;
      vertical-align: middle; /* Added vertical alignment */
    }

    :focus {
      border-color: rgba(45, 54, 145, 0.2); /* Add a focus border color */
      outline: none; /* Remove the default outline */
      background-color: transparent; /* Set the background color to transparent for the focused state */
    }
  }

  .form-item {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .icon {
    position: absolute;
    height: 40px;
    right: 20px;
    bottom: 0;
    display: flex;
    align-items: center;
  }


  label {
    color: rgba(7, 5, 36, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }

  .form-item {
    margin-bottom: 30px;
  }

  /* Add custom styles for the select element */


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

  .circle {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 99;
  }

  .circle-wrap {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .circle-wrap:before {
    position: absolute;
    content: '';
    left: 15px;
    right: 0;
    width: 93%;
    background: #2D3691;
    opacity: 0.2;
    height: 2px;
    top: 30%;
  }

  .circle-wrap:after {
    position: absolute;
    content: '';
    left: 15px;
    right: 0;
    //width: var(--circle-wrap-after-width, 0%);
    width: ${(props) => props.progressValue ? props.progressValue : 0}%;
    background: #F04848;
    height: 2px;
    top: 30%;
  }

  .circle-number {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: 1px solid rgba(45, 54, 145, 0.5);
    position: relative;
    background: #fff; /* Add background color for the default state */
    transition: 0.3s ease-in-out;
    color: rgba(45, 54, 145, 0.5);
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }

  //.circle-number.first-circle {
  //  background: #f04848;
  //  color: #fff;
  //  border: none;
  //}

  .circle-number.active-number {
    border: 1px solid rgba(45, 54, 145);
    color: #2D3691;
  }

  .circle-number.completed-number {
    background: #F04848;
    color: #fff;
    border: none;
  }

  .circle-label {
    margin-top: 8px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #2D3691;
    line-height: 20px;
  }

  .circle-label.completed-number {
    color: #F04848;
  }
  
  .continue-button {
    margin-top: 16px;
    padding: 8px 16px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }


  .show-content {
    &__single {
      margin-bottom: 30px;
      margin-top: 40px;

      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: #070524;
        opacity: 0.5;
        margin-bottom: 10px;
      }
    }

    p {
      margin-bottom: 10px !important;
    }
  }

  .modal-country {
    margin-top: 30px;
  }

  .modal-title {
    margin-bottom: 30px;
    line-height: 1.5;
    margin-top: 40px;
  }

  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {
    .price-box {
      gap: 30px;
    }

    .circle-wrap {
      width: 100%;
    }
  }


  /* small mobile :320px. */
  @media (max-width: 767px) {
    .price-box {
      gap: 30px;
    }

    .circle-wrap {
      width: 100%;
    }
  }
`;

const StyledInternationStudy = styled.section`
  margin-top: 135px;

  .study-abroad-form {
    margin-top: 120px;
  }

  //dc button customize
  .cost {
    margin-top: -80px;
  }

  .form-option {
    display: flex;
    gap: 30px;
    flex-direction: column;
    margin-bottom: 40px;
  }

  .study-abroad-content {
    margin-top: 120px;


    h3 {
      color: #2D3691;
      font-weight: 500;
      line-height: 40px;
      margin-bottom: 30px;
    }

    h4 {
      color: #1A1A1A;
      font-size: 24px;
      font-weight: 600;
      line-height: 30px;
      margin-bottom: 40px;
    }

    p {
      margin-bottom: 40px;
    }

    &__single {
      border-radius: 20px;
      margin-bottom: 30px;

      &__img {
        position: relative;
        padding-top: calc(250 / 370 * 100%);
      }

      &__info {
        background: #F9F9F9;
        padding: 30px 20px 37px 20px;
        border-radius: 0px 0px 15px 15px;

        h4 {
          margin-bottom: 10px;
        }

        p {
          color: #1A1A1A;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
      }

      &:nth-last-child(1) {
        margin-bottom: 0;
      }

      &:nth-last-child(2) {
        margin-bottom: 0;
      }
    }

    &__single-blog {
      margin-bottom: 40px;

      &__title {
        background: #F9F9F9;
        padding: 25px 30px;
        border-radius: 15px;
        overflow: hidden;
        margin-bottom: 30px;

        h5 {
          color: #1A1A1A;
          font-weight: 500;
          line-height: 26px;
        }
      }

      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #1A1A1A;
        margin-bottom: 30px;

        &:nth-of-type(2) {
          margin-top: 30px;
        }

        &:nth-last-of-type(1) {
          margin-top: 30px;
        }
      }

      h6 {
        color: #2D3691;
        font-weight: 500;
        line-height: 24px;
      }

      &:last-of-type(1) {
        margin-bottom: unset;
      }
    }
  }

  // react select start
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


  // react select end

  //  responsive
  
  /* Tablet desktop :768px. */
  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: unset;
    .study-abroad-form {
      display: none;
    }

    .circle-wrap:before {
      width: 90%;
    }
  }


  /* small mobile :320px. */
  @media (max-width: 767px) {
    margin-top: unset;
    .study-abroad-form {
      display: none;
    }

    .feature {
      margin-top: 60px;
    }

    .study-abroad-content {
      margin-top: 60px;

      h3 {
        font-size: 28px;
        font-weight: 500;
        line-height: 36px;
        margin-bottom: 20px;
      }

      h4 {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 30px;
      }

      &__single {
        margin-bottom: 20px;

        &__img {
          padding-top: calc(250 / 370 * 100%);
        }
      }

      &__single-blog {
        margin-bottom: 40px;

        &__title {
          padding: 20px 15px;
          margin-bottom: 20px;
        }
        p {
          margin-bottom: 20px;
          &:nth-last-of-type(1) {
            margin-top: 20px;
          }
        }
      }
    }

    .circle-wrap:before {
      width: 90%;
    }
  }

`;


export default LivingCalculator;

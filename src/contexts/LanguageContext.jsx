import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Header
    home: "Home",
    services: "Services",
    tours: "Tours",
    attractions: "Attractions",
    booking: "Book Now",
    contact: "Contact",
    
    // Hero Section
    heroTitle1: "Discover Sivaganga's Heritage",
    heroSubtitle1: "Explore the rich cultural heritage and historical monuments",
    heroCta1: "Explore Heritage Tours",
    heroTitle2: "Nature's Paradise Awaits",
    heroSubtitle2: "Immerse yourself in the natural beauty of Sivaganga district",
    heroCta2: "Book Nature Tours",
    heroTitle3: "Spiritual Journey Begins",
    heroSubtitle3: "Visit ancient temples and spiritual centers",
    heroCta3: "Plan Spiritual Tours",
    viewAllTours: "View All Tours",
    
    // Services
    servicesTitle: "Our Tourism Services",
    servicesSubtitle: "Discover the best of Sivaganga district with our comprehensive tourism services",
    heritageTourism: "Heritage Tourism",
    heritageDesc: "Explore Sivaganga's rich cultural heritage with guided tours of palaces, temples, and historical sites.",
    natureWildlife: "Nature & Wildlife",
    natureDesc: "Discover the natural beauty of Sivaganga district with eco-tourism and wildlife experiences.",
    spiritualJourneys: "Spiritual Journeys",
    spiritualDesc: "Embark on spiritual pilgrimages to ancient temples and sacred places in the district.",
    transportation: "Transportation",
    transportDesc: "Comfortable and reliable transportation services for all your travel needs within Sivaganga.",
    culturalExperiences: "Cultural Experiences",
    culturalDesc: "Immerse yourself in local culture with traditional performances, crafts, and cuisine.",
    customPackages: "Custom Packages",
    customDesc: "Personalized tour packages designed according to your interests and preferences.",
    readyToExplore: "Ready to Explore Sivaganga?",
    getInTouch: "Get in Touch",
    
    // Tours
    exploreSivaganga: "Explore Sivaganga District",
    toursSubtitle: "Discover the rich heritage, natural beauty, and spiritual significance of our district",
    heritageTours: "Heritage Tours",
    natureTours: "Nature Tours",
    spiritualTours: "Spiritual Tours",
    customizeExperience: "Customize Your Experience",
    customizeDesc: "Don't see what you're looking for? We can create a custom tour package just for you!",
    
    // Map
    exploreDistrict: "Explore Sivaganga District",
    mapSubtitle: "Discover tourist attractions and plan your pickup location",
    touristAttractions: "Tourist Attractions",
    interactiveMap: "Interactive Map",
    mapInstructions: "Click on tourist places to see details",
    liveTracking: "Live Tracking",
    liveTrackingDesc: "Track your pickup location in real-time",
    interactiveMapDesc: "Explore all tourist attractions easily",
    easyNavigation: "Easy Navigation",
    navigationDesc: "Get directions to any location",
    getDirections: "Get Directions",
    addToItinerary: "Add to Itinerary",
    yourLocation: "Your Location",
    
    // Booking
    bookYourTour: "Book Your Tour",
    bookingSubtitle: "Fill in the details below to book your perfect Sivaganga district experience",
    personalInfo: "Personal Information",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    tourPackage: "Tour Package",
    tripDetails: "Trip Details",
    pickupLocation: "Pickup Location",
    destination: "Destination",
    travelDate: "Travel Date",
    preferredTime: "Preferred Time",
    vehiclePassengers: "Vehicle & Passengers",
    vehicleType: "Vehicle Type",
    adults: "Adults",
    children: "Children",
    specialRequests: "Special Requests",
    specialRequestsPlaceholder: "Let us know about any special requirements, dietary restrictions, or specific places you'd like to visit...",
    estimatedTotal: "Estimated Total",
    proceedToPayment: "Proceed to Payment",
    completeBooking: "Complete Your Booking",
    reviewDetails: "Review your details and proceed to payment",
    bookingSummary: "Booking Summary",
    package: "Package",
    duration: "Duration",
    vehicle: "Vehicle",
    passengers: "Passengers",
    dateTime: "Date & Time",
    totalAmount: "Total Amount",
    backToForm: "Back to Form",
    payNow: "Pay Now",
    
    // Footer
    quickLinks: "Quick Links",
    tourPackages: "Tour Packages",
    contactInfo: "Contact Info",
    allRightsReserved: "All rights reserved",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    refundPolicy: "Refund Policy"
  },
  
  ta: {
    // Header
    home: "முகப்பு",
    services: "சேவைகள்",
    tours: "சுற்றுலா",
    attractions: "கவர்ச்சிகள்",
    booking: "இப்போது பதிவு",
    contact: "தொடர்பு",
    
    // Hero Section
    heroTitle1: "சிவகங்கையின் பாரம்பரியத்தைக் கண்டறியுங்கள்",
    heroSubtitle1: "வளமான கலாச்சார பாரம்பரியம் மற்றும் வரலாற்று நினைவுச்சின்னங்களை ஆராயுங்கள்",
    heroCta1: "பாரம்பரிய சுற்றுலாவை ஆராயுங்கள்",
    heroTitle2: "இயற்கையின் சொர்க்கம் காத்திருக்கிறது",
    heroSubtitle2: "சிவகங்கை மாவட்டத்தின் இயற்கை அழகில் மூழ்குங்கள்",
    heroCta2: "இயற்கை சுற்றுலாவை பதிவு செய்யுங்கள்",
    heroTitle3: "ஆன்மீக பயணம் தொடங்குகிறது",
    heroSubtitle3: "பண்டைய கோவில்கள் மற்றும் ஆன்மீக மையங்களைப் பார்வையிடுங்கள்",
    heroCta3: "ஆன்மீக சுற்றுலாவை திட்டமிடுங்கள்",
    viewAllTours: "அனைத்து சுற்றுலாக்களையும் பார்க்கவும்",
    
    // Services
    servicesTitle: "எங்கள் சுற்றுலா சேவைகள்",
    servicesSubtitle: "எங்கள் விரிவான சுற்றுலா சேவைகளுடன் சிவகங்கை மாவட்டத்தின் சிறந்தவற்றைக் கண்டறியுங்கள்",
    heritageTourism: "பாரம்பரிய சுற்றுலா",
    heritageDesc: "அரண்மனைகள், கோவில்கள் மற்றும் வரலாற்று தளங்களின் வழிகாட்டப்பட்ட சுற்றுலாக்களுடன் சிவகங்கையின் வளமான கலாச்சார பாரம்பரியத்தை ஆராயுங்கள்.",
    natureWildlife: "இயற்கை மற்றும் வனவிலங்கு",
    natureDesc: "சுற்றுச்சூழல் சுற்றுலா மற்றும் வனவிலங்கு அனுபவங்களுடன் சிவகங்கை மாவட்டத்தின் இயற்கை அழகைக் கண்டறியுங்கள்.",
    spiritualJourneys: "ஆன்மீக பயணங்கள்",
    spiritualDesc: "மாவட்டத்தில் உள்ள பண்டைய கோவில்கள் மற்றும் புனித இடங்களுக்கு ஆன்மீக யாத்திரைகளை மேற்கொள்ளுங்கள்.",
    transportation: "போக்குவரத்து",
    transportDesc: "சிவகங்கையில் உள்ள உங்கள் அனைத்து பயண தேவைகளுக்கும் வசதியான மற்றும் நம்பகமான போக்குவரத்து சேவைகள்.",
    culturalExperiences: "கலாச்சார அனுபவங்கள்",
    culturalDesc: "பாரம்பரிய நிகழ்ச்சிகள், கைவினைப்பொருட்கள் மற்றும் உணவு வகைகளுடன் உள்ளூர் கலாச்சாரத்தில் மூழ்குங்கள்.",
    customPackages: "தனிப்பயன் தொகுப்புகள்",
    customDesc: "உங்கள் ஆர்வங்கள் மற்றும் விருப்பங்களுக்கு ஏற்ப வடிவமைக்கப்பட்ட தனிப்பயன் சுற்றுலா தொகுப்புகள்.",
    readyToExplore: "சிவகங்கையை ஆராய தயாரா?",
    getInTouch: "தொடர்பு கொள்ளுங்கள்",
    
    // Tours
    exploreSivaganga: "சிவகங்கை மாவட்டத்தை ஆராயுங்கள்",
    toursSubtitle: "எங்கள் மாவட்டத்தின் வளமான பாரம்பரியம், இயற்கை அழகு மற்றும் ஆன்மீக முக்கியத்துவத்தைக் கண்டறியுங்கள்",
    heritageTours: "பாரம்பரிய சுற்றுலாக்கள்",
    natureTours: "இயற்கை சுற்றுலாக்கள்",
    spiritualTours: "ஆன்மீக சுற்றுலாக்கள்",
    customizeExperience: "உங்கள் அனுபவத்தை தனிப்பயனாக்குங்கள்",
    customizeDesc: "நீங்கள் தேடுவதைக் காணவில்லையா? உங்களுக்காக தனிப்பயன் சுற்றுலா தொகுப்பை உருவாக்கலாம்!",
    
    // Map
    exploreDistrict: "சிவகங்கை மாவட்டத்தை ஆராயுங்கள்",
    mapSubtitle: "சுற்றுலா கவர்ச்சிகளைக் கண்டறிந்து உங்கள் பிக்அப் இடத்தை திட்டமிடுங்கள்",
    touristAttractions: "சுற்றுலா கவர்ச்சிகள்",
    interactiveMap: "ஊடாடும் வரைபடம்",
    mapInstructions: "விவரங்களைப் பார்க்க சுற்றுலா இடங்களைக் கிளிக் செய்யுங்கள்",
    liveTracking: "நேரடி கண்காணிப்பு",
    liveTrackingDesc: "உங்கள் பிக்அப் இடத்தை நேரடியாக கண்காணிக்கவும்",
    interactiveMapDesc: "அனைத்து சுற்றுலா கவர்ச்சிகளையும் எளிதாக ஆராயுங்கள்",
    easyNavigation: "எளிதான வழிசெலுத்தல்",
    navigationDesc: "எந்த இடத்திற்கும் வழிகாட்டுதலைப் பெறுங்கள்",
    getDirections: "வழிகாட்டுதலைப் பெறுங்கள்",
    addToItinerary: "பயணத்திட்டத்தில் சேர்க்கவும்",
    yourLocation: "உங்கள் இடம்",
    
    // Booking
    bookYourTour: "உங்கள் சுற்றுலாவை பதிவு செய்யுங்கள்",
    bookingSubtitle: "உங்கள் சரியான சிவகங்கை மாவட்ட அனுபவத்தை பதிவு செய்ய கீழே உள்ள விவரங்களை நிரப்புங்கள்",
    personalInfo: "தனிப்பட்ட தகவல்",
    fullName: "முழு பெயர்",
    emailAddress: "மின்னஞ்சல் முகவரி",
    phoneNumber: "தொலைபேசி எண்",
    tourPackage: "சுற்றுலா தொகுப்பு",
    tripDetails: "பயண விவரங்கள்",
    pickupLocation: "பிக்அப் இடம்",
    destination: "இலக்கு",
    travelDate: "பயண தேதி",
    preferredTime: "விருப்பமான நேரம்",
    vehiclePassengers: "வாகனம் மற்றும் பயணிகள்",
    vehicleType: "வாகன வகை",
    adults: "வயதுவந்தோர்",
    children: "குழந்தைகள்",
    specialRequests: "சிறப்பு கோரிக்கைகள்",
    specialRequestsPlaceholder: "எந்தவொரு சிறப்பு தேவைகள், உணவு கட்டுப்பாடுகள் அல்லது நீங்கள் பார்வையிட விரும்பும் குறிப்பிட்ட இடங்கள் பற்றி எங்களுக்குத் தெரியப்படுத்துங்கள்...",
    estimatedTotal: "மதிப்பிடப்பட்ட மொத்தம்",
    proceedToPayment: "கட்டணத்திற்கு முன்னேறுங்கள்",
    completeBooking: "உங்கள் பதிவை முடிக்கவும்",
    reviewDetails: "உங்கள் விவரங்களை மறுபார்வை செய்து கட்டணத்திற்கு முன்னேறுங்கள்",
    bookingSummary: "பதிவு சுருக்கம்",
    package: "தொகுப்பு",
    duration: "கால அளவு",
    vehicle: "வாகனம்",
    passengers: "பயணிகள்",
    dateTime: "தேதி மற்றும் நேரம்",
    totalAmount: "மொத்த தொகை",
    backToForm: "படிவத்திற்கு திரும்பு",
    payNow: "இப்போது செலுத்துங்கள்",
    
    // Footer
    quickLinks: "விரைவு இணைப்புகள்",
    tourPackages: "சுற்றுலா தொகுப்புகள்",
    contactInfo: "தொடர்பு தகவல்",
    allRightsReserved: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
    privacyPolicy: "தனியுரிமைக் கொள்கை",
    termsOfService: "சேவை விதிமுறைகள்",
    refundPolicy: "பணத்திரும்பல் கொள்கை"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const value = {
    language,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};


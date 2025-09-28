# 🏛️ MAVL Travels - Sivaganga District Tourism

A modern, responsive travel agency website specializing in tourism services for Sivaganga district, Tamil Nadu. Built with React and featuring Razorpay payment integration.

## 🌟 Features

### ✨ Modern UI/UX
- **3-Color Design System**: Forest Green, Vibrant Orange, and Golden Yellow
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Interactive Components**: Dynamic hero slider, tabbed interfaces, and hover effects

### 🎯 Tourism Focus
- **Heritage Tours**: Palace visits, temple circuits, and cultural heritage walks
- **Nature Tours**: Wildlife spotting, nature trails, and agricultural experiences
- **Spiritual Tours**: Temple pilgrimages, meditation retreats, and festival experiences
- **Custom Packages**: Personalized tour packages based on customer preferences

### 💳 Payment Integration
- **Razorpay Integration**: Secure payment processing
- **Real-time Pricing**: Dynamic price calculation based on selections
- **Booking Management**: Complete booking flow with payment confirmation

### 🚗 Transportation Services
- **Fleet Management**: Sedan, SUV, Minivan, and Mini Bus options
- **Professional Drivers**: Experienced and knowledgeable local drivers
- **GPS Navigation**: Accurate routing for all destinations

## 🛠️ Technology Stack

- **Frontend**: React 18.3.1
- **Styling**: CSS3 with CSS Variables
- **Payment**: Razorpay SDK
- **Icons**: Emoji-based icons for better compatibility
- **Build Tool**: Create React App

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd travel-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Razorpay**
   - Get your Razorpay API keys from [Razorpay Dashboard](https://dashboard.razorpay.com/)
   - Update the Razorpay key in `src/components/BookingForm.js`:
   ```javascript
   key: 'your_razorpay_key_here'
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css          # Navigation header
│   ├── Hero.js & Hero.css              # Hero section with slider
│   ├── Services.js & Services.css      # Tourism services
│   ├── Tours.js & Tours.css            # Tour packages
│   ├── Fleet.js & Fleet.css            # Vehicle fleet
│   ├── Pricing.js & Pricing.css        # Pricing plans
│   ├── BookingForm.js & BookingForm.css # Booking and payment
│   └── Footer.js & Footer.css          # Footer with contact info
├── App.js                              # Main app component
├── index.js                            # React entry point
└── index.css                           # Global styles and CSS variables
```

## 🎨 Design System

### Color Palette
- **Primary**: `#2C5F2D` (Forest Green) - Heritage and nature
- **Secondary**: `#FF6B35` (Vibrant Orange) - Energy and warmth
- **Accent**: `#F7B731` (Golden Yellow) - Prosperity and tradition

### Typography
- **Font Family**: Inter, system fonts
- **Headings**: Bold, 700 weight
- **Body Text**: Regular, 400 weight
- **Responsive**: Scales appropriately across devices

## 🔧 Configuration

### Razorpay Setup
1. Create a Razorpay account
2. Get your API keys from the dashboard
3. Update the key in `BookingForm.js`
4. Test with Razorpay test mode

### Customization
- **Colors**: Update CSS variables in `index.css`
- **Content**: Modify component data arrays
- **Images**: Replace placeholder emojis with actual images
- **Contact Info**: Update footer contact details

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

## 🎯 Key Features Explained

### Hero Section
- **Auto-rotating slider** with 3 different tourism themes
- **Call-to-action buttons** for immediate booking
- **Feature cards** highlighting main services

### Booking System
- **Multi-step form** with validation
- **Real-time price calculation**
- **Razorpay payment integration**
- **Booking confirmation** with summary

### Tour Packages
- **Categorized tours**: Heritage, Nature, Spiritual
- **Detailed information**: Duration, price, features
- **Easy booking**: Direct links to booking form

## 🔒 Security Features

- **Form validation** on client side
- **Secure payment processing** via Razorpay
- **Input sanitization** for user data
- **HTTPS ready** for production deployment

## 📞 Support

For support and inquiries:
- **Email**: info@ambikatravels.com
- **Phone**: +91 98765 43210
- **Address**: 123 Main Street, Sivaganga, Tamil Nadu 630561

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 🙏 Acknowledgments

- **Sivaganga District** for the rich cultural heritage
- **Razorpay** for payment processing
- **React Community** for excellent documentation
- **Local Tourism** for inspiration and content

---

**Built with ❤️ for Sivaganga District Tourism**


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedWrapper from './components/AnimatedWrapper';

import LandingPage from './Pages/LandingPage';
import DealsOfTheDay from './Pages/DealsOfTheDay';
import NewArrivals from './Pages/NewArrivals';
import BestSellers from './Pages/BestSellers';
import ClearanceSale from './Pages/ClearanceSale';
import GiftIdeas from './Pages/GiftIdeas';
import Wishlist from './Pages/Wishlist';
import GiftRegistry from './Pages/GiftRegistry';
import LoyaltyRewards from './Pages/LoyaltyRewards';
import SubscriptionPlans from './Pages/SubscriptionPlans';
import ProfileSettings from './Pages/ProfileSettings';
import Addresses from './Pages/Addresses';
import PaymentMethods from './Pages/PaymentMethods';
import Category from './Pages/Category';
import Brand from './Pages/Brand';
import RecentlyViewed from './Pages/RecentlyViewed';
import OrderTracking from './Pages/OrderTracking';
import ReturnRefund from './Pages/ReturnRefund';
import HelpCenter from './Pages/HelpCenter';
import ChatSupport from './Pages/ChatSupport';
import AboutUs from './Pages/AboutUs';
import Careers from './Pages/Careers';
import Blogs from './Pages/Blogs';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsConditions';
import OrderSummary from './Pages/OrderSummary';
import Invoice from './Pages/Invoice';
import ThankYou from './Pages/ThankYou';
import CompareProducts from './Pages/CompareProducts';
import RecentlySearched from './Pages/RecentlySearched';
import Dashboard from './Pages/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AnimatedWrapper>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/deals" element={<DealsOfTheDay />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/best-sellers" element={<BestSellers />} />
            <Route path="/clearance" element={<ClearanceSale />} />
            <Route path="/gift-ideas" element={<GiftIdeas />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/gift-registry" element={<GiftRegistry />} />
            <Route path="/loyalty-rewards" element={<LoyaltyRewards />} />
            <Route path="/subscriptions" element={<SubscriptionPlans />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/addresses" element={<Addresses />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/brand/:brandName" element={<Brand />} />
            <Route path="/recently-viewed" element={<RecentlyViewed />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/return-refund" element={<ReturnRefund />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/chat-support" element={<ChatSupport />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/order-summary" element={<OrderSummary />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/compare-products" element={<CompareProducts />} />
            <Route path="/recently-searched" element={<RecentlySearched />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </AnimatedWrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
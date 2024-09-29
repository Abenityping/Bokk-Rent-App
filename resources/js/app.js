import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import from react-router-dom

// Import your components
//import BootStrap from '../bootstrap';
//import BookForm from './components/flow 1/Books/BookForm';
import Dashboard from './components/flow 1/Dashboard';
import OwnerDashboard from './components/flow 1/Dashboard/OwnerDashboard';

// Ensure that HomePage is either imported or defined
// import HomePage from './components/HomePage'; // Uncomment this if you have a HomePage component

// Define a placeholder for HomePage if it's not available yet
const HomePage = () => {
    return <div>Welcome to the Book Rental App!</div>;
};

// Move App component above where it is used
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* Add other routes here */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/owner-dashboard" element={<OwnerDashboard />} />
            </Routes>
        </Router>
    );
}

// Render the App component
ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import NotFound from './components/404';
import Verify from './components/Verify';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
    return (
        <Routes>
            <Route path="/verify" element={<ProtectedRoute component={Verify} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
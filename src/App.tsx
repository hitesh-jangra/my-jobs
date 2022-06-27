import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { useLocation, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { UserContext } from './User';

function App() {
  const location = useLocation()
  const [user, setUser] = useContext(UserContext);
  // console.log(user)
  switch (location.pathname) {
    case "/login":
      return <Login />
    case "/":
      return <HomePage />
      case "/dashboard":
        return (user ? <Dashboard /> : <Navigate to="/" />)
    default:
      return <h1>Not a valid route</h1>
  }
}

export default App;

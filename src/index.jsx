import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App'
import 'swiper/css';
import AuthProvider from "./App/context/AuthContext";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
   <>
    <AuthProvider>
		<App />
      <Toaster />
    </AuthProvider>
   </>

)
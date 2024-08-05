import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App'
import 'swiper/css';
import AuthProvider from "./App/context/AuthContext";
import { Toaster } from 'react-hot-toast';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
   <>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
		 <App />
      <Toaster />
      </QueryClientProvider>
    </AuthProvider>
   </>

)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './layouts/MainLayout.tsx'
import Home from './pages/Home.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Details from './pages/Details.tsx'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Blogs from './pages/Blogs.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path='/card/:id' element={<Details />} />
            <Route path='/blogs' element={<Blogs/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);

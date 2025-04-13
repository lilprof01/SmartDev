import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Abouts, Home, LoadUp, Portfolio } from '@/Pages/Main'
import { ScrollToTop } from '@/Components/UI'
import { useEffect } from 'react'
import { useThemeStore } from './Stores'
import Cursor from './Components/UI/Cursor'
const App = () => {
  const fetchTheme = useThemeStore((state) => state.fetchTheme);

  useEffect(() => {
    fetchTheme();
  }, [fetchTheme]);

  return (
    <>
    <Toaster />
    <ScrollToTop />
    <Cursor />
      <Routes>
        <Route path="/" element={<LoadUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/projects" element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App

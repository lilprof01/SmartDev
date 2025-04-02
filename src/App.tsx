import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Home } from '@/Pages/Main'
import { ScrollToTop } from '@/Components/UI'
import { useEffect } from 'react'
import { useThemeStore } from './Stores'
import LoadUp from './Pages/Main/LoadUp'
const App = () => {
  const fetchTheme = useThemeStore((state) => state.fetchTheme);

  useEffect(() => {
    fetchTheme();
  }, [fetchTheme]);

  return (
    <>
    <Toaster />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoadUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
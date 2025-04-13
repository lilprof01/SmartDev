import { Footer, Header } from "@/Components/Main"
import { Gradient } from "@/Components/UI"
import Stack from "@/Components/Main/Stack"
import PortProjects from "./PortProjects"

// Porfolio page holding all my projects
const Portfolio = () => {
  return (
    <main className="relative dark:bg-black p-8 sm:pt-16 sm:px-16 transition-all duration-500">
      <Header />
      <Gradient />

      <PortProjects />
      <Stack />
      <Footer />
    </main>
  )
}

export default Portfolio;

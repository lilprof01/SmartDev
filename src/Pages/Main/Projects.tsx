import { Header } from "@/Components/Main"
import { Gradient } from "@/Components/UI"

const Projects = () => {
  return (
    <main className="h-[3000px] relative bg-gradient-to-br from-blue-200 to-white dark:from-blue-950 dark:via-black dark:to-black p-8 sm:pt-16 sm:px-16 transition-all duration-500">
      <Header />
      <Gradient />
    </main>
  )
}

export default Projects

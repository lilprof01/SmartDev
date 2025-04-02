
const Hero = () => {
  return (
    <section role='hero' className="flex flex-col items-center justify-start gap-2 h-full w-full mt-28 sm:mt-20 text-center sm:p-8 max-w-5/6 lg:max-w-4/6 mx-auto select-none z-10">
        <div>
          <h1 className="font-bold text-4xl sm:text-6xl">
            Elevate your digital visibility with a stunning{" "}
            <span className="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-blue-700 dark:to-blue-700 bg-clip-text text-transparent hover:text-blue-900 dark:hover:text-blue-900 transition-all duration-500 cursor-pointer">
              Website
            </span>
            .
          </h1>
          <p className="text-sm sm:text-xl mt-4">
            An online presence is essential for any business today. Get
            you a custom made stunning website that drives results.
          </p>
          <button
            id="btn"
            className="mt-8 px-6 py-3 rounded-full shadow-lg bg-blue-700 text-white dark:bg-transparent dark:border dark:border-gray-300 transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        <div className="h-[60vh] w-full bg-[url('/code.jpg')] bg-cover bg-center shadow-2xl rounded-2xl mt-10 z-10"></div>
      </section>
  )
}

export default Hero

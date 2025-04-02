interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section className="mt-20 sm:mt-32 bg-blue-700 text-white py-12 px-6 sm:px-16 rounded-lg text-center z-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg sm:text-xl mb-8">{description}</p>
      <a
        href={buttonLink}
        className="px-6 py-3 bg-white text-blue-700 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
      >
        {buttonText}
      </a>
    </section>
  );
};

export default CallToAction;
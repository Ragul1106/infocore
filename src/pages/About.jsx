const About = () => {
  return (
    <div className="bg-white min-h-screen px-6 md:px-16 py-12">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          About InfiCore Technologies
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
          InfiCore Technologies is an innovation-driven engineering company
          dedicated to bridging the gap between academic learning and industry
          expectations. We specialize in Embedded Systems, IoT, AI-driven
          products, PCB design, EV technologies, and Industry 4.0 solutions.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-6">
            Our Journey
          </h2>

          <p className="text-gray-700 leading-8 text-lg">
            Founded with the vision of creating infinite possibilities in
            engineering, InfiCore empowers students, startups, and industries
            by providing hands-on product development experience.
          </p>

          <p className="mt-5 text-gray-700 leading-8 text-lg">
            Our mission is to transform ideas into market-ready products while
            nurturing innovation, practical learning, and entrepreneurship.
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Core Expertise
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>✔ Embedded Systems Development</li>
            <li>✔ IoT Product Engineering</li>
            <li>✔ PCB Design & Manufacturing</li>
            <li>✔ AI Edge Computing</li>
            <li>✔ EV System Innovation</li>
            <li>✔ Industrial Automation</li>
          </ul>
        </div>
      </div>

      {/* Vision + Mission */}
      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="leading-8">
            To become a leading innovation hub in engineering education and
            industrial product development.
          </p>
        </div>

        <div className="bg-green-600 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="leading-8">
            To build future-ready engineers through practical learning,
            innovation, and product-driven development.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
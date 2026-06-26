import founder from "../assets/images/founder.png";
import { useNavigate } from "react-router-dom";
import {
  Cpu,
  Wifi,
  CircuitBoard,
  Car,
  Lightbulb,
  GraduationCap,
} from "lucide-react";
const Home = () => {
    const navigate = useNavigate();
    return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#1e3a8a] text-white min-h-screen flex flex-col md:flex-row items-center px-6 md:px-16 py-16 relative overflow-hidden">

  {/* Geometric Grid Pattern */}
  <div className="absolute inset-0 opacity-10">
    <svg width="100%" height="100%">
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  {/* Particle Dots */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
    <div className="absolute top-40 right-32 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
    <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
    <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
    <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
  </div>

  {/* Background Glow Effects */}
  <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>

  {/* Floating Geometric Shapes */}
  <div className="absolute top-32 right-1/4 w-20 h-20 border border-cyan-400/20 rotate-45 animate-spin-slow"></div>
  <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-green-400/20 rounded-full"></div>

  {/* Left Content */}
  <div className="md:w-1/2 relative z-10">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
      Engineering Infinite Possibilities
    </h1>

    <p className="mt-6 text-lg md:text-xl text-gray-300 leading-8 max-w-xl">
      Innovating today, transforming tomorrow through Embedded Systems,
      IoT, Product Development, EV Innovation, and Industry-focused
      Training.
    </p>

   <div className="mt-8 flex flex-wrap gap-4">
  
  <button
    onClick={() => navigate("/courses")}
    className="bg-gradient-to-r from-green-500 to-cyan-500 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition duration-300"
  >
    Explore Courses
  </button>

  <button
    onClick={() => navigate("/contact")}
    className="border border-cyan-400 text-cyan-300 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
  >
    Contact Us
  </button>

</div>
  </div>

  {/* Right Image */}
  <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative z-10">
    <img
      src={founder}
      alt="Founder"
      className="w-[280px] md:w-[420px] rounded-3xl shadow-[0_0_50px_rgba(34,211,238,0.35)] border border-white/10"
    />
  </div>
</section>

      {/* ABOUT PREVIEW */}
      {/* <section className="px-6 md:px-16 py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
            About InfiCore
          </h2>
        </div>

        <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto leading-8">
          InfiCore Technologies is a technology startup dedicated to empowering
          students, colleges, and industries through practical learning,
          innovation, and product development. We bridge academic knowledge and
          industry needs through hands-on training and real-world projects.
        </p>
      </section> */}

      {/* CORE EXPERTISE */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-14">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Cpu className="mx-auto w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold">Embedded Systems</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Wifi className="mx-auto w-12 h-12 text-green-700 mb-4" />
            <h3 className="text-xl font-bold">IoT Solutions</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <CircuitBoard className="mx-auto w-12 h-12 text-purple-700 mb-4" />
            <h3 className="text-xl font-bold">PCB Development</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Car className="mx-auto w-12 h-12 text-orange-700 mb-4" />
            <h3 className="text-xl font-bold">EV Innovation</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <Lightbulb className="mx-auto w-12 h-12 text-red-700 mb-4" />
            <h3 className="text-xl font-bold">Product Development</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <GraduationCap className="mx-auto w-12 h-12 text-indigo-700 mb-4" />
            <h3 className="text-xl font-bold">Industry Training</h3>
          </div>

        </div>
      </section>

      {/* WHY INFiCORE */}
      <section className="bg-white px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-14">
          Why InfiCore?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-8 shadow-lg rounded-2xl">
            <h3 className="font-bold text-xl mb-4">Industry-Oriented</h3>
            <p>Hands-on practical engineering experience.</p>
          </div>

          <div className="p-8 shadow-lg rounded-2xl">
            <h3 className="font-bold text-xl mb-4">Startup Mindset</h3>
            <p>Innovation-driven learning with product building.</p>
          </div>

          <div className="p-8 shadow-lg rounded-2xl">
            <h3 className="font-bold text-xl mb-4">Mentorship Support</h3>
            <p>Guidance from industry experts and founders.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white text-center px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Empowering Future Engineers
        </h2>

        <p className="mt-5 text-lg max-w-3xl mx-auto leading-8">
          Through innovation, product development, entrepreneurship, and
          practical engineering education.
        </p>
      </section>

    </div>
  );
};

export default Home;
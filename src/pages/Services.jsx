import {
  Cpu,
  Wifi,
  CircuitBoard,
  Bot,
  Car,
  Factory,
  GraduationCap,
  Laptop,
} from "lucide-react";

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-14">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Our Services
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          At InfiCore Technologies, we deliver advanced engineering services
          and practical industry-focused training programs for students,
          startups, and industries.
        </p>
      </div>

      {/* Engineering Services */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-8">
          Engineering Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <CircuitBoard className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">PCB Design</h3>
            <p className="text-gray-600">
              High-quality multilayer PCB design and prototyping.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Cpu className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Embedded Systems</h3>
            <p className="text-gray-600">
              Firmware and hardware development for smart products.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Wifi className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">IoT Solutions</h3>
            <p className="text-gray-600">
              Cloud-connected IoT products for real-time monitoring.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Bot className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">AI Edge Computing</h3>
            <p className="text-gray-600">
              AI-enabled embedded devices for smart automation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Car className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">EV Innovation</h3>
            <p className="text-gray-600">
              Electric vehicle control systems and battery management.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Factory className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-xl font-bold mb-3">Industrial Automation</h3>
            <p className="text-gray-600">
              Smart factory solutions and Industry 4.0 integration.
            </p>
          </div>

        </div>
      </div>

      {/* Training Programs */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-green-700 mb-8">
          Training & Skill Development
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <GraduationCap className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Industry Ready Programs
            </h3>
            <p className="text-gray-600">
              Practical engineering courses designed for real-world jobs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <Laptop className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              Internship Training
            </h3>
            <p className="text-gray-600">
              Live projects and product-building experience for students.
            </p>
          </div>

        </div>
      </div>

      {/* Tech Stack Logos */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
          Technologies We Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow">Arduino</div>
          <div className="bg-white p-6 rounded-xl shadow">ESP32</div>
          <div className="bg-white p-6 rounded-xl shadow">Raspberry Pi</div>
          <div className="bg-white p-6 rounded-xl shadow">STM32</div>
          <div className="bg-white p-6 rounded-xl shadow">Python</div>
          <div className="bg-white p-6 rounded-xl shadow">NodeMCU</div>
          <div className="bg-white p-6 rounded-xl shadow">MQTT</div>
          <div className="bg-white p-6 rounded-xl shadow">TensorFlow Lite</div>
        </div>
      </div>

    </div>
  );
};

export default Services;
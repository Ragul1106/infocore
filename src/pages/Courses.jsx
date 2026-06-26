import {
  Cpu,
  Wifi,
  Bot,
  Factory,
  Award,
  Clock,
  BookOpen,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Intelligent Product Engineering",
      icon: <Cpu className="w-12 h-12 text-blue-700" />,
      duration: "6 Months",
      level: "Beginner to Advanced",
      tools: "PCB | Embedded | IoT",
    },
    {
      title: "Smart Connected Systems Engineering",
      icon: <Wifi className="w-12 h-12 text-green-700" />,
      duration: "4 Months",
      level: "Intermediate",
      tools: "ESP32 | Cloud | MQTT",
    },
    {
      title: "Edge AI & Intelligent Embedded Systems",
      icon: <Bot className="w-12 h-12 text-purple-700" />,
      duration: "5 Months",
      level: "Advanced",
      tools: "AI | Python | TensorFlow Lite",
    },
    {
      title: "Industrial Automation & Industry 4.0",
      icon: <Factory className="w-12 h-12 text-orange-700" />,
      duration: "3 Months",
      level: "Professional",
      tools: "PLC | SCADA | Automation",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-6 md:px-16 py-14">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Flagship Programs
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Industry-ready programs designed to build practical engineering
          skills and transform students into product-driven innovators.
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <div className="mb-5">{course.icon}</div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {course.title}
            </h2>

            <div className="space-y-3 text-gray-600">
              <p className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {course.duration}
              </p>

              <p className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {course.level}
              </p>

              <p>
                <span className="font-semibold">Tools:</span> {course.tools}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Outcomes Section */}
      <div className="bg-white rounded-2xl shadow-xl p-10 mb-20">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-8">
          What You Will Gain
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
          <p>✔ Real-world product development experience</p>
          <p>✔ Industry-level hardware & software exposure</p>
          <p>✔ Internship opportunities</p>
          <p>✔ Startup mentorship & innovation support</p>
          <p>✔ Portfolio building with live projects</p>
          <p>✔ Placement-oriented technical training</p>
        </div>
      </div>

      {/* Certification */}
      <div className="bg-blue-900 text-white rounded-2xl p-10 text-center">
        <Award className="w-14 h-14 mx-auto mb-5" />

        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Certification & Internship
        </h2>

        <p className="text-lg max-w-3xl mx-auto leading-8">
          Every program includes project certification, hands-on internship
          experience, and product-building opportunities aligned with industry
          standards.
        </p>
      </div>

    </div>
  );
};

export default Courses;
import services from "../../data/servicesData";
import {
  FaMobileAlt,
  FaBatteryHalf,
  FaCamera,
  FaVolumeUp,
  FaChargingStation,
  FaShieldAlt,
  FaHeadphones,
  FaTools,
} from "react-icons/fa";
function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Our Repair Services
        </h2>

        <p className="text-gray-500 mt-3">
          Fast • Reliable • Doorstep Mobile Repair
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:border-blue-600 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"            >
              <Icon className="text-5xl text-blue-600 mx-auto mb-5 group-hover:scale-110 transition-transform duration-300" />

              <h3 className="font-semibold text-lg mt-2">
                {service.title}
              </h3>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Services;
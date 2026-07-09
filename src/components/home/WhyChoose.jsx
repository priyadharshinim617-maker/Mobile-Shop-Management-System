import whyChooseData from "../../data/whyChooseData";

function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Why Choose MobiCare?
        </h2>

        <p className="text-gray-500 mt-3">
          Trusted service with quality and care.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {whyChooseData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition"
            >
              <Icon className="text-5xl text-blue-600 mx-auto mb-4" />

              <h3 className="font-bold text-lg">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChoose;
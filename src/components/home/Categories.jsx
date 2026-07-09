import categories from "../../data/categoriesData";

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Shop by Category
        </h2>

        <p className="text-gray-500 mt-3">
          Explore our wide range of mobile products
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="group bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:border-blue-600 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <Icon className="text-5xl text-blue-600 mx-auto mb-5 group-hover:scale-110 transition-transform duration-300" />

              <h3 className="font-semibold text-lg">
                {category.title}
              </h3>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Categories;
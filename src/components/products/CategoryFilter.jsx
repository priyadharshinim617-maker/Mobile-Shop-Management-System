function CategoryFilter() {
  const categories = [
    "All",
    "Mobiles",
    "Accessories",
    "Watches",
    "Headphones",
  ];

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className="px-5 py-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition text-sm md:text-base"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
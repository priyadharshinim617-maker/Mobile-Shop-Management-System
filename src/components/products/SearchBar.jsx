function SearchBar({ search, setSearch }) {

  return (

    <input

      type="text"

      placeholder="Search mobiles, accessories..."

      value={search}

      onChange={(e) => setSearch(e.target.value)}

      className="
      w-full
      border
      border-gray-300
      rounded-xl
      px-5
      py-3
      outline-none
      focus:ring-2
      focus:ring-blue-500
      "

    />

  );

}


export default SearchBar;
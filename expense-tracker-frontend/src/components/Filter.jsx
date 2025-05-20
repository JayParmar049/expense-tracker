function Filter({ current, onChange }) {
  return (
    <div className="flex justify-center gap-4 mb-4">
      {["all", "income", "expense"].map((type) => (
        <button
          key={type}
          className={`px-4 py-1 rounded-full ${
            current === type
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onChange(type)}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default Filter;

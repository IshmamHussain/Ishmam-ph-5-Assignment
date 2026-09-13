function TechnologyCard({ tech, isAdded, onAdd }) {
  return (
    <div
      className={
        isAdded
          ? "bg-white border-2 border-pink-500 rounded-xl p-5 flex flex-col shadow-sm transition-colors"
          : "bg-white border-2 border-slate-200 rounded-xl p-5 flex flex-col shadow-sm transition-colors"
      }
    >
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="w-9 h-9 object-contain" />
        <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold">{tech.name}</h3>

      <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-grow">
        {tech.description}
      </p>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
          {tech.category}
        </span>
        <span className="text-slate-500 text-xs">{tech.difficulty}</span>
        <span className="flex items-center gap-1 text-slate-700 text-xs font-medium">
          <span className="text-amber-400">&#9733;</span>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={
          isAdded
            ? "mt-4 w-full py-2.5 rounded-lg font-medium bg-slate-200 text-slate-500 cursor-not-allowed"
            : "mt-4 w-full py-2.5 rounded-lg font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors"
        }
      >
        {isAdded ? "\u2713 Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;
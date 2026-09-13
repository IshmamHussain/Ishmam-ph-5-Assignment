function StackItem({ item, onRemove }) {
  return (
    <div className="flex items-center gap-3 border border-slate-200 rounded-lg p-3">
      <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
      <div className="flex-grow">
        <p className="font-semibold text-sm">{item.name}</p>
        <p className="text-xs text-slate-500">{item.category}</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-slate-400 hover:text-red-500 transition-colors"
        aria-label={"Remove " + item.name}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
          <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

export default StackItem;
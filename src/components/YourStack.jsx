import StackItem from "./StackItem";

function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm sticky top-24">
      <h3 className="text-xl font-bold">Your Stack</h3>
      <p className="text-sm text-slate-500 mt-1">
        {stack.length === 0
          ? "No technologies selected yet."
          : stack.length + " Technology Selected"}
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 border-2 border-dashed border-slate-200 rounded-lg py-10 text-center">
          <p className="text-sm text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-5 flex flex-col gap-3">
          {stack.map((item) => (
            <StackItem key={item.id} item={item} onRemove={onRemove} />
          ))}
          <button
            onClick={onRemoveAll}
            className="mt-2 w-full py-2.5 rounded-lg border border-red-300 text-red-600 font-semibold hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}

export default YourStack;
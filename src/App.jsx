import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleAdd = (tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      return;
    }
    setStack([...stack, tech]);
  };

  const handleRemove = (id) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Explore the <span className="brand-gradient-text">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-600">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <div className="lg:col-span-3">
            {loading ? (
              <p className="text-slate-500">Loading technologies...</p>
            ) : (
              <TechnologyGrid
                technologies={technologies}
                stack={stack}
                onAdd={handleAdd}
              />
            )}
          </div>

          <div className="lg:col-span-1">
            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
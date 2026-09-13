import TechnologyCard from "./TechnologyCard";

function TechnologyGrid({ technologies, stack, onAdd }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          isAdded={stack.some((item) => item.id === tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default TechnologyGrid;
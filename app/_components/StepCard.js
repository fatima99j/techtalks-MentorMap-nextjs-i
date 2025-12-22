export default function StepCard({ title, icon, description, number }) {
  return (
    <>
      <div className="shrink-0 w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
        {icon}
      </div>

      <div className="flex-1 pt-2">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          <span className="mr-2">{number}.</span>
          {title}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      </div>
    </>
  );
}

export default function StepCard({ title, icon, description, number }) {
  return (
    <>
      <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-indigo-100 flex items-center justify-center">
        {icon}
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          <span className="mr-2">{number}.</span>
          {title}
        </h3>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </>
  );
}

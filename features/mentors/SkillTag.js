export default function SkillTag({ label, isMentorPage = false }) {
  return (
    <span
      className={`${
        isMentorPage
          ? "px-4 py-1.5 text-sm rounded-xl"
          : "px-3 py-1 text-xs rounded-lg"
      } bg-blue-50 text-blue-700 font-medium`}
    >
      {label}
    </span>
  );
}

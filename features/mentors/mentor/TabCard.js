export default function TabCard({ children }) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-[#fefefe] rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="p-6">
          <div className="space-y-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function GaransiCard({ index, icon, title, description }) {
  return (
    <div
      key={index}
      className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2
 transition-all duration-300 flex flex-col items-center text-center h-full">
      <div className="flex flex-col gap-2 flex-grow mb-6 w-full items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary-color)]">
          {icon}
        </div>
        <p className="font-bold text-2xl">{title}</p>
        <p className="text-[var(--grey-color)] text-sm">{description}</p>
      </div>
    </div>
  );
}

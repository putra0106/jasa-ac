export default function TestimoniCard({ index, chat, autho }) {
  return (
    <div
      key={index}
      className="relative rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary-color)] shadow-lg">
        <Quote size={22} strokeWidth={2.5} className="text-white" />
      </div>

      <div className="pt-5">
        <p className="italic text-slate-700 leading-8">{chat}</p>

        <div className="mt-6 border-t border-slate-200 pt-4">
          <span className="font-semibold text-[var(--primary-color)]">
            {author}
          </span>
        </div>
      </div>
    </div>
  );
}

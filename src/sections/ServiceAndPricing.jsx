export default function ServiceAndPricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Starter
          </span>
          <div className="flex items-baseline mb-1">
            <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Free
            </span>
          </div>
          <span className="text-xs text-slate-400 block mb-8">Forever</span>

          <ul className="space-y-4 text-sm text-slate-600">
            <li className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-emerald-500 shrink-0"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Full library access</span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-emerald-500 shrink-0"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"></path>
              </svg>
              <span>5 assets / mo</span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-emerald-500 shrink-0"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Regular updates</span>
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <svg
                className="w-4 h-4 text-slate-300 shrink-0"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              <span className="line-through">Desktop and mobile</span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-4 h-4 text-emerald-500 shrink-0"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Premium support</span>
            </li>
          </ul>
        </div>

        <div class="mt-8">
          <button className="w-full py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm tracking-wide transition-colors duration-200">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
}

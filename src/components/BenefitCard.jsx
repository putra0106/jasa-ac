import { CircleCheckBig } from "lucide-react";

export default function BenefitCard({ index, title, description }) {
  return (
    <div key={index}>
      <h2 className="flex items-center gap-3 font-bold text-xl text-yellow-400 ">
        <CircleCheckBig size={18} color="#ffdd00" />
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
}

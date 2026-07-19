export default function TitleSection({
  titleSection,
  colorTitleSection = "greyColor",
}) {
  const colorClasses = {
    greyColor: "text-[var(--grey-color)]/70 border-[var(--grey-color)]/20",
    yellowColor:
      "text-[var(--secondary-color)]/70 border-[var(--secondary-color)]/20",
  };

  return (
    <span
      className={`${colorClasses[colorTitleSection]} border px-4 py-2 rounded-full text-sm`}>
      {titleSection}
    </span>
  );
}

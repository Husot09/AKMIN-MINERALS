type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink md:text-4xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-stone md:text-lg">{text}</p> : null}
    </div>
  );
}

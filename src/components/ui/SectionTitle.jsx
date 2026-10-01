export default function SectionTitle({
  number,
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <div className="eyebrow">
          <span>{number} /</span> {eyebrow}
        </div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  );
}

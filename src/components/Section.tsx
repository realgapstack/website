function Section({
  children,
  className,
  wrapperClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}) {
  return (
    <section
      className={`${wrapperClassName} border-grey border-dotted border-b`}
    >
      <div
        className={`max-w-[979px] mx-auto border-l border-r border-dotted border-l-grey border-r-grey ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;

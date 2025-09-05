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
      className={`${wrapperClassName} border-gray-300 border-dotted border-b`}
    >
      <div
        className={`max-w-[979px] mx-auto border-l border-r border-dotted border-l-gray-300 border-r-gray-300 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;

import { Children, cloneElement, useState, isValidElement } from "react";

type AccordionProps = {
  children: React.ReactNode;
};

export function Accordion({ children }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!isValidElement) {
    return children;
  }

  return (
    <div className="flex flex-col gap-3">
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => setOpenIndex(openIndex === index ? null : index),
        })
      )}
    </div>
  );
}
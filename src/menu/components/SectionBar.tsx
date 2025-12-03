interface SectionBarProps {
  sections: string[];
  activeSection: string;
  onSectionClick: (section: string) => void;
  isVisible: boolean;
}

export function SectionBar({
  sections,
  activeSection,
  onSectionClick,
  isVisible,
}: SectionBarProps) {
  return (
    <div
      className={`fixed left-0 right-0 bg-white z-30 border-b border-orange-100 shadow-sm transition-all duration-300 ${
        isVisible ? "top-[57px]" : "top-0"
      }`}
    >
      <div className="flex items-center justify-around px-2 py-3 overflow-x-auto">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onSectionClick(section)}
            className={`px-3 py-2 rounded-full transition-all whitespace-nowrap text-sm ${
              activeSection === section
                ? "bg-orange-500 text-white"
                : "text-orange-700 hover:bg-orange-50"
            }`}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
}

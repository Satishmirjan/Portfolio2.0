import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  fullWidth = false,
}) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className={fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8'}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
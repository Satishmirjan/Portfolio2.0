import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
}) => {
  const hoverStyles = hoverEffect
    ? 'transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg'
    : '';

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
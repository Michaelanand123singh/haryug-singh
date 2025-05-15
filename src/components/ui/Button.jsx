// src/components/ui/Button.jsx
import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition duration-200';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const finalClassName = classNames(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  return (
    <button
      type={type}
      className={finalClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

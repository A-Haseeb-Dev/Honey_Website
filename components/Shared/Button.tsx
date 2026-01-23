
import React from 'react';

// Added href to ButtonProps to allow the component to function as a link, resolving type errors in Hero component.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-2xl transition-all active:scale-95 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
  
  const variants = {
    primary: "bg-[#FFC107] text-[#8B4513] hover:bg-[#FFB300] focus:ring-[#FFC107]",
    outline: "bg-transparent border-2 border-[#FFC107]/20 text-[#8B4513] hover:bg-[#FFC107]/5 hover:border-[#FFC107]/50 focus:ring-[#FFC107]",
    dark: "bg-[#8B4513] text-[#FFC107] hover:bg-black focus:ring-[#8B4513]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // If href is provided, render as an anchor tag to support site navigation
  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClassName}
        {...(props as any)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

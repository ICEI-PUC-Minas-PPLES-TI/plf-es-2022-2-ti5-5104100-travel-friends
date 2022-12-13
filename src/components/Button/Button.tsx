import React from "react";

interface Props {
  bg: string;
  type: "button" | "submit" | "reset" | undefined;
  color: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ 
    bg,
    type,
    color,
    children,
    onClick,
    disabled
  }) => { 
  return (
    <button
        type={type}
        onClick={onClick}
        style={{
            backgroundColor: bg,
            border: 'none',
            borderRadius: '6px',
            width: "100%",
            padding: '7px 16px',
            color
        }}
        disabled={disabled}
    >
    {children}
    </button>
  );
}

export default Button;

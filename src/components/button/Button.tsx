import React from 'react';
import './Button.css';

interface ButtonProps {
    primary?: boolean;
    label: string;
}
export default function Button({primary, label}: ButtonProps) {
    if (primary) {
        return <div className="button primary-button">{label}</div>
    } else
        return <div className="button secondary-button">{label}</div>
}
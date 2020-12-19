import React from 'react';
import './button.css';
import {Link}  from 'react-rounter-dom';
const STYLES = ['btn-primary', 'btn-outline'];
const SIZES = ['btn--medium', 'btn--large'];
export const Button = ({children, type,  onClick, buttonStyle, size}) => {
    const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkSize = SIZES.includes(size) ? size : SIZES[0];
    return (
        <Link to='/sign-up' className={'btn-mobile'}>
            <button className={`btn ${checkStyle} ${checkSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
};

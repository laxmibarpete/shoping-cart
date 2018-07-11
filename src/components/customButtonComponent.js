import React from 'react';

export const CustomButtonComponent = (props) => {
    const {label} = props;
    return (
        <button {...props}>{props.label}</button>
    )
}


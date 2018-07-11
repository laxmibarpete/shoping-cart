import React from 'react';

export const CustomInputComponent = (props) => {
    const { label, id } = props;
    if (label) {
        return[
            <label for={id}>
                <span className="radio-label"><input {...props}/>{label}</span>
            </label>
        ]
    } else {
        return[
                <div className="customInput"><input {...props}/></div>
        ]
    }
}


import React from 'react'

import './Input.css'

interface InputProps {
    name: string,
    label: string,
    type: string,
    id: string,
}

const Input: React.FC<InputProps>= ({name, label, type, id}) => {
    return (
        <>
        <label className="label" htmlFor={name}>{label}</label>
        <input className="input" type={type} id={id} name={name} />
        </>
    )
}

export default Input;
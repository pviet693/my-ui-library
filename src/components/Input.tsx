import React from "react";

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={styles.input}
    />
);

const styles = {
    input: {
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%"
    }
};

export default Input;

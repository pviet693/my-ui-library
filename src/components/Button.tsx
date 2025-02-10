import React from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
    <button onClick={onClick} style={styles.button}>
        {label}
    </button>
);

const styles = {
    button: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    }
};

export default Button;

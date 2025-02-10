import React from "react";
interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}
declare const Input: React.FC<InputProps>;
export default Input;

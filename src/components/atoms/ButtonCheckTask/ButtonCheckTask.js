import { useState } from "react";

const ButtonCheckTask = () => {
    const [checked, setChecked] = useState(false)
    
    const onClick = () => {
        setChecked(!checked);
    }
    
    return <button onClick={onClick}>
        {checked ? "x" : "o"}
    </button>
}

export default ButtonCheckTask;
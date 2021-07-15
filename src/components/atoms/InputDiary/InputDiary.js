import ButtonCheckTask from "../ButtonCheckTask/ButtonCheckTask";
import "./InputDiary.css";

const InputDiary = () => {
    return <div className="InputDiary">
        <div className="input">
            <span className="text">Terminar la app</span>
        </div>
        <ButtonCheckTask />
    </div>
}

export default InputDiary;
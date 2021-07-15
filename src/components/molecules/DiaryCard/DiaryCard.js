import "./DiaryCard.css";

import H3 from "../../atoms/H3/H3"
import InputDiary from "../../atoms/InputDiary/InputDiary";
import Hr from "../../atoms/Hr/Hr";

const DiaryCard = (props) => {
    const {title, cssClass, tasks} = props;

    return <article className={cssClass}>
        <H3>{title}</H3>
        <Hr />
        <div className="inputDiv">
        <InputDiary />
        </div>
        
    </article>
}

export default DiaryCard;
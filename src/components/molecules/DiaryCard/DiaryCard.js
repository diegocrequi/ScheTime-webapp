import "./DiaryCard.css";

import H3 from "../../atoms/H3/H3"
import DiaryInput from "../../atoms/DiaryInput/DiaryInput";
import Hr from "../../atoms/Hr/Hr";

const DiaryCard = (props) => {
    const {title, cssClass, tasks} = props;

    return <article className={cssClass}>
        <H3>{title}</H3>
        <Hr />
        <div className="inputDiv">
        <DiaryInput />
        </div>
        
    </article>
}

export default DiaryCard;
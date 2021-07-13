import "./DiaryCard.css";

import H3 from "../H3/H3"

const DiaryCard = (props) => {
    const {title, cssClass, tasks} = props;

    return <article className={cssClass}>
        <H3>{title}</H3>
        <hr />
    </article>
}

export default DiaryCard;
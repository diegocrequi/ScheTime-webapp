import "./Diary.css";

import H2 from "../H2/H2"
import DiaryDay from "../DiaryDay/DiaryCard";

const Diary = () => {
    return <main className="Diary">
        <div className="diaryHeader">
            <H2>Julio 2021</H2>
            <span style={{margin: "0.5rem", border: "black 1px solid"}}>Anterior</span>
            <span style={{margin: "0.5rem", border: "black 1px solid"}}>Siguiente</span>
        </div>
        <div className="cardDiv">
            <DiaryDay title="Lunes 10/07"  cssClass="w-20"/>
            <DiaryDay title="Martes 11/07" cssClass="w-20"/>
            <DiaryDay title="Miércoles 12/07" cssClass="w-20"/>
            <DiaryDay title="Jueves 13/07" cssClass="w-20"/>
            <DiaryDay title="Viernes 14/07" cssClass="w-20"/>
            <DiaryDay title="Sábado 15/07" cssClass="w-20"/>
            <DiaryDay title="Domingo 16/07" cssClass="w-20"/>
            <DiaryDay title="Pendientes" cssClass="w-60"/>
        </div>
    </main>;
}

export default Diary;
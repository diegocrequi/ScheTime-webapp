import "./Diary.css";

import H2 from "../../atoms/H2/H2"
import DiaryCard from "../../molecules/DiaryCard/DiaryCard";

const Diary = () => {
    return <main className="Diary">
        <div className="diaryHeader">
            <H2>Julio 2021</H2>
            <span style={{margin: "0.5rem", border: "black 1px solid"}}>Anterior</span>
            <span style={{margin: "0.5rem", border: "black 1px solid"}}>Siguiente</span>
        </div>
        <div className="cardDiv">
            <DiaryCard title="Lunes 10/07"  cssClass="w-20"/>
            <DiaryCard title="Martes 11/07" cssClass="w-20"/>
            <DiaryCard title="Miércoles 12/07" cssClass="w-20"/>
            <DiaryCard title="Jueves 13/07" cssClass="w-20"/>
            <DiaryCard title="Viernes 14/07" cssClass="w-20"/>
            <DiaryCard title="Sábado 15/07" cssClass="w-20"/>
            <DiaryCard title="Domingo 16/07" cssClass="w-20"/>
            <DiaryCard title="Pendientes" cssClass="w-60"/>
        </div>
        <div className="buttonAddTaskDiv">
                
        </div>
    </main>;
}

export default Diary;
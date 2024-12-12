import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";


const ListaTareas = ({arrayListaTareas}) => {

    return (
        <article className="container">
            <ListGroup>
                {
                    arrayListaTareas.map((tarea, posicion)=><Tarea key={posicion} tarea={tarea}></Tarea>)
                }
            </ListGroup>
        </article>
    );
};

export default ListaTareas;
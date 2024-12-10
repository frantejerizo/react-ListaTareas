import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";


const ListaTareas = () => {
    return (
        <article className="container">
            <ListGroup>
                <Tarea></Tarea>
                <Tarea></Tarea>
                <Tarea></Tarea>
            </ListGroup>
        </article>
    );
};

export default ListaTareas;
import { XCircle } from "react-bootstrap-icons";
import { Button, ListGroup } from "react-bootstrap";

const Tarea = ({tarea, funcionBorrarTarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {tarea} <Button variant="danger" onClick={()=> funcionBorrarTarea(tarea)}><XCircle></XCircle></Button>
        </ListGroup.Item>
    );
};

export default Tarea;
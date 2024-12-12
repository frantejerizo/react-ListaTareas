import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import ListaTareas from "./ListaTareas";
import { useForm } from "react-hook-form";
import { useState } from "react";

const FormularioTarea = () => {
    const [listaTareas, setListaTareas] = useState([]) 

    // asi es el formato de la biblioteca para validar que descargamos
    const {register, handleSubmit, formState: { errors }, reset} = useForm()

    // esta es la funcion que se va a ejecutar si es que pasa todas las validaciones correctamente
    const PostValidacion = (data) =>
    {
      if(listaTareas.some((tarea)=> tarea === data.tarea.trim()))
      {
        alert('Esta tarea ya existe')
      }
      else
      {
        // como listaTareas es un estado, hay una regal de react que dice que no se puede modificar, asi que hay que buscar una alternativa a push
        // ... operador spread -> creamos un array nuevo que copia todo lo que ya habia en listaTareas (eso lo hace con spread), y al final del array agregamos la nueva tarea con data.tarea
        setListaTareas([...listaTareas,data.tarea])
        reset()
      }
      
    }

    return (
        <section>
          <Form onSubmit={handleSubmit(PostValidacion)} className="container d-flex mb-4">
            <Form.Group controlId="formTarea" className="w-100">
              <Form.Control type="text" placeholder="Ingrese una tarea" {...register("tarea",{
                required: 'La tarea es un dato obligatorio',
                minLength: {value: 4, message: 'La tarea debe tener 4 caracteres como minimo'},
                maxLength: {value: 50, message: 'La tarea debe tener 50 caracteres como maximo'}
              })}/>
              <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              <PlusCircle></PlusCircle>
            </Button>
          </Form>
          <ListaTareas></ListaTareas>
        </section>
    );
};

export default FormularioTarea;
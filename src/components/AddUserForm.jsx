import React from 'react'
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text"
                {...register("name", {  // forma actual para que funciones las restrincciones del input
                    required: { value: true, message: 'Campo Requerido' },
                    minLength: { value: 5, message: "Debes ingresar minimo 5 caracteres" }
                })}
            />
            <label>Username</label>
            <input type="text"
                {...register("username", {  // forma actual para que funciones las restrincciones del input
                    required: { value: true, message: 'Campo Requerido' },
                    minLength: { value: 5, message: "Debes ingresar minimo 5 caracteres" }
                })}
            />
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;
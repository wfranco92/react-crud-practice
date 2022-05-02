import React from 'react'
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text"
                {...register("name", {
                    required: { value: true, message: 'Campo Requerido' },
                    minLength: { value: 5, message: "Debes ingresar minimo 5 caracteres" }
                })}
            />
            <span>{errors?.name?.message}</span>
            <label>Username</label>
            <input type="text"
                {...register("username", {
                    required: { value: true, message: 'Campo Requerido' },
                    minLength: { value: 5, message: "Debes ingresar minimo 5 caracteres" }
                })}
            />
            <span>{errors?.name?.message}</span>
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;
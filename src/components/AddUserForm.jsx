import React from 'react'
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data);
        e.target.reset();
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
                <label>Name</label>
                <input type="text"
                    {...register("name", {
                        required: { value: true, message: 'Campo Requerido' },
                        minLength: { value: 5, message: "Debes ingresar minimo 5 caracteres" }
                    })}
                    className="form-control"
                />
                <span>{errors?.name?.message}</span>
                <label>Username</label>
                <input type="text"
                    {...register("username", {
                        required: { value: true, message: 'Campo Requerido' },
                        minLength: { value: 5, message: "Debes ingresar minimo 5 caracteres" }
                    })}
                    className="form-control"
                />
                <span>{errors?.name?.message}</span>
                <div className="d-grid gap-2 col-6 mx-auto mt-4">
                <button
                    type="submit"
                    className="btn btn-success"
                >Add new user</button>
                </div>
            </form>
        </div>

    );
}

export default AddUserForm;
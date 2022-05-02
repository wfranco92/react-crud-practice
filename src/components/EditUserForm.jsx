import React from 'react';
import { useForm } from 'react-hook-form';


const EditUserForm = (props) => {

        const { register, handleSubmit, formState: { errors }, setValue } = useForm({
            defaultValues: props.currentUser
        });

        setValue('name', props.currentUser.name);
        setValue('username', props.currentUser.username);


        const onSubmit = (data, e) => {
            data.id = props.currentUser.id
            props.updateUser( props.currentUser.id, data)
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
                <button>Edit user</button>
            </form>
        );
    }

    export default EditUserForm;
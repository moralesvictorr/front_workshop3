import React from 'react'
import { useForm } from 'react-hook-form'
import ButtonPromo from '../Components/ButtonPromo';

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='First Name' required {...register("firstName")} />
      <input placeholder='Last Name' required {...register("lastName")} />
      <input placeholder='Email Address' type="email" required {...register("email")} />
      <input placeholder='Password' type="password" required {...register("password")} />
      <input type="submit" />
    </form>
  )
}

export default Form
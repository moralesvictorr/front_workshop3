import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='First Name' required {...register("firstName")} />
      <input placeholder='Last Name' required {...register("lastName")} />
      <input placeholder='Email Address' type="email" required {...register("email")} />
      <input placeholder='Password' type="password" required {...register("password")} />
      <button type='submit' className='boton'>CLAIM YOUR FREE TRIAL</button>

      <p id="terminos1">By clicking the button you are agreeing to our <strong id="terminos2">Terms and Services</strong>
    </form>
  )
}

export default Form
import React, { Fragment, useState } from 'react'
import { set, useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [entradas, setEntradas] = useState([]);

  const procesarForm = (data, e) => {
    console.log(data);
    setEntradas([
      ...entradas, 
      data
    ])
    e.target.reset()
  } 
  return (
    <Fragment>
    <form onSubmit={handleSubmit(procesarForm)}>
      <div className='container'>

        <input className='inputs'  placeholder='First Name' {...register("firstName", { required:true})} />
        {errors.firstName?.type === 'required' && <small className='error-color' role="alert">First name is required</small>}

        <input className='inputs'  placeholder='Last Name' {...register("lastName", { required:true})} />
        {errors.lastName?.type === 'required' && <small className='error-color' role="alert">Last name is required</small>}

        <input className='inputs'  placeholder='Email Address' type="email" {...register("email", { required:"Email Address is required"})} aria-invalid={errors.email ? "true" : "false"}   />
        {errors.email && <small className='error-color' role="alert">{errors.email?.message}</small>}

        <input className='inputs'  placeholder='Password' type="password" {...register("password", { required:true, pattern:/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&+-_=<>;:])\S{8,64}$/})} />
        {errors.password && <small className='error' role="alert">Password is required and must be more safe</small>}

        <button type='submit' className='boton'>CLAIM YOUR FREE TRIAL</button>

        <p id="terminos1">By clicking the button you are agreeing to our <strong id="terminos2">Terms and Services</strong></p>

      </div>
      
    </form>
    <ul className='registros'>
      <h1>Registros</h1>
      {
        entradas.map((item) => 
          <li>
            {item.firstName} - {item.lastName} - {item.email} - {item.password}
          </li>
        )
      }
    </ul>
  </Fragment>
  )
}

export default Form
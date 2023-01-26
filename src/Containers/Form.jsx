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

        <input className={`form-control ${errors.firstName ? 'inputs invalid' : 'inputs'}`}  placeholder='First Name' {...register("firstName", { required:true})} />
        <div className='error-container'>
        {errors.firstName?.type === 'required' && <small className='error-color' role="alert">First name is required</small>}

        </div>

        <input className={`form-control ${errors.lastName ? 'inputs invalid' : 'inputs'}`}  placeholder='Last Name' {...register("lastName", { required:true})} />
        <div className='error-container'>
        {errors.lastName?.type === 'required' && <small className='error-color' role="alert">Last name is required</small>}
        </div>

        <input className={`form-control ${errors.email ? 'inputs invalid' : 'inputs'}`}  placeholder='Email Address' type="email" {...register("email", { required:"Email Address is required"})} aria-invalid={errors.email ? "true" : "false"}   />
        <div className='error-container'>
        {errors.email && <small className='error-color' role="alert">{errors.email?.message}</small>}
        </div>

        <input className={`form-control ${errors.password ? 'inputs invalid' : 'inputs'}`}  placeholder='Password' type="password" {...register("password", { required:true, pattern:/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])\S{8,64}$/})} />
        <div className='error-container'>     
        {errors.password && <small className='error-color' role="alert">Password is required and must be safe</small>}
        </div>
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
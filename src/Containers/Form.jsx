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
        {errors.firstName?.type === 'required' && <span role="alert">First name is required</span>}
        <input className='inputs'  placeholder='Last Name' required {...register("lastName")} />
        <input className='inputs'  placeholder='Email Address' type="email" required {...register("email")}  />
        <input className='inputs'  placeholder='Password' type="password" required {...register("password")} />
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
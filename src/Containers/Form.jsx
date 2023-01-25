import React, { Fragment, useState } from 'react'
import { set, useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  //const onSubmit = data; 
  const [entradas, setEntradas] = useState([]);
  const [mostrar, setMostrar] = useState("")
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
        {/* <input
    
    id="accountReference"
    
    className={
      errors?.accountReference?.message ? styles["error"] : "no-error"
    }
    
    {...register("accountReference", {
      
      required: "Account reference is required",
      
    })} 
  /> */}
        <input className='inputs' name='firstname' placeholder='First Name' {...register("firstName", { required: "firstname cannot be empty" })} />
        <input className='inputs' name='lastname' placeholder='Last Name' required {...register("lastName")} />
        <input className='inputs' name='email' placeholder='Email Address' type="email" required {...register("email")} />
        <input className='inputs' name='password' placeholder='Password' type="password" required {...register("password")} />
        <button type='submit' className='boton'>CLAIM YOUR FREE TRIAL</button>

        <p id="terminos1">By clicking the button you are agreeing to our <strong id="terminos2">Terms and Services</strong></p>

      </div>
      
    </form>
    <ul className='prueba'>
      <h1>prueba</h1>
      {console.log(entradas)}
      {
        entradas.map((item, index) => {
          <li key={index}>
            {item.firstname} - {item.lastname} - {item.email} - {item.password}
          </li>
        })
      }
    </ul>
  </Fragment>
  )
}

export default Form
import React, { useContext } from 'react'
import authContext from '../context/auth/AuthContext'
import '../App.css'
const Errors = () => {

    const { errors } = useContext(authContext)
    console.log('errors', errors)

    return (
        <div className='errors'>
            {errors?.map((item, idx) => (
                <div key={idx} >{item.msg}</div>
            ))}
        </div>
    )
}

export default Errors
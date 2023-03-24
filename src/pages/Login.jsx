import React from 'react'
import { Form_Login } from '../components/Form_Login'
import "../style/style.css"

export const Login = () => {
  return (
    <div className="login-section backdrop-opacity-10 backdrop-invert bg-white/30">
      <div>
        <Form_Login />
      </div>
    </div>
  )
}
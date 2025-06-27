import React from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  return (
    <>
      <h1>about</h1>
      <h2>This is Namaste React web series</h2>
    <User name={"Arvind singh (function)"}/>
    <UserClass name={"Akshay Saini (class) "} location={"jalandhar"}/>
    </>
  )
}

export default About

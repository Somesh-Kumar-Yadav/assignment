import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const Home = () => {
  return <p>Home Page</p>
}
const About = () => {
  return <p>About Page</p>
}
const Contact = () => {
  return <p>Contact Page</p>
}
const Services = () => {
  return <p>Services Page</p>
}
const Login = () => {
  return <p>Login Page</p>
}
function NavBar() {
  return (
    <>
      <ul>
        <li><Link role='link' to="/">Home</Link></li>
        <li><Link role='link' to="/contact">Contact</Link></li>
        <li><Link role='link' to="/about-us">About</Link></li>
        <li><Link role='link' to="/services">Services</Link></li>
        <li><Link role='link' to="/login">Login</Link></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/about-us"><About/></Route>
        <Route path="/services"><Services/></Route>
        <Route path="/login"><Login/></Route>
      </Switch>
    </>
  )
}

export default NavBar

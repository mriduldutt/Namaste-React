import React from 'react';
import { Component } from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component{
  
  constructor(props){
     super(props);

     console.log("Parent Constructor");
   }

   componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

   render(){
    console.log("Parent Render");
    return(
      <div>
      <h1>About Class Component</h1>
      <h2>Namaste from here! </h2>
      {/* <User name={"Akshay (Function Component) "}/> */}
      <UserClass name={"Akshay (Class Component) "} location={"Noida Class"}/>
    </div>
    )
   }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <h2>Namaste from here! </h2>
//       {/* <User name={"Akshay (Function Component) "}/> */}
//       <UserClass name={"Akshay (Class Component) "} location={"Noida Class"}/>
//     </div>
//   )
// }

export default About;

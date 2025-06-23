import React from 'react';
import { Component } from 'react';
import User from './User';
import UserClass from './UserClass';


class About extends React.Component{
  
  constructor(props){
     super(props);

     console.log("AboutParent Constructor");
   }

   componentDidMount() {
    console.log("About Parent ComponentDidMount");
    // Api calls
  }

   render(){

    return(
      <div>
      <h1>About Class Component</h1>
      <h2>Namaste from here! </h2>
      {/* <User name={"Akshay (Function Component) "}/> */}
      <UserClass name={"Akshay (Class Component) "} location={"Noida Class"}/>
            
            <br/>
      
      <User name={"Akshay (Function Component) "}/>

    </div>
    )

    console.log("Parent Render");
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

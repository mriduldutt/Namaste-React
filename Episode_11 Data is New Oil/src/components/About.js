import React from 'react';
import { Component } from 'react';
// import User from './User';
import UserClass from './UserClass';
import userContext from '../utils/userContext';


class About extends React.Component{
  
  constructor(props){
     super(props);

     //console.log("Parent Constructor");
   }

   componentDidMount() {
    //console.log("Parent ComponentDidMount");
    // Api calls
  }

   render(){
   // console.log("Parent Render");
    
   return(
      <div>
      <h1>About Class Component</h1>
      <div>
        LoggedIn User : 
        <userContext.Consumer>
          {(data) => { 
            return ( 
            <h3 className='text-bold'>{data.loggedInUser}</h3> 
       )}}
        </userContext.Consumer>
       </div>
      <h2>Namaste from here! </h2>
      <UserClass name={"Akshay (Class Component) "} location={"Noida Class"}/>
    </div>
    )
   }
}


export default About;

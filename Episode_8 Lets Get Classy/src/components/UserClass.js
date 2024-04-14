import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // Super is used to call the constructor of the parent class
    super(props);

    // Initialising state
    this.state = {
         count : 0,
         count2: 2,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child ComponentDidMount");
  }

  render() {
    console.log("Child Render");
    // destructuring props & State
    const { name, location } = this.props;
    const {count,count2} = this.state;

    return (
      <div className="userCard">
        <h1>Count : {count} , {count2}</h1>
        <button onClick={()=>{
            // Never directly update state variables
            
            this.setState({
                count : count + 1,
                count2: count2 + 2,
            });

        }}>Count Increase</button>
        
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contact : @akshay</h3>
        <h3>Age : 25</h3>
      </div>
    );
  }
}

export default UserClass;

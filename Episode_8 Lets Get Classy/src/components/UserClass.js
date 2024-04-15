import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // Super is used to call the constructor of the parent class
    super(props);

    // Initialising state
    this.state = {
         userInfo : {
           name : "Dummy name",
           location : "Dummy location",
           avatar_url : "https://dummy-photo.com",
          }
    };
   console.log(this.props.name +" Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name +" Child ComponentDidMount");
    
    // Api Calls 
    const data = await fetch("https://api.github.com/users/mriduldutt");
    const json = await data.json();
    
    this.setState({
      userInfo : json,
    })
    
    console.log(json);
  }

// More than one useEffect in JS use in class like below
  componentDidUpdate(prevProps, prevState) {
   if(this.state.count != prevState.count){
    // Code to execute when count changes
   }

   if(this.state.count2 != prevState.count2){
    // Code to execute when count changes
   }
  }

  componentWillUnmount() {
    
    console.log("Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");
    // destructuring props & State
    // const { name, location } = this.props;
    const {userInfo} = this.state;

    return (
      <div className="userCard">
        {/* <h1>Count : {count} , {count2}</h1>
        <button onClick={()=>{
            // Never directly update state variables
            
            this.setState({
                count : count + 1,
                count2: count2 + 2,
            });

        }}>Count Increase</button> */}
         
        <img src = {userInfo.avatar_url}/>
        <h2>Name : {userInfo.name}</h2>
        <h3>Location : {userInfo.location}</h3>
        <h3>Age : 25</h3>
      </div>
    );
  }
}

export default UserClass;

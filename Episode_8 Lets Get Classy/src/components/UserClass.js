import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // Super is used to call the constructor of the parent class
    super(props);

    // Initialising state in react class component
    this.state = {
         userInfo : {
           name : "Dummy name",
           location : "Dummy location",
           avatar_url : "",
          },
          resdata:[
            {"name":"Restraunt 1",cusines:"Restraunt 1 Cusines"},
            {name:"Restraunt 2",cusines:"Restraunt 2 Cusines"},
            {name:"Restraunt 3",cusines:"Restraunt 3 Cusines"}],
          count : 0,
          count2 : 0
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
   if(this.state.count !== prevState.count){
    // Code to execute when count changes
   }

   if(this.state.count2 !== prevState.count2){
    // Code to execute when count changes
   }
  }

  componentWillUnmount() {
    
    // console.log("Component Will Unmount");
  }

  render() {


    console.log(this.props.name + "Child Render");
    // destructuring props & State
    // const { name, location } = this.props;
    const {userInfo} = this.state;
    
    const clickBtnFunction = () => {
            // Never directly update state variables           
            this.setState({
                count : this.state.count + 1,
            });           
    }
    

    return (
      <div className="userCard">
        <h1>Count : {this.state.count}</h1>
        <button onClick={ clickBtnFunction }>Count Increase</button>
         

        <h1>resdata : {this.state.resdata[0].name}</h1>
       
        <img src = {userInfo.avatar_url}/>
        <h2>Name : {userInfo.name}</h2>
        <h3>Location : {userInfo.location}</h3>
        <h3>Age : 25</h3>
      </div>
    );
  }
}

export default UserClass;


import { useEffect, useState } from "react";


 const User = (props) => {

  // destructuring props
  const { name } = props;

  //Create a dummy Hook , that's how we use state in functional component
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(1);
  
  useEffect(() => {
    //Api Calls

    //unmounting in functional component
    return () => {
      
    }
  },[]);



  const btnFunction = () => {
    setCount(count + 1);
    setCount2(count2 + 1);
  };
  
  return(
    <div className="userCard">
          <h1>Count : {count} , {count2}</h1>
          <h2>Name : {name}</h2>
          <button onClick={btnFunction}>Increase</button>

          <h3>Location : Noida</h3>
          <h3>Contact : @akshay</h3>
          <h3>Age : 25</h3>
    </div>
  )
}


export default User;
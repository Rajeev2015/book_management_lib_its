import axios from 'axios';
import React, { useState } from 'react'


export const About = () => {
  const [state, setState] = useState(0);
  const [store, setStore] = useState([])
  const [color, setColor] = useState("Red")

  // console.log(useState(0));
  const decrement = () => {
    setState(state - 1)

  }
  const increment = () => {
    setState(state + 1)

  }

  // const getLive=()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res)=>{
  //     console.log(res.data);
  //     setStore(res.data)

  //   })
  //   .catch((err)=>{
  //     console.log(err);

  //   })
  // }
  const getLive = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(response);
      console.log(response.data);
      setStore(response.data)

    } catch (err) {
      console.log(err);

    }


  }

  const changeColor = () => {
    setColor("Blue")
  }

  return (
    <>
      {console.log("re-render")
      }
      <div>About</div>
      <div style={{ textAlign: "center" }}>
        <div>Total count of number is : {state}</div>
        <br />
        <input type="submit" value="Decremnet" onClick={()=>{setState(state-1)}} />&nbsp;
        <input type="submit" value="Increment" onClick={()=>{setState(state+1)}} />&nbsp;
        <br />
        <br />
        {color}
        <br />
        <input type="submit" value="Change Color" onClick={changeColor} />
        <br />
        <br />
        <input type="submit" value="Get Live" onClick={getLive} />
        <br />
        <ul>
          {
            store.map((v, i) => {
              return (
                <li>{v.userId + " " + v.title}</li>
              )
            }
            )
          }
        </ul>
      </div>
    </>
  )
}

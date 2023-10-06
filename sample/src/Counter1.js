import React, { useContext, useEffect, useMemo, useReducer, useState } from "react"
import GlobalContext from "./Context";
function reducer(state, action){
  switch(action.type){
    case "INC": return {...state, count: state.count + 1};
    case "MSG": return {...state, message: state.message + state.count};
    default: return state;
  }
}
const Message = React.memo(function({message}){
  console.log('message is rendered')
  return(
    <p>{message}</p>
  )
})
export default function Counter1(){
  //const [state, setState] = useState({count: 1, message: "hello"});
  const {state} = useContext(GlobalContext);
  const [counterState, dispatch] = useReducer(reducer, state.initicalCounter)
  const increase = () => {
    //setState({...state, count: state.count + 1});
    dispatch({type: "INC"})
  }
  const changeMessage = () => {
    //setState({...state, message: state.message + state.count});
    dispatch({type: "MSG"})
  }
  const [msg2, setMessage2] = useState("world");
  return(
    <div>
      <p>{counterState.count}</p>
      <p>{counterState.message}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={changeMessage}>Change Message</button>
      <Message message={msg2}/>
    </div>
  )
}
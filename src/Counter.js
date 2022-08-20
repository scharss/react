import React, {useState} from 'react';

export function Counter(){
	
	const [counter, setCounter] = useState(10)
	
	return (
	
	<div>
	
	<h1>Counter: {counter}</h1>
	<button onClick={()=>setCounter(counter+1)}>Sumar</button>
	
	</div>
	       )
}
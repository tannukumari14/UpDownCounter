"use client"
import React, { useState } from 'react';

function Button(){
	const[item,setItem]=useState(0);
	
	function increment(){
		setItem(item+1)
	}
	
	function decrement(){
		setItem(item-1)
	}
	
	return(
		<div>
			<p>{item}</p>
      		<button onClick={increment}>+plus</button>
      		<button onClick={decrement}>-minus</button>
    	</div>
	);
};
export default Button;

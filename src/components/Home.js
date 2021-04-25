import React from 'react';
import logo from '../ilalogo.jpeg';


function HomePage(){
	console.log(logo)
	return(
		<div  >
			<img  src={logo} class="img-fluid"/>
			<p1 class="d-flex justify-content-center">
				ILA studios is a place for artists to express creativity through clotheing art and more
			</p1>
		</div>

	);
}
export default HomePage
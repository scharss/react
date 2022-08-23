import {Navlink} from 'react-router-dom'
import '../styles.css'
import * as React from "react";
import { Link } from "react-router-dom";

export function Navbar(){
	return (
	<div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    


<div className="barra">
	 <ul id="lista1">
             <li>
                 <Link className='link' to="/">Inicio</Link>
             </li> 
			 
             <li>
                 <Link className='link' to="/about">About</Link>
             </li> 
             <li>
                 <Link className='link' to="/users">About</Link>
             </li> 
             
             <li>
			 <button type="button" className="btn btn-primary">Primary</button>
			 </li>
         </ul>



                </div>

            </div>
        </div>
	
	
	<div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <ul>
					<li>
					<img src={'https://robohash.org/user3'}/>
					</li>
	
	<li>
	<Link to='/about'>about</Link>
	</li>
	
	<li>
	<Link to='/Users'>users</Link>
	</li>
	
	
	</ul>
	
                </div>

            </div>
        </div>
		
		
		
		
		<div class="container">
            <div class="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    

				<h2>Columna 1</h2>
                    
                </div>
				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    

				<h2>Columna 2</h2>
                    
                </div>
				<div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    

				<h2>Columna 3</h2>
                    
                </div>

            </div>
        </div>
		
		
		
		
		
		
		
		
		
		
	
	
	
	
	</div>
	
	)
}
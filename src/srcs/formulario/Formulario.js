import './task.css'


export function Formulario(){
	
	return(
	<div className="formy">
	
	<img className="img1" src={'https://robohash.org/user3'}/>
	
{/*  onChange*/}

<p>Nombre: <input id="demo" onChange={function(e){console.log(e.target.value)}}/></p>

<br />

<p>Correo: <input id="demo1" onChange={function(e){console.log(e.target.value)}}/></p>

		
		
		
	{/*  onSubmit */}	
		<form onSubmit={(e)=>{
		e.preventDefault()
		var x = document.getElementById("demo").value
		var y = document.getElementById("demo1").value
		alert(x +" " +y)
		}}>
		<h2>Registro de usuarios</h2>
		<button>Enviar</button>
		
		</form>
		
	
	</div>
	
	
	
	
	)
}
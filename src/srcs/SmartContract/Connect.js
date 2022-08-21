import { ethers } from "ethers"

let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer
export function Connect() {
	
	
	return (<div>
	
	<button
	onClick={async ()=>{   // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();
	var cuenta = await signer.getAddress();
	document.getElementById("demo").innerHTML= "Cuenta: " + cuenta;
    console.log("Account address s:", await signer.getAddress());}}
	
	
	>Conectar</button>
	<br />
	
	<h3>Smart Contract</h3>
	<p id="demo">Cuenta:</p>
	
	
	
	
	</div>
	
	)
} 
const address = "0xBEFcA8Cd9EAe06C0b6Da44CF0b877fc7813e0915"

const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "url",
				"type": "string"
			}
		],
		"name": "storex",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "urlNFT",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export function ReadContract(){
	 
	
	 
	return (<div>
	
	<button
	onClick={async ()=>{
		const contracto = new ethers.Contract(address, abi, provider);
	
	const asunto = await contracto.urlNFT();
	document.getElementById("demo2").innerHTML= "Mensaje: " + asunto;
	
	}}
	
	
	
	
	>Read Contract</button>
	
	 <p id="demo2">Mensaje:</p>
		    </div>)
	
	
}


export function WriteContract()

{return(<div>

	{/*Formulario y botón*/}

	<p>Nombre: <input id="furl" onChange={function(e){
		var caja = e.target.value
		console.log(caja)}}/></p>

		
		
		
	{/*  onSubmit 
		<form onSubmit={(e)=>{
		e.preventDefault()
		var x = document.getElementById("furl").value
		
		alert(x)
		document.getElementById("furl").value = " "
		
		}}>
		<h2>Registro de usuarios</h2>
		<button >Enviar</button>
		
		</form>*/}	
		
	{/*Formulario y botón*/}


<button
onClick={async ()=>{
	
	const storingx = new ethers.Contract(address, abi, signer);
	
	var x = document.getElementById('furl').value;
	
	
	await storingx.storex(x);
    
    document.getElementById('furl').value = " ";
}}




>Write Contract</button>



</div>)}
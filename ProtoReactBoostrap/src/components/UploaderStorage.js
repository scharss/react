import { NFTStorage, File } from 'nft.storage'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles.css'



var archivo = 0
export function Filer(){
	return (<>
	
	
		<p>Archivo <input className="myfile" id="file" type="file" multiple  onChange={function(e){
		 archivo = e.target.value
		console.log(archivo)}}/> </p>
		
		
		
	</>)
	
}

export function Boton(){
	return(<>
	
		<Button variant="primary">Subir</Button>{' '}
		
		
	
	</>)
}
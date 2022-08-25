import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Manager} from "./pages/Manager";
import {NotFoundPage} from "./pages/NotFoundPage";
import {MyMenu} from "./components/Navbar";
import {Test} from "./pages/Test";

export default function App(){
	return(
	<BrowserRouter>	
	
	
	<MyMenu />
	<Routes>
	<Route path='/' element={<HomePage />} />
	<Route path='/manager' element={<Manager />} />
	<Route path='/test' element={<Test/>} />
	
	
	<Route path='*' element={<NotFoundPage />} />
	</Routes>
		
	</BrowserRouter>
	);
}
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Manager} from "./pages/Manager";
import {NotFoundPage} from "./pages/NotFoundPage";
import {MyMenu} from "./components/Navbar";
import {Test} from "./pages/Test";
import {Uploader} from "./pages/Uploader"

export default function App(){
	return(
	<BrowserRouter>	
	
	
	<MyMenu />
	<Routes>
	<Route path='/' element={<HomePage />} />
	<Route path='/manager' element={<Manager />} />
	<Route path='/test' element={<Test/>} />
	<Route path='/uploader' element={<Uploader/>} />
	
	
	<Route path='*' element={<NotFoundPage />} />
	</Routes>
		
	</BrowserRouter>
	);
}
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateBattle, Home } from './page';
import { GlobalContextProvider } from './context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<GlobalContextProvider>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create-battle' element={<CreateBattle />} />
			</Routes>
		</GlobalContextProvider>
	</BrowserRouter>,
);

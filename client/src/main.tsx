import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	</BrowserRouter>,
);

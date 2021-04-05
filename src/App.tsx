import React, { useState } from 'react';
import ChatCadastro from './components/ChatCadastro';
import './App.css';

const App: React.FC = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className='container'>
			<button onClick={() => setToggle(!toggle)}>Cadastre-se</button>
			{toggle ? <ChatCadastro /> : null}
		</div>
	);
};

export default App;

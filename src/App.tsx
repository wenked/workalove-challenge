import React, { useState } from 'react';
import ChatCadastro from './components/ChatCadastro';
import './App.css';

const App: React.FC = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className='container'>
			<div className='title-container'>
				<h4>
					Olá, para se cadastrar inicie uma conversa com Mr.Robot clicando{' '}
				</h4>{' '}
				<button className='register-button' onClick={() => setToggle(!toggle)}>
					Aqui
				</button>
			</div>
			{toggle ? <ChatCadastro /> : null}
		</div>
	);
};

export default App;

import React, { useState } from 'react';
import ChatCadastro from './components/ChatCadastro';
import './App.css';
import { IoClose } from 'react-icons/io5';

const App: React.FC = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className='container' data-testid='container-teste'>
			{!toggle ? (
				<div className='title-container'>
					<h4>
						Olá, para se cadastrar inicie uma conversa com Mr.Robot clicando{' '}
					</h4>{' '}
					<button
						className='register-button'
						onClick={() => setToggle(!toggle)}>
						Aqui
					</button>
				</div>
			) : (
				<div className='chatbot-container'>
					<button onClick={() => setToggle(false)} className='close-button'>
						<IoClose size={20} />
					</button>
					<ChatCadastro />
				</div>
			)}
		</div>
	);
};

export default App;

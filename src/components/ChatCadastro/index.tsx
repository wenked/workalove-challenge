import { Formik, Form, FormikProps } from 'formik';
import React, { useState } from 'react';
import ChatInput from '../../ChatInput';
import ChatLabel from '../ChatLabel';
import './styles.css';

export interface Values {
	name: string;
	city: string;
	state: string;
	borndate: string;
	email: string;
	stars: number;
}

const ChatCadastro: React.FC = () => {
	const [showCityState, setShowCityState] = useState(false);
	const [showBornDate, setShowBornDate] = useState(false);
	const [showEmail, setShowEmail] = useState(false);
	const [showStars, setShowStars] = useState(false);

	return (
		<div className='chat-container'>
			<Formik
				initialValues={{
					name: '',
					city: '',
					state: '',
					borndate: '',
					email: '',
					stars: 0,
				}}
				onSubmit={() => console.log('ae')}>
				{(props: FormikProps<Values>) => (
					<Form style={{ width: '100%' }}>
						<div className='input-container'>
							<div>
								<ChatLabel>
									Olá sou ChatNilson,tudo bem ? para começarmos,preciso saber
									seu nome.
								</ChatLabel>
								<ChatInput name='name' type='text' />
							</div>
							{showCityState ? (
								<div>
									<ChatLabel>
										Olá {props.values.name}. Agora que sei seu nome,qual a
										cidade e estado que você mora?{' '}
									</ChatLabel>
									<ChatInput name='city' type='text' />
								</div>
							) : null}
							{showBornDate ? (
								<div>
									<ChatLabel>
										Legal,agora que sabemos sua cidade e estado.Quando foi que
										você nasceu?
									</ChatLabel>
									<ChatInput name='borndate' type='date' />
								</div>
							) : null}
							{showEmail ? (
								<div>
									<ChatLabel>Agora me fala teu e-mail por gentilza.</ChatLabel>
									<ChatInput name='email' type='email' />
								</div>
							) : null}
							{showEmail ? (
								<div>
									<ChatLabel>
										Você finalizou o teste faça uam avaliação sobre o processo
										que realizou até chegar aqui. Nós que agradecemos !
									</ChatLabel>
								</div>
							) : null}
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ChatCadastro;

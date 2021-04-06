import { Formik, Form, FormikProps } from 'formik';
import React, { useState } from 'react';
import ChatInput from '../ChatInput';
import ChatLabel from '../ChatLabel';
import CityStateChatInput from '../CityStateChatInput';
import StarsInput from '../StartsInput';
import './styles.css';
import * as yup from 'yup';
import axios from 'axios';

export interface Values {
	name: string;
	city: string;
	state: string;
	borndate: string;
	email: string;
	stars: number;
}

const SignupSchema = yup.object().shape({
	name: yup
		.string()
		.min(2, 'Muito Pequeno')
		.max(50, 'Muito grande')
		.required('Digite seu nome !'),
	email: yup.string().email('Email invalido').required('Preencha!'),
});

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
				validationSchema={SignupSchema}
				onSubmit={async (values) => {
					if (values.stars !== 0) {
						const res = await axios.post(
							'https://606b1f44f8678400172e5a94.mockapi.io/user',
							values
						);
						console.log(res.data);
					}
				}}>
				{(props: FormikProps<Values>) => (
					<Form style={{ width: '100%' }} data-testid='chat-form'>
						<div className='input-container' data-testid='form-test'>
							<div>{props.isSubmitting && 'teste'}</div>
							<div>
								<ChatLabel>
									Olá sou ChatNilson, tudo bem ? para começarmos, preciso saber
									seu nome.
								</ChatLabel>
								<ChatInput
									name='name'
									type='text'
									setShowNext={setShowCityState}
								/>
							</div>
							{showCityState ? (
								<div>
									<ChatLabel>
										Olá {props.values.name}. Agora que sei seu nome, qual a
										cidade e estado que você mora? (Ex:Castro,Paraná)
									</ChatLabel>
									<CityStateChatInput setShowNext={setShowBornDate} />
								</div>
							) : null}
							{showBornDate ? (
								<div>
									<ChatLabel>
										Legal, agora que sabemos sua cidade e estado.Quando foi que
										você nasceu?
									</ChatLabel>
									<ChatInput
										setShowNext={setShowEmail}
										name='borndate'
										type='date'
									/>
								</div>
							) : null}
							{showEmail ? (
								<div>
									<ChatLabel data-testid='email-label'>
										Agora me fala teu e-mail por gentilza.
									</ChatLabel>
									<ChatInput
										name='email'
										type='email'
										setShowNext={setShowStars}
									/>
								</div>
							) : null}
							{showStars ? (
								<div>
									<ChatLabel>
										Você finalizou o teste faça uma avaliação sobre o processo
										que realizou até chegar aqui. Nós que agradecemos !
									</ChatLabel>
									<StarsInput />
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

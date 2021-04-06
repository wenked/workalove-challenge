import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { Values } from '../ChatCadastro';
import { FiSend } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import './styles.css';

interface InputProps {
	setShowNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const CityStateChatInput: React.FC<InputProps> = ({ setShowNext }) => {
	const { initialValues, setFieldValue } = useFormikContext<Values>();
	const [error, setError] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const StringValues = e.target.value.toString().trim().split(',');
		if (StringValues.length === 2) {
			setError(false);
			setFieldValue('city', StringValues[0]);
			setFieldValue('state', StringValues[1]);
			return;
		}
		setError(true);
	};

	return (
		<IconContext.Provider value={{ size: '1.5rem' }}>
			<div className='citystate-input-field'>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						padding: '5px',
						width: '100%',
					}}>
					<input
						onKeyPress={(e) => {
							if (e.key === 'Enter') {
								setShowNext(true);
							}
						}}
						data-testid='citystate-input'
						type='text'
						onChange={handleChange}
						style={{ border: error ? '2px solid red' : '' }}
					/>
					<button
						data-testid='citystate-button'
						type='button'
						onClick={() => {
							if (!error) {
								setShowNext(true);
							}
						}}
						value={initialValues.city}>
						<FiSend />
					</button>
				</div>
				{error ? (
					<div className='error'>Formato inválido! Ex:(Castro,Paraná)</div>
				) : null}
			</div>
		</IconContext.Provider>
	);
};

export default CityStateChatInput;

import React from 'react';
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const StringValues = e.target.value.toString().trim().split(' ');
		if (StringValues.length === 2) {
			setFieldValue('city', StringValues[0]);
			setFieldValue('state', StringValues[1]);
		}
	};

	return (
		<IconContext.Provider value={{ size: '1.5rem' }}>
			<div className='citystate-input-field'>
				<input type='text' onChange={handleChange} />
				<button
					type='button'
					onClick={() => setShowNext(true)}
					value={initialValues.city}>
					<FiSend />
				</button>
			</div>
		</IconContext.Provider>
	);
};

export default CityStateChatInput;

import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import './styles.css';
import { FiSend } from 'react-icons/fi';
import { IconContext } from 'react-icons';

interface InputProps {
	setShowNext: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatInput = (props: FieldHookConfig<string> & InputProps) => {
	const [field, meta] = useField(props);

	return (
		<IconContext.Provider value={{ size: '1.5rem' }}>
			<div className='input-field'>
				<input {...field} placeholder={props.placeholder} type={props.type} />
				{meta.touched && meta.error ? (
					<div className='error'>{meta.error}</div>
				) : null}
				<button onClick={() => props.setShowNext(true)}>
					<FiSend />
				</button>
			</div>
		</IconContext.Provider>
	);
};

export default ChatInput;

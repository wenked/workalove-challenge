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
				<div className='input-error-container'>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<input
							{...field}
							placeholder={props.placeholder}
							type={props.type}
							style={{
								border: meta.touched && meta.error ? '2px solid red' : '',
							}}
						/>
						<button type='button' onClick={() => props.setShowNext(true)}>
							<FiSend />
						</button>
					</div>
					{meta.touched && meta.error ? (
						<div className='error'>{meta.error}</div>
					) : null}
				</div>
			</div>
		</IconContext.Provider>
	);
};

export default ChatInput;

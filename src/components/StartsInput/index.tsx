import React from 'react';
import { useFormikContext } from 'formik';
import { Values } from '../ChatCadastro';
import { AiFillStar } from 'react-icons/ai';
import './styles.css';
import { IconContext } from 'react-icons';
import { FiSend } from 'react-icons/fi';

const StarsInput: React.FC = () => {
	const { setFieldValue, values } = useFormikContext<Values>();

	return (
		<IconContext.Provider value={{ size: '1.5rem' }}>
			<div className='stars-container'>
				<div className='stars-radio-container'>
					<label>
						<input type='radio' name='rating' value={1} />
						<AiFillStar
							className='star'
							onClick={() => setFieldValue('stars', 1)}
							color={1 <= values.stars ? 'yellow' : 'gray'}
						/>
					</label>
					<label>
						<input type='radio' name='rating' value={2} />
						<AiFillStar
							className='star'
							onClick={() => setFieldValue('stars', 2)}
							color={2 <= values.stars ? 'yellow' : 'gray'}
						/>
					</label>
					<label>
						<input type='radio' name='rating' value={3} />
						<AiFillStar
							className='star'
							onClick={() => setFieldValue('stars', 3)}
							color={3 <= values.stars ? 'yellow' : 'gray'}
						/>
					</label>
					<label>
						<input type='radio' name='rating' value={4} />
						<AiFillStar
							className='star'
							onClick={() => setFieldValue('stars', 4)}
							color={4 <= values.stars ? 'yellow' : 'gray'}
						/>
					</label>
					<label>
						<input type='radio' name='rating' value={5} />
						<AiFillStar
							className='star'
							color={5 <= values.stars ? 'yellow' : 'gray'}
							onClick={() => setFieldValue('stars', 5)}
						/>
					</label>
				</div>
				<button type='submit' className='submit-button'>
					<FiSend />
				</button>
			</div>
		</IconContext.Provider>
	);
};

export default StarsInput;

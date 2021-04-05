import React from 'react';
import chatbotImg from '../../assets/chat-bot.jpg';
import './styles.css';

const ChatLabel: React.FC = ({ children }) => {
	return (
		<div className='chatlabel-container'>
			<div className='img-container'>
				<img className='label-img' src={chatbotImg} alt='chat-bot-img' />
				<span>Mr.Robot</span>
			</div>
			<div className='chat-content'>
				<span>{children}</span>
			</div>
		</div>
	);
};

export default ChatLabel;

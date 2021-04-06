import React from 'react';
import App from './App';
import { fireEvent, render, screen } from '@testing-library/react';

test('Render test', () => {
	const wrapper = render(<App />);
	console.log(wrapper.debug());

	expect(screen.getByTestId('container-teste')).toHaveTextContent(
		'Olá, para se cadastrar inicie uma conversa com Mr.Robot clicando'
	);

	fireEvent.click(screen.getByText('Aqui'));
	console.log(wrapper.debug());

	expect(screen.getByTestId('form-test')).toHaveTextContent('Mr.Robot');
});

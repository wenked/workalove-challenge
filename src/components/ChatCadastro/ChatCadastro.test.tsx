import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import ChatCadastro from './index';

test('Form test', async () => {
	const wrapper = render(<ChatCadastro />);
	const inputName = screen.getByTestId('text-input');
	user.type(inputName, 'wenked');
	user.click(screen.getByTestId('text-enter-button'));
	const cityStateInput = screen.getByTestId('citystate-input');
	user.type(cityStateInput, 'Castro,PR');
	user.click(screen.getByTestId('citystate-button'));
	const dateInput = screen.getByTestId('date-input');
	user.type(dateInput, '25-08-1994');
	user.click(screen.getByTestId('date-enter-button'));
	const emailInput = screen.getByTestId('email-input');
	user.type(emailInput, 'teste@teste.com');
	user.click(screen.getByTestId('email-enter-button'));

	await waitFor(() => {
		console.log(wrapper.debug());
	});
	expect(wrapper.container).toHaveTextContent(
		'Você finalizou o teste faça uma avaliação sobre o processo que realizou até chegar aqui. Nós que agradecemos !'
	);
});

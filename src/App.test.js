import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('calculates estimated fuel cost correctly', async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.clear(screen.getByLabelText(/distância/i));
  await user.type(screen.getByLabelText(/distância/i), '500');
  await user.clear(screen.getByLabelText(/consumo médio/i));
  await user.type(screen.getByLabelText(/consumo médio/i), '12');
  await user.clear(screen.getByLabelText(/preço do combustível/i));
  await user.type(screen.getByLabelText(/preço do combustível/i), '5.79');

  await user.click(screen.getByRole('button', { name: /calcular/i }));

  expect(screen.getByText(/R\$ 347,40/i)).toBeInTheDocument();
  expect(screen.getByText(/60 litros/i)).toBeInTheDocument();
});

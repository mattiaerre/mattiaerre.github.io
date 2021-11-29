import { render } from '@testing-library/react';
import App from './App';

test('to match snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

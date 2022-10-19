import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store'
import Header from './Header';

test('renders text from label in Section Book component', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>      
    );
    const textMain = screen.getByText(/Personal Booking App/i);
    expect(textMain).toBeInTheDocument();
});
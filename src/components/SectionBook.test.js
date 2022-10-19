import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SectionBook from './SectionBook';
import store from '../redux/store'

test('renders text from label in Section Book component', () => {
    render(
      <Provider store={store}>
        <SectionBook />
      </Provider>      
    );
    const textDestiny = screen.getByText(/Destiny/i);
    expect(textDestiny).toBeInTheDocument();
    const textCheckin = screen.getByText(/Check-in/i);
    expect(textCheckin).toBeInTheDocument();
    const textCheckout = screen.getByText(/Check-out/i);
    expect(textCheckout).toBeInTheDocument();
    const textAdults = screen.getByText(/Adults/i);
    expect(textAdults).toBeInTheDocument();
    const textChildren = screen.getByText(/Children/i);
    expect(textChildren).toBeInTheDocument();
});

test('renders input in Section Book component', () => {
  render(
    <Provider store={store}>
      <SectionBook />
    </Provider>      
  );
  const inputDestiny = screen.getByTestId("input-destiny");     
  expect(inputDestiny).toBeInTheDocument();
  const inputCheckin = screen.getByDisplayValue("10/18/2022");     
  expect(inputCheckin).toBeInTheDocument();
  const inputCheckout = screen.getByDisplayValue("10/19/2022");     
  expect(inputCheckout).toBeInTheDocument();
  const inputAdults = screen.getByTestId("input-adults");     
  expect(inputAdults).toBeInTheDocument();
  const inputChildren = screen.getByTestId("input-children");     
  expect(inputChildren).toBeInTheDocument();
});

test('renders btn to create in Section Book component', () => {
  render(
    <Provider store={store}>
      <SectionBook />
    </Provider>      
  );
  const btn = screen.getByText("Create");     
  expect(btn).toBeInTheDocument();


});
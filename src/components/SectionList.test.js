import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { add } from '../redux/bookingSlice';
import store from '../redux/store'
import SectionList from './SectionList';

test('should be initially render hader name', () => {
    render(
      <Provider store={store}>
        <SectionList />
      </Provider>      
    );
    const textHeader = screen.getByText(/Booking List/i);
    expect(textHeader).toBeInTheDocument();
});

test('should be render a table', () => {
    render(
      <Provider store={store}>
        <SectionList />
      </Provider>      
    );
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
});

test('should be render a empty table', () => {
    render(
      <Provider store={store}>
        <SectionList />
      </Provider>      
    );
    const td = screen.queryByRole('td');
    expect(td).not.toBeTruthy();
});
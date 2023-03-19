import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Search from '../reuse-components/search/Search';


describe('Search component', () => {
  const searchArray = [
    { name: 'apple', price: 2 },
    { name: 'banana', price: 1 },
    { name: 'orange', price: 3 },
  ];

  test('displays search results when the "Search" button is clicked', () => {
    const searchCallback = vi.fn()
    render(<Search searchArray={searchArray} searchCallback={searchCallback} />);

    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'apple' } });

    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(searchButton);

    expect(searchCallback).toHaveBeenCalledWith([{ name: 'apple', price: 2 }], 'apple');
  });
});






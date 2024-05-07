import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import Filter from '../Filter';

describe('Filter component', () => {
  it('renders without crashing', () => {
    render(<Filter filter="all" setFilter={() => {}} />);
  });

  it('renders Filter component', () => {
    const setFilterMock = jest.fn();
    const { getByTestId } = render(<Filter filter="all" setFilter={setFilterMock} />);
    const selectElement = getByTestId('filter-select');

    expect(selectElement).toBeInTheDocument();
  });
});

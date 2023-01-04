import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter} from 'react-router-dom';
import Header from './Header';

describe("Testing Header", () => {
  test("Header is Rendering", () => {
    const {getByTestId} = render(<Header />, {wrapper: BrowserRouter});
    expect(getByTestId("header")).toBeInTheDocument();
  })
})
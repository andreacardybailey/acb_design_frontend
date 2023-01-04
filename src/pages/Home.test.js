import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from './Home';

describe("Testing Home", () => {
  test("Home is Rendering", () => {
    const {getByTestId} = render(<Home />);
    expect(getByTestId("home")).toBeInTheDocument();
  })
})
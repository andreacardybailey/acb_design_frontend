import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Cart from './Cart';

describe("Testing Cart", () => {
  test("Cart is Rendering", () => {
    const {getByTestId} = render(<Cart />);
    expect(getByTestId("cart")).toBeInTheDocument();
  })
})
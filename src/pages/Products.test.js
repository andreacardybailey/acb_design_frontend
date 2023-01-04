import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Products from './Products';

describe("Testing Products", () => {
  beforeEach(() => {
    const {getByTestId} = render(<Products />);
  });
  test("Products is Rendering", () => {
    expect(getByTestId("products")).toBeInTheDocument();
  })
})
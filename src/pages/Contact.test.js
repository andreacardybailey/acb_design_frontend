import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Contact from './Contact';

describe("Testing Contact", () => {
  test("Contact is Rendering", () => {
    const {getByTestId} = render(<Contact />);
    expect(getByTestId("contact")).toBeInTheDocument();
  })
})
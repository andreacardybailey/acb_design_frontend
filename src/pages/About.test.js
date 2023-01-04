import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import About from './About';

describe("Testing About", () => {
  test("About is Rendering", () => {
    const {getByTestId} = render(<About />);
    expect(getByTestId("about")).toBeInTheDocument();
  })
})
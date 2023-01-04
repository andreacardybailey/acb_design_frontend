import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe("Testing App", () => {
  test("App is Rendering", () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId("main")).toBeInTheDocument();
  })
})
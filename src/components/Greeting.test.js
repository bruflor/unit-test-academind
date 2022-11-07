import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";
import useEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World", () => {
    //Arange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders It's good to see you if the button it's NOT clicked", () => {
    //Arange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const outputElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed if the button was Clicked", () => {
    //Arange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    useEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });
});

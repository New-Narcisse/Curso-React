import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("test on CounterApp", () => {
  const initialValue = 10;
  test("should match with the snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("the initial value should be 100", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.findByDisplayValue(initialValue === 10)).toBeTruthy();
  });

  test("should increment the initial value by clicking on +1", () => {
    render(<CounterApp value={initialValue} />);
    /* el codigo anterior 'resnder......' es el iniciador de lo que
       vamos a testear*/
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("should decrement the initial value by clicking on -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });

  test("should reset the value by clicking on Reset", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    //fireEvent.click(screen.getByText("Reset"));
    /* la mejor manera de referirse a un boton es colocando un 
identificador dentro del tag del mismo */
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});

import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  const title = "Hola, Soy Sony";
  const subTitle = "Soy un sub titulo";

  test("should match with the snap", () => {
    const { container } = render(<FirstApp title={title} />);
    //screen.debug()
    expect(container).toMatchSnapshot();
  });

  test("should show Hola, soy Sony", () => {
    /* No es necesario crear la constante 'title' dentro del test
    ya que fue creado en el describe, de esa manera todos los 
    test lo podran usar por invocacion*/
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("show the title in an h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("should show the subtitle sent by props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(1);
  });
});

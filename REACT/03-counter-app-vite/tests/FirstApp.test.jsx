import { getByText, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  test("should match with the snapshot ", () => {
    const title = "Hola, soy Narcisse";
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("should show title in h1", () => {
    const title = "Hola, soy Narcisse";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("should show the subtitle sent by props", () => {
    const title = "Hola, soy Narcisse";
    const subTitle = "Soy un sub titulo";
    const { getByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    expect(getByText(subTitle)).toBeTruthy();
  });
});

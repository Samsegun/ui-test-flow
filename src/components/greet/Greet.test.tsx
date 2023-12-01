import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("greet component renders", () => {
    test("hello on page", () => {
        render(<Greet />);
        expect(screen.getByText("hello")).toBeInTheDocument();
    });
    test("hello with a name", () => {
        render(<Greet name='tommy' />);
        const targetElement = screen.getByText("hello tommy");
        expect(targetElement).toBeInTheDocument();
    });
});

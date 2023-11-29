import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("greet component renders correctly", () => {
    it("hello is on page", () => {
        render(<Greet />);
        expect(screen.getByText("hello")).toBeInTheDocument();
    });
    it("hello renders with a name", () => {
        render(<Greet name='tommy' />);
        expect(screen.getByText("hello tommy")).toBeInTheDocument();
    });
});

import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
    it("initial value of h1 element is Zero", () => {
        render(<Counter />);
        expect(screen.getByRole("heading")).toHaveTextContent("0");
    });

    it("renders a count of 1 after increment button is clicked", async () => {
        user.setup();
        render(<Counter />);
        const incrementElement = screen.getByRole("button", {
            name: "Increment",
        });
        await user.click(incrementElement);

        const headingElement = screen.getByRole("heading");
        expect(headingElement).toHaveTextContent("1");
    });

    it("renders a count of 10 after increment button is clicked ten times", async () => {
        user.setup();
        render(<Counter />);
        const incrementButton = screen.getByRole("button", {
            name: "Increment",
        });
        // await user.dblClick(incrementButton);
        for (let i = 0; i < 10; i++) {
            await user.click(incrementButton);
        }

        expect(screen.getByRole("heading")).toHaveTextContent("10");
    });

    it("renders a count of 10 after clicking the set button", async () => {
        user.setup();
        render(<Counter />);
        const inputElement = screen.getByRole("spinbutton");
        await user.type(inputElement, "10");
        expect(inputElement).toHaveValue(10);

        const counterBtnElement = screen.getByRole("button", { name: "Set" });
        await user.click(counterBtnElement);

        expect(screen.getByRole("heading")).toHaveTextContent("10");
    });

    it("elements are focused in the right order", async () => {
        user.setup();
        render(<Counter />);

        const incrementBtn = screen.getByRole("button", { name: "Increment" });
        const setBtn = screen.getByRole("button", { name: "Set" });
        const inputElement = screen.getByRole("spinbutton");

        await user.tab();
        expect(incrementBtn).toHaveFocus();
        await user.tab();
        expect(inputElement).toHaveFocus();
        await user.tab();
        expect(setBtn).toHaveFocus();
    });
});

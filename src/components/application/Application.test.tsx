import { render, screen, logRoles } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
    it("renders correctly", () => {
        render(<Application />);
        const nameElement = screen.getByRole("textbox", { name: "Name" });
        expect(nameElement).toBeInTheDocument();

        const heading1 = screen.getByRole("heading", { level: 1 });
        expect(heading1).toBeInTheDocument();

        const heading2 = screen.getByRole("heading", { level: 2 });
        expect(heading2).toBeInTheDocument();

        const bioText = screen.getByLabelText("Bio");
        expect(bioText).toBeInTheDocument();

        // substring match
        const pElement = screen.getByText("ll fields", { exact: false });
        expect(pElement).toBeInTheDocument();

        // custom match
        const pElement2 = screen.getByText(content =>
            content.startsWith("All")
        );
        expect(pElement2).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();
    });
    it("renders eventually", async () => {
        const view = render(<Application />);
        logRoles(view.container);
        // screen.debug();
        // const buttonElement = screen.queryByRole("button", {
        //     name: "Submit",
        // });
        // expect(buttonElement).not.toBeInTheDocument();

        const buttonElementAsync = await screen.findByRole(
            "button",
            {
                name: "Submit",
            },
            { timeout: 2000 }
        );
        // screen.debug();
        expect(buttonElementAsync).toBeInTheDocument();
    });
});

import { render, screen } from "@testing-library/react";
import TreeNew from "../pages/TreeNew";
import { BrowserRouter } from "react-router-dom";

describe('<TreeNew />', () => {
    it("renders new tree inputs", () => {
        render(
            <BrowserRouter>
                <TreeNew />
            </BrowserRouter>
        )
        // screen.logTestingPlaygroundURL()

        const nameInput = screen.getByRole("textbox", {
            name: /name/i
        })
        expect(nameInput).toBeInTheDocument()

        const ageInput = screen.getByRole('textbox', {
            name: /age/i
        })
        expect(ageInput).toBeInTheDocument()

        const enjoysInput = screen.getByRole('textbox', {
            name: /enjoys/i
        })
        expect(enjoysInput).toBeInTheDocument()

        const imageInput = screen.getByRole('textbox', {
            name: /image/i
        })
        expect(imageInput).toBeInTheDocument()
    })
})


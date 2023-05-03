import { render, screen } from "@testing-library/react"
import TreeIndex from "../pages/TreeIndex"
import mockTrees from "../mockTrees.js"
import { BrowserRouter } from "react-router-dom"


describe("<TreeIndex />", () => {
    // it("renders without crashing", () => {
    //     render(<BrowserRouter><TreeIndex trees={mockTrees} /></BrowserRouter>)
    //     mockTrees.forEach((tree) => {
    //         const treeName = screen.getByText(tree.name)
    //         expect(treeName).toBeInTheDocument()
    //     });
    // })
    it("renders tree cards", () => {
        render(<BrowserRouter><TreeIndex trees={mockTrees} /></BrowserRouter>)
        mockTrees.forEach((tree) => {
            const treeName = screen.getByText(tree.name)
            expect(treeName).toBeInTheDocument()
        });
    })
})
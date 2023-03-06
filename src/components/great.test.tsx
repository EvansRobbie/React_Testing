import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test('Greet renders correctly', () =>{
    render(<Greet/>)
    const testElement  =screen.getByText('Hello')
    expect(testElement).toBeInTheDocument()
})
test('Greet renderd correctly', () =>{
    render(<Greet name = 'Evans'/>)
    const testElement  =screen.getByText('Hello Evans')
    expect(testElement).toBeInTheDocument()
})
import { render, screen, cleanup, waitFor, fireEvent } from "@testing-library/react";
import Project from "./App";

describe("Check the UI.",()=>{
	it("has an input for email",()=>{
		render(<Project />);
		const email = screen.getByTestId("email");
		expect(email).toBeInTheDocument();
	});

	it("has an input for email type text",()=>{
		render(<Project />);
		const input = screen.getByTestId("email");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("type", "text");
	});

	it("has an input for password",()=>{
		render(<Project />);
		const password = screen.getByTestId("password");
		expect(password).toBeInTheDocument();
	});

	it("has an input for email type password",()=>{
		render(<Project />);
		const input = screen.getByTestId("password");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("type", "password");
	});
});

describe("Checking validity of input",()=>{

	afterEach(cleanup);

	it("Check the email data input", () => {		
		render(<Project />);
		const input1 = screen.getByTestId("email");
		fireEvent.change(input1, { target: { value: "eve.holt@reqres.in" }});
		expect(input1.value).toBe("eve.holt@reqres.in");
	});

	it("Check the password data input", () => {		
		render(<Project />);
		const input2 = screen.getByTestId("password");
		fireEvent.change(input2, { target: { value: "cityslicka" }});
		expect(input2.value).toBe("cityslicka");
	});

	it("Check if valid user with token", async () => {   
		render(<Project />);
		await waitFor(() => {
		    expect(screen.findByText('QpwL5tke4Pnpja7X4')).toBeTruthy() 
		})
	});
});

describe("Checking validity of wrong input",()=>{

	afterEach(cleanup);

	it("should check if input username fails", () => {		
		render(<Project />);
		const input1 = screen.getByTestId("email");
		fireEvent.change(input1, { target: { value: "www" }});
		expect(input1.value).not.toBe(true);
	});

	it("should check if input password fails", () => {		
		render(<Project />);
		const input2 = screen.getByTestId("password");
		fireEvent.change(input2, { target: { value: "wwww" }});
		expect(input2.value).not.toBe(true);
	});
});
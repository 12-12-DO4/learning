// for example
// ===========



// import { fireEvent, render, screen } from "@testing-library/react";
// import Notes from "./Notes";

// describe("tests", () => {
//   test("render elem based on cond", () => {
//     const func = jest.fn();
//     const variable1 = "value1";
//     const variable2 = "value2";
//     render(<Notes onClick={func}/>);

//     const note = screen.getByText(/text/);
//     fireEvent.change(note, { target: { value: variable1 + variable2 } });

//     const toggleBtn = screen.getByRole("button");
//     fireEvent.click(toggleBtn);

//     expect(func).toHaveBeenCalledWith({
//       variable1, 
//       variable2
//     });
//   });
// });
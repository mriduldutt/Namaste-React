import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe('Contact Component', () => {
    test('should load Contact us Component', () => {
  
        render(<Contact/>);
    
        // const heading = screen.getByRole('heading', { name: 'Contact us' })
          const heading = screen.getByRole('heading');
    
    
         //Assertion
          expect(heading).toBeInTheDocument();
    });
    
    
    test('should load button Contact us Component', () => {
        render(<Contact/>);
    
        const buton = screen.getByRole('button');
    
        
        //Assertion
        expect(buton).toBeInTheDocument();
    });
    
    
    test('should load input name Contact us Component', () => {
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText('name');
    
        
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    
    
    test('should load  2 input box Contact us Component', () => {
        render(<Contact/>);
        
        //Querying
        const inputBoxes = screen.getAllByRole('textbox');
    
        //Assertion
        expect(inputBoxes.length).not.toBe(3);
    });
    
})



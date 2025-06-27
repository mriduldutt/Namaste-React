import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe('Contact Component', () => {
   
    //  beforeAll(() => {
    //      console.log("Before All");
    //  })

    //  beforeEach(() => {
    //      console.log("Before Each");
    //  })

    //  afterAll(() => {
    //      console.log("After All");
    //  })

    //  afterEach(() => {
    //      console.log("After Each");
    //  })
   
    test('should load Contact us Component', () => {
  
        render(<Contact/>);
    
        // const heading = screen.getByRole('heading', { name: 'Contact us' })
          const heading = screen.getByRole('heading');
    
    
         //Assertion
          expect(heading).toBeInTheDocument();
    });
    
    
    test('should load button Contact us Component', () => {
        render(<Contact/>);
    
        const submit = screen.getByText('Submit');
        const buton = screen.getByRole('button');
    
        
        //Assertion
        expect(submit).toBeInTheDocument();
        expect(buton).toBeInTheDocument();
    });
    
    
    test('should load input name Contact us Component', () => {
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText('name');
    
        
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    
    
    it('should load  2 input box Contact us Component', () => {
        render(<Contact/>);
        
        //Querying
        // const inputBoxes = screen.getAllByRole('textbox');
    
        //Assertion
        expect(screen.getAllByRole('textbox').length).not.toBe(3);
    });
    
})



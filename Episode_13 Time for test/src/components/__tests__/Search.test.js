import { render } from "@testing-library/react";
import Body from "../Body";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () =>{
            return Promise.resolve({})
        } 
    })
});



it('should render the body component with search button', () => {

    render(<Body/>);
     

})

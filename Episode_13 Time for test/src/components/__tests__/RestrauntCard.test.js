import { render,screen } from "@testing-library/react";
import RestaurantCard, { WithVegLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";



test('should render RestrauntCard Component with props Data', () => {
  
    render(<RestaurantCard resData ={MOCK_DATA}/>);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
});


// test('should render RestrauntCard Component with Veg Label', () => {
//     //test HOC : with Veg Label

//      render(<WithVegLabel resData ={MOCK_DATA}/>);

//      const vegLabel = screen.getByTestId('veg-label');

//      console.log(vegLabel);

//      expect(vegLabel).toBeInTheDocument();
// })

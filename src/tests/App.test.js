import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

const data =  [
{
  name: "Matthew Horizonte",
  jobs: "Web Developer",
  country: 'Australia',
  category: 'testimonial testimonial-danger'
},
{
  name: "Kirkwood John",
  jobs: "Dentist",
  country: 'Germany',
  category: 'testimonial testimonial-warning'
},
{
  name: "Mt. Tallac",
  jobs: "Bus Driver",
  country: 'Canada',
  category: 'testimonial testimonial-primary'
},
{
  name: "John Fitz Oscar",
  jobs: 34,
  country: 'New Zeland',
  category: 'testimonial testimonial-default'
}
];

test("App snapchot test", () => {
	//create a component that hold our rendered app
	const component = renderer.create(<App />);
	//transform our component to JSON
	const tree = component.toJSON();
	// expect both to be the same
	expect(tree).toMatchSnapshot();
});

describe("Number test", () =>{
	// Number
	const numItems = data.length;

	test("Number of items == 4", () => {
		expect(numItems).toBe(4);
	});

	test("Number of items to be > 2", () => {
		expect(numItems).toBeGreaterThanOrEqual(2);
	});

});

describe("Strings Test", () => {
	// Strings
	const dataTest = data[0].jobs;


	test("There is a dev in the Jobs title", () => {
		expect(dataTest).toMatch(/Deve*/);
	});

	test("The title contains React", () => {
		expect(dataTest).toContain("Web Developer");
	});
});

/*
describe("Arrays Test", () =>{
	// Arrays
	const data2 = ["React Native", "MeteorJS"];

	test("the list of of Name, () =>{
		expect(["React Native", "MeteorJS", "React"]).toEqual(expect.arrayContaining(data2));
	});
});
*/


describe("Objects Tests", () => {
	// Objects

	test("the first item has a property named 'name' ", () =>{
		expect(data[0]).toHaveProperty('name');
	});

	test("the first item has a property named 'name' with a value of Horizonte", () =>{
		expect(data[0]).toHaveProperty('name', "Matthew Horizonte");
	});
});

import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter"
import MockService from "./mocks/mock.scraper.service";
import App from '../pages/App';
import "@testing-library/jest-dom/extend-expect";


const data = MockService.createMockList();

beforeAll(() => {
	var mockAxios = new MockAdapter(axios);
	mockAxios.onGet(`${MockService.API_URL}/pages`).reply(200, data);

	render(<App />)	
})

test("renders page search controls", () => {
	var input = screen.getByPlaceholderText(/search query/i);
	var button = screen.getByRole("button", {name: /submit/i});

	expect(input).toBeInTheDocument();
	expect(button).toBeInTheDocument();
});

test("renders list of scraped pages", () => {
	var list = screen.getByRole("list");
	var children = screen.getAllByText(/root_url/i);

	expect(list).toBeInTheDocument();
	expect(children.length).toBe(data.length)
});

test("renders button for creating new requests", () => {
	var button = screen.getByText(/new request/i);

	expect(button).toBeInTheDocument();
});

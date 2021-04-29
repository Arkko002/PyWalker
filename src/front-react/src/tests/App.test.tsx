import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { render, screen } from '@testing-library/react';
import App from '../pages/App';
import MockService from "./mocks/mock.scraper.service";

test("renders main components", () => {
  render(<App />);
  let main = screen.getByRole("main");

  expect(main).toBeInTheDocument();
});

test("renders sidebar components", () => {
  render(<App />);

  let sidebar = screen.getByRole("sidebar");
  expect(sidebar).toBeInTheDocument();
});

test("fetches stored scraping results from API on mount", () => {
	const data = MockService.fetchList();
	var mockAxios = new MockAdapter(axios);
	mockAxios.onGet(`${MockService.API_URL}/pages/`).reply(200, data);

	render(<App />)	

	expect(axios.get(`${MockService.API_URL}/pages/`)).toHaveBeenCalled();
});

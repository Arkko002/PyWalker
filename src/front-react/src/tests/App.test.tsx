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
	const data = MockService.createMockList();
	MockService.axios.mockImplementation(() => Promise.resolve(data))

	render(<App />)	

	expect(MockService.axios.get).toHaveBeenCalledWith(`${MockService.API_URL}/pages`);
});

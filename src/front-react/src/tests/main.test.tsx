import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter/types";
import MockService from "./mocks/mock.scraper.service";
import { Router } from "react-router-dom";
import App from '../pages/App';
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import Main from "../components/main";

const data = MockService.fetchList();

beforeAll(() => {
	var mockAxios = new MockAdapter(axios);
	mockAxios.onGet(`${MockService.API_URL}/pages/`).reply(200, data);

	render(<App />)	
})

test("showing page details", () => {
	userEvent.click(screen.getByText(/root_url1/i));

	expect(screen.getByText(/page details/i)).toBeInTheDocument();
	expect(screen.getByText(/page request details/i)).toBeInTheDocument();
});

test("showing scraping form", () => {
	userEvent.click(screen.getByText(/new request/i));

	expect(screen.getByText(/new request/i)).toBeInTheDocument();
});

test("landing on invalid page", () => {
	const history = createMemoryHistory()
	history.push("/page/009900");
	render(
		<Router history={history}>
			<Main page={data[0]}/>
		</Router>
	)

	expect(screen.getByText(/invalid page id/i)).toBeInTheDocument();
});

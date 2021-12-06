import ReactDOM from "react-dom";
import { Timer } from "./Timer";
import { render, screen } from "@testing-library/react";

describe('Timer',() => {

    it('renders without crashing',() => {
        // given
        const div = document.createElement("div");
        // when
        ReactDOM.render(
            <Timer></Timer>,
            div
        );
        // then no errors are thrown
        ReactDOM.unmountComponentAtNode(div)
    });

    it('renders navbar with title', () => {
        // given
        render(<Timer/>);
        // when
        const title = screen.getByText(/Pomodoro v2.0/i);
        // then
        expect(title).toBeInTheDocument();
    });

    it('renders top buttons', () => {
        // given
        render(<Timer/>);
        // when
        const firstButton = screen.getByText(/Pomodorro/i);
        const secondButton = screen.getByText(/Short Break/i);
        const thirdButton = screen.getByText(/Long Break/i);
        // then
        expect(firstButton).toBeInTheDocument();
        expect(secondButton).toBeInTheDocument();
        expect(thirdButton).toBeInTheDocument();
    });

    it('renders bottom buttons', () => {
        // given
        render(<Timer/>);
        // when
        const startButton = screen.getByText(/Start/i);
        const pauseButton = screen.getByText(/Pause/i);
        const resetButton = screen.getByText(/Reset/i);
        // then
        expect(startButton).toBeInTheDocument();
        expect(pauseButton).toBeInTheDocument();
        expect(resetButton).toBeInTheDocument();
    });
})
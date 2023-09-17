import { Component, ReactNode } from "react";

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

export class Counter extends Component<CounterProps, CounterState> {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Increse the counter</button>
                <p>Counter: {this.state.count}</p>
                <div>Message: {this.props.message}</div>
            </div>
        )
    }
}
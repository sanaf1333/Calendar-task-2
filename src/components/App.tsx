import React, {Component} from "react";

interface AppProps {
    message?: string
}

interface AppState{
    rendered: boolean
}
class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {
            rendered: false,
        };
    }

    render() {
        return (
            <div>{this.props.message}</div>
        );
    }
}
export default App;
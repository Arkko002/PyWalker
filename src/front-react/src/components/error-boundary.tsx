import React, {ReactNode} from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean
    error: string
    errorInfo: string
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false, errorInfo: "", error: ""};
    }

    static getDerivedStateFromError(error: Error) {
        return {hasError: true, error: error, errorInfo: error.message};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        //TODO send error log to server
        console.log({error, errorInfo})
        this.setState({error: error.message, errorInfo: errorInfo.componentStack})
    }

    render() {
        if(this.state.hasError) {
            return (
                <div role="alert">
                    <p>Something went wrong:</p>
                    <pre style={{color: 'red'}}>{this.state.error}</pre>
                    <hr/>
                    <pre style={{color: 'red'}}>{this.state.errorInfo}</pre>
                    {/*TODO Error recovery / reset*/}
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
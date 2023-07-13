import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react';

import { IProps, IState } from '../types';

export class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): IState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render(): ReactNode {
        const { children } = this.props;
        const { hasError } = this.state;
        if (hasError) {
            return <Suspense fallback={'page loading ...'}>Page Error Component</Suspense>;
        }

        return children;
    }
}

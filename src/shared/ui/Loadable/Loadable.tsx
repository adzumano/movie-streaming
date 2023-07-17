import { ElementType, Suspense } from 'react';

export const Loadable = (Component: ElementType) => {
    return (props: any) => {
        return (
            <Suspense fallback={'page loader ...'}>
                <Component {...props} />
            </Suspense>
        );
    };
};

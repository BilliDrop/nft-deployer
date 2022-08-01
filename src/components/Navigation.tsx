import React from 'react';

import NavigationLeftSideBarContainer from '../containers/NavigationLeftSideBarContainer';
import NavigationTopBarContainer from '../containers/NavigationTopBarContainer';

type NavigationProps = {
    children: React.ReactNode
}

const Navigation = (props: NavigationProps) => {
    const { children } = props;
    return (
        <>
            <NavigationTopBarContainer/>
            <NavigationLeftSideBarContainer/>
            {children}
        </>
    )
}

export default Navigation
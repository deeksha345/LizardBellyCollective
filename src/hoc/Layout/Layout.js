import React from 'react';
import Aux from '../Aux/Aux';
import Sidebar from '../../components/Sidebar/Sidebar';

const layout = (props) => (
    <Aux>
        <Sidebar />
        <main>
            {props.children} {/* page content */}
        </main>
    </Aux>
);

export default layout;
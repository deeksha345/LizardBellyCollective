import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Sidebar from '../../components/Sidebar/Sidebar';
import classes from './Layout.css'
import SidebarToggle from '../../components/Sidebar/SidebarToggle/SidebarToggle';
import PhoneSidebar from '../../components/PhoneSidebar/PhoneSidebar';

class Layout extends Component {
    state = {
        showSidebar: false,
    }

    sidebarToggleHandler = () => {
        this.setState((prevState) => {
            return {showSidebar: !prevState.showSidebar}
        })
    }

    closeSidebar = () => {
        this.setState({showSidebar: false})
    }

    render() {
        return (
            <Aux>
                <Sidebar />
                <PhoneSidebar open={this.state.showSidebar} close={this.closeSidebar} />
                <div className={classes.Toggle}>
                    <SidebarToggle clicked={this.sidebarToggleHandler}/>
                </div>
                <main className={classes.Content}>
                    {this.props.children} 
                </main>
            </Aux>
        );
    }
}

export default Layout;
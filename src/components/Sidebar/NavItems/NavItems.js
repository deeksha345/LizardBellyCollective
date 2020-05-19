import React, { Component } from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavItems.css';

class NavItems extends Component {
    state = {
        active: "/",
        navItems: [
            {link: "/", title: "Home"},
            {link: "/about", title: "About Us"},
            {link: "/events", title: "Events"},
            {link: "/artists", title: "Artists"},
            {link: "/media", title: "Media"},
            {link: "/merch", title: "Merch"},
            {link: "/epk", title: "EPK"},
            {link: "/contact", title: "Contact Us"}
        ]
    }

    setActiveHandler = (link) => {
        this.setState({active: link})
    } 

    render() {
        const links = this.state.navItems.map(item => {
            return (
                <NavItem 
                    link={item.link} 
                    active={this.state.active === item.link}
                    clicked={() => {
                        this.setActiveHandler(item.link);
                        this.props.closeSidebar();
                    }}
                >{item.title}</NavItem>
            )   
        })
        return (
            <div className={classes.NavItems}>
                {links}
            </div>
        );
    }
}

export default NavItems;
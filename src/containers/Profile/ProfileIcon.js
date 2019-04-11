import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class ProfileIcon extends React.Component{
    constructor(props){
        super();
        this.state = {
            dropdownOpen: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };


    render() {
        return (
            <div className="pa4 tc">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={this.state.dropdownOpen}
                    >
                        {"INN 7704409586"}
                    </DropdownToggle>
                    <DropdownMenu
                        right
                        className='b--transparent shadow-5'
                        style = {{marginTop : '20px', backgroundColor: 'rgba(255,255,255,0.4)'}}>
                        <DropdownItem onClick={this.props.toggleProfile}>
                            View profile
                        </DropdownItem>
                        <DropdownItem onClick={() => this.props.onRouteChange('signOut')}>
                            Sign out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}

export default ProfileIcon;

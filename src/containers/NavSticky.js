import React from 'react';
import BasketCard from '../components/BasketCard';
import Login from './Login';

class NavSticky extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            top: 0,
            height: 0,
            scroll: 0
        }
    }

    handleScroll = () =>{
        this.setState({scroll: window.scrollY});
    };


    componentDidMount() {
        const el = document.querySelector('#navSticky');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {

        let navClass = "flex items-stretch bw-2 shadow-5-l tc bg-white"
            + (this.state.scroll > this.state.top ? " fixed w-100 left-0 top-0 pr3 pl3 bg-transparent" : " br3 ma2");

        return(
            <nav id='navSticky' className={navClass}>
                {/*+ }>*/}
                <BasketCard/>
                <div className='w-80 flex justify-between items-center bg-white'>
                    <div>
                        <a className="f6 f5-l link black-90 underline-hover pointer hover-blue dib pa3 ph4-l" href="/">Catalog</a>
                        <a className="f6 f5-l link black-90 underline-hover pointer hover-blue dib pa3 ph4-l ba" href="/">About</a>
                        <a className="f6 f5-l link black-90 underline-hover pointer hover-blue dib pa3 ph4-l" href="/">Contacts</a>
                    </div>
                    <div className="dib ph4-l">
                        <input
                            className="f6 f5-l"
                            placeholder="search text" type="text" name="searchText">
                        </input>
                        <input
                            className="f6 f5-l button-reset ml1"
                            type="submit" value="Search">
                        </input>
                    </div>
                </div>
                <Login
                    toggleProfile = {this.props.toggleProfile}
                    inn={this.props.inn}
                    userStatus={this.props.userStatus}
                />
            </nav>
        )

    }

};

export default NavSticky;
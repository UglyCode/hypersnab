import React from 'react';
import BasketCard from '../../components/BasketCard';
import Login from '../Login/Login';

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

    pageLinkOnClick = (event) => {
        this.props.onRouteChange(event.target.name);
    };

    handleSearchInput = (event) =>{
        const searchField = document.querySelector('#searchField');

        if (searchField.value.length > 3){
            this.props.updateSearchString(searchField.value);
            searchField.placeholder = 'поиск товара';
        } else {
            searchField.placeholder = 'введите более 3х символов';
            this.clearSearchField(searchField);
        }

    };

    handleEnterPress = (event) =>{
        if (event.key === 'Enter') {
            console.log(event.target);
            this.handleSearchInput();
        }
    };

    clearSearchField = (searchField) => {
        searchField.value = '';
    };

    clearSearchString = (event) => {
        const searchField = document.querySelector('#searchField');
        searchField.placeholder = 'поиск товара';
        this.clearSearchField(searchField);
        this.props.updateSearchString('');
    };

    render() {

        const isStick = this.state.scroll > this.state.top;
        let navClass = "flex items-stretch bw-2 shadow-5-l tc bg-transparent"
            + (isStick ?
                " fixed w-100 left-0 top-0 pr3 pl3" :
                " br3 ma2");
        const pageLinkClass = "f6 f5-l link black-90 underline-hover pointer hover-blue dib pa3 ph4-l";
        const route = this.props.route;

        return(
            <div>
                {isStick && <div className='w-100 bg-transparent' style={{height: this.state.height}}>{'shadow'}</div>}
                <nav id='navSticky' className={navClass}>
                    <BasketCard
                        orderSum={this.props.orderSum}
                        goodsAmount={this.props.goodsAmount}
                        onRouteChange={this.props.onRouteChange}
                    />
                    <div className='w-80 flex justify-between items-center bg-white'>
                        <div>
                            <a name='catalog'
                               className={pageLinkClass + ((route==='catalog') ? ' ba' : '')}
                               onClick={this.pageLinkOnClick}
                            >Каталог</a>
                            <a name='about'
                               className={pageLinkClass + ((route==='about') ? ' ba' : '')}
                               onClick={this.pageLinkOnClick}
                            >О нас</a>
                            <a name='contacts'
                               className={pageLinkClass + ((route==='contacts') ? ' ba' : '')}
                               onClick={this.pageLinkOnClick}
                            >Как добраться</a>
                        </div>
                        <div className="dib ph4-l flex justify-around">
                            <input
                                id={'searchField'}
                                onKeyPress={this.handleEnterPress}
                                className="f4 w-90"
                                placeholder="поиск товаров" type="text" name="searchText">
                            </input>
                            <button className='w-10' onClick={this.handleSearchInput}>
                                <img src={require('../../static/search.png')} className='mw-100'></img>
                            </button>
                            <button className='w-10 b' onClick={this.clearSearchString}>
                                ✖
                            </button>
                        </div>
                    </div>
                    <Login
                        toggleProfile = {this.props.toggleProfile}
                        setUserStatus = {this.props.setUserStatus}
                        inn = {this.props.inn}
                        userStatus={this.props.userStatus}
                    />
                </nav>
            </div>
        )

    }

};

export default NavSticky;
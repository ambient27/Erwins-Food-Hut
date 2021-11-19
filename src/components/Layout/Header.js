import { Fragment } from 'react';
import classes from './Header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Erwins Food Hut </h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="A table full of delicious food!" />
            </div>
        </>
    );
};


export default Header;
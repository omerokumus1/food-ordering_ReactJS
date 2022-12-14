import React from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onCartClick={props.onCartClick} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious foods!" />
      </div>
    </React.Fragment>
  );
}

export default Header;

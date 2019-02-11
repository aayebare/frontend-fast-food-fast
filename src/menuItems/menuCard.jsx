import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import "../Assets/home.css";


const MenuCard = (props) => {
  const {
    content,
    detail,
    price

  } = props;

  return (

    <Fragment>
      <div className="card card-signin my-5">
        <div className="card-header">
          <i>
            {content}
          </i>
        </div>
        <div className="card-body ">
          <h6>{detail}</h6>
          <footer className="blockquote-footer">{price} UGX</footer>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuCard;
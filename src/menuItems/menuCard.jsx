import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import "../Assets/home.css";


 const MenuCard = (props) => {
  const {
    content,
    detail,
    item_id,
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
// CommentCard.propTypes = {
//   body: PropTypes.string,
//   commented_by: PropTypes.string,
//   created_at: PropTypes.func
// };

 export default MenuCard;
import React from 'react';
import "../../Assets/home.css";
import PropTypes from 'prop-types';

const SignUpForm = (props) => {
  const {
    isSignUp,
    addItem,
    onSubmit,
    onChangeToLogin,
    title,
    buttonName
  } = props;
  return (

  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            <form className="form-signin" onSubmit={onSubmit}>

              { isSignUp && !addItem && (<div className="form-label-group">
                <input type="name" id="username" className="form-control" placeholder="User name" name="username" required autoFocus/>
                <label htmlFor="username">Username</label>
              </div>
              )
              }
              {!addItem && (<div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" required autoFocus/>
                <label htmlFor="inputEmail">Email address</label>
              </div>
              )}
             

              {!addItem && (<div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" autoComplete="password" required/>
                <label htmlFor="inputPassword">Password</label>
              </div>
              )}

              {isSignUp && !addItem &&(<div className="form-label-group">
                <input type="password" id="confirmPassword" className="form-control" placeholder="ConfirmPassword" name="confirmPassword" autoComplete="password" required/>
                <label htmlFor="confirmPassword">ConfirmPassword</label>
              </div>
               )}

              {addItem && (<div className="form-label-group">
                <input type="name" id="foodItem" className="form-control" placeholder="User name" name="foodItem" required autoFocus/>
                <label htmlFor="foodItem">Food Item</label>
              </div>
                )}

              {addItem && (<div className="form-label-group">
                <input type="name" id="description" className="form-control" placeholder="User name" name="description" required autoFocus/>
                <label htmlFor="description">Description</label>
              </div>
              )}

              {addItem && (<div className="form-label-group">
                <input type="number" id="price" className="form-control" placeholder="User name" name="price" required autoFocus/>
                <label htmlFor="price">Price</label>
              </div>
              )}


{/* 
              <div className="custom-control custom-checkbox mb-3" hidden={!isSignUp || addItem}>
                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                <label className="custom-control-label" htmlFor="customCheck1">As admin</label>
              </div> */}
              
             
             
              <button className="btn btn-lg btn-primary btn-block text-uppercase"  type="submit">{buttonName}</button>
              <div hidden={!isSignUp || addItem}
              onClick={onChangeToLogin}
                // role="button"
                className="btn btn-link m-t-100"
                type="link"
                color="primary"
              >
               Already have an account? Login
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

);
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func
};

// SignUpForm.defaultProps = {
//   onSubmit: () => { },
// };

export default SignUpForm;
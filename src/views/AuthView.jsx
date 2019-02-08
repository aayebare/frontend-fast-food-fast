import React, { Fragment } from 'react';
import { connect } from 'react-redux';
// import notify from 'msg-notify';
import { postDataThunkNoHeader } from '../redux/thunks'
import { signUpActionCreatorSuccess, signUpActionCreatorFailure } from '../redux/actions/AuthActions';
// import CircularProgressLoader from '../../components/progress';
import SignUpForm from '../components/auth';

class AuthView extends React.Component {
  state = {
    isSignup: ""
  }
  componentDidMount = () => {
    
    this.setState({ isSignUp: true });
    }
       handleSubmit = (e) => {
         e.preventDefault();
         const {
          postDataThunkNoHeader,
           signUpActionCreatorSuccess,
         } = this.props;
         
         const data = {username:e.target.username.value,
          email:e.target.email.value,
          password: e.target.password.value,
          confirm_password:e.target.confirmPassword.value,
          is_admin:false
        }
         postDataThunkNoHeader('auth/signup', {
          data,
         }, signUpActionCreatorSuccess, 'post');
       
       };

  changeToLogin = () => {
  
    this.props.history.push('/login');

};
        render() {
          const { isSignUp } = this.state;
          const buttonName = isSignUp ? 'SignIn' : 'Login';
          const title = isSignUp ? 'Please SignIn' : 'Please Login';

          return (
            <Fragment>
              {/* <CircularProgressLoader */}
         
              <SignUpForm
                isSignUp={isSignUp}
                onSubmit={this.handleSubmit}
                onChangeToLogin = {this.changeToLogin}
                buttonName={buttonName}
                title={title}
              />
            </Fragment>
          );
        }
}

const actionCreators = {
  postDataThunkNoHeader,
  signUpActionCreatorSuccess,
  signUpActionCreatorFailure,
};
const mapStateToProps = state => ({
  signUpData: state.authReducer.signUpSuccess,
  errors: state.authReducer.signUpFailure,
});

export default connect(mapStateToProps, actionCreators)(AuthView);


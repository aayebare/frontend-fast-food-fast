import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import notify from 'msg-notify';
import { postDataThunkNoHeader } from '../redux/thunks'
import { signUpActionCreatorSuccess } from '../redux/actions/AuthActions';
import SignUpForm from '../components/auth';

class AuthView extends React.Component {
  state = {
    isSignup: ""
  }
  componentDidMount = () => {

    this.setState({ isSignUp: true });
  }

  componentWillReceiveProps(nextProps) {

    const { signUpData } = nextProps;

    notify(signUpData.message, 'success')
    this.props.history.push('/login');

  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      postDataThunkNoHeader,
      signUpActionCreatorSuccess,
    } = this.props;

    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirm_password: e.target.confirmPassword.value,
      is_admin: true,
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
    const buttonName = isSignUp ? 'Register' : 'Login';
    const title = isSignUp ? 'Please Register' : 'Please Login';

    return (
      <Fragment>
        <SignUpForm
          isSignUp={isSignUp}
          onSubmit={this.handleSubmit}
          onChangeToLogin={this.changeToLogin}
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
};
const mapStateToProps = state => ({
  signUpData: state.authReducer.signUpSuccess,
});

export default connect(mapStateToProps, actionCreators)(AuthView);


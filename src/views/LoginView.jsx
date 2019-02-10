import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import notify from 'msg-notify';
import { postDataThunkNoHeader } from '../redux/thunks'
import { signUpActionCreatorSuccess } from '../redux/actions/AuthActions';
import SignUpForm from '../components/auth';

class LoginView extends React.Component {
  state = {
    isSignup: ""
  }

  componentDidMount = () => {

    this.setState({ isSignUp: false });
  }

  componentWillReceiveProps(nextProps) {

    const { signUpData } = nextProps;

    notify(signUpData.message, 'success')
    localStorage.setItem('token', signUpData.token);
    this.props.history.push('/get');

  }

  handleLoginSubmit = (e) => {
    e.preventDefault();

    const {
      postDataThunkNoHeader,
      signUpActionCreatorSuccess,
    } = this.props;

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    postDataThunkNoHeader('auth/login', {
      data,
    }, signUpActionCreatorSuccess, 'post');

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
          onSubmit={this.handleLoginSubmit}
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

export default connect(mapStateToProps, actionCreators)(LoginView);


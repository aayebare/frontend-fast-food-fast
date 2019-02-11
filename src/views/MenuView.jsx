import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import notify from 'msg-notify';
import { postDataThunk } from '../redux/thunks'
import { addMenuItem } from '../redux/actions/MenuActions';
import SignUpForm from '../components/auth';
import Home from '../components/HomeComponent'

class MenuView extends React.Component {
    state = {
        isSignUp: "",
        addItem: "",
    }

    componentDidMount = () => {

        this.setState({
            addItem: true,
            isSignUp: true
        });

    }

    componentWillReceiveProps(nextProps) {

        const { menuItem } = nextProps;

        notify(menuItem.success, 'success')

    }

    handleItemSubmit = (e) => {
        e.preventDefault();

        const {
            postDataThunk,
            addMenuItem
        } = this.props;

        const data = {
            content: e.target.foodItem.value,
            detail: e.target.description.value,
            price: e.target.price.value
        }

        postDataThunk('menu', {
            data,
        }, addMenuItem, 'post');
        e.target.foodItem.value = '';
        e.target.description.value = '';
        e.target.price.value = '';

    };
    render() {
        const { isSignUp, addItem } = this.state;
        const buttonName = addItem ? 'Post Item' : '';
        const title = addItem ? 'Add Menu Item' : '';
        return (
            <Fragment>
                < Home />
                <SignUpForm
                    isSignUp={isSignUp}
                    addItem={addItem}
                    onSubmit={this.handleItemSubmit}
                    buttonName={buttonName}
                    title={title}
                />
            </Fragment>
        );
    }
}

const actionCreators = {
    postDataThunk,
    addMenuItem,

};
const mapStateToProps = state => ({
    menuItem: state.menuReducer.menuItem,
});

export default connect(mapStateToProps, actionCreators)(MenuView);


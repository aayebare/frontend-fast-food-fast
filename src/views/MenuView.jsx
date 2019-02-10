import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import notify from 'msg-notify';
import { postDataThunk } from '../redux/thunks'
import { addMenuItem } from '../redux/actions/MenuActions';
import SignUpForm from '../components/auth';

class MenuView extends React.Component {
    state = {
        isSignUp:"",
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
        target = e.target
        target.foodItem.value = '';
        target.description.value='';
        target.price.value='';
       
    };
    render() {
        const { isSignUp , addItem} = this.state;
        const buttonName = addItem ? 'Post Item' : '';
        const title = addItem ? 'Add Menu Item' : '';
        return (
            <Fragment>
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


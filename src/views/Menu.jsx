import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import notify from 'msg-notify';
import { getPrivateDataThunk } from '../redux/thunks'
import { getMenu } from '../redux/actions/MenuActions';
import MenuCard from '../menuItems/menuCard';
import "../Assets/home.css";
import Home from '../components/HomeComponent'




class Menu extends React.Component {
  componentDidMount() {
    const {
      getPrivateDataThunk,
      getMenu,
    } = this.props;
    getPrivateDataThunk(`menu`, getMenu);
  }

  render() {
    const {
      menu
    } = this.props;
    console.log(menu)

    return (
      <div>
        <Home />
        {/* <div className="item-link">
          <Link className="link" to="/addItem">ADD NEW ITEM</Link>
        </div> */}
          <div className="col-lg-8 col-sm-12 menu-container">
            {menu.map((item, index) => <MenuCard {...item} key={index} />)}
          </div>
        </div>

    );
  }
}
const actionCreators = {
  getPrivateDataThunk,
  getMenu,
};
const mapStateToProps = state => ({
  menu: state.menuReducer.menu,
});
export default connect(
  mapStateToProps, actionCreators,
)(Menu);
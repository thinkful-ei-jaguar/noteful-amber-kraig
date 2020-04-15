import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
class FolderList extends Component {
  render() {
    return (
      <NavLink activeClassName="selected" to={`/folder/${this.props.id}`}>
        <li>
          <h4>{this.props.name}</h4>
        </li>
      </NavLink>
    );
  }
}

FolderList.propTypes = {
  id:PropTypes.number,
  name:PropTypes.string
  }
  
export default FolderList;

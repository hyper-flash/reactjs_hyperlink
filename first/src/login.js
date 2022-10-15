import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class login extends Component {
  render(props) {
    return (
      <div>
        <form>
          <fieldset>
            <legend><h1>{this.props.data.title}</h1></legend>
            <label>Email</label>
            <input type="email" value={this.props.data.email}></input>
            <br/>
            <label>password</label>
            <input type="password" value={this.props.data.password}></input>
            <br/><br/>
            <input type="submit" value="login"/><input type="reset"/>
          </fieldset>
      </form>
      </div>
    )
  }
}

login.propTypes = {
  title: PropTypes.string
};
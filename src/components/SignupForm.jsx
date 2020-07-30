import React, { Component } from 'react';
import PropTypes from 'prop-types';

const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
  password: 'password',
};

class SignupForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { name: '', email: '', age: '18-25', agreed: false, gender: GENDER.MALE };

  handleChange = (event) => {
    const { type, checked, value, name, files } = event.target;

    if (type === 'file' && files?.length) {
      this.setState({ [name]: files[0] });
    }

    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { name, agreed, gender, age, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input type="text" placeholder="Enter name" value={name} name="name" onChange={this.handleChange} />
        </label>
        <br />

        <label>
          Email
          <input type="email" placeholder="Enter email" value={email} name="email" onChange={this.handleChange} />
        </label>

        <label>
          File
          <input type="file" placeholder="Enter file" name="file" onChange={this.handleChange} />
        </label>
        <br />

        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            {/* <option value="">Select Age</option> */}
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === GENDER.MALE}
              name="gender"
              value={GENDER.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === GENDER.FEMALE}
              name="gender"
              value={GENDER.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <label>
          Agree to terms
          <input type="checkbox" name="agreed" checked={agreed} onChange={this.handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default SignupForm;

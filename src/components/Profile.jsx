import React, { Component } from 'react';
import ProfileForm from './ProfileForm';

class Profile extends Component {
    static propTypes ={};
    static defaultProps ={};


    state ={
        name: this.props.name,
        surname: this.props.surname,
    }
    
    handleSave = ({ name, surname })=>{
        this.setState({ name, surname })
    }
   render() {
       const { name, surname } = this.state;
       return <div>
             <div>name: {name}</div>
             <div>surname: {surname}</div>
             <ProfileForm onSubmit={this.handleSave} initialValue={{
                  nameValue: name,
                  surnameValue: surname
                  }}/>
       </div>
   } 
}

export default Profile;
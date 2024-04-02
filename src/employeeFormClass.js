import React, { Component } from 'react';
import './employeeForm.css';

class employeeFormClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            contact: '',
            address: '',
            gender: '',
            designation: '',
            languages: {
                gujarati: false,
                english: false,
                hindi: false
            },
            submit: false
        };
    }

    PrintValues = (e) => {
        e.preventDefault();
        this.setState({ submit: true });
    };

    UpdateField = (e) => {
        if (e.target.type === 'checkbox') {
            this.setState(prevState => ({
                languages: {
                    ...prevState.languages,
                    [e.target.name]: e.target.checked
                }
            }));
        } else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    };

    render() {
        const { fname, lname, contact, address, gender, designation, languages, submit } = this.state;

        return (
            <div className='main-div'>
                <form onSubmit={this.PrintValues}>
                    <div className="input-group">
                        <label htmlFor="fname">First Name:</label>
                        <input type="text" name="fname" id="fname" placeholder="Krupa" value={fname} onChange={this.UpdateField} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="lname">Last Name:</label>
                        <input type="text" name="lname" id="lname" placeholder="Patel" value={lname} onChange={this.UpdateField} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="contact">Mobile No:</label>
                        <input type="tel" name="contact" id="contact" placeholder="8977431252" value={contact} onChange={this.UpdateField} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="address">Address:</label>
                        <textarea name="address" rows="5" cols="20" placeholder="Type your address here." value={address} onChange={this.UpdateField} />
                    </div>

                    <div className="input-group">
                        <label>Gender:</label>
                        <input type="radio" name="gender" id="male" value="Male" title="Male" onChange={this.UpdateField} />
                        <label htmlFor="Male">Male</label>
                        <input type="radio" name="gender" id="female" value="Female" title="Female" onChange={this.UpdateField} />
                        <label htmlFor="Female">Female</label>
                        <input type="radio" name="gender" id="other" value="Other" title="Other" onChange={this.UpdateField} />
                        <label htmlFor="Other">Other</label>
                    </div>

                    <div className="input-group">
                        <label>Lang Known:</label>
                        <input type="checkbox" id="guj" name="gujarati" title="Gujarati" checked={languages.gujarati} onChange={this.UpdateField} />
                        <label htmlFor="guj">Gujarati</label>
                        <input type="checkbox" id="en" name="english" title="English" checked={languages.english} onChange={this.UpdateField} />
                        <label htmlFor="eng">English</label>
                        <input type="checkbox" id="hin" name="hindi" title="hin" checked={languages.hindi} onChange={this.UpdateField} />
                        <label htmlFor="hin">Hindi</label>
                    </div>

                    <div className="input-group">
                        <label htmlFor="designation">Designation:</label>
                        <select title="Design" id="designation" name="designation" size="2" onChange={this.UpdateField}>
                            <option value="Clerk">Clerk</option>
                            <option value="Jr. Developer">Jr. Developer</option>
                            <option value="Sr. Developer">Sr. Developer</option>
                            <option value="Project Manager">Project Manager</option>
                            <option value="Team Lead">Team Lead</option>
                            <option value="HR Manager">HR Manager</option>
                        </select>
                    </div>

                    <div className="btn-group">
                        <button type="submit" className="btnSubmit">Submit</button>
                        <input type="reset" className="btnSubmit" />
                    </div>
                </form>

                {submit && (
                    <div className="result">
                        <h2>First Name: {fname}</h2>
                        <h2>Last Name: {lname}</h2>
                        <h2>Mob No: {contact}</h2>
                        <h2>Address: {address}</h2>
                        <h2>Gender: {gender}</h2>
                        <h2>Designation: {designation}</h2>
                        <h2>Languages Known: {Object.keys(languages).filter(lang => languages[lang]).join(', ')}</h2>
                    </div>
                )}
            </div>
        );
    }
}

export default employeeFormClass;

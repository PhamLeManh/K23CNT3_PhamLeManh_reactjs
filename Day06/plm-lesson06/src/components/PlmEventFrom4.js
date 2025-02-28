import React, { Component } from "react";
class PlmEventFrom4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            plmSelectedCheckBox: []
        };
    }

    // ham xu ly khi chon check box
    plmHandleCheckBoxChange = (event) => {
        const { value, checked } = event.target;
        this.setState((prevState) => {
            const plmSelectedCheckBox = checked
                ? [...prevState.plmSelectedCheckBox, value]
                : prevState.plmSelectedCheckBox.filter((item) => item !== value);
            return { plmSelectedCheckBox };
        });
    };

    // ham xu ly submit
    plmHandleSubmit = (event) => {
        event.preventDefault();
        alert('Your selected fruits: ' + this.state.plmSelectedCheckBox.join(', '));
    };

    render () {
        return(
            <div className="alert alert-success">
                <h2>Form Input - Checkbox</h2>
                <form onSubmit={this.plmHandleSubmit}>
                    <h3>Select your favorite fruits</h3>
                    <div>
                        <input
                            type='checkbox'
                            id='apple'
                            value='apple'
                            checked={this.state.plmSelectedCheckBox.includes("apple")}
                            onChange={this.plmHandleCheckBoxChange}
                        />
                        <label htmlFor='apple'>Apple</label>
                    </div>
                    <div>
                        <input
                            type='checkbox'
                            id='banana'
                            value='banana'
                            checked={this.state.plmSelectedCheckBox.includes("banana")}
                            onChange={this.plmHandleCheckBoxChange}
                        />
                        <label htmlFor='banana'>Banana</label>
                    </div>
                    <div>
                        <input
                            type='checkbox'
                            id='cherry'
                            value='cherry'
                            checked={this.state.plmSelectedCheckBox.includes("cherry")}
                            onChange={this.plmHandleCheckBoxChange}
                        />
                        <label htmlFor='cherry'>Cherry</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
export default PlmEventFrom4;
import React, { Component } from 'react';

class PlmEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            plmName:'Manh',
            plmAge:20,
            plmGender:'Female',
            plmCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    tvcHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    plmHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.plmName + "\n" + this.state.plmAge);

        // Chuyển dữ liệu trên form lên App component (TvcApp);
        this.props.onPlmHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='plmName'>Student Name:</label>
                        <input type='text' name='plmName' id='plmName'
                            value={this.state.plmName}
                            onChange={this.plmHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='plmAge'>Student Age:</label>
                        <input type='text' name='plmAge' id='plmAge'
                            value={this.state.plmAge}
                            onChange={this.plmHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='plmGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='plmGender' id='plmMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.plmGender === 'Male'}
                                onChange={this.tvcHandleChange} />
                            <label htmlFor='plmMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='plmGender' id='plmFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.plmGender === 'Female'}
                                onChange={this.plmHandleChange} />
                            <label htmlFor='plmFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='plmGender' id='plmNone' className='mx-2'
                                value={'None'}
                                checked={this.state.plmGender === 'None'}
                                onChange={this.plmHandleChange} />
                            <label htmlFor='plmNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='plmCourse'>
                            <select name='plmCourse' id='plmCourse'
                                    value={this.state.plmCourse}
                                    onChange={this.plmHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.plmHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default PlmEventForm5;
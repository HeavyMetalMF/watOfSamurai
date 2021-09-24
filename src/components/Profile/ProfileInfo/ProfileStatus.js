import React from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () =>  {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () =>  {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        if (prevState.status !== this.props.status){
            let a = this.props.status
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status || 'No status'}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;

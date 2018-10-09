import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllUsers} from "../actions/user_actions";

class Main extends Component {

    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        console.log("Props", this.props);
        return(
            <div>
                Main
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch){
    return {
        getAllUsers: bindActionCreators(getAllUsers, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
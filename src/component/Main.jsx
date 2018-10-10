import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllUsers} from "../actions/user_actions";
import Table from './Table';
import '../css/Main.css';
class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            id:''
        }
    }

    componentDidMount() {
        this.props.getAllUsers();


    }

    render() {
       console.log("Props", this.props);
        return(
            <div className={"center_data"}>
                <h2>
                    Fetched Data from API
                </h2>
                <Table data={this.props}/>
            </div>
        );
    }
}

function mapStateToProps(state){
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
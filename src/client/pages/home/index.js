import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import UserInfo from "../../components/Userinfo";
import { fetchUserInfo } from "../../actions/user";

class HomePage extends React.Component {
    handleSubmit = e => {
        let { fetchUserInfo } = this.props;
        e.preventDefault();
        const username = this.getUsername.value;
        fetchUserInfo(username);
        this.getUsername.value = "";
    };
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="form">
                    <h2 className="title">Enter the Github Username</h2>
                    <input
                        type="text"
                        placeholder="Enter Github Username"
                        required
                        ref={input => (this.getUsername = input)}
                    />
                    <button className="button">Submit</button>
                </form>
                {this.props.data.users.isFetching ? <h3>Loading...</h3> : null}
                {this.props.data.users.isError ? (
                    <h3 className="error">No such User exists.</h3>
                ) : null}
                {Object.keys(this.props.data.users.userData).length > 0 ? (
                    <UserInfo user={this.props.data.users.userData} />
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state
    };
};
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUserInfo
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
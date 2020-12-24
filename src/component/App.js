import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {deleteNote, saveNotes} from "../action/noteAction";

class App extends Component {

    constructor(props) {
        super(props);
        //state
        this.state = {
            title: '',
            body: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderNotes = this.renderNotes.bind(this);
    }

    //lifecycle
    componentDidMount() {
        // this.props.getNotes();
    }

    //handle change
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    //handle submit
    handleSubmit(e) {
        e.preventDefault();
        const notes = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.saveNotes(notes);
        this.setState({
            title: '',
            body: ''
        });
    }

    //render notes
    renderNotes() {
        return _.map(this.props.notes, (note, key) => {
            return (
                <div key="key">
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                    <button
                        className="btn btn-danger btn-xs"
                        onClick={this.props.deleteNote(key)}>
                        Delete
                    </button>
                </div>
            );
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Title..."
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    onChange={this.handleChange}
                                    value={this.state.body}
                                    type="text"
                                    name="body"
                                    className="form-control"
                                    placeholder="Body..."
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary col-sm-12">Save</button>
                            </div>
                        </form>
                        {this.renderNotes()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes
    };
}

const mapDispatchToProps = {saveNotes, deleteNote};

export default connect(mapStateToProps, mapDispatchToProps)(App);

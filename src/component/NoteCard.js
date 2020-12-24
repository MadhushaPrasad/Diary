import React from 'react';


// class NoteCard extends Component {
//     render() {
//         return (
//             <div className="jumbotron">
//                 <div>{this.props.children}</div>
//             </div>
//         );
//     }
// }

const NoteCard = (props) => {
    return (<div className="jumbotron">
        <div>{props.children}</div>
    </div>);
};

export default NoteCard;
import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';


function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.splice(action.id, 1, {
                    id: action.id,
                    text: action.text,
                    votes: action.votes
                })
            });
        case THUMB_UP_COMMENT:
            return [{
                    id: state.comments.id,
                    user: state.comments.nickname,
                    votes: action.votes
                }, ...state]
        case THUMB_DOWN_COMMENT:
            return [{
                    id: state.comments.id,
                    user: state.comments.nickname,
                    votes: action.votes
                }, ...state]
        default:
            return state;
    }
}

export default comments;
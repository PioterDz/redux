import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4(),
        votes: 0
    }
}

function editComment(text, id, votes) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id,
        votes: votes
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function thumbUpComment(id, nickname, votes) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        user: nickname,
        votes: votes + 1
    }
}

function thumbDownComment(id, nickname, votes) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
        user: nickname,
        value: votes - 1
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text, id) => dispatch(editComment(text, id, votes));
const boundRemoveComment = (id) => dispatch(removeComment(id));
const boundThumbUpComment = (id, nickname) => dispatch(thumbUpComment(id, nickname, votes));
const boundThumbDownComment = (id, nickname) => dispatch(thumbDownComment(id, nickname, votes));
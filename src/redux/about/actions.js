import { COMENT_CREATE, COMMENT_DELETE, DECREMENT, INCREMENT, INPUT_TEXT } from "./types";

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}


export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function commentCreate(text, id) {
    return {
        type: COMENT_CREATE,
        data: {text: text, id: id}
    }
}

export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
         id
    }
}
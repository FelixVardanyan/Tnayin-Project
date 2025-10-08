import { COMENT_CREATE, COMMENT_DELETE, DECREMENT, INCREMENT, INPUT_TEXT } from "./types";

const initialState = {
    text: "",
    likes: 0,
    comments: []
}
export const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                text: action.text
            }
        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1
            }
        case COMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        case COMMENT_DELETE:
            return (() => {
                const { id } = action;
                const { comments } = state;
                const itemIndex = comments.findIndex(res => res.id === id)

                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1)
                ]
                return {
                    ...state,
                    comments: nextComments
                }
            })()
        default:
            return state
    }
}
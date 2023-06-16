import { LOAD_IMAGE, DELETE_IMAGE, ADD_IMAGE } from '../types'

export default (state, action) => {
    console.log(action, state)
    switch (action.type) {
        case LOAD_IMAGE:
            return {
                ...state,
                image: action.payload
            }

        default:
            return state
    }
}


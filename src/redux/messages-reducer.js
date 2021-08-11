const UPDATE_MESSAGE = 'update-message';
const SEND_MESSAGE = 'send-message';

let initialState = {
    dialogs : [
        {
            id: 1,
            name: 'Диалог 1'
        },
        {
            id: 2,
            name: 'Диалог 2'
        },
        {
            id: 3,
            name: 'Диалог 3'
        },
        {
            id: 4,
            name: 'Диалог 4'
        },
        {
            id: 5,
            name: 'Диалог 5'
        },
    ],
    messages : [
        {
            id: 1,
            message: 'Сообщение 1'
        },
        {
            id: 2,
            message: 'Сообщение 2'
        },
        {
            id: 3,
            message: 'Сообщение 3'
        },
        {
            id: 4,
            message: 'Сообщение 4'
        },
        {
            id: 5,
            message: 'Сообщение 5'
        },
    ],
    messageText: 'text',
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                ...state,
                messageText: action.text
            };
        case SEND_MESSAGE:
            let message = state.messageText;
            return {
                ...state,
                messageText: '',
                messages: [...state.messages, {id: 6, message: message}],
            };
            // stateCopy.messageText = '';
            // stateCopy.messages.push({id: 6, message: message});

        default:
            return state;
    }

}

export const  updateMessageCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        text: text
    }
}
export const  sendMessageCreator = (text) => {
    return {
        type: SEND_MESSAGE,
        text: text
    }
}
export default messagesReducer;
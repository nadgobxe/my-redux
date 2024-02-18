import * as actions from '../actions/actionTypes'

const initialState = {
    removalsItems: {
        sofas: {
            logo: "couch", // URL to the sofa logo
            items: [
                {
                    id: 1,
                    itemName: "2 Seat Sofa",
                    volume: 150,
                    qty: 1,
                    src: "https://png.pngtree.com/png-vector/20190405/ourmid/pngtree-vector-sofa-icon-png-image_912196.jpg",
                    buttonStatus: false,
                },
                {
                    id: 2,
                    itemName: "3 Seat Sofa",
                    volume: 175,
                    qty: 1,
                    src: "https://png.pngtree.com/png-vector/20190405/ourmid/pngtree-vector-sofa-icon-png-image_912196.jpg",
                    buttonStatus: false,
                },
            ],
        },
        boxes: {
            logo: "box", // URL to the box logo
            items: [
                {
                    id: 3,
                    itemName: "Small Box",
                    volume: 50,
                    qty: 1,
                    src: "https://cdn-icons-png.flaticon.com/512/679/679821.png",
                    buttonStatus: false,
                },
                {
                    id: 4,
                    itemName: "Large Box",
                    volume: 100,
                    qty: 1,
                    src: "https://cdn-icons-png.flaticon.com/512/679/679821.png",
                    buttonStatus: false,
                },
            ],
        },
    },
    movingList: [],
    totalVolume: [],
    countMovingList: 0,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_ITEM: {
            // Check if the item to be added does not exist in removalsItems based on its id
            const itemExistsInRemovals = state.movingList.some(removalItem => removalItem.id === action.payload.id);

            // If the item does not exist in removalsItems, proceed to add to movingList
            if (!itemExistsInRemovals) {
                return {
                    ...state,
                    movingList: [...state.movingList, action.payload], // Use spread for immutability
                };
            }

            // If the item exists in removalsItems, do not modify the state
            return state;
        }


        case actions.REMOVE_ITEM:
            return {
                ...state,
                movingList: state.movingList.filter(item => item.id !== action.payload.id)
            };
        case actions.INCR_QTY:
            return {
                ...state,
                movingList: state.movingList.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1, volume: item.qty === 0 ? item.volume : item.volume + item.volume / item.qty } : item)
            }
        case actions.DECR_QTY:
            const updatedMovingList = state.movingList.map(item => item.id === action.payload.id ? { ...item, qty: Math.max(0, item.qty - 1), volume: Math.max(0, item.volume - item.volume / item.qty), buttonStatus: Math.max(0, item.qty - 1) === 0 } : item).filter(item => item.qty > 0);
            return {
                ...state,
                movingList: updatedMovingList,
            };
        default:
            return state;
    }
}

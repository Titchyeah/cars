import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            //assume action.payload is object with name and cost
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            //assume payload is the id of the car to remove
            const updated = state.cars.filter((car) => {
                return car.id !== action.payload
            });
            state.cars = updated;
        }
    }
})

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const casrReducer = carsSlice.reducer;
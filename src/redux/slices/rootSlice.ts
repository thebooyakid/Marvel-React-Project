import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Toilet Man",
        description: "born a man, given strange abilities after repairing a toilet in a remote village in Nepal",
	    comics_appeared_in: 5,
	    super_powers: "a man with the powers of a toilet"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseComics_appeared_in: (state, action) => { state.comics_appeared_in = action.payload},
        chooseSuper_powers: (state, action) => { state.super_powers = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName } = rootSlice.actions;
export const { chooseDescription } = rootSlice.actions;
export const { chooseComics_appeared_in } = rootSlice.actions;
export const { chooseSuper_powers } = rootSlice.actions;
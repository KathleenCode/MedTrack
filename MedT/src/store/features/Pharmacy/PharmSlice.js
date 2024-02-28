import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    pharmItems: [],
    loading: false,
    error: null,
}

export const addPharmThunk = createAsyncThunk("pitems/addPharm", async(pitem) => {
    try {
        const response = await fetch("http://localhost:9000/api/pharmitems", {
            method: "POST",
            body: JSON.stringify(pitem),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
})

export const fetchPharmThunk = createAsyncThunk("pitems/fetchPharm", async(pitems) =>  {
    try {
        const response = await fetch("http://localhost:9000/api/pharmitems");
        const data = await response.json(pitems);
        return data;
    } catch(error) {
        console.log(error);
    }
})

export const updatePharmThunk = createAsyncThunk("pharmItems/updatePharm", async(medicines) => {
    console.log("medicines", medicines)
    try {
        const response = await fetch(`http://localhost:9000/api/pharmitems/${_id}`, {
            method: "PUT",
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
})

export const removePharmThunk = createAsyncThunk("pitems/removePharm", async(_id) => {
    try {
        const response = await fetch(`http://localhost:9000/api/pharmitems/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error)
    }
})

const pharmSlice = createSlice({
    name: "pharmitems",
    initialState,
    reducers: {
        addPharm: (state, action) => {
            state.pharmItems.push(action.payload)
        },

        fetchPharm,

        updatePharm: (state, action) => {
            state.pharmItems = state.pharmItems.map(item => item.id === action.payload ? {...item, workedOn: !item.workedOn}: item)
        },
        removePharm: (state, action) => {
            state.pharmItems = state.pharmItems.filter(item => item.id !== action.payload)
        },
    },

    extraReducers: (builder) => {
        builder.addCase(addPharmThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(addPharmThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.pharmItems.push(action.payload);
        })
        .addCase(addPharmThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(fetchPharmThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(fetchPharmThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.pharmItems = action.payload;
        })
        .addCase(fetchPharmThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(updatePharmThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(updatePharmThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.pharmItems = state.pharmItems.map(item => item._id === action.payload._id ? action.payload: t);
        })
        .addCase(updatePharmThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(removePharmThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(removePharmThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.pharmItems = state.pharmItems.filter(item => item._id !== action.payload._id)
        })
        .addDefaultCase();
    }
})

export const { addPharm, fetchPharm, updatePharm, removePharm } = pharmSlice.actions;

export const pharmReducer = pharmSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    labItems: [],
    loading: false,
    error: null,
}

export const addLabThunk = createAsyncThunk("labItems/addLab", async(newLabItem) => {
    try {
        const response = await fetch("http://localhost:9000/api/equipment", {
            method: "POST",
            body: JSON.stringify(newLabItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        console.log("adlabitem", data)
        return data;
    } catch(error) {
        console.log(error)
    }
})

export const fetchLabThunk = createAsyncThunk("labItems/fetchLab", async() => {
    try {
        const response = await fetch("http://localhost:9000/api/equipment");
        const data = await response.json();
        console.log("labslice", data)
        return data;
    } catch(error) {
        console.log(error)
    }
})

export const updateLabThunk = createAsyncThunk("labItems/updateLab", async(equipment) => {
    try {
        const response = await fetch(`http://localhost:9000/api/equipment/${equipment.id}`, {
            method: "PUT",
            body: JSON.stringify(equipment),
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

export const removeLabThunk = createAsyncThunk("labItems/removeLab", async(_id) => {
    try {
        const response = await fetch(`http://localhost:9000/api/equipment/${_id}`, {
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


const labSlice = createSlice({
    name: "labItems",
    initialState,
    reducers: {
        addLab: (state, action) => {
            state.labItems.push(action.payload)
        },

        fetchLab: (state, action) => {
            state.labItems = action.payload;

        },

        updateLab: (state, action) => {
            state.labItems = state.labItems.map(item => item.id === action.payload? {...item, workedOn: !item.workedOn}: item)
        },

        removeLab: (state, action) => {
            state.labItems = state.labItems.filter(item => item.id !== action.payload )
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addLabThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(addLabThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.labItems.push(action.payload);
        })
        .addCase(addLabThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(fetchLabThunk.pending, (state, action) => {
            state.loading =true;
        })
        .addCase(fetchLabThunk.fulfilled, (state, action) => {
            console.log("fetch", action);
            state.loading = false;
            state.labItems = action.payload;
        })
        .addCase(fetchLabThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(updateLabThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(updateLabThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.labItems = state.labItems.map(item => item._id === action.payload._id? action.payload : t);
        })
        .addCase(updateLabThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(removeLabThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(removeLabThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.labItems = state.labItems.filter(item => item._id !== action.payload._id);
        })
        .addCase(removeLabThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addDefaultCase();
    }
})

export const { addLab, fetchLab, removeLab, updateLab } = labSlice.actions;
 
export const labReducer = labSlice.reducer;
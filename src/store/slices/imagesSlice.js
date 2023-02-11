import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ImagesService} from "../../api/imagesService";

const initialState = {
    images: [],
    query: '',
    limitPerPage: 30,
    currentPage: 1,
    totalPageCount: 1,
    isLoading: false,
    isError: false
}

export const getImagesAsync = createAsyncThunk(
    'images/fetchAll',
    async (_, thunkAPI) =>  {
        const dispatch = thunkAPI.dispatch
        const state = thunkAPI.getState()
        const data = await ImagesService.getAll(state.images.query, state.images.currentPage)
        const totalCountPages = Math.ceil(data.totalHits / state.images.limitPerPage)
        dispatch(setTotalPageCount(totalCountPages))
        return data.hits
    }
)

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setTotalPageCount: (state, action) => {
            state.totalPageCount = action.payload
        },
        setQuery: (state, action) => {
            state.currentPage = 1
            state.query = action.payload
        },
        clearError: (state) => {
            state.isError = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getImagesAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getImagesAsync.fulfilled, (state, action) => {
                state.images = action.payload
                state.isLoading = false
            })
            .addCase(getImagesAsync.rejected, (state) => {
                state.isError = true
            })
    }
})

export const {setCurrentPage, setTotalPageCount, setQuery, clearError} = imagesSlice.actions

export default imagesSlice.reducer

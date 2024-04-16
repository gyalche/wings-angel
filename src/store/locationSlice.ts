import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyState {
  locationData: [] | any;
  loading:boolean;
}

const initialState: MyState = {
  locationData: [],
  loading:true,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<any[]>) {
      state.locationData = action.payload;
    },
    setLoading:(state, action:PayloadAction<boolean>)=>{
        state.loading=action.payload;
    }
  },
});

export const { setLocation,setLoading } = locationSlice.actions;
export default locationSlice.reducer;

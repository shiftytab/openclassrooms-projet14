import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EmployeePropsType } from '@/types/EmployeeType';


const employeeSlice = createSlice({
  name: 'employee',
  initialState: [] as EmployeePropsType[],
  reducers: {
    addEmployee: (state, action: PayloadAction<EmployeePropsType>) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;

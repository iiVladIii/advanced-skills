const firstCharToUpperCase = require('../firstCharToUpperCase');

module.exports = (sliceName) => {
    const typeName = `${firstCharToUpperCase(sliceName)}Schema`;

    return `import { createSlice, PayloadAction} from '@reduxjs/toolkit';
    import { ${typeName} } from '..types/${sliceName}/Schema';
    
    const initialState: ${typeName} = {
    
    };
    
    export const ${sliceName}Slice = createSlice({
        name: '${sliceName}',
        initialState,
        reducers: {
            template: (state, action: PayloadAction<void>) => {
            },
        },
        // extraReducers: (builder) => {
        //     builder
        //         .addCase(.pending, (state) => {
        //             state.isLoading = true;
        //             state.error = undefined;
        //         })
        //         .addCase(.fulfilled, (state, action: PayloadAction<>) => {
        //             state.isLoading = false;
        //             state.data = action.payload;
        //         })
        //         .addCase(.rejected, (state, action) => {
        //             state.isLoading = false;
        //             state.error = action.payload;
        //         });
        // },
    });

    export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
    export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;`;
};

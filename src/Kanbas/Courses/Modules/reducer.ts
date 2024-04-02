import {createSlice} from "@reduxjs/toolkit";

interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string; // Assuming this is an ID or key referencing the module
}

export interface Module {
    _id: string;
    name: string;
    description: string;
    course: string; // Assuming this is an ID or key referencing the course
    lessons: Lesson[];
}

interface ModulesState {
    modules: Module[];
    module: Module;
}

const initialState: ModulesState = {
    modules: [],
    module: {
        _id: "New Module ID", name: "New Module", description: "New Module Description", course: "New Module Course Number", lessons: [
            {
                "_id": "New Lesson ID",
                "name": "New Lesson Name",
                "description": "New Lesson Description",
                "module": "New Lesson Module"
            },
        ]
    },
};


const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, action) => {
            state.modules = action.payload;
        },
        addModule: (state, action) => {
            state.modules = [action.payload, ...state.modules];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((module) => {
                if (module._id === action.payload._id) {
                    return action.payload;
                } else {
                    return module;
                }
            });
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
    },
});


export const {
    addModule, deleteModule,
    updateModule, setModule, setModules
} = modulesSlice.actions;
export default modulesSlice.reducer;
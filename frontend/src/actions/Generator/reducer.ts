import { Reducer } from "redux";
import { GeneratorActionTypes } from "./actionType";
import { IGeneratorState, ActionModel } from "./model";

const unloadedState: IGeneratorState = {
    template: {
        loading: false,
        data: null
    },
    itemCRUD: {
        loading: "",
        open: ""
    }
};


export const GeneratorReducer: Reducer<IGeneratorState> = (
    state: IGeneratorState = unloadedState,
    action: ActionModel,
) => {
    switch (action.type) {
        //#################### Login cases
        case GeneratorActionTypes.GetPageSample: {
            return {
                ...state,
                template: {
                    ...state.template,
                    loading: true
                },
            } as IGeneratorState;
        }
        case GeneratorActionTypes.GetPageSampleSuccess: {
            return {
                ...state,
                template: {
                    ...state.template,
                    loading: false,
                    data: action.data
                },
            } as IGeneratorState;
        }
        case GeneratorActionTypes.GetPageSampleFail: {
            return {
                ...state,
                template: {
                    ...state.template,
                    loading: false
                },
            } as IGeneratorState;
        }

       

    }
    return state;
};

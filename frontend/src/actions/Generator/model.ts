import { Action } from "redux";
import {GeneratorActionTypes} from './actionType';

export interface IGeneratorState {
    template: {
        loading: boolean;
        data: any;
    }
    itemCRUD: {
        loading: string;
        open: string;
    }
}

interface IGetPageSample extends Action<string> {
    type: GeneratorActionTypes.GetPageSample
}
interface IGetPageSampleSuccess extends Action<string> {
    type: GeneratorActionTypes.GetPageSampleSuccess
    data: any
}
interface IGetPageSampleFail extends Action<string> {
    type: GeneratorActionTypes.GetPageSampleFail
}





export type ActionModel = IGetPageSample
    | IGetPageSampleSuccess
    | IGetPageSampleFail
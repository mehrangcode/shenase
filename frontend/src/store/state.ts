

import { IAuthState } from '../actions/Auth/model';
import { IPanelState } from '../actions/Panel/model';
import { IProductState } from '../actions/Products/model';
import { ICategoryState } from '../actions/Category/model';
import { IGeneratorState } from '../actions/Generator/model';
export interface IApplicationState {
    auth: IAuthState,
    panel: IPanelState,
    product: IProductState,
    category: ICategoryState,
    generator: IGeneratorState
}

export type AppAction<TAction> = (dispatch: (action: TAction) => void, getState: () => IApplicationState) => void;

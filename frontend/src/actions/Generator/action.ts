import { AppAction } from "../../store/state";
import { GeneratorActionTypes } from "./actionType";
import { ActionModel } from "./model";
import { GeneratorApi } from "./api";
import { EModal } from "../../Utils/Errors/Modal";

    export const getTemplate= (templateId: string): AppAction<ActionModel> => async (dispatch, getState) => {
        dispatch({type: GeneratorActionTypes.GetPageSample})
        try {
            const res = await GeneratorApi.getTemplate(templateId)
            if(res.data){
                dispatch({type: GeneratorActionTypes.GetPageSampleSuccess, data: res.data})
            }
        } catch (error) {
            //loagin perosses faild
            dispatch({type: GeneratorActionTypes.GetPageSampleFail})
            EModal(error)
        }
        
    }

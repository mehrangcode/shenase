 import { urlGeneral, urlVersion } from "../../Utils/General/GConst"
import axios from '../../AxiosConfig';
const PanelUrl = urlGeneral + urlVersion 

export const GeneratorApi = {
    getTemplate : async (templateId: string) => {
        return axios.get(PanelUrl+ "/templates/" + templateId)
    },
    
}
import { FormInstance, FormWrapper } from "@codeffekt/ce-core-data";
import { CeEvent, CE_WHY_EVENT_TYPE_NOP } from "./CeEvent";

export class CeEventWrapper extends FormWrapper<CeEvent> {

    constructor(form?: FormInstance) {
        super({
            what: {},
            why: {
                type: CE_WHY_EVENT_TYPE_NOP
            }
        }, form);
    }

}
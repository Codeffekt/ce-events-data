import { FormInstance, IndexType } from "@codeffekt/ce-core-data";
import { CE_EVENT_MSG, CeEvent } from "../events/CeEvent";

export const FORM_BLOCK_TYPE_INDEX = "index";
export const FORM_BLOCK_TYPE_FORM_ARRAY = "formArray";

export const CE_WHY_EVENT_TYPE_FORM_CREATE = CE_EVENT_MSG + ".form.create";
export const CE_WHY_EVENT_TYPE_FORM_REMOVE = CE_EVENT_MSG + ".form.remove";
export const CE_WHY_EVENT_TYPE_FORM_UPDATE = CE_EVENT_MSG + ".form.update";
export const CE_WHY_EVENT_TYPE_FORM_CREATES = CE_EVENT_MSG + ".form.creates";
// export const CE_WHY_EVENT_TYPE_ADD = CE_EVENT_MSG + ".block.add";

export function createEvtFormCreate(form: FormInstance): CeEvent {
    return {
        what: {
            payload: form
        },
        why: {
            type: CE_WHY_EVENT_TYPE_FORM_CREATE
        }
    };
}

export function createEvtFormRemove(fid: IndexType): CeEvent {
    return {
        what: {
            payload: fid
        },
        why: {
            type: CE_WHY_EVENT_TYPE_FORM_REMOVE
        }
    };
}

export function createEvtFormUpdate(form: FormInstance): CeEvent {
    return {
        what: {
            payload: form
        },
        why: {
            type: CE_WHY_EVENT_TYPE_FORM_UPDATE
        }
    };
}

/* export function createEvtFormBlockAdd(fid: IndexType, block: FormBlock): CeEvent {
    return {
        what: {
            parent: fid,
            payload: block
        },
        why: {
            type: CE_WHY_EVENT_TYPE_ADD
        }
    };
} */

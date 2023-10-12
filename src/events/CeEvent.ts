import { IndexType } from "@codeffekt/ce-core-data";
import { User } from "../core/Core";

export const CE_EVENT_MSG = "cevt";
export const CE_EVENT_MSG_JOIN = "cevt.join";
export const CE_EVENT_MSG_LEAVE = "cevt.leave";
export const CE_EVENT_MSG_FWD = "cevt.fwd";
export const CE_EVENT_MSG_CHAT = "cevt.chat";
export const CE_EVENT_MSG_FORM = "cevt.form";
export const CE_EVENT_MSG_SESSION = "cevt.session";
export const CE_EVENT_MSG_CONNECT = "cevt.connect";
export const CE_EVENT_MSG_DISCONNECT = "cevt.disconnect";

export interface CeEventFwd {
    event: CeEvent;
}

export interface CeEvent {
    uuid?: IndexType;
    who?: CeEventWho;
    where?: CeEventWhere;
    what: CeEventWhat;
    why: CeEventWhy;
    when?: CeEventWhen;
}

export interface CeEventWho {
    account: User | IndexType;
}

export interface CeEventWhere {
    room: IndexType;
}

export interface CeEventWhat {
    parent?: IndexType;
    payload?: any;
}

export const CE_WHY_EVENT_TYPE_NOP = CE_EVENT_MSG + ".nop";
export const CE_WHY_EVENT_TYPE_CREATE = CE_EVENT_MSG + ".create";

export interface CeEventWhy {
    type: string;
}

export interface CeEventWhen {
    timestamp: number;
}


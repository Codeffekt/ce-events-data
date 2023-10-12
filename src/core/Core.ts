import { CoreIndexElt, IndexType } from "@codeffekt/ce-core-data";
import { CE_EVENT_MSG } from "../events/CeEvent";

export interface RefIndexElt extends CoreIndexElt {
    ref: IndexType;
}

export interface User extends CoreIndexElt {
    login: string;
    account: IndexType;
    exp?: number;
    token?: string;
    avatar?: string;
}

export interface Stream {
    id: IndexType;
    client: IndexType;
}

export const CE_WHY_EVENT_TYPE_USER_UPDATE = CE_EVENT_MSG + ".user.update";


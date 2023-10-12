import { AccountSettings, CoreIndexElt, IndexType } from "@codeffekt/ce-core-data";
import { CeEvent, CE_EVENT_MSG } from "../events/CeEvent";

export const ROOM_RECEPTIONIST = "/hotel/private";

export interface StreamClient {
    id: IndexType;
    ctime: number;
    stream: IndexType;
    account: AccountSettings;    
}

export interface RoomClient {
    id: IndexType;
    login: string;
    avatar: string;
}

export interface ActivationRule {
    type: IndexType;
    data: any;
}

export interface AccountRoom extends CoreIndexElt {
    creator: IndexType;    
    persistent: boolean;
    rules: ActivationRule[];
    title?: string;
}

export interface AccountRoomClient extends AccountRoom {    
}

export const CE_WHY_EVENT_TYPE_ENTER = CE_EVENT_MSG + ".room.enter";
export const CE_WHY_EVENT_TYPE_LEAVE = CE_EVENT_MSG + ".room.leave";
export const CE_WHY_EVENT_TYPE_JOIN = CE_EVENT_MSG + ".room.join";
export const CE_WHY_EVENT_TYPE_INVITED = CE_EVENT_MSG + ".room.invited";
export const CE_WHY_EVENT_TYPE_WELCOME = CE_EVENT_MSG + ".room.welcome";
export const CE_WHY_EVENT_TYPE_UPDATE = CE_EVENT_MSG + ".room.update";

export function sanitizeRoom(room: AccountRoomClient): AccountRoomClient {
    return { ...room };
}

export function createEvtEnter(client: AccountSettings): CeEvent {
    return {
        what: {
            payload: client.id
        },
        why: {
            type: CE_WHY_EVENT_TYPE_ENTER
        }
    };
}

export function createEvtLeave(client: AccountSettings): CeEvent {
    return {
        what: {
            payload: client.id
        },
        why: {
            type: CE_WHY_EVENT_TYPE_LEAVE
        }
    };
}

export function createEvtJoin(client: RoomClient): CeEvent {
    return {
        what: {
            payload: client
        },
        why: {
            type: CE_WHY_EVENT_TYPE_JOIN
        }
    };
}

export function createEvtUpdate(room: AccountRoom): CeEvent {
    return {
        what: {
            payload: room
        },
        why: {
            type: CE_WHY_EVENT_TYPE_UPDATE
        }
    };
}

export function createEvtWelcome(room: AccountRoom, clients: RoomClient[]): CeEvent {
    return {
        what: {
            payload: { ...room, clients: clients }
        },
        why: {
            type: CE_WHY_EVENT_TYPE_WELCOME
        }
    };
}

export function createEvtInvited(from: AccountSettings, where: AccountRoom): CeEvent {
    return {
        what: {
            payload: { where: where.id, who: from.id }
        },
        why: {
            type: CE_WHY_EVENT_TYPE_INVITED
        }
    };
}

export const CE_WHY_EVENT_TYPE_RULES_UPDATE = CE_EVENT_MSG + ".room.rules.update";

export function createEvtRulesUpdate(room: AccountRoom): CeEvent {
    return {
        where: {
            room: room.id
        },
        what: {
            payload: room.rules
        },
        why: {
            type: CE_WHY_EVENT_TYPE_RULES_UPDATE
        }
    };
}

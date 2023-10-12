import { IndexType } from "@codeffekt/ce-core-data";
import { CeEvent, CE_EVENT_MSG } from "../events/CeEvent";

export interface ChatRoomMsg {
  content: string;
  id?: IndexType;
  author?: IndexType;
  ctime?: number;
}

export interface ChatRoom {
  id: IndexType;
  msgs: ChatRoomMsg[];
}

export const CE_WHY_EVENT_TYPE_CHAT_MSG = CE_EVENT_MSG + ".room.chat.msg";
export const CE_WHY_EVENT_TYPE_CHAT_MSGS = CE_EVENT_MSG + ".room.chat.msgs";
export const CE_WHY_EVENT_TYPE_CHAT_START_TYPING = CE_EVENT_MSG + ".room.chat.typing.start";
export const CE_WHY_EVENT_TYPE_CHAT_STOP_TYPING = CE_EVENT_MSG + ".room.chat.typing.stop";

export function createEvtChatMsg(room: IndexType, msg: ChatRoomMsg): CeEvent {
  return {
      where: {
          room: room
      },
      what: {
          payload: msg
      },
      why: {
          type: CE_WHY_EVENT_TYPE_CHAT_MSG
      }
  };
}

export function createEvtChatMsgs(room: IndexType, msgs: ChatRoomMsg[]): CeEvent {
  return {
    where: {
      room: room
    },
    what: {
      payload: msgs
    },
    why: {
      type: CE_WHY_EVENT_TYPE_CHAT_MSGS
    }
  };
}

export function createEvtChatTyping(room: IndexType, starting: boolean = true): CeEvent {
  return {
      where: {
          room: room
      },
      what: {},
      why: {
          type: (starting ? CE_WHY_EVENT_TYPE_CHAT_START_TYPING : CE_WHY_EVENT_TYPE_CHAT_STOP_TYPING)
      }
  };
}

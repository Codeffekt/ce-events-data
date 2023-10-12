import { AccountSettings, AccountSettingsRoles, IndexType } from "@codeffekt/ce-core-data";
import { CE_EVENT_MSG, CeEvent } from "../events/CeEvent";
import { AccountRoomClient } from "./Room";

export const CE_WHY_EVENT_TYPE_SESSION = CE_EVENT_MSG + ".session";

export interface TokenData {
  id: IndexType;
  login: IndexType;
  role: AccountSettingsRoles;
  account?: AccountSettings;
  room?: AccountRoomClient;
}

export interface Token {
  iat: number;
  data: TokenData;
}

export interface CeEventTokenData {
  exp: number;
  data: TokenData;
  token: string;
}

export interface SessionData {
  account: AccountSettings;
  tokenData: CeEventTokenData;
  extra?: any;
}

export interface CeEventSession {
  login?: string;
}

export function createEvtSession(data: CeEventTokenData): CeEvent {
  return {
    what: {
      payload: data
    },
    why: {
      type: CE_WHY_EVENT_TYPE_SESSION
    }
  };
}

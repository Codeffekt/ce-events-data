import { RoomClient } from "../rooms/Room";
import { CeEvent } from "../events/CeEvent";
import { IndexType } from "@codeffekt/ce-core-data";

export abstract class CeBot implements RoomClient {
  id = "0000";
  login = "0000";
  avatar = "lol";
  type = "bot";
  room = "any";

  abstract isConcernedMessage(msg: string): boolean;
  abstract processMessage(msg: string): Promise<string>;
  abstract isConcernedEvent(evt: CeEvent): boolean;
  abstract processEvent(evt: CeEvent): Promise<string>;

}

export interface BotConfig {
  id: IndexType;
  login: IndexType;
  room: IndexType;
  avatar: string;
};

export interface BotDescr {
  label: string;
  login: string;
  descr: string;
  config?: any;
}
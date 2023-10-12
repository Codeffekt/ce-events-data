import { AssetElt, IndexType } from "@codeffekt/ce-core-data";
import { CeEvent, CE_EVENT_MSG } from "../events/CeEvent";

export const CE_WHY_EVENT_TYPE_ASSET_CREATE = CE_EVENT_MSG + ".asset.create";
export const CE_WHY_EVENT_TYPE_ASSET_REMOVE = CE_EVENT_MSG + ".asset.remove";
export const CE_WHY_EVENT_TYPE_ASSET_UPDATE = CE_EVENT_MSG + ".asset.update";   

export function createEvtAssetCreate(asset: AssetElt): CeEvent {
    return {
        what: {
            payload: asset
        },
        why: {
            type: CE_WHY_EVENT_TYPE_ASSET_CREATE
        }
    };
}

export function createEvtAssetRemove(fid: IndexType): CeEvent {
    return {
        what: {
            payload: fid
        },
        why: {
            type: CE_WHY_EVENT_TYPE_ASSET_REMOVE
        }
    };
}

export function createEvtAssetUpdate(asset: AssetElt): CeEvent {
    return {
        what: {
            payload: asset
        },
        why: {
            type: CE_WHY_EVENT_TYPE_ASSET_UPDATE
        }
    };
}

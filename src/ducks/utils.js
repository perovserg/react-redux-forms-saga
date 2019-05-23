import {OrderedMap, Map} from 'immutable';

export function generateId() {
    return Date.now();
}

export function firebaseDataToEntities(data, RecordModel = Map) {
    return (new OrderedMap(data)).mapEntries(([uid, value]) => (
        [uid, new RecordModel(value).set('uid', uid)]
    ));
}


import * as reducerHelper from 'store/helpers/reducerHelper';

/**
 *
 * Note: The update is complete and attributes not passed to an entity will be lost
 * @param store the object that contains the elements
 * @param entities an object with the entities to create or update to the store
 * @returns {{}} a new stores with the entities
 */
export const createOrUpdateMultipleEntities = (store, entities) => {
  if (!entities) {
    return store;
  }
  return Object.keys(entities).reduce((newState, entityId) => {
    return {...newState, [entityId]: {...entities[ entityId ]}};
  }, {...store});
};

/**
 *
 * @param store the object that contains the elements
 * @param key the id of the object you want to update
 * @param updateEntityCallback the function that pass the old entity as an attribute and expects in return the entity updated version
 * @returns {{}} a new store with the entity updated
 */
export const updateEntityOnStoreWithCallBack = (store, key, updateEntityCallback) => {
  if (!store[ key ]) {
    return store;
  }
  return {
    ...store,
    [key]: updateEntityCallback(store[ key ]),
  };
};

/**
 *
 * @param store the object that contains the elements
 * @param key the id of the object you want to update
 * @param updatedAttributes an object with the attributes that will be updated
 * @returns {{}} a new store with the entity updated
 */
export const updateEntityOnStore = (store, key, updatedAttributes) => {
  return updateEntityOnStoreWithCallBack(store, key, (oldEntity) => (reducerHelper.updateObject(oldEntity, updatedAttributes)));
};

/**
 *
 * @param store the object that contains the elements
 * @param key the id of the object you want to add
 * @param item the item you want to store
 * @returns {{}} a new store object that contains all previous items and the new one
 */
export const addEntityToStore = (store, key, item) => {
  if (store[ key ]) {
    return store;
  }

  return {
    ...store,
    [key]: {...item},
  };
};

/**
 *
 * @param store the object that contains the elements
 * @param entityId the id of the entity you want to delete
 * @returns {{}} a new store object without the item
 */
export const deleteEntityOfStore = (store, entityId) => {
  const newStore = {...store};
  delete newStore[ entityId ];
  return newStore;
};

/**
 *
 * @param store the object that contains the elements
 * @param entityId the id of the entity you want to delete
 * @returns {{}} a new store object without the item
 */
export const deleteEntitiesOfStore = (store, ids) => {
  const newStore = {...store};
  ids.forEach(id => {
    delete newStore[id];
  });
  return newStore;
};


/**
 *
 * @param objectsArray An array that contains the object elements
 * @param entityStructure the function that specify the structure of the object to be store
 *
 * return an object that contains the objects in the array
 */
export const createEntityStoreWithEntities = (objectsArray, entityStructure = entity => entity) => {
  return objectsArray.reduce((entityStore, object) => {
    return {...entityStore, ...entityStructure(object)};
  }, {});
};

/**
 *
 * @param objectsArray An array that contains the object elements
 * @param key the attribute that is the id of the object
 * @param objectStructure the function that specify the structure of the object to be store
 */
export const createEntityStore = (objectsArray, key = '_id', objectStructure = (object) => object) => {
  return createEntityStoreWithEntities(objectsArray, (object) => {
    return {[object[ key ]]: {...objectStructure(object)}};
  });
};

/**
 *
 * @param store the object that contains the elements
 * @returns [] An array with all the elements in the store object
 */
export const storeToArray = (store) => {
  return Object.keys(store)
    .reduce((objectsFiltered, key) => {
      return [ ...objectsFiltered, {...store[key]} ];
    }, []);
};

/**
 *
 * @param store the object that contains the elements
 * @param predicate
 * @returns [] An array with the elements that fulfill the predicate condition
 */
export const filterStore = (store, predicate) => {
  return Object.keys(store)
    .filter(key => predicate(store[key]))
    .reduce((objectsFiltered, key) => {
      return [ ...objectsFiltered, {...store[key]} ];
    }, []);
};

/**
 *
 * @param store the object that contains the elements
 * @param idList an Array with ids of the elements
 *
 * return [] an Array of elements containing the values store for the given ids;
 */
export const getElementsById = (store, idList) => idList.map(id => store[id]);


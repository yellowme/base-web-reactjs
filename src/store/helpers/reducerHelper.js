/**
 *
 * @param oldObject
 * @param newValues
 * @returns {{}} new Object updated
 */
export function updateObject(oldObject, newValues) {
  // Encapsulate the idea of passing a new object as the first parameter
  // to Object.assign to ensure we correctly copy data instead of mutating
  return {...oldObject, ...newValues};
}

/**
 *
 * @param array A list of elements
 * @param itemId the item id that will be updated
 * @param updateItemCallback a function that pass the item as attribute and expects the item updated
 * @param idAttribute the name of the attribute that represents the id
 *
 * return a new Array with the with all the elements and a the item updated
 */
export function updateItemInArray(array, itemId, updateItemCallback, idAttribute = '_id') {
  const updatedItems = array.map(item => {
    if (item[idAttribute] !== itemId) {
      // Since we only want to update one item, preserve all others as they are now
      return item;
    }

    // Use the provided callback to create an updated item
    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}

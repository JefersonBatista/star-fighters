export function mapObjectToInsertQuery(object, offset = 1) {
  const objectColumns = Object.keys(object)
    .map((key) => `"${key}"`)
    .join(",");
  const objectValues = Object.values(object);
  const queryParams = objectValues
    .map((_, index) => `$${index + offset}`)
    .join(",");

  return { objectColumns, objectValues, queryParams };
}

export function mapObjectToUpdateQuery(object, offset = 1) {
  const objectColumns = Object.keys(object)
    .map((key, index) => `"${key}"=$${index + offset}`)
    .join(",");
  const objectValues = Object.values(object);

  return { objectColumns, objectValues };
}

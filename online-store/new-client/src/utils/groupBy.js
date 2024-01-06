export const groupBy = (items, key) => {
  const result = []
  const itemsGrouped = items.reduce(
  (result, item) => ({
    ...result,
    [item[key]]: [
      ...(result[item[key]] || []),
      item,
    ],
  }), 
  {},
);
  const keys = Object.keys(itemsGrouped);
  for (const key of keys) {
    result.push({
      name: key,
      values: itemsGrouped[key]
    })
  }
  return result
}
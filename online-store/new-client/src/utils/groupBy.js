export const groupBy = (items, key) => items.reduce(
  (result, item) => ([
      ...result,
    {
     "name": item[key],
    "values": [
      ...(result[item[key]] || []),
      item,
    ],
  }]), 
  [],
);

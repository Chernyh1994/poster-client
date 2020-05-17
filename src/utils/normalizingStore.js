export const addAllIds = (items) => items.data.map((item) => item.id);

export const addByIds = (items) => items.data.reduce((accumulator, item) => ({ ...accumulator, [item.id]: item }), {});

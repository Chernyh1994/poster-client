export const addAllIds = (items) => items.map((item) => item.id);

export const addByIds = (items) => items.reduce((accumulator, item) => ({ ...accumulator, [item.id]: item }), {});

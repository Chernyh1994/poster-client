export const keyAllIds = (items) => items.map((item) => item.id);

export const keyByIds = (items) => items.reduce((accumulator, item) => ({ ...accumulator, [item.id]: item }), {});

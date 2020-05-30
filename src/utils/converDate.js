const now = new Date();

export const isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();

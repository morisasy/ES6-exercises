const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size);
console.log(months.has('September'));
console.log(months.values());
const iterator = months.values();
iterator.next();
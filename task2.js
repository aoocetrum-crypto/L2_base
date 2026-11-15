function cache(func) {
const memory = {};
return function(...args) {
const key = JSON.stringify(args);
if (!(key in memory)) {
    memory[key] = func(...args);
}

return memory[key];
};
}

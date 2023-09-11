// const ids = new Set([1, 2, 3]);
const ids = new Set(["Hi", "from", "Set"]);
ids.add(2);
if (ids.has(2)) {
    ids.delete("Hi");
}

for (const entry of ids.entries()) {
    console.log(entry[0]);
}

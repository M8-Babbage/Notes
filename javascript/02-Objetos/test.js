const family = {
  name: "Edwin",
  lastname: "Páez"
}

console.log(family);

const newFamily = { family, cousin: "Matias"}
console.log(newFamily);


delete newFamily.family;

console.log(family);
console.log(newFamily);
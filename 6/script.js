function combine(names, surnames) {
  if (names.length !== surnames.length) {
    return "Arrays must have the same length.";
  }

  const fullnames = [];
  
  for (let i = 0; i < names.length; i++) {
    const fullName = `${i + 1}. ${names[i]} ${surnames[i]}`;
    fullnames.push(fullName);
  }

  return fullnames;
}

const names = ["Milenko", "Igor"];
const surnames = ["Nedelkovski", "Dzambazov"];
const result = combine(names, surnames);

console.log(result);
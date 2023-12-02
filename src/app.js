let pronoun = ["the", "our", "super"];
let adj = ["great", "big", "small"];
let noun = ["jogger", "racoon", "dog"];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      console.log(`${pronoun[p]}${adj[a]}${noun[n]}.com`);
    }
  }
}

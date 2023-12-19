function tellStory([name, mood, activity]) {
  const story = `${name}. ${name} is ${mood} Today. They have been ${activity} all day.`;
  return story;
}

const storyArray = ["John Doe", "sad", "sleeping"];
const result = tellStory(storyArray);

alert(result);

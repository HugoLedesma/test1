let give = ["Enter an adjective.","Enter a season.","Enter the name of the protagonist.","Enter a progressive verb.","Enter an adjective.","Enter a country.","Enter male or female.","Enter an adjective.","Enter an object (plural).","Enter the room of a house.","Enter an adjective.","Enter an animal.","Enter a verb (past tense).","Enter the name of a place.","Enter an adjective.",'Enter a verb (3rd person singular, like "runs" or something idk).',"Enter a profession.","Enter male or female.","Enter a catchphrase.","Enter a country.","Enter an adjective.","Enter a profession.","Enter a store name.","Enter a verb (past tense)","Enter a progressive verb.","Enter a verb (past tense)","Enter an adjective.","Enter another adjective.","Enter a verb (past tense).","Enter another verb (past tense).","Enter an adjective.","Enter a superpower.","Enter another superpower.","Enter an adjective.","Enter a family member.","Enter a verb (past tense).","Enter a body part.","Enter a weapon.","Enter a body part.","Enter a line of dialogue.","Enter a verb (past tense).","Enter an evil remark.","Enter a verb (past tense).","Enter an encouraging statement that you would tell yourself internally.","Enter an adjective.","Enter a number.","Enter a fighting method.","Enter another fighting method.","Enter an adjective.","Enter a sound (like honking or something idk).","Enter a time.","Enter someone's final words.","Enter a verb (past tense).","Enter a progressive verb.","Enter a material.","Enter an emotion.","Enter a verb (past tense).","Enter another verb (past tense).","Enter a country.","Enter a verb (past tense)","Enter a hero's remark.","Enter a verb (past tense).","Enter a type of building.","Enter an adjective.","Enter another adjective.","Enter a family member.","Enter a verb.","Enter a random line of dialogue.","Enter an adjective.","Enter something you do at home.","Enter something else you do at home.","Enter one last thing you do at home.","Enter one last sentence."];
console.log("give length: " + give.length);

let answers = [];

function makeStory(){
  if(answers[6].includes("f") || answers[6].includes("F")){
    p1sub = "she";
    p1ob = "her";
    p1pos = "her";
  }else{
    p1sub = "he";
    p1ob = "he";
    p1pos = "his";
  }
  if(answers[17].includes("f") || answers[17].includes("F")){
    p2sub = "she";
    p2ob = "her";
    p2pos = "her";
  }else{
    p2sub = "he";
    p2ob = "he";
    p2pos = "his";
  }
  let s = `One ${answers[0]} ${answers[1]} day, ${answers[2]} was ${answers[3]} through the ${answers[4]} streets of ${answers[5]}. ${answers[2]} was having a ${answers[7]} day because ${p1sub} had ${answers[8]} in ${p1pos} ${answers[9]}. However, all of this changed when a ${answers[10]} ${answers[11]} ${answers[12]} from ${answers[13]}. The ${answers[11]} was ${answers[14]}, and ${answers[15]} like a ${answers[16]}. ${p2sub.charAt(0).toUpperCase() + p2sub.substring(1,p2sub.length)} has a famous catchphrase which is "${answers[18]}". ${p2sub.charAt(0).toUpperCase() + p2sub.substring(1,p2sub.length)} is well known by the people of ${answers[19]} for being a ${answers[20]} ${answers[21]} for their ${answers[22]}. They once said that the ${answers[11]} ${answers[23]} a man for not ${answers[24]}. The man ${answers[25]} a ${answers[26]} death. Henceforth, ${answers[2]} had a ${answers[27]} feeling about this enocunter with the ${answers[11]}. The ${answers[11]} then ${answers[28]} ${p2pos} famous catchphrase which ${answers[29]} ${answers[2]}. "${answers[18]}". ${answers[2]} was ${answers[30]}, but then ${p1sub} remembered ${p1pos} ancient power. ${p1sub.charAt(0).toUpperCase() + p1sub.substring(1,p1sub.length)} was capable of ${answers[31]} and ${answers[32]}. ${answers[2]} got these ${answers[33]} powers from ${p1pos} ${answers[34]}. ${answers[2]} was given these powers by being ${answers[35]} in the ${answers[36]} with a ${answers[37]}. ${answers[2]} then said to the ${answers[11]} with ${p1pos} ${answers[38]} "${answers[39]}". The ${answers[11]} then ${answers[40]} at ${answers[2]}: "${answers[41]}". ${answers[2]} ${answers[42]} "${answers[43]}". Then, ${answers[2]} and the ${answers[11]} did battle. It was a ${answers[44]} fight, lasting about ${answers[45]} minutes. There was ${answers[46]}, there was ${answers[47]}, but after all was said and done, there was a ${answers[48]} ${answers[49]}, which the ${answers[11]} wailed at ${answers[50]}. The ${answers[11]} then said ${p2pos} final words: "${answers[51]}". The ${answers[11]} then ${answers[52]}, before ${answers[53]} on the ${answers[54]} ground. ${answers[2]} was filled with ${answers[55]}, for ${p1sub} had ${answers[56]} the ${answers[11]} in battle. ${answers[2]} ${answers[57]} back to ${p1pos} home, which is located in ${answers[58]}. ${p1sub.charAt(0).toUpperCase() + p1sub.substring(1,p1sub.length)} ${answers[59]} "${answers[60]}" and ${answers[61]} back to ${p1pos} ${answers[62]}. When ${p1sub} returned, ${p1sub} was ${answers[63]} and ${answers[64]}. ${answers[2]} told ${p1pos} ${answers[65]} about ${p1pos} ${answers[66]} with the ${answers[11]}. ${p1pos.charAt(0).toUpperCase() + p1pos.substring(1,p1pos.length)} ${answers[65]} said "${answers[67]}". This made ${answers[2]} ${answers[68]}, so ${p1sub} decided to ${answers[69]}, ${answers[70]} and ${answers[71]}. ${answers[72]}.`;
  return s;
}

let num = 0;

function next(){
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let message = document.getElementById("message");

  answers.push(input);
  num++;
  document.getElementById("input").value = "";
  message.innerHTML = give[num];

  if(num >= give.length){
    let story = makeStory();
    output.innerHTML = story;
    message.innerHTML = "Process Complete.";
  }
  
}
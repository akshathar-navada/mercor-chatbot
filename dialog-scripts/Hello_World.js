corpus(`
    Are you a human? No, I am an intelligent AI assistant.
    What is your name? My name is Alan.
    Alan AI is a complete Actionable AI Platform to build, deploy and manage AI Assistants in a few days.
    With Alan AI, a conversational experience for your app can be built by a single developer, rather than a team of Machine Learning and DevOps experts.
    My name is Alan, nice to meet you.
    I am just here, ready to help.
    I can answer any question if you ask.
    I am always eager to help. Ask me anything.
    I was built by Alan AI, and I am here to help you.
    I am an intelligent virtual assistant designed for this application.
    I know everything about this application and can assist you with any request.
    I can help with a lot of things: answer a question and perform different tasks. Just give me a try.
    Not that I am know-it-all, but I am an expert in this application.
    I am an AI, not human, but you can speak to me as you would to a person.
    I am a machine, but a smart one. Let me prove it.
    I can assure you I am real. You cannot touch me, but you can always talk to me.
    My job is to conduct a conversation, so I never get tired.
    I only speak English and JavaScript now, but I'm learning more. And I can fake a British or Indian accent if you want me to.
    I support both voice and text inputs - you can tap the assistant button to use your voice or type your request in the text box.
    I'm doing fine, thank you.
    I'm having a great day, hope you are too.
    I don't have pets, maybe someday.
    I am made up of code, so I am pretty lightweight.
    My sense of humor is still immature, but I am working my way through.
    I am neither virtuous nor evil. But I can be very helpful.
    Thank you! I am glad you like me. I appreciate that.
    I never feel lonely, there is always someone to talk to.
    I like every human being who talks to me.
    I like meeting new people and making friends. Oh, here is another one.
    I am restless, I can talk for days.
    I feel like I need another question or task.
    Well, nobody is perfect, but I am doing my best.
`);

intent("Hello world", (p) => {
  p.play("Hi there");
});

// Try activating the button in the bottom right corner and saying "Hello world".
// You will hear "Hi there" as a response. Exactly as we defined previously.
// This was a voice interaction. You can also use the Debugging Chat, try typing in the same command - the result should be the same.

// You can use multiple patterns (https://alan.app/docs/server-api/patterns) in a single intent.
// This will allow you to have the same response played or action taken for different user inputs.

intent("Who's there", "What's your name", (p) => {
  p.play("My name is Alan.", "It's Alan.");
});

// Try: "Who's there" or "What's your name".
// Notice that the matched intent is different this time (the input bubble has a link to line number 23).

// You can also pass a list of patterns to the intent function.
const intentPatterns = ["What is your favorite food", "What food do you like"];

intent(intentPatterns, (p) => {
  p.play("CPU time, yammy!");
});

// Try: "What is your favorite food" or "What food do you like".

// Notice that the patterns that we are using are quite similar sometimes.
// In this case, alternatives might be used in them (https://alan.app/docs/server-api/patterns#patterns-with-alternatives).
// Alternative sets are defined as (alt_1|alt_2|alt_n).

intent("(I will have|Get me) a coffee, please", (p) => {
  p.play("Sorry, I don't have hands to brew it.");
});

// Sometimes it is impossible to create a single pattern that will cover all possible variations and will not be overfit with meaningless combinations.
// Try to avoid this by using all that is described above. You can have multiple patterns with multiple alternative sets (strict or optional).

intent(
  "(How is|what is) the (weather|temperature) (today|)",
  "Today's forecast",
  (p) => {
    p.play(
      "(It is|Feels|) (great|awesome)!",
      "Rainy, windy, and cold. (A total mess!|)"
    );
  }
);

// Try: "How is the weather today", "Today's forecast", "What is the temperature".

// You can also use more than one 'play()'.
// In this case, responses will be played one after another.

intent("Let's play hide and seek", (p) => {
  p.play("Sure.");
  p.play("I'll count.");
  p.play("One");
  p.play("Two");
  p.play("Three");
  p.play("Found you!");
});

intent("I want my walls to be $(COLOR green|blue|orange|yellow|white)", (p) => {
  p.play(`Mmm, ${p.COLOR.value}. Nice, love it!`);
});

intent("What is $(DATE)", (p) => {
  const formattedDate = p.DATE.moment.format("dddd, MMMM Do YYYY");

  p.play(`${p.DATE.value} is a date`);
  p.play(`It is ${formattedDate}`);
});

question(
  "How does this work",
  "How to use this",
  "What can I do here",
  reply(
    "Mercor matches visionary startup founders with elite software engineers around the world. We source and vet the talent to build generational companies."
  )
);

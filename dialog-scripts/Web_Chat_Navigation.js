// {Name: Web_Chat_Navigation}
// {Description: Demonstrates how to navigate in a web page with text and voice chat commands.}
// {EnableFeatures: TextChat}

// Navigating to page sections

// Page data, replace the URL and variants with your own ones
const PAGE_DATA = {
  Home: {
    url: "https://mercor.io/",
    variants: ["home", "main", "landing", "front", "starting", "mercor.io"],
  },
  "About us": {
    url: "https://work.mercor.io/about-us",
    variants: ["about", "about us", "about Mercor"],
  },
  "Apply to work": {
    url: "https://work.mercor.io/",
    variants: [
      "job openings",
      "job-openings",
      "carrier",
      "join as an engineer",
    ],
  },
  Profile: {
    url: "https://work.mercor.io/profile",
    variants: ["profile", "dashboard", "upload resume"],
  },
  Fellowship: {
    url: "https://work.mercor.io/fellowship",
    variants: ["fellowship", "join", "join-us"],
  },
  "Hire Engineers": {
    url: "https://hire.mercor.io/",
    target: "_blank",
    variants: ["hire", "hiring", "hire with mercor"],
  },
  Instagram: {
    url: "https://www.instagram.com/mercor.io/",
    target: "_blank",
    variants: ["instagram", "mercor instagram"],
  },
  Facebook: {
    url: "https://www.facebook.com/search/top?q=mercor",
    target: "_blank",
    variants: ["facebook", "mercor facebook"],
  },
  LinkedIn: {
    url: "https://www.linkedin.com/company/mercor-io/",
    target: "_blank",
    variants: ["linkedIn", "mercor linkedIn"],
  },
  Blog: {
    url: "https://medium.com/@mercor",
    target: "_blank",
    variants: ["Blog", "medium"],
  },
};

let arrPageAliases = [];
for (const [page, pageData] of Object.entries(PAGE_DATA)) {
  for (const variant of pageData.variants) {
    arrPageAliases.push(variant + "~" + page);
  }
}

project.websitePages = arrPageAliases.join("|");

// Generic navigation intent
intent(
  "(Open|Show|Display|View|Go to|Navigate to) $(p:websitePages) (page|screen|section|)",
  "$(p:websitePages) (page|screen|section)",
  (p) => {
    let page = p.websitePages.label;
    if (PAGE_DATA[page].target) {
      p.play(
        {
          command: "openURL",
          url: PAGE_DATA[page].url,
          target: PAGE_DATA[page].target,
        },
        opts({ force: true })
      );
    } else {
      p.play(
        { command: "openURL", url: PAGE_DATA[page].url },
        opts({ force: true })
      );
    }
    p.play(
      `(Here you go|There it is|No problem). The ${page} page.`,
      `(Opening|Navigating to) the ${page} page`
    );
  }
);

// Individual navigation intents: replace the page names and urls with your own ones
intent(
  "(I want to|I need to|Will you|Would you|) (go|load|display|open|show|navigate|launch|visit|display the content of|unfold|bring up|present|pull up|spot|locate|get|head over|access|start|enter|view|open) (me|) (to|) (a|an|the|) homepage (please|for me|)",
  "(I want to|I need to|Will you|Would you|Please|) (go|get|bring|take) (me|) back (home|)",
  "(Home|Back|Start)",
  "Begin (a|the|this|) website",
  "Go back (home|)",
  (p) => {
    p.play("(Here you go|There it is|No problem)");
    p.play({ command: "openURL", url: "#" }, opts({ force: true }));
  }
);

intent(
  "Where (can I|do I|to) find (my|) (information|profile)",
  "(Please|Can you|Cound you|) tell me (where to upload resume|How to check my profile at Mercor)",
  (p) => {
    p.play("(Here you go|Here is you profile|You can upload the resume here)");
    p.play(
      { command: "openURL", url: "https://work.mercor.io/profile" },
      opts({ force: true })
    );
  }
);
intent("Where (can I|do I|to) find (some|) information about (Mercor)", (p) => {
  p.play(
    "(Here is something about us|This is a bit of information about us|Here are some details about us that we'd like to share)"
  );
  p.play(
    { command: "openURL", url: "https://work.mercor.io/about-us" },
    opts({ force: true })
  );
});
intent(
  "What services do you (provide|offer)",
  "What can you do",
  "How to Apply for work",
  "How can I join Mercor",
  "(Is there|Where is) (a|the|your|) job offerings",
  "I want to work at Mercor, can you please (direct me to that page|let me know, where should I apply)",
  "What job offerrings are currently open?",
  (p) => {
    p.play(
      "(Here is a list of services we provide|Here's a breakdown of the services we specialize in|These are the jobs that we offer|Here is collection of jobs which you can apply for)"
    );
    p.play(
      { command: "openURL", url: "https://work.mercor.io/" },
      opts({ force: true })
    );
  }
);
intent(
  "How can I apply for fellowship?",
  "Can I get trained in Mercor",
  (p) => {
    p.play("(yes, ofcourse. Here you can join us!)");
    p.play(
      { command: "openURL", url: "https://work.mercor.io/fellowship" },
      opts({ force: true })
    );
  }
);

intent(
  "How (can I|do I|to) (contact|get in touch|connect) (with|) (you|)",
  (p) => {
    p.play(
      "(Here's how you can get in touch with us|If you need to reach us, here's how)"
    );
    p.play(
      {
        command: "openURL",
        url: "https://www.linkedin.com/company/mercor-io/",
      },
      opts({ force: true })
    );
  }
);

intent(
  "How (can I|do I|to) (contact|get in touch|connect) (with|) (you|)",
  (p) => {
    p.play(
      "(Here's how you can get in touch with us|If you need to reach us, here's how)"
    );
    p.play(
      { command: "openURL", url: "https://www.instagram.com/mercor.io/" },
      opts({ force: true })
    );
  }
);

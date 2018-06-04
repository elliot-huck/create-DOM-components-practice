const article = document.querySelector("#messages");
const fragment = document.createDocumentFragment();

const messageLog = ["Aunt M: Hi Elliot", "Me: Hi, Aunt Marilyn", "Aunt M: How is computer school going?", "Me: Software school is going well; we're learning all about creating and programming websites", "Aunt M: Well if you have some time could you take a look at my computer? Hannah threw it down the stairs and now it doesn't work. I really don't want to buy a new one so I was going to call a repairman but then I remembered you were in computer school and so I thought I would ask if you could take a look at it first Thanks!", "Me: ..."]

for (let i = 0; i < messageLog.length; i++) {
  const section = document.createElement("section");
  section.class = "message";
  section.textContent = messageLog[i];
  fragment.appendChild(section);
}

article.appendChild(fragment);
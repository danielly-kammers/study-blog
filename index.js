import pages from "./data/pages.json" assert { type: "json" };

function renderTopics() {
  const topicsList = document.getElementById("topics-list");

  pages.forEach((topic) => {
    const topicWrapper = document.createElement("div");
    topicWrapper.className = "topic-wrapper";
    topicWrapper.onclick = () => window.open(topic.path, "_self");

    const title = document.createElement("h1");
    title.innerText = topic.title;

    const learnDate = document.createElement("h4");
    learnDate.innerText = topic.date;

    topicWrapper.appendChild(title);
    topicWrapper.appendChild(learnDate);
    topicsList.appendChild(topicWrapper);
  });
}

renderTopics();

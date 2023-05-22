const inputBox = document.getElementById("search");
const container = document.querySelector(".data");

const userArr = [];

const onPageLoad = async () => {
  const defaultApiCall = await fetch(`https://api.github.com/users`);

  const ApiData = await defaultApiCall.json();
  console.log(ApiData);

  const addDiv = ApiData.map((element) => {
    const parentDiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = element.avatar_url;
    image.classList.add("w-[200px]");
    const name = document.createElement("p");
    name.classList.add("name");
    name.innerText = element.login;
    parentDiv.append(image, name);
    parentDiv.classList.add(
      "flex",
      "flex-col",
      "items-center",
      "gap-2",
      "p-4",
      "bg-[#8d99ae]",
      "rounded",
      "dynamic"
    );
    userArr.push(parentDiv);
    return parentDiv;
  });

  container.append(...addDiv);
};
onPageLoad();

const dataDiv = document.querySelectorAll(".dynamic");
const userName = document.querySelectorAll(".name");

const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const getUser = (query) => {
  userArr.filter((element) => {
    element.innerText.toLowerCase().includes(query.toLowerCase())
      ? element.classList.remove("hidden")
      : element.classList.add("hidden");
  });
};

const debounceData = debounce(getUser, 500);

inputBox.addEventListener("keyup", (event) => {
  debounceData(event.target.value);
});

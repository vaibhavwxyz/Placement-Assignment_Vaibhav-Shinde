const inputBox = document.getElementById("search");
const container = document.querySelector(".data");

const mealArr = [];

const onPageLoad = async () => {
  const defaultData = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );

  const jsonData = await defaultData.json();
  console.log(jsonData);

  const addDiv = jsonData.meals.map((element) => {
    const parentDiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = element.strMealThumb;
    image.classList.add("w-[200px]", "rounded-md");
    const name = document.createElement("p");
    name.classList.add("text-xl");
    name.innerText = element.strMeal;
    parentDiv.append(image, name);
    parentDiv.classList.add(
      "flex",
      "flex-col",
      "gap-2",
      "p-2",
      "bg-white",
      "rounded",
      "dynamic",
      "shadow-md",
      "text-black",
      "rounded-lg",
      "font-semibold"
    );
    mealArr.push(parentDiv);
    return parentDiv;
  });

  container.append(...addDiv);
};
onPageLoad();

const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const getMeal = (query) => {
  mealArr.filter((element) => {
    element.innerText.toLowerCase().includes(query.toLowerCase())
      ? element.classList.remove("hidden")
      : element.classList.add("hidden");
  });
};

const debounceData = debounce(getMeal, 500);

inputBox.addEventListener("keyup", (event) => {
  debounceData(event.target.value);
});

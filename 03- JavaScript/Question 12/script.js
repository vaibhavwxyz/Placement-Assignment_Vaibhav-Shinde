const container = document.querySelector(".blog-container");

const blogArr = [];

const onPageLoad = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  // console.log(data);

  data.map((element, index) => {
    if (index > 25) return;

    blogArr.push(element);
    console.log(element);
    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="w-[250px] min-h-[250px] flex flex-col justify-between  items-center bg-[#ffffff] p-4 rounded-md drop-shadow-md">
      <h2 class="text-[#fca311] font-serif text-xl text-center">${element.title}</h2>
      <p class="text-center text-[#14213d]">${element.body}</p>
    </div>`
    );
  });
};
onPageLoad();

const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const userBlogContainer = document.querySelector(".my-blog");
const hideText = document.querySelector(".hide");
const deleteButton = document.querySelector(".btn");

const addData = async (event) => {
  event.preventDefault();

  if (!titleInput.value && !textInput.value) {
    alert("Please Fill the data properly");
  }

  hideText.classList.add("hidden");
  deleteButton.classList.remove("hidden");

  const title = titleInput.value;
  const text = textInput.value;

  userBlogContainer.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="w-[250px] min-h-[250px] flex flex-col justify-between items-center bg-[#ffffff] p-4 rounded-md drop-shadow-md">
      <h2 class="text-[#fca311] font-serif text-xl text-center">${title}</h2>
      <p class="text-center text-[#14213d]">${text}</p>
    </div>
  `
  );

  titleInput.value = "";
  textInput.value = "";
};

deleteButton.addEventListener("click", () => {
  location.reload();
});

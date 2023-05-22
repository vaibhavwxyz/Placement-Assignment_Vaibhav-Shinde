const container = document.querySelector(".blog-container");

// const fistBlog = document.querySelector(".blog-1")
// const secondBlog = document.querySelector(".blog-2")
// const thirdBlog = document.querySelector(".blog-3")
// const fourthBlog = document.querySelector(".blog-4")
// const fifthBlog = document.querySelector(".blog-5")
// const sixthBlog = document.querySelector(".blog-6")
// const seventhBlog = document.querySelector(".blog-7")
// const eighthBlog = document.querySelector(".blog-8")
// const ninthBlog = document.querySelector(".blog-9")
// const tenthBlog = document.querySelector(".blog-10")

const blogArr = [];

const onPageLoad = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  console.log(data);

  data.map((element, index) => {
    if (index > 25) return;

    blogArr.push(element);
    container.insertAdjacentHTML(
      "afterbegin",
      `<div class="w-[250px] min-h-[250px] flex flex-col justify-between  items-center bg-[#ffffff] p-4 rounded-md drop-shadow-md">
      <h2 class="text-[#fca311] font-serif text-xl text-center">${element.title}</h2>
      <p class="text-center text-[#14213d]">${element.body}</p>
    </div>`
    );
    // <button class="!btn bg-[#e07a5f] px-4 py-2 rounded text-white hover:bg-[#be6147] transition-all duration-200" id="btn">Delete</button>
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

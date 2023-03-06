const usersInput = document.querySelector("#user");
const selectJoinArtist = document.querySelector(".join-artist-select");
function getAndPrintUsersLogin() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((user) => {
        usersInput.innerHTML += `<option value="${user.name}">${user.name}</option>`;
      });
    });
}

usersInput.addEventListener("change", () => {
  location.hash = "#artists";
  localStorage.setItem("artist", usersInput.value);
});

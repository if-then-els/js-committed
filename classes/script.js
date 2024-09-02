const input = document.getElementById("message");
const sent = document.getElementById("items");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", () => {
  let li = document.createElement("p");
  li.innerHTML = input.value;
  sent.appendChild(li);
  // sent.className += "messageBox";
  input.value = "";
});

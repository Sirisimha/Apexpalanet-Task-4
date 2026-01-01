let images = [
  "https://images.pexels.com/photos/268432/pexels-photo-268432.jpeg",
  "https://images.pexels.com/photos/326212/pexels-photo-326212.jpeg",
  "https://images.pexels.com/photos/39574/flower-exotic-colorful-pink-39574.jpeg"
];

let i = 0;

function next() {
  i = (i + 1) % images.length;
  document.getElementById("slide").src = images[i];
}

function prev() {
  i = (i - 1 + images.length) % images.length;
  document.getElementById("slide").src = images[i];
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

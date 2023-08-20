// Get reference to the download link
const downloadLink = document.getElementById('download-link');
const nameInput = document.querySelector("#myName");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const sucess = document.querySelector("#sucess");
const errorNodes = document.querySelectorAll(".error");
// Set the file URL and name
const fileUrl = 'CV.pdf'; // Replace with the actual file URL
const fileName = 'CV.pdf'; // Replace with the desired file name

// Add click event listener to the download link
downloadLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  downloadLink.href = fileUrl;
  downloadLink.download = fileName;
  downloadLink.click();
});


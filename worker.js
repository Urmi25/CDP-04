const worker = new Worker('worker.js');
worker.addEventListener('message', function(event) {
  const { type, data } = event.data;
  if (type === 'data') {
    displayUserData(data);
  } else if (type === 'error') {
    console.error("error data:", data);
  }
});
fetchButton.addEventListener("click", () => {
  worker.postMessage("fetchData");
});


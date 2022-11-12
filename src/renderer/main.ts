console.log('hello from the renderer process');

const coreCount = document.getElementById('cores');

if (coreCount != null) {
  coreCount.innerText = `Core count updated:`;
}

export default function () {
  let block = document.getElementsByClassName(`info__block`)[0];
  let closeButton = block.getElementsByClassName(`info__close`)[0];

  function closeBlock() {
    block.classList.add(`info__block--closed`);
    removeBlock();
  }

  /*
    delete info__block after 800 ms.
   */
  function removeBlock() {
    return setTimeout(() => {
      block.style.display = `none`;
    }, 800);
  }

  closeButton.addEventListener(`click`, closeBlock);
};

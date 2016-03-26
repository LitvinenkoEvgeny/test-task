export default function () {
  let block = document.body.querySelector(`.info__block`);
  let closeButton = block.querySelector(`.info__close`);

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

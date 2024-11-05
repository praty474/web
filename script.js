const carousel = document.querySelector(".carousel"),
  firstImg = carousel.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const showHideIcons = () => {
  // showing and hiding prev/next icon according to carousel scroll left value
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  });
});

const autoSlide = () => {
  // if there is no image left to scroll then return from here
  if (
    carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollLeft <= 0
  )
    return;

  positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
  let firstImgWidth = firstImg.clientWidth + 14;
  // getting difference value that needs to add or reduce from carousel left to take middle img center
  let valDifference = firstImgWidth - positionDiff;

  if (carousel.scrollLeft > prevScrollLeft) {
    // if user is scrolling to the right
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  // if user is scrolling to the left
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  // updatating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


// carousel 2

// const carousel2 = document.querySelector(".carousel2"),
//   firstImg2 = carousel2.querySelectorAll("img")[0],
//   arrowIcons2 = document.querySelectorAll(".wrapper2 i");

// let isDragStart2 = false,
//   isDragging2 = false,
//   prevPageX2,
//   prevScrollLeft2,
//   positionDiff2;

// const showHideIcons2 = () => {
//   // showing and hiding prev/next icon according to carousel2 scroll left value
//   let scrollWidth = carousel2.scrollWidth - carousel2.clientWidth; // getting max scrollable width
//   arrowIcons[0].style.display = carousel2.scrollLeft == 0 ? "none" : "block";
//   arrowIcons[1].style.display =
//     carousel2.scrollLeft == scrollWidth ? "none" : "block";
// };

// arrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
//     // if clicked icon is left, reduce width value from the carousel2 scroll left else add to it
//     carousel2.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//     setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
//   });
// });

// const autoSlide2 = () => {
//   // if there is no image left to scroll then return from here
//   if (
//     carousel2.scrollLeft - (carousel2.scrollWidth - carousel2.clientWidth) > -1 ||
//     carousel2.scrollLeft <= 0
//   )
//     return;

//   positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
//   let firstImgWidth = firstImg.clientWidth + 14;
//   // getting difference value that needs to add or reduce from carousel2 left to take middle img center
//   let valDifference = firstImgWidth - positionDiff;

//   if (carousel2.scrollLeft > prevScrollLeft) {
//     // if user is scrolling to the right
//     return (carousel2.scrollLeft +=
//       positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
//   }
//   // if user is scrolling to the left
//   carousel2.scrollLeft -=
//     positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// };

// const dragStart2 = (e) => {
//   // updatating global variables value on mouse down event
//   isDragStart = true;
//   prevPageX = e.pageX || e.touches[0].pageX;
//   prevScrollLeft = carousel2.scrollLeft;
// };

// const dragging2 = (e) => {
//   // scrolling images/carousel2 to left according to mouse pointer
//   if (!isDragStart) return;
//   e.preventDefault();
//   isDragging = true;
//   carousel2.classList.add("dragging");
//   positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//   carousel2.scrollLeft = prevScrollLeft - positionDiff;
//   showHideIcons();
// };

// const dragStop2 = () => {
//   isDragStart = false;
//   carousel2.classList.remove("dragging");

//   if (!isDragging) return;
//   isDragging = false;
//   autoSlide();
// };

// carousel2.addEventListener("mousedown", dragStart);
// carousel2.addEventListener("touchstart", dragStart);

// document.addEventListener("mousemove", dragging);
// carousel2.addEventListener("touchmove", dragging);

// document.addEventListener("mouseup", dragStop);
// carousel2.addEventListener("touchend", dragStop);

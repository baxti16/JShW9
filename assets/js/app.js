// let boxes = document.querySelectorAll(".box");
// let input_width = document.getElementById("input_width");
// let input_height = document.getElementById("input_height");
// let input_background = document.getElementById("input_background");
// let input_radius = document.getElementById("input_radius");

// // WIDTH
// let oddWidth = (width, height, color, radius) => {
//   boxes.forEach((e, key) => {
//     if (key) e.style = `width: ${width}`;
//     else e.style = `width: ${width}`;
//   });
// };

// window.addEventListener("keyup", (e) => {
//   if (e.key == "Enter") {
//     oddWidth(input_width.value);
//     input_width.value = "";
//     console.log(input_width.value);
//   }
// });
// // HEIGHT

// let oddHeight = (width, height, color, radius) => {
//   boxes.forEach((e, key) => {
//     if (key) e.style = `height: ${height}`;
//     else e.style = `height: ${height}`;
//   });
// };

// window.addEventListener("keyup", (e) => {
//   if (e.key == "Enter") {
//     oddHeight(input_height.value);
//     input_height.value = "";
//   }
// });
// //  BACKGROUND
// let oddBG = (width, height, color, radius) => {
//   boxes.forEach((e, key) => {
//     if (key) e.style = `background: ${color}`;
//     else e.style = `background: ${color}`;
//   });
// };

// window.addEventListener("keyup", (e) => {
//   if (e.key == "Enter") {
//     oddBG(input_background.value);
//     input_background.value = "";
//   }
// });
// // BORDER_RADIUS
// let oddRadius = (width, height, color, radius) => {
//   boxes.forEach((e, key) => {
//     if (key) e.style = `border-radius: ${radius}`;
//     else e.style = `border-radius: ${radius}`;
//   });
// };

// window.addEventListener("keyup", (e) => {
//   if (e.key == "Enter") {
//     oddRadius(input_radius.value);
//     input_radius.value = "";
//   }
// });
// window.addEventListener("keyup", (e) => {
//   if (e.key == "Enter") {
//   // changeWidth(input_width.value);
//   // input_width.value = "";
//   let widthz = input_width.value;
//   boxes.style = `width: ${widthz}px;`;
// }
// function changeWidth() {
//   let width = input_width.value;
//   boxes.style.width = width;
// }
//   // changeWidth(e)
// });

// if (e.key == "Enter") {
//   changeWidth(input_width.value);
//   input_width.value = "";
//   let width = input_width.value;
//   boxes.style.width = width + "px";
// }

// window.addEventListener("keyup", (e) => {
//   if (e.key == "Enter") {
//     oddWidth(input_height.value);
//     input_height.value = "";
//   }
// });

// window.addEventListener("keyup", (e) => {
//   if (e.key == "Enter") {
//     oddWidth(input_radius.value);
//     input_radius
//     .value = "";
//   }
// });

// if (e.key == "Enter") {
//   oddWidth(input_height.value);
//   input_height.value = "";
// }
// if (e.key == "Enter") {
//   oddWidth(input_background.value);
//   input_background.value = "";
// }
// if (e.key == "Enter") {
//   oddWidth(input_radius.value);
//   input_radius.value = "";
// }

// let oddHeight = (height) => {
//   boxes.forEach( (e, key) => {
//     if(key) e.style = `height: ${height}`;
//     else e.style = `height: ${height}`;
//   });
// }

// let oddColorizer = (data) => {
//   const arr = data.split(" ");
// /   console.log(arr);
//   boxes.forEach((e, key) => {
//     e.style = `
//     background: ${arr[0]};
//     border-radius: ${arr[1]};
//     `;
//   });
// };

//   boxes.forEach( (e, key) => {
//     if(key) e.style = `height: ${height}`;
//     else e.style = `height: ${height}`;
//   });
//   boxes.forEach( (e, key) => {
//     if(key) e.style = `background: ${color}`;
//     else e.style = `background: ${color}`;
//   });
//   boxes.forEach( (e, key) => {
//     if(key) e.style = `border-radius: ${radius}`;
//     else e.style = `border-radius: ${radius}`;
//   });
// }
const boxes = document.querySelectorAll(".box");
const input = document.getElementById("input");


let oddColorizer = (huy) => {
  const hey = huy.split(" ");
  console.log(hey);
  boxes.forEach((e, key) => {
    e.style = `
    background: ${hey[0]};
    border-radius: ${hey[1]};
    width: ${hey[2]};
    height: ${hey[3]};
    margin-top: ${hey[4]};
    margin-right: ${hey[5]};
    margin-bottom: ${hey[6]};
    margin-left: ${hey[7]};
    `;
  });
};

window.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    oddColorizer(input.value);
    input.value = "";
  }
});
// Main event
document.querySelector("#getcol").addEventListener("click", function () {
  // declaration
  let c1 = document.querySelector("#color1").value;
  let c2 = document.querySelector("#color2").value;
  let ty = document.querySelector("#typegrad").value;
  let dir = document.querySelector("#direction").value;
  let sh = document.querySelector("#shapes").value;
  let dis = document.querySelector(".display");
  let grTemp = `${ty}(to ${dir}, ${c1}, ${c2})`;
  let grTemp2 = `${ty}(${sh} at ${dir}, ${c1}, ${c2})`;

  ty == "linear-gradient"
    ? (dis.style.backgroundImage = grTemp)
    : (dis.style.backgroundImage = grTemp2);
});

// display options
const source = document.querySelector("#typegrad");
const displayValue = "radial-gradient";
const target = document.querySelector("#shapes");
const target2 = document.querySelector("#shapes-label");

const displayWhenSelected = (source, displayValue, target, target2) => {
  const selectedIndex = source.selectedIndex;
  if (source[selectedIndex].value === displayValue) {
    target.classList.add("show");
    target2.classList.add("show");
  } else {
    target.classList.remove("show");
    target2.classList.remove("show");
  }
};

source.addEventListener(
  "change",
  () => {
    displayWhenSelected(source, displayValue, target, target2);
  },
  false
);

// save div as image
function printDiv() {
  html2canvas(document.querySelector(".display")).then((canvas) => {
    var myImage = canvas.toDataURL();
    downloadURI(myImage, "gradient.png");
  });
}

// download the image data URI
function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

// display code in input
let copyCode = () => {
  let box = document.querySelector('#displayCode');
  let codeval = document.querySelector('.display').style.backgroundImage;

  box.value = codeval;
  box.select();

}
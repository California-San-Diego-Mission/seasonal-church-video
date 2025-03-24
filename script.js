window.onload = (event) => {
    let iframe = document.getElementById("mainVideo");
    let viewportWidth = window.innerWidth;//example, 100
    let viewportHeight = window.innerHeight;//example, 100
    let videoInitWidth = iframe.offsetWidth;//example, 50
    let videoInitHeight = iframe.offsetHeight;//example, 20
    let widthRatio = videoInitWidth/viewportWidth;//example, 50/100 = 0.5
    let heightRatio = videoInitHeight/viewportHeight;//example, 20/100 = 0.2

    let scaleMultiplier = 1;

    if (widthRatio > heightRatio) { //if the fraction of the width that the video takes up is greater than the fraction of the height it takes up, the inverse fraction of the width ratio should be the width multiplier
        scaleMultiplier = 1 / widthRatio;
    } else { //otherwise, the inverse fraction of the height of the video will be the height multiplier
        scaleMultiplier = 1 / heightRatio;
    }

    iframe.width = videoInitWidth * scaleMultiplier;
    iframe.height = videoInitHeight * scaleMultiplier;
    alert("scale Multiplication done by " + scaleMultiplier + ".");
  };
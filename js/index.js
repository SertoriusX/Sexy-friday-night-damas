const displayContainer = (optional) => {
  const backGroundColor = document.querySelector("#colorBox");

  switch (optional) {
    case "first_image":
      backGroundColor.style.backgroundImage ="url('./imagenes/first_image.png')";
      backGroundColor.style.backgroundSize = "cover";
      backGroundColor.style.backgroundAttachment = "fixed";
      backGroundColor.style.minHeight = "100vh";
      backGroundColor.style.backgroundPosition = "center";
      backGroundColor.style.backgroundRepeat = "no-repeat";
      backGroundColor.style.backgroundColor = "initial";
      break;
    case "second":
      backGroundColor.style.backgroundImage ="url('./imagenes/thumb-1920-849419.jpg')";
      backGroundColor.style.backgroundSize = "cover";
      backGroundColor.style.backgroundPosition = "center";
      backGroundColor.style.backgroundRepeat = "no-repeat";
      backGroundColor.style.backgroundColor = "initial";
      break;

    case "third":
      backGroundColor.style.backgroundImage = "url('./imagenes/chilled.jpg')";
      backGroundColor.style.backgroundSize = "cover";
      backGroundColor.style.backgroundPosition = "center";
      backGroundColor.style.backgroundRepeat = "no-repeat";
      backGroundColor.style.backgroundAttachment = "fixed";
      backGroundColor.style.minHeight = "100vh";
      backGroundColor.style.backgroundColor = "initial";
      break;

    case "reset":
      backGroundColor.style.backgroundImage = "none";
      backGroundColor.style.backgroundColor = "initial";
      break;
  }
};
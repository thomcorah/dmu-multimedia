function loadMD(filename) {
  var converter = new showdown.Converter();
  var txtFile = new XMLHttpRequest();
  txtFile.open("GET", "./" + filename, true);
  txtFile.onreadystatechange = function() {
    if (txtFile.readyState === 4) {
      allText = txtFile.responseText;
      var html = converter.makeHtml(allText);
      document.getElementById("container").innerHTML = html;
    }
  };
  txtFile.send(null);
}

async function download(filename, format) {
  /*
  console.log("downloading", filename, format);
  console.log("aha");
  var mdReq = await fetch("./md/" + filename);
  var md = await mdReq.text();
  var cssReq = await fetch("./css/GitHub2.css");
  var css = await cssReq.text();
  var formData = new FormData();
  formData.append("from", "markdown");
  formData.append("to", format);
  //formData.append("css", css);
  //let blob = new Blob([md], { type: "text/markdown" });
  const file = new File([blob], "TECH1015_Module_Handbook.md", {
    type: "text/markdown"
  });
  formData.append("input_files[]", file);
  console.log(formData);
  const response = await fetch("http://c.docverter.com/convert", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    cache: "no-cache",
    data: formData
  });
  console.log(response);
  */
}

document
  .getElementById("themeSelect")
  .addEventListener("change", updateStyleSheet);

function updateStyleSheet() {
  var theme = document.getElementById("themeSelect").value;
  console.log(theme);
  document
    .getElementsByTagName("link")[0]
    .setAttribute("href", "./css/" + theme + ".css");

  if (theme === "Clearness_Dark") {
    document.getElementById("backgroundcolour").innerHTML =
      "<option value='#282a36' selected>Mauve</option><option value='#113615'>Green</option><option value='#4a4720'>Khaki</option><option value='#7a2721'>Red</option><option value='#000'>Black</option>";
  } else if (theme === "GitHub2") {
    document.getElementById("backgroundcolour").innerHTML =
      "<option value='#8bd5f7'>Blue</option><option value='#97f0a1'>Green</option><option value='#f2ef91'>Yellow</option><option value='#f79d77'>Peach</option><option value='#fff' selected>White</option>";
  }
  updateOptions();
}

document.getElementById("fontsize").addEventListener("change", updateOptions);
document
  .getElementById("backgroundcolour")
  .addEventListener("change", updateOptions);

function updateOptions() {
  var colour = document.getElementById("backgroundcolour").value;
  var size = document.getElementById("fontsize").value;
  var lineHeight = parseInt(size) * 1.4;
  document
    .getElementsByTagName("body")[0]
    .setAttribute(
      "style",
      "font-size: " +
        size +
        "px; line-height: " +
        lineHeight +
        "px; background-color: " +
        colour
    );
}

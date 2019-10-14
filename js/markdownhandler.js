function loadMD(filename) {
  if (!filename) {
    console.log("loadMD");
    const queryString = location.search;
    console.log(queryString);
    // console.log(location);

    const rgx = /([a-zA-Z\-0-9]+)/g;
    // const regex = /(?<user>[\w]+)_(?<repo>[\S]+)_(?<file>[\S]+)/g;
    // const match = regex.exec(queryString);
    const match = queryString.match(rgx);
    // console.log(match);
    console.log(match[0]);
    filename = "md/" + match[0] + ".md";
  }

  var converter = new showdown.Converter({ tables: true });
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

document
  .getElementById("themeSelect")
  .addEventListener("change", updateStyleSheet);

function updateStyleSheet() {
  var theme = document.getElementById("themeSelect").value;
  console.log(theme);
  document
    .getElementsByTagName("link")[0]
    .setAttribute("href", "/dmu-multimedia/css/" + theme + ".css");

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

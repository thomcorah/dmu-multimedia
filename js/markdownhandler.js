function loadMD(filename) {
  if (!filename) {
    const queryString = location.search;
    console.log(queryString);
    // console.log(location);
    if (queryString) {
      const rgx = /([a-zA-Z\-0-9]+)/g;
      // const regex = /(?<user>[\w]+)_(?<repo>[\S]+)_(?<file>[\S]+)/g;
      // const match = regex.exec(queryString);
      const match = queryString.match(rgx);
      // console.log(match);
      console.log(match[0]);
      filename = "md/" + match[0] + ".md";
      displayMDFile(filename);
    } else {
      console.log("no sheet specified");
      listLabSheets();
    }
  }
}

displayMDFile = filename => {
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
};

listLabSheets = () => {
  /* var req = new XMLHttpRequest();
  req.onload = processList;
  req.onerror = processError;
  req.open("get", "./php/getMDFiles.php", true);
  req.send();*/

  fetch("./php/getMDFiles.php").then(response => {
    console.log(response);
    response.json().then(data => {
      console.log(data.labs);
      let htmlstring =
        "<h1>All Files</h1><p>You've come here as a file to view hasn't been specified, or has been provided incorrectly. In an attempt to help, here's a list of all available files to view.</p>";
      htmlstring += "<h2>Lectures</h2>";

      for (let i = 0; i < data.lectures.length; i++) {
        let thisLecture = data.lectures[i];
        let url = "./lab-reader.html?" + thisLecture.file;
        htmlstring +=
          "<a href='" + url + "'>" + thisLecture.name + "</a><br />";
      }

      htmlstring += "<h2>Labs</h2>";

      for (let i = 0; i < data.labs.length; i++) {
        let thisLab = data.labs[i];
        let url = "./lab-reader.html?" + thisLab.file;
        htmlstring += "<a href='" + url + "'>" + thisLab.name + "</a><br />";
      }

      htmlstring += "<h2>Other</h2>";

      for (let i = 0; i < data.other.length; i++) {
        let thisThing = data.other[i];
        let url = "./lab-reader.html?" + thisThing.file;
        htmlstring += "<a href='" + url + "'>" + thisThing.name + "</a><br />";
      }

      document.getElementById("container").innerHTML = htmlstring;
    });
  });
};

processList = () => {
  var list = JSON.parse(this.responseText);
  console.log(list);
};

processError = err => {
  console.log("oops", err);
};

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

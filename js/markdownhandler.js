loadMD = filename => {
  if (!filename) {
    const queryString = location.search;
    if (queryString) {
      const rgx = /([a-zA-Z\-0-9]+)/g;
      const match = queryString.match(rgx);
      filename = "md/" + match[0] + ".md";
      displayMDFile(filename);
    } else {
      listLabSheets();
    }
  }
};

displayMDFile = filename => {
  var converter = new showdown.Converter({
    tables: true
  });

  var txtFile = new XMLHttpRequest();
  txtFile.open("GET", "./" + filename, true);
  txtFile.onreadystatechange = function() {
    if (txtFile.readyState === 4) {
      if (txtFile.status === 404) {
        listLabSheets();
      } else {
        allText = txtFile.responseText;
        var html = converter.makeHtml(allText);
        document.getElementById("container").innerHTML = html;
        document.querySelectorAll("pre code").forEach(block => {
          hljs.highlightBlock(block);
        });
      }
    }
  };
  txtFile.send(null);
};

listLabSheets = () => {
  let options = {
    headers: {
      Accept: "application/vnd.github.v3+json"
    }
  };
  let labs = [];
  let lectures = [];
  let misc = [];
  fetch(
    "https://api.github.com/repos/thomcorah/dmu-multimedia/contents/md",
    options
  ).then(response => {
    response.json().then(data => {
      data.forEach(entry => {
        let name = entry.name.substring(0, entry.name.length - 3);
        name = name.replace(/-/g, " ");
        if (name.substring(name.length - 3, name.length) === "lab") {
          let thisEntry = {
            name: name.replace(/ lab/g, ""),
            file: entry.name
          };
          labs.push(thisEntry);
        } else if (name.substring(name.length - 3, name.length) === "lec") {
          let thisEntry = {
            name: name.replace(/ lec/g, ""),
            file: entry.name
          };
          lectures.push(thisEntry);
        } else {
          let thisEntry = {
            name: name,
            file: entry.name
          };
          misc.push(thisEntry);
        }
      });
      writeList(lectures, labs, misc);
    });
  });
};

writeList = (lectures, labs, misc) => {
  let htmlstring =
    "<h1>All Files</h1><p>You've come here as a file to view hasn't been specified, or has been provided incorrectly. In an attempt to help, here's a list of all available files to view.</p>";
  htmlstring += "<h2>Lectures</h2>";

  for (let i = 0; i < lectures.length; i++) {
    let thisLecture = lectures[i];
    let url = "./lab-reader.html?" + thisLecture.file;
    htmlstring += "<a href='" + url + "'>" + thisLecture.name + "</a><br />";
  }

  htmlstring += "<h2>Labs</h2>";

  for (let i = 0; i < labs.length; i++) {
    let thisLab = labs[i];
    let url = "./lab-reader.html?" + thisLab.file;
    htmlstring += "<a href='" + url + "'>" + thisLab.name + "</a><br />";
  }

  htmlstring += "<h2>Other</h2>";

  for (let i = 0; i < misc.length; i++) {
    let thisThing = misc[i];
    let url = "./lab-reader.html?" + thisThing.file;
    htmlstring += "<a href='" + url + "'>" + thisThing.name + "</a><br />";
  }

  document.getElementById("container").innerHTML = htmlstring;
};

document
  .getElementById("themeSelect")
  .addEventListener("change", updateStyleSheet);

updateStyleSheet = () => {
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
};

document.getElementById("fontsize").addEventListener("change", updateOptions);
document
  .getElementById("backgroundcolour")
  .addEventListener("change", updateOptions);

updateOptions = () => {
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
};

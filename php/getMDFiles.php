<?php

$dir = '../md';
$files = scandir($dir);
$labs = array();
$lectures = array();
$other = array();
for( $i = 0; $i < count($files); $i++) {
  $thisFile = $files[$i];
  if(strlen($thisFile) > 3) {
    if(substr($thisFile, -3, 3) == ".md") {
      $thisFile = str_replace(".md", "", $thisFile);
      if(substr($thisFile, -3, 3) == "lec"){
        $entry = array('file' => $thisFile, 'name' => formatNameForDisplay($thisFile));
        array_push($lectures, $entry);
      } else if(substr($thisFile, -3, 3) == "lab") {
        $entry = array('file' => $thisFile, 'name' => formatNameForDisplay($thisFile));
        array_push($labs, $entry);
      } else {
        $entry = array('file' => $thisFile, 'name' => formatNameForDisplay($thisFile));
        array_push($other, $entry);
      }

    }
  }
}

function formatNameForDisplay($name) {
 $name = str_replace("-", " ", $name);
 $name = str_replace(" lec", "", $name);
 $name = str_replace(" lab", "", $name);
 return $name;
}

$MDFiles = array('lectures'=>$lectures, 'labs'=>$labs, 'other'=>$other);

print_r(json_encode($MDFiles));

 ?>

function start()
{
  navigator.mediaDevices.getUserMedia({audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0D-s02L95/model.json',modelReady)
}

function modelReady()
{
  console.log("model is loaded")
  classifier.classify(gotResults)
}

function gotResults(error, results){
  if(error){
    console.log(error)
  }
  else{
    console.log(results)
    r = Math.floor(Math.random()*255) + 1;
    g = Math.floor(Math.random()*255) + 1;
    b = Math.floor(Math.random()*255) + 1;

    var result_label = results[0].label 
    var result_confidence1 = results[0].confidence
    var result_confidence = (result_confidence1*100).toFixed(2);
    document.getElementById('result_label').innerHTML = "I can hear " + result_label
    document.getElementById('result_confidence').innerHTML = "Accuracy - " + result_confidence + "%"
    document.getElementById('result_label').style.color = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById('result_confidence').style.color = "rgb(" + r + "," + g + "," + b + ")";

    img1 = document.getElementById('alien1')
    img2 = document.getElementById('alien2')
    img3 = document.getElementById('alien3')
    img4 = document.getElementById('alien4')

    if(result_label == "Clapping"){
      img1.src = "aliens-01.gif"
      img2.src = "aliens-02.png"
      img3.src = "aliens-03.png"
      img4.src = "aliens-04.png"
    }
    else if(result_label == "Snapping"){
      img1.src = "aliens-01.png"
      img2.src = "aliens-02.gif"
      img3.src = "aliens-03.png"
      img4.src = "aliens-04.png"
    }
    else if(result_label == "Whistling "){
      img1.src = "aliens-01.png"
      img2.src = "aliens-02.png"
      img3.src = "aliens-03.gif"
      img4.src = "aliens-04.png"
    }
    else if(result_label){
      img1.src = "aliens-01.png"
      img2.src = "aliens-02.png"
      img3.src = "aliens-03.png"
      img4.src = "aliens-04.gif"
    }
  }   
}
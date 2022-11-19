function Start(){

    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3LmvENuzu/model.json',modelReady)
    
    }
    
    function modelReady(){
    
    classifier.classify(gotResult);
    
    
    }
    function gotResult(error,result){
    
    console.log('gotResult');
    
    
    }
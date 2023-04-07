// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

function successCallback(result){
    console.log(`audio file ready ar url: ${result}`);
}

function failureCallback(error){
    console.log(`error generating audio file: ${error}`);
}

// createAudioFileAsync(audioSetting, successCallback, failureCallback);
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
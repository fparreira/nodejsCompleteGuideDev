// messageTwo(); ReferenceError: Cannot access 'messageTwo' before initialization
messageOne("gandalf");

function messageOne(name){
    console.log("message one " + name);
};

const messageTwo = (name) => {
    console.log("message two " + name);
};

const messageThree = function(name){
    console.log("message three " + name);
};

(function(){
    messageOne("aragorn");
    messageThree("boromir");
})();





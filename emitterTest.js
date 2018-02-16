function emitter(){
    this.emitr = {};
}
emitter.prototype.on = function(type , listener){
this.emitr[type] = this.emitr[type] || []
this.emitr[type].push(listener);
}
emitter.prototype.emit = function(type){
    this.emitr[type].forEach(element => {
        element();
    });

}
module.exports = emitter;
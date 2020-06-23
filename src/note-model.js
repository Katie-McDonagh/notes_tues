(function(exports) {
  function Note(message) { 
      this.text = message;
    }
    Note.prototype.display = function(){
      return this.text;
    };
  exports.Note = Note;
  })(this);

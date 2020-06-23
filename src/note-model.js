(function(exports) {
  function Note(index, message) { 
      this.text = message;
      this.index = index;
    }
    Note.prototype.display = function(){
      return this.text;
    };
  exports.Note = Note;
  })(this);

(function(exports) {
    function NoteList() {
      this.notesArray = [];
    };
  
    NoteList.prototype.notes = function() {
      return this.notesArray;
    }
  
    NoteList.prototype.createSingleNote = function(text) {
      this.notesArray.push(new Note(text))
    }
  
    exports.NoteList = NoteList;

  })(this);
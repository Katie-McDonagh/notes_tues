(function(exports) {
    function NoteList() {
      this.notesArray = [];
      this.index = 0;
    };
  
    NoteList.prototype.notes = function() {
      return this.notesArray;
    }
  
    NoteList.prototype.createSingleNote = function(text) {
      this.notesArray.push(new Note(this.index, text))
      this.index ++
    }
  
    exports.NoteList = NoteList;

  })(this);
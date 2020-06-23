(function(exports){
  function ViewSingleNote(Note) {
    this.note = Note;
  };

  ViewSingleNote.prototype.displayNote = function () {
  var note = this.note.display();

  return `<div>${note}</div>`;
  }

exports.ViewSingleNote = ViewSingleNote;
})(this);
(function(exports){
  function ViewNote(noteList) {
    this.noteList = noteList;
  };

  ViewNote.prototype.displayNote = function () {
  var note = this.noteList.notes();

  return `<ul><li><div>${note[0].text}</div></li></ul>`;
  }

exports.ViewNote = ViewNote;
})(this);
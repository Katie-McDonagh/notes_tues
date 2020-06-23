(function(exports){
  function ViewNote(noteList) {
    this.noteList = noteList;
  };

  ViewNote.prototype.displayNote = function () {
  var note = this.noteList.notes();
  var array = []

  note.forEach(note => array.push(`<ul><li><div>${note.text.slice(0,20)}</div></li></ul>`))


  return array.join('');
  }

exports.ViewNote = ViewNote;
})(this);
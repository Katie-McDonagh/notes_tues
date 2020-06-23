function displaySingleHTML(){
  var note = new Note("horse");
  var viewSingleNote = new ViewSingleNote(note);

    viewSingleNote.displayNote()
    assert.isTrue(viewSingleNote.displayNote() === '<div>horse</div>')
}
displaySingleHTML();

// (function(exports){
//   function ViewSingleNote(Note) {
//     this.note = Note;
//   };

//   ViewSingleNote.prototype.displayNote = function () {
//   var note = this.note.display();

//   return `<div>${note}</div>`;
//   }

// exports.ViewSingleNote = ViewSingleNote;
// })(this);


function displayHTML(){
  var noteList = new NoteList;
  var viewNote = new ViewNote(noteList);

    noteList.createSingleNote("12345678912345678912345")
    assert.isTrue(viewNote.displayNote() === '<ul><li><div>12345678912345678912</div></li></ul>')
}
displayHTML();
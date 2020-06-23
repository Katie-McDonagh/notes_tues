function displayHTML(){
  var noteList = new NoteList;
  var viewNote = new ViewNote(noteList);

    noteList.createSingleNote("horse")
    assert.isTrue(viewNote.displayNote() === '<ul><li><div>horse</div></li></ul>')
}
displayHTML();
function noteList() {
  var noteList = new NoteList;

  assert.isTrue(noteList);

  assert.isTrue(Array.isArray(noteList.notes()));
  
};
noteList();

function storesANote() {
  var noteList = new NoteList;

  noteList.createSingleNote("horse")

  var note = noteList.notes()

  assert.isTrue(note[0].text === "horse");
}

storesANote();
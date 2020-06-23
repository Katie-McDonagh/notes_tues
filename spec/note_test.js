function noteHasText() {
  var note = new Note(1,'text');

  assert.isTrue(note.display() == "text");
};
  noteHasText();




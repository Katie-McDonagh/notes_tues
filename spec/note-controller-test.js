function changesText() {
  var noteList = new NoteList();

  var noteContoller = new NoteController(noteList)
  noteContoller.NotesToPage()

  assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
}

changesText()
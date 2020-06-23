function changesText() {
  var noteList = new NoteList();

  var noteContoller = new NoteController(noteList)
  console.log(document.getElementById('app').innerHTML)
  noteContoller.NotesToPage()

  assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
}

changesText()
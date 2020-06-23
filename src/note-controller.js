(function(exports) {
    function NoteController(noteListModel) {
        this.noteListModel = noteListModel;
        this.noteListModel.createSingleNote("Favourite drink: seltzer");
        this.noteListView = new ViewNote(this.noteListModel)
    }

    NoteController.prototype.NotesToPage = function() {
        document.getElementById('app').innerHTML = (this.noteListView.displayNote())
    }

    exports.NoteController = NoteController;
})(this);

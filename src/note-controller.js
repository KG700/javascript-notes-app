(function(exports) {
  function NoteController(noteList){
    this.noteList = noteList

    // this.noteList.create()
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.showList = function () {
    var app = document.getElementById('app');
    app.innerHTML = this.noteListView.viewList();
  };
  exports.NoteController = NoteController;
})(this);


var noteList = new NoteList;
noteList.create("Favourite drink: seltzer");
noteList.create("Favourite food: pizza");
noteList.create("Favourite animal: cat");
var noteController = new NoteController(noteList);
noteController.showList();

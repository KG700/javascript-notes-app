(function(exports) {
  function NoteController(noteList){
    this.noteList = noteList
    this.currentId = 0;

    // this.noteList.create()
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.showList = function () {
    var app = document.getElementById('app');
    app.innerHTML = this.noteListView.viewList();
  };

  NoteController.prototype.showNoteForCurrentPageURL = function () {
    window.addEventListener('hashchange', function(){
      this.currentId = window.location.hash.split('#notes/')[1];
      document.getElementById('note').innerHTML = this.noteList.notes[this.currentId].text;
    }, false);
  };

  NoteController.prototype.createNewNote = function () {
    var form = document.getElementById('text');
    var noteText = document.getElementById('noteText');
    form.addEventListener('submit', function(event){
      event.preventDefault();
      console.log(noteText.value);
    });
  }

  exports.NoteController = NoteController;
})(this);


var noteList = new NoteList;
noteList.create("Favourite drink: seltzer");
noteList.create("Favourite food: pizza");
noteList.create("Favourite animal: cat");
var noteController = new NoteController(noteList);
noteController.showList();
noteController.showNoteForCurrentPageURL();
noteController.createNewNote();

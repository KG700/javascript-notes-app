(function(exports) {
  function NoteList() {
  this.notes = new Array();
  };

  NoteList.prototype.create = function(text) {
    var note = new Note(text);
  this.notes.push(note);
  }

  NoteList.prototype.all = function() {
  return this.notes;
  }
  exports.NoteList = NoteList;

})(this);

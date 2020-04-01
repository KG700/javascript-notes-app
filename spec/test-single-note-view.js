(function(exports) {
  function createsHTMLdivForSingleNote() {
    var note = new Note("Favourite drink: seltzer");
    var singleNoteView = new SingleNoteView(note);
      assert.isTrue(singleNoteView.view() === "<div>Favourite drink: seltzer</div>");
  }
  createsHTMLdivForSingleNote();
})(this);

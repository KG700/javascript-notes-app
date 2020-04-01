(function(exports) {
  function testViewListReturnsNotes() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteList.create("Favourite food: pesto")
    noteList.create("Favourite drink: seltzer")
    assert.isTrue(noteListView.viewList() === "<ul><li><div>Favourite food: pest</div></li><li><div>Favourite drink: sel</div></li></ul>" );
  }
  
  testViewListReturnsNotes();
})(this);
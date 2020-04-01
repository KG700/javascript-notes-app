(function(exports) {
  function testNoteListIsEmptyByDefault() {
    var noteList = new NoteList();
      assert.isTrue(noteList.notes.length === 0);
  }
  function testNoteListAddsNoteToNoteList() {
    var noteList = new NoteList();
      noteList.create("hello");
      assert.isTrue(noteList.notes[0].text === "hello");
  }
  function testAddsidToEachNote() {
    var noteList = new NoteList();
    noteList.create("hello")
    noteList.create("karla")
    assert.isTrue(noteList.notes[0].id === 0 && noteList.notes[1].id === 1)
  }
  testNoteListIsEmptyByDefault();
  testNoteListAddsNoteToNoteList();
  testAddsidToEachNote();
})(this);

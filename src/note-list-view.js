(function(exports) {
  function NoteListView(list) {
    this.list = list;
  }

  NoteListView.prototype.viewList = function() {
    var html = "<ul>";
    for (let i= 0; i < (this.list.notes).length; i++) {
      html += `<li><div><a href='#notes/${this.list.notes[i].id}'>${this.list.notes[i].text.substring(0, 20)}</a></div></li>`
    }
    html += "</ul>"
    return html;
  }

  exports.NoteListView = NoteListView;
})(this);
class SearchView {
  _parentEl = document.querySelector(".search");

  getQuery() {
    const query = this._parentEl.querySelector(".search__input").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector(".search__input").value = "";
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();

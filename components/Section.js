class Section {
  constructor({items, renderer}, sectionSelector) {
      this._items = items;
      this._renderer = renderer;
      this._section = document.querySelector(sectionSelector);
  }

  render() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  };

  addItem() {
    this._section.prepend(this._renderer());
  };
}

export default Section;

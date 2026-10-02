public admit(s: Survivor): void {
  if (this.survivors.length + 1 > this._capacity) {
    throw new Error(
      "Shelter full: we can't admit more survivors"
    );
  }
  this.survivors.push(s);
  // Nothing else: the domain applies rules and changes state.
}

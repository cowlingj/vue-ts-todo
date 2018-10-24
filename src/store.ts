class Store {
  list = [] as string[]
  actions = {
    list: this.list,
    pushToList(item: string) {
      this.list.push(item);
    },
    clearList() {
      this.list = [] // changing this.list doesn't affect outer list
    },
    removeItem(item: string) {
      this.list = this.list.filter((listItem: string)=>{ item !== listItem })
    }
  }
}

var store = new Store()

export { store }
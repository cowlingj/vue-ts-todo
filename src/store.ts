class Store {

  state = {
    list: [] as string[]
  }

    pushToList(item: string) {
      this.state.list.push(item);
    }
    
    clearList() {
      this.state.list = []
    }

    removeItem(item: string) {
      this.state.list = this.state.list.filter((listItem: string)=>{ item !== listItem })
    }
  
}

var store = new Store()

export { store }
/*metodo para añadir producto*
createListProduct(value){
  return new Promise<any>((resolve, reject) => {
    let currentUser = firebase.auth().currentUser;
    this.afs.collection('users').doc(currentUser.user_id)
    .collection('lists').add({
      list_id: value.title,
      description: value.description,
      user_id: currentUser.user_id
    })
    .then(
      res => resolve(res),
      err => reject(err)
    )
  })
}

/*listar todos los productos*/
getPr

getList(){
  return new Promise<any>((resolve, reject) => {
    let currentUser = firebase.auth().currentUser;
    this.snapshotChangesSubscription = 
    this.afs.collection('users').doc(currentUser.user_id)
    .collection('lists').snapshotChanges()
    .subscribe(snapshots => {
      resolve(snapshots);
    })
  });
}

/*actualizar producto*/
updateProductList(listKey, value){
  return new Promise<any>((resolve, reject) => {
    let currentUser = firebase.auth().currentUser;
    this.afs.collection('users').doc(currentUser.user_id)
    .collection('lists').doc(listKey).set(value)
    .then(
      res => resolve(res),
      err => reject(err)
    )
  })
}

/*metodo de eliminar producto*/
deleteListProduct(productKey){
  return new Promise<any>((resolve, reject) => {
    let currentUser = firebase.auth().currentUser;
    this.afs.collection('users').doc(currentUser.user_id)
    .collection('lists').doc(listKey).delete()
    .then(
      res => resolve(res),
      err => reject(err)
    )
  })
}

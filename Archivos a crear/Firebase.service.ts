/*metodo para añadir producto*
createTask(value){
  return new Promise<any>((resolve, reject) => {
    let currentUser = firebase.auth().currentUser;
    this.afs.collection('people').doc(currentUser.uid)
    .collection('task').add({
      title: value.title,
      description: value.description,
      image: value.image
    })
    .then(
      res => resolve(res),
      err => reject(err)
    )
  })
}

/*listar todos los productos*/
getTasks(){
  return new Promise<any>((resolve, reject) => {
    let currentUser = firebase.auth().currentUser;
    this.snapshotChangesSubscription = 
    this.afs.collection('people').doc(currentUser.uid)
    .collection('task').snapshotChanges()
    .subscribe(snapshots => {
      resolve(snapshots);
    })
  });
}

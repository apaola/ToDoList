/*metodo para crear tarea*
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

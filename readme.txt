
In the given code snippet, uploadTask.snapshot.ref refers to the ref property of the snapshot object associated with the uploadTask.

When an upload is in progress, the uploadTask object emits state changes, and the "state_changed" event listener is triggered. The listener receives a snapshot object as a parameter. This snapshot object contains information about the current state of the upload.

The snapshot.ref property refers to a reference to the location in the storage where the upload is being performed. It represents the storage path of the uploaded file.

snapshot is a object and .ref is a property 
snapshot = {
    ref: sdfasf
}


we are uploading images then again getting the url of that img from firebase storeage then using that url to show in frontend
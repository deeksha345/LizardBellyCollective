import Firebase from '../Firebase';
const functions = require('firebase-functions');
const gcs = require('@google-cloud/storage');
const os = require ('os');
const path = require ('path');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.onFinalize = functions.storage.object().onFinalize(event => {
    const object = event;
    /*const bucket = object.bucket;
    const contentType = object.contentType;
    const filePath = object.selfLink;*/
    console.log('upload detected, name change started');
    console.log(object);

    if(path.basename(filePath).startsWith('renamed-')) {
        console.log('already renamed');
        return;
    }

    //const destBucket = Firebase.storage().
    /*const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
    const metadata = {contentType: contentType};
    return destBucket.file(filePath).download({
        destination:tmpFilePath
    }).then(() => {
        return destBucket.upload(tmpFilePath, {
            destination: 'renamed-' + path.basename(filePath),
            metadata: metadata
        })
    });*/
 });

 exports.OnDelete = functions.storage.object().onDelete(event => {
     console.log(event);
     return;
 })

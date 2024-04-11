export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.allSettled([import('./4-user-promise.js'), import('./5-photo-reject.js')])
        .then(([{ signUpUser }, { default: uploadPhoto }]) => {
        signUpUser(firstName, lastName).then((value) => {
            uploadPhoto(fileName).then(() => {
            console.log(value);
            console.log('Photo upload completed');
            });
        });
        });
    }
import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    console.log({
        photo: photo.body,
        user: `${user.firstName} ${user.lastName}`
    });
    }
    catch (error) {
        console.log({photo: null, user: null});
    }
}


import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    console.log(photo.body, user.firstName, user.lastName);
  } catch (error) {
    console.log(error.message);
  }
}

asyncUploadUser().then(console.log).catch(console.error);

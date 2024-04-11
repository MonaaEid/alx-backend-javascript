import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  let result;
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    result = {
      photo,
      user,
    };
  } catch (error) {
    result = {
      photo: null,
      user: null,
    };
  }
  return result;
}

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photoRes; let userRes;
  try {
    photoRes = await uploadPhoto();
    userRes = await createUser();
  } catch (error) {
    photoRes = null;
    userRes = null;
  }
  return { photo: photoRes, user: userRes };
}

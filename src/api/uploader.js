export async function uploadImage(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'dx8onw52');
  return fetch('https://api.cloudinary.com/v1_1/dos0w4ils/image/upload', {
    method: 'POST',
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}

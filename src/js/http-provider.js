const jokeUrl = "https://api.chucknorris.io/jokes/random";
const urlUser = "https://reqres.in/api/users?page=2";

// CloudinaryKey
const cloudPreset = 'ml_default';
const cloudUrl = 'https://api.cloudinary.com/v1_1/ducvfjart/upload';


const getJoke = async () => {

  try {

    const resp = await fetch(jokeUrl);
    if (!resp.ok) { throw 'ERROR' };
    const { icon_url, id, value } = await resp.json();
    return {
      icon_url,
      id,
      value
    };

  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  const resp = await fetch(urlUser);
  const {data: users} = await resp.json();
  // console.log(users);
  return users;
}

// Tipo File
const subirImagen = async(file) =>{
  const formData = new FormData();
  formData.append('upload_preset',cloudPreset);
  formData.append('file', file);
  try {
    const resp = await fetch(cloudUrl,{
      method: 'POST',
      body: formData
    });
    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    }else{
      throw await resp.json();
    }
  } catch (err) {
    throw err;
  }
}

export {
  getJoke,
  getUsers,
  subirImagen,
}

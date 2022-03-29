const jokeUrl = "https://api.chucknorris.io/jokes/random";
const urlUser = "https://reqres.in/api/users?page=2";

// 
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

export {
  getJoke,
  getUsers
}

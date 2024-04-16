import API from '../axios';

export const getLocation = async () => {
  try {
    let res = await API.get('locations');

    return res?.data?.locations;
  } catch (error: any) {
    console.log(error.message);
  }
};

import axios from 'axios';


export const awsS3Upload = async (url, file) => {
  try {
    const result = await axios.put(url, {
      data: file
    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return result;
  } catch (err) {
    console.log('error', err);
    throw new Error(err.message);
  }
}
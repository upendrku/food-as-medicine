import axiosClient from './utils';

export const getCategories = async (): Promise<any> => {
  let resp;
  await axiosClient
    .get('/categories')
    .then((response) => {
      resp = response.data.categories;
      console.log(resp);
    })
    .catch((error) => console.error('error', error));
  return resp;
};

export const getFAMResources = async (payload: any): Promise<any> => {
  let resp;
  await axiosClient
    .post('/getFamResources', {
      category: payload.category,
      agencyName: payload.agencyName,
      zipCode: payload.zip,
      distance: payload.range,
    })
    .then((response) => {
      resp = response.data;
      console.log(resp);
    })
    .catch((error) => console.error('error', error));
  return resp;
};

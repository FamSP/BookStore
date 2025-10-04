import api from "./api.js";
const ITEM_API = import.meta.env.VITE_ITEMS_API;

//get all
const getAllItem = async () => {
  return await api.get(ITEM_API);
};

//get by ID
const getItemById = async (id) => {
  return await api.get(`${ITEM_API}/${id}`);
};
//update by ID
const editItemById = async (id, book) => {
  return await api.put(`${ITEM_API}/${id}`, book);
};

//add
const createItem = async (book) => {
  return await api.post(`${ITEM_API}`, book);
};
//delete
const deleteItem = async (id) => {
  return await api.delete(`${ITEM_API}/${id}`);
};

const itemService = {
  getAllItem,
  getItemById,
  editItemById,
  createItem,
  deleteItem,
};

export default itemService;

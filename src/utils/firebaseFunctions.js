// import { setDoc, doc, collection, orderBy, getDocs, query } from "firebase/firestore";
// import { firestore } from "../firebase.config";

// export const saveItem = async (data) => {
//   await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
//     merge: true,
//   });
// };
// export const getAllFoodItems = async () => {
//     const items = await getDocs(query(collection(firestore, 'foodItems'), orderBy('id', 'desc')))

//     return items.docs.map((doc) => doc.data());
// }
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall food items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );
  
  // const newItems = items.docs.map((doc) => doc.data());
  // return newItems  // this will be an array of objects2
  return items.docs.map((doc) => doc.data());
};
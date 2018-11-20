//conevrt object to array
export const firebaseLooper = snapshot => {
  const data = [];

  snapshot.forEach(element => {
    data.push({
      ...element.val(),
      id: element.key
    });
  });
  return data;
};

// reverse Array

export const reverseArray = actualArray => {
  let reversedArray = [];
  for (let i = actualArray.length - 1; i >= 0; i--) {
    reversedArray.push(actualArray[i]);
  }
  return reversedArray;
};

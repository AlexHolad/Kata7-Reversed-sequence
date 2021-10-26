const reverseSeq = (n) => {
  let result = [];
  let pusher = n;
  for (let i = 0; i < n; i++) {
    result.push(pusher);
    pusher -= 1;
  }
  return result;
};

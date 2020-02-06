const truncateText = (str='', length?: number, ending?: string) => {
  if(!length) {
    length = 100;
  }

  if(!ending) {
    ending = '...';
  }

  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

export default truncateText;

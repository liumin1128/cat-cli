
export const preatyTime = (str) => {
  const data = new Date(str);
  if (data) {
    return `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  } else {
    return '未知';
  }
};

export const getStrless = (ostr, end = 15, start = 0) => {
  const str = ostr || '';
  if (str.length > end) {
    return `${str.substring(start, end)}...`;
  } else {
    return str;
  }
};

export const getSmallImg = (url, propsX, propsY) => {
  const x = propsX || 200;
  const y = propsY || 200;
  return `${url}?imageMogr2/thumbnail/!${x}x${y}r/gravity/Center/crop/${x}x${y}`;
};

export const getWinHeight = () => {
  let winHeight = 0;
  if (window.innerHeight) {
    winHeight = window.innerHeight;
  } else if ((document.body) && (document.body.clientHeight)) {
    winHeight = document.body.clientHeight;
  }
  if (document.documentElement && document.documentElement.clientHeight) {
    winHeight = document.documentElement.clientHeight;
  }
  return winHeight;
};

export function getScrollTop() {
  let scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}

// 去除数组中的空值
export const trimSpace = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '' || typeof (array[i]) === 'undefined') {
      array.splice(i, 1);
      i -= 1;
    }
  }
  return array;
};

export const notEmpty = (value, label) => {
  return new Promise((resolve, reject) => {
    if (!value || value === '') {
      reject(`${label}`);
    } else {
      resolve(value);
    }
  });
};

export const checkData = ({ data, cb }) => {
  return new Promise((resolve, reject) => {
    if (data && data.code === 200) {
      resolve();
    } if (cb && cb(data.code)) {
      resolve();
    } else {
      reject({ msg: '操作异常' });
    }
  });
};

export function parseQueryString(url) {
  const str = url.split('?')[1];
  const items = str.split('&');
  const result = {};
  let arr;
  for (let i = 0; i < items.length; i += 1) {
    arr = items[i].split('=');
    result[arr[0]] = arr[1];
  }
  return result;
}

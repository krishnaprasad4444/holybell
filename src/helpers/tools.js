
export function findFileExtension(file) {
  return file.name.includes(".")
    ? file.name.split(".").pop()?.toLowerCase()
    : undefined;
}

export const base64ToBlobURL =(base64Image)=>{
const blob = b64toBlob(base64Image.replace(/^data:image\/[a-z]+;base64,/, ""), 'image/png');
return URL.createObjectURL(blob);
}

export const getImageExtensionFromBase64 =(base64Image)=>{
var extension = undefined;
var lowerCase = base64Image.toLowerCase();
if (lowerCase.indexOf("png") !== -1) extension = "png"
else if (lowerCase.indexOf("jpg") !== -1 || lowerCase.indexOf("jpeg") !== -1)
    extension = "jpg"
else extension = "tiff";
return extension;
}

const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

export const getError=(errors)=>{
  let data = errors.response.data;
  return Object.keys(data)[0] +" - "+ data[Object.keys(data)[0]][0];
}

export const getDateTimeYMD = (date) => {
  if (!date) {
      return null;
  }
  return (
      date.getUTCFullYear() +
      "-" +
      pad(date.getUTCMonth() + 1) +
      "-" +
      pad(date.getUTCDate()) +
      " " +
      pad(date.getUTCHours()) +
      ":" +
      pad(date.getUTCMinutes()) +
      ":" +
      pad(date.getUTCSeconds()) +
      "." +
      (date.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5)
  );
};

export const getDateTime = (date) => {
  if (!date) {
      return null;
  }
  return (
    pad(date.getUTCDate()) +
    "-" +
      pad(date.getUTCMonth() + 1) +
      "-" +
      date.getUTCFullYear()
  );
};

const pad = (number) => {
  if (number < 10) {
      return "0" + number;
  }
  return number;
};

export const getArraySumByKey = (arr, keyName) =>
arr
  .map((item) => parseFloat(item[keyName] ? item[keyName] : 0))
  .reduce((a, b) => parseFloat(a ? a : 0) + parseFloat(b ? b : 0), 0);
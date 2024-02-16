export const getEngToArNumber = (num) => {
  let surahNumbers = parseInt(num, 10);
  // English to Arabic:
  const numbers = `۰۱۲۳۴۵۶۷۸۹`;
  const convert = (surahNumbers) => {
    let res = "";
    const str = surahNumbers.toString();
    for (let c of str) {
      res += numbers.charAt(c);
    }
    return res;
  };
  const converted = convert(surahNumbers);
  return converted;
};

/**
 * Converts pixel units to rems
 * @param {Number} pixelUnits Figma measurement
 * @returns {String} remString Measurement in rems
 */
export default function(pixelUnits) {
    const base = 16;
   
    if (!Array.isArray(pixelUnits)) {
      return `${pixelUnits/base}rem`
    } else {
        let remString="";
        for (let i=0; i < pixelUnits.length; i++) {
            let remUnit = pixelUnits[i]/base;
            remString += ` ${remUnit}rem`;
          }
          return remString.trim();
        }  
};
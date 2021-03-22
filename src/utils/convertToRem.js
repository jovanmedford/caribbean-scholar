/**
 * Converts a pixel measurement to ems
 * @param {Number} pixelMeasurement Figma measurement
 * @returns {String} Measurement in rems
 */
export default function(pixelMeasurement) {
    const rem = 16;
    const remMeasurement = pixelMeasurement / rem;
    return `${remMeasurement}rem`
}

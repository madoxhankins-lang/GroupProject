// Utility functions for the Art Gallery project

/**
 * Creates an image URL from the Art Institute API image_id
 * @param {string} imageId - The image ID from the API
 * @param {number} width - Optional width parameter (default: 400)
 * @returns {string} The formatted image URL
 */
function createImageUrl(imageId, width = 400) {
  return `https://www.artic.edu/iiif/2/${imageId}/full/${width},/0/default.jpg`;
}


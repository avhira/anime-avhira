export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  const anime = await response.json();
  return anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  try {
    const response = await getAnimeResponse(resource);
    const flattenedData = response.data.flatMap((item) => {
      if (item && item[objectProperty]) {
        return item[objectProperty];
      } else {
        return [];
      }
    });
    return flattenedData;
  } catch (error) {
    console.error('Error fetching or processing data:', error);
    throw error;
  }
};

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };
  return response;
};

export const OTD = (arr) => {
  return Array.isArray(arr)
    ? arr.map((item) => {
        const {
          _id,
          primaryText,
          company,
          headline,
          description,
          CTA,
          imageUrl,
        } = item;
        return {
          id: _id,
          primaryText,
          companyName: company?.name,
          companyUrl: company?.url,
          headline,
          description,
          CTA,
          imageUrl,
        };
      })
    : [];
};

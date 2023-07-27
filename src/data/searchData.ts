type brandType = {
  brand: string;
};
type featureType = {
  feature: string;
};
type conditionType = {
  condition: string;
};

export const brands: Array<brandType> = [
  {
    brand: "Samsung",
  },
  {
    brand: "Apple",
  },
  {
    brand: "Huawei",
  },
  {
    brand: "Pocco",
  },
  {
    brand: "Lenovo",
  },
];

export const features1: Array<featureType> = [
  {
    feature: "Metallic",
  },
  {
    feature: "Plastic cover",
  },
  {
    feature: "8GB Ram",
  },
  {
    feature: "Super power",
  },

  {
    feature: "Large Memory",
  },
];

export const condition: Array<conditionType> = [
  {
    condition: "Any",
  },
  {
    condition: "Refurbished",
  },
  {
    condition: "Brand new",
  },
  {
    condition: "Old items",
  },
];

export const Category = (
  arry,
  category1,
  category2,
  category3,
  category4,
  category5
) => {
  let FilteredCategory = [];

  if (
    category1 === false &&
    category2 === false &&
    category3 === false &&
    category4 === false &&
    category5 === false
  ) {
    return arry;
  }

  if (category1) {
    return arry;
  }

  if (category2) {
    let newList = arry.filter(
      (item) => "Laptop" === item.category
    );

    FilteredCategory.push(...newList);
  }

  if (category3) {
    let newList = arry.filter(
      (item) => "Gaming_Laptops" === item.category
    );

    FilteredCategory.push(...newList);
  }

  if (category4) {
    let newList = arry.filter(
      (item) => "CPU" === item.category
    );

    FilteredCategory.push(...newList);
  }

  if (category5) {
    let newList = arry.filter(
      (item) => "Phones" === item.category
    );

    FilteredCategory.push(...newList);
  }
  return FilteredCategory;
};

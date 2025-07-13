export const ruleOptions = [
    { label: "Specific Collection", value: "specific_collection" },
    { label: "Product Tags", value: "product_tags" },
    { label: "Specific Product", value: "specific_product" },
    { label: "Product Subscribed", value: "product_subscribed" },
    { label: "Specific Discount Codes", value: "specific_discount_codes" },
    { label: "Cart Value Range", value: "cart_value" },
    {label:"Product Vendors", value: "product_vendors"},
  ];
  
  export const operatorOptions = {
    specific_collection: [
      { label: "Contains any", value: "contains_any" },
      { label: "Is not", value: "is_not" },
    ],
    product_tags: [
      { label: "Contains any", value: "contains_any" },
      { label: "Is not", value: "is_not" },
    ],
    specific_product: [
      // { label: "Equals anything", value: "equals_anything" },
      { label: "Contains any", value: "contains_any" },
      { label: "Is not", value: "is_not" },
    ],
    product_subscribed: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    specific_discount_codes: [
      { label: "Free", value: "Free" },
      { label: "Code", value: "Code" },
    ], 
    cart_value: [
      { label: "Is equal or greater than", value: "greater_than" },
      { label: "Is between", value: "between" },
      { label: "Is less than", value: "less_than" },
    ],
    product_vendors: [
      { label: "Contains any", value: "contains_any" },
      { label: "Is not", value: "is_not" },
    ]
  };
  
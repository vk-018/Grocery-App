//we will use enums for this : enums are basically user defined constant name values
//helps in simplifying filtering later on

// Enums (short for “enumerations”) are a way to define a set of named constant values.
// Instead of using random strings or numbers everywhere, you define a fixed list of allowed values
//improves -> readability

//suppose we want to define some status then instead of defining separate strings lett status =...
//create aan object status  {pending : pending , ...}  , later on access directly status.pending

//mostly used for comaprisons

//*note : enums are not varibales , they are values , which avoid using multiple variables
// Enum for product categories
// Using enum makes filtering easier later

export enum Category {     //enums are not erasble(exists after compile also) hence we have to disable erasbleSyntaxOnly
  FRUITS = "FRUITS",
  VEGETABLES = "VEGETABLES",
  DAIRY = "DAIRY",
  MEAT = "MEAT",
}

// Interface describing a product structure
export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: Category
  brand : string
}

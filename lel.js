import { input, select, Separator } from "@inquirer/prompts";
import { faker } from "@faker-js/faker";

import {
  encode,
  renderANSI,
  renderSVG,
  renderUnicode,
  renderUnicodeCompact,
} from "uqr";

const answer1 = await select({
  message: "What type of data would you like to generate?",
  choices: [
    {
      name: "User Profile",
      value: "user_profile",
      description: "Generates some fake user profiles :)",
    },
    new Separator(),
    {
      name: "Company Info",
      value: "company_info",
      description: "Info of companies",
      // disabled: 'Option not available :('
    },
    new Separator(),
    {
      name: "Product Details",
      value: "product_details",
      description: "Details of a product",
      // disabled: 'Option not available :('
    },
    //
    //   {
    //     name: 'jspm',
    //     value: 'jspm',
    //     disabled: true,
    //   },
    //   {
    //     name: 'pnpm',
    //     value: 'pnpm',
    //     disabled: '(pnpm is not available)',
    //   },
  ],
});
const answer2 = await input({
  message: "How many entries would you like?",
  default: 1,
});

function createRandomUser() {
  return {
    fullName: faker.person.fullName(),
    phoneNumber: faker.phone.number({ style: "international" }), // '+15551234567'
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  };
}

const users = faker.helpers.multiple(createRandomUser, {
  count: Number(answer2),
});

function productDetails() {
  return {
    Name: faker.commerce.product(),
    Shinj_chanar: faker.commerce.productAdjective(),
    Material: faker.commerce.productMaterial(),
    Tailbar: faker.commerce.productDescription(),
  };
}
const baraa = faker.helpers.multiple(productDetails, {
  count: Number(answer2),
});

function comp() {
  return {
    Name: faker.company.name(),
  };
}
const compan = faker.helpers.multiple(comp, {
  count: Number(answer2),
});
if (answer1 == "user_profile") {
  console.log(users);
}
if (answer1 == "company_info") {
  console.log(compan);
}
if (answer1 == "product_details") {
  console.log(baraa);
}
const svg = renderSVG("Hello, World!");
const ansi = renderANSI("https://www.", {
  // Error correction level
  ecc: "L",
  // Border width
  border: 2,
});

// display QR Code in terminal
console.log(ansi);

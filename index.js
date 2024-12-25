// Import the fs module for file system operations
const fs = require("fs");
const path = require("path"); // To handle file paths
const { Circle, Triangle, Square } = require("./lib/shapes");

// Define the questions to prompt the user
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters for the logo:",
    validate: (input) =>
      input.length <= 3 || "Text must be up to three characters.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color (keyword or hexadecimal):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for the logo:",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color (keyword or hexadecimal):",
  },
  {
    type: "input",
    name: "fileName",
    message:
      "What is the file name for your logo? (Do not include the extension)",
    validate: (input) => input.trim() !== "" || "File name cannot be empty.",
  },
];

// Dynamically import inquirer and prompt the user
(async () => {
  const inquirer = await import("inquirer");

  inquirer.default.prompt(questions).then((answers) => {
    const { text, textColor, shape, shapeColor, fileName } = answers;

    // Create an instance of the selected shape with the specified color
    let shapeInstance;
    switch (shape) {
      case "Circle":
        shapeInstance = new Circle();
        break;
      case "Triangle":
        shapeInstance = new Triangle();
        break;
      case "Square":
        shapeInstance = new Square();
        break;
    }

    shapeInstance.setColor(shapeColor);

    // Define the SVG content including the shape and text
    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeInstance.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
    `;

    // Ensure the `examples` directory exists
    const examplesFolder = path.join(__dirname, "examples");
    if (!fs.existsSync(examplesFolder)) {
      fs.mkdirSync(examplesFolder);
    }

    // Write the SVG content to the `examples` folder with the user-provided file name
    const filePath = path.join(examplesFolder, `${fileName.trim()}.svg`);
    fs.writeFileSync(filePath, svgContent.trim());
    console.log(`Generated ${filePath}`);
  });
})();

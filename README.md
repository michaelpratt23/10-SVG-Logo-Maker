# SVG Logo Maker

## Description

The **SVG Logo Maker** is a Node.js command-line application that allows users to quickly generate custom SVG logos for their projects. Users can input text, choose colors, select shapes, and specify a file name, and the application generates an SVG file saved in the `examples` folder.

This project uses **Object-Oriented Programming (OOP)** principles and leverages **Inquirer** for user interaction and **Jest** for testing.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Examples](#examples)
- [Tests](#tests)
- [License](#license)

---

## Installation

To use this application, you need to have **Node.js** installed on your computer. Follow these steps to set up the project:

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:michaelpratt23/10-SVG-Logo-Maker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-folder>
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage

To generate a logo:

1. Run the application:

   ```bash
   node index.js
   ```

2. Answer the prompts:

   - **Text**: Enter up to three characters for your logo.
   - **Text Color**: Enter the color for the text (keyword or hexadecimal).
   - **Shape**: Choose a shape for the logo (Circle, Triangle, or Square).
   - **Shape Color**: Enter the color for the shape (keyword or hexadecimal).
   - **File Name**: Enter a name for the logo file (without the extension).

3. The generated logo file will be saved in the `examples` folder with the specified file name and a `.svg` extension.

4. Open the file in your browser or any SVG viewer to see the logo.

---

## Features

- **Interactive Prompts**: The application uses `Inquirer` to collect user input.
- **Customizable Logos**: Users can specify text, colors, shapes, and file names.
- **SVG Output**: Generates scalable vector graphics (SVG) files.
- **Object-Oriented Design**: Implements OOP principles with shape-specific classes (`Circle`, `Triangle`, and `Square`).
- **Error Handling**: Validates user input to ensure a seamless experience.

---

## Examples

Generated SVG files are saved in the `examples` folder. For instance, if you enter the following:

- **Text**: `BIG`
- **Text Color**: `gold`
- **Shape**: `Circle`
- **Shape Color**: `blue`
- **File Name**: `blue gold big logo`

You will find a file named `blue gold big logo.svg` in the `examples` folder.

Below is an example of a generated SVG logo:

![Example Logo](./images/example_image.png)

You can also watch a video walkthrough of the application here:

[Example Video Walkthrough](https://drive.google.com/file/d/1g4ltw2L6c3f71n1R2pPOe9M6eBADVYoN/view?usp=sharing)

---

## Tests

This project uses **Jest** for unit testing. To run the tests:

1. Run the following command:

   ```bash
   npm test
   ```

2. The tests will validate the functionality of the shape classes (Circle, Triangle, and Square) and ensure their render methods generate the correct SVG strings.

## License

This project is licensed under the MIT License.

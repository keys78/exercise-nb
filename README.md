# Next.js MUI TypeScript E-Commerce

## Table of Contents

- [Project Description](#project-description)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Pages](#pages)
- [Styles](#styles)
- [Installation](#installation)
- [Bottlenecks](#bottlenecks)


## Project Description

A modern e-commerce application built with Next.js, TypeScript, and Material-UI. This project provides a solid foundation for creating an online store with a responsive design and dynamic page rendering.

## Folder Structure

- **public**: Public assets such as images.
- **components**: Reusable React components.
- **__tests__**: Tests file folder.
- **pages**: Next.js pages that represent different views.
- **redux**: Contains store slices for products.
- **utils**: Utility functions and theme registry.
- **styles**: Stylesheets for styling components and pages.
- **types**: Types sheet for components and pages.

## Components

- **cart**: Cart UI and functions.
- **Home**: Contains static designs and functions for home page.
- **Layout**: Base structure.
- **Product**: All about products layou and details.
- **Shared**: Shared files across the project.
- **Whislist**: Wishlist UI and functions.

## Pages

- **index.tsx**: Homepage displaying featured products.
- **products/[productId].tsx**: Product details page.

## Styles

- **theme.ts**: Material-UI theme configuration.
- **globalStyles.ts**: Global styles for the application.

## Installation

1. Clone the repository
2. Install dependencies: `yarn install`
3. Set up environment variables based on the instances of the environment keys used in the project.

## Usage

1. Start the server on dev: `yarn dev`
2. Open the application in your browser: `http://localhost:3000`

## Bottlenecks

- Decision between making skeleton loader visible on load more or allowing users still to have viewport access to the already loaded products.

### fix
- Added a loading indicator on the load more button when triggered. This informs users that more products are being loaded while they still have access to the available products on the viewport.

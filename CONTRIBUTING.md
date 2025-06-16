# Contributing to Math Utilities

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/jsdoc-experiment.git
   cd jsdoc-experiment
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

## Making Changes

1. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Add JSDoc comments for any new functions or changes
4. Generate documentation to verify your changes:
   ```bash
   pnpm run docs
   ```
5. Commit your changes with a descriptive message
6. Push your branch and create a pull request

## Documentation Guidelines

- All functions must have JSDoc comments
- Include examples in the documentation
- Update tutorials if adding new features
- Test the generated documentation locally

## Code Style

- Use ES6+ features
- Follow the existing code style
- Write clear, descriptive commit messages
- Keep functions small and focused

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation
3. The PR will be merged once you have the sign-off of at least one other developer

## Questions?

Feel free to open an issue for any questions or concerns.

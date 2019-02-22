# compound-component

This project demo few use cases of a React design patterns: Compound Component.

## Purpose of Compound Component

**Distribute the responsibilities** of view into multiple components while **sharing states between them**.

An example of compound component is `select` and `option` elements:

1. `select` is responsible for determining the selected value
1. `option` is responsible for the value and display of an option when it is selected.

## When to use it

When you have a big component that responsible for few UI components, but you need to share states between them.

Take for example, a Tabs components that consists of the Tab buttons and the content of the Tabs. You can putting everything into a single `Tabs` component and passing all the props via it, but that means your `Tabs` component is taking a lot responsibility e.g.

- where the tab button is placed
- the contents of the tab button
- the contents for each Tab

## Other Details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

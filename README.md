# Dev Stack Builder

A web app for exploring development technologies and assembling your own stack. Browse frontend frameworks, backend runtimes, databases, languages and tooling, then pick the ones you want and keep them together in a single panel.

## Technology used

- React 19 with Vite
- Tailwind CSS and DaisyUI
- JavaScript (ES6+)
- React-Toastify
- JSON for the technology data

## Features

- Fifteen technologies loaded from an external JSON file, each with a category, rating, difficulty and badge
- A stack panel that tracks your selections, blocks duplicates, and lets you remove one item or clear everything
- Toast notifications on every stack action, and a layout that works from 375px phones up to widescreen desktops

## Running it locally

```bash
npm install
npm run dev
```

## React questions

**What is JSX, and why is it used in React?**

JSX lets you write markup inside JavaScript files. It looks like HTML but it compiles down to function calls that create React elements. The reason it's useful is that UI logic and markup usually change together, so keeping them in one place is easier than splitting them across files.

**What is the difference between props and state?**

Props are values a component receives from its parent. The component can read them but not change them. State is data a component owns and controls itself, and changing it causes a re-render. In this project `stack` is state inside App, while each card receives `tech` and `isAdded` as props.

**What does the useState hook do, and where did you use it in this project?**

`useState` gives a function component a piece of data that survives re-renders, plus a setter that triggers a re-render when called. I used it three times in App: `technologies` for the loaded JSON, `stack` for the user's selections, and `loading` for the fetch state. Navbar also uses it for whether the mobile menu is open.

**What does the useEffect hook do, and why did you need it to load the JSON data?**

`useEffect` runs code after the component renders, which is where side effects belong. Fetching data is a side effect, so it can't go directly in the component body without firing on every render. I passed an empty dependency array so the fetch runs once when App first mounts, then stores the result in state.

**Why does every item in a .map() list need a unique key prop?**

React uses the key to match up elements between renders. Without one it has to guess which item is which, and when the list changes it can update the wrong element or throw away state it should have kept. I used `tech.id` since every technology in the JSON has a unique id.

**What is conditional rendering? Show one place you used it.**

Conditional rendering means showing different output depending on some value. In `YourStack` I check `stack.length === 0` and render a dashed empty-state box if nothing is selected, otherwise the list of items and the Remove All button. The card button does the same thing, switching between "Add to Stack" and "Added to Stack".

**How do you pass data from a parent component to a child, and how does a child send something back?**

Data goes down through props. App passes `technologies` and `stack` into `TechnologyGrid`, which passes each `tech` into a card. To send something back, the parent passes down a function. App gives each card `onAdd`, and when the button is clicked the card calls `onAdd(tech)`, which runs App's handler and updates App's state.
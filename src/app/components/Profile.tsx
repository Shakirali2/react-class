// Defining a component

import Avatar from "./Avatar";

// Step 1: Export the component 
// The export default prefix is a standard JavaScript syntax (not specific to React).

// Step 2: Define the function 
// With function Profile() { } you define a JavaScript function with the name Profile.

// Pitfall
// React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

// Step 3: Add markup 
// The component returns an <img /> tag with src and alt attributes. <img /> is written like HTML, but it is actually JavaScript under the hood! This syntax is called JSX, and it lets you embed markup inside JavaScript.


export default function Profile() {
    return (
      <Avatar  person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100} />
    )
  }
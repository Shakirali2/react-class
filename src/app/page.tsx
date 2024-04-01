import Image from "next/image";


// Defining a component

// Step 1: Export the component 
// The export default prefix is a standard JavaScript syntax (not specific to React).

// Step 2: Define the function 
// With function Profile() { } you define a JavaScript function with the name Profile.

// Pitfall
// React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

// Step 3: Add markup 
// The component returns an <img /> tag with src and alt attributes. <img /> is written like HTML, but it is actually JavaScript under the hood! This syntax is called JSX, and it lets you embed markup inside JavaScript.


function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}

// Using a component 
// Now that you’ve defined your Profile component, you can nest it inside other components. For example, you can export a Gallery component that uses multiple Profile components:


export default function Gallery() {
  return (
    <div>
      <h1>Amazing scientists</h1>
      <div className="flex">
      <Profile />
      <Profile />
      <Profile />
      </div>
    </div>
  )
}
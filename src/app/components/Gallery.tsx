import Profile from "./Profile"
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
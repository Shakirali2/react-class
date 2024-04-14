"use Client";

export default function Button({ onClick, children }: any) {
    function handleClick() {
        alert("The button was clicked!");
    }
    return (
        <>
      <button>I don't do anything</button>
      <br />
      <button onClick={onClick}>{children}</button>
        </>
    );
  }
  
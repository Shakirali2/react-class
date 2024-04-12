"use Client";

export default function AlertButton() {
    function handleClick() {
        alert("The button was clicked!");
    }
    return (
        <>
      <button>I don't do anything</button>
      <br />
      <button onClick={handleClick}>I do something</button>
        </>
    );
  }
  
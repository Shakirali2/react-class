import AlertButton from "./components/AlertButton";
import Button from "./components/Button";

export default function Home() {
  return (
    <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <br/>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>
  );
}






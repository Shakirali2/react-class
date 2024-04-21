import { useState } from "react";

export default function Form() {
    const [answer, setAnswer] =useState("");
    const [error, setError] = useState(null);

    const [status, setStatus] = useState('typing');


    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
          await submitForm(answer);
          setStatus('success');
        } catch (err: any) {
          setStatus('typ ing');
          setError(err);
        }
      }
    
    function handleTextareaChange(e: any) {
        setAnswer(e.target.value);
      }
    
    if (status === "success") {
        return <h1>That's rihgt!</h1>;
    }
    return (
        <>
        <h2>City quiz</h2 >
        <p>  
          In which city is there a billboard that turns air into drinkable water?
        </p>
        <form>
            <textarea 
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === "submitting"}
            />
            <br />
            <button disabled={status === "empty" || status === "submitting"}>
            Submits
            </button>
            {status === "error" && (
                <p className="Error">Good guess but a wrong answer. Try again!</p>
            )}
        </form>
        </>
    );
}

function submitForm(answer: any) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve("success");
        }
      }, 1500);
    });
  }
  
 import { useState } from "react";

export default function Form({ status = "empty "}) {
    const [answer, setAnswer] =useState("");
    const [error, setError] = useState(null);

    const [isEmpty, setIsEmpty] = useState(true);
    const [isTyping, setIsTyping] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    
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
            <textarea disabled={status === "submitting"}/>
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
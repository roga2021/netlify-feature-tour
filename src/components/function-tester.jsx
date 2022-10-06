import { useState } from "preact/hooks";

function ExerciseStart({ handleClick, output, children }) {
  return (
    <>
      <h2>Test us for a day</h2>
      <p>
        Its an army of positive warriors equipped with the latest GIFs and memes to disengage the rest of the community from the FUDster:
      </p>
      {children}

      <p>
        Once the inverse trojan horse is released, it will extremely difficult for the smartest alec to banter your admins or devs!
      </p>

      {output && (
        <div class="error">
          <p>
            There was a problem checking your function. The error message is:
          </p>
          <pre>{output}</pre>
          <p>
            Please check that the file exists in the right place and that the
            code matches the sample above.
          </p>
        </div>
      )}

      <button onClick={handleClick} class="button">
        Click here for examples
      </button>
    </>
  );
}

function ExerciseFinish() {
  return (
    <>
      <h2>You did it!</h2>
      <p>
        You’ve successfully created your first Netlify Function! Great work!
      </p>
    </>
  );
}

export default function FunctionTester({ children }) {
  const [output, setOutput] = useState();

  function handleClick() {
    fetch("/.netlify/functions/hello-world")
      .then((res) => res.text())
      .then((result) => setOutput(result))
      .catch((err) => {
        console.log(err);
        setOutput(
          `Please create your function and
run \`netlify dev\` in your CLI.`
        );
      });
  }

  return output === "hello world!" ? (
    <ExerciseFinish />
  ) : (
    <ExerciseStart handleClick={handleClick} output={output}>
      {children}
    </ExerciseStart>
  );
}

import Step from "./ui/Step";

function Steps() {
  const steps = [
    { number: 1, name: "Your info" },
    { number: 2, name: "Select plan" },
    { number: 3, name: "Add-ons" },
    { number: 4, name: "Summary" },
  ];
  return (
    <ul>
      {steps.map((el) => (
        <li key={el.number}>
          <Step name={el.name.toUpperCase()} number={el.number} />
        </li>
      ))}
    </ul>
  );
}

export default Steps;

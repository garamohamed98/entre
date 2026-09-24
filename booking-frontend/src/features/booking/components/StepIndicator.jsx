export default function StepIndicator({ steps, current }) {
  return (
    <div className="step-indicator">
      {steps.map((label, i) => (
        <div
          key={label}
          className={`step-pill ${i === current ? 'active' : ''} ${i < current ? 'done' : ''}`}
        >
          <span className="step-number">{i + 1}</span>
          {label}
        </div>
      ))}
    </div>
  );
}
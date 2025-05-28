interface Step {
  number: number;
  title: string;
  status: "active" | "completed" | "pending";
}

interface StepIndicatorProps {
  currentStep: number;
  steps: Step[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex justify-center mb-10">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center mx-5">
          <div
            className={`
              w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm
              ${
                currentStep === step.number
                  ? "bg-primary-600 text-white"
                  : currentStep > step.number
                  ? "bg-green-600 text-white"
                  : "bg-secondary-300 text-secondary-600"
              }
            `}
          >
            {currentStep > step.number ? "✓" : step.number}
          </div>
          <span
            className={`
              text-sm font-medium
              ${
                currentStep === step.number
                  ? "text-primary-700"
                  : currentStep > step.number
                  ? "text-green-700"
                  : "text-secondary-500"
              }
            `}
          >
            {step.title}
          </span>
          {index < steps.length - 1 && (
            <div className="w-8 h-px bg-secondary-300 mx-5"></div>
          )}
        </div>
      ))}
    </div>
  );
}
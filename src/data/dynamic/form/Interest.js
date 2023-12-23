export const FIELDS = {
  description: {
    input: "description",
    width: 12,
    texts: [
      "Welcome to Bearhack 2024. Thank you for taking interest in Bearhack 2024, we appreciate your efforts to help support Bearhack 2024. Bearhack 2024 is a healthcare and medical technology based hackathon spanning 24 hours on April 27.",
      "This is simply an interest form, once applications are released, you will be notified immediately and will be required to register again. We hope to see you there!",
    ],
  },
  name: {
    input: "input",
    name: "name",
    type: "text",
    title: "Name",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
  email: {
    input: "input",
    name: "email",
    type: "email",
    title: "Email Address",
    maxLength: 50,
    width: 12,
    editable: false,
    required: true,
  },
};

export const ATTRIBUTES = {
  name: "",
  email: "",
};

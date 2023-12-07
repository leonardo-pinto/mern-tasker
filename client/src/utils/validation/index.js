export const loginHookFormValidation = {
  username: {
    required: "Username is required",
    minLength: {
      value: 6,
      message: "Username must have at least 6 characters",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must have at least 6 characters",
    },
  },
};

export const registerHookFormValidation = {
  ...loginHookFormValidation,
  email: {
    required: "Email is required",
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Invalid email format",
    },
  },
};

export const createTaskHookFormValidation = {
  title: {
    required: "Title is required",
  },
  date: {
    required: "Date is required",
  },
};

export const updateTaskHookFormValidation = {
  title: {
    required: "Title is required",
  },
  date: {
    required: "Date is required",
  },
  status: {
    required: "Status is required",
  },
};

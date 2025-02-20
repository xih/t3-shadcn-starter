import type { StorybookConfig } from "@storybook/nextjs";

export const middleware: StorybookConfig["viteFinal"] = async (config) => {
  return {
    ...config,
    define: {
      ...config.define,
      "process.env": {},
    },
  };
};

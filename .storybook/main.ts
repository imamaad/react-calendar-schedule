import type {StorybookConfig} from "@storybook/react-webpack5";
import * as path from "path";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/preset-scss"
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {
            builder: {
                useSWC: true,
            },
        },
    },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': path.resolve(__dirname, '../src'),
            };
        }
        return config;
    },
};
export default config;

export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json",
      },
    ],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^features/(.*)$": "<rootDir>/src/features/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^lib/(.*)$": "<rootDir>/src/lib/$1",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^assets$": "<rootDir>/src/assets",
  },

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transformIgnorePatterns: ["node_modules/(?!(?:@faker-js\\/faker))"],
};

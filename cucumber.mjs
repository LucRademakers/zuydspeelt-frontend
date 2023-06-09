const config = {
  requireModule: ["ts-node/register"],
  require: ["features/*.ts"],
  format: ["summary", "progress-bar"],
  formatOptions: { snippetInterface: "async-await" },
  publishQuiet: true,
};

export default config;

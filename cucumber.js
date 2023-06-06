module.exports = {
  default: `-f @cucumber/pretty-formatter --require-module ts-node/register  --require features/*.ts --publish-quiet --format-options '{"snippetInterface": "synchronous"}'`,
};

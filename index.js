#!/usr/bin/env node

const args = require('yargs')
  .option('input', {
    alias: 'i',
    describe: 'Introspection JSON'
  })
  .demandOption(['input'], 'Please provide input argument')
  .help()
  .argv

const { buildClientSchema, printSchema } = require("graphql")
const fs = require("fs")

const introspectionSchemaResult = JSON.parse(fs.readFileSync(args.input))
const graphqlSchemaObj = buildClientSchema(introspectionSchemaResult)
process.stdout.write(printSchema(graphqlSchemaObj))

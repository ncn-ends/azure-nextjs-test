steps:

1) `az login`
2) az webapp up -n azure-test-nextjs -g azure-test --sku F1 -p azure-test-plan -l eastus -r node|16-LTS

At this time, the cli does not configure ci/cd github actions properly. See here: https://github.com/Azure/azure-cli/issues/21375

3) 

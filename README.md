steps:

1) `az login`
2) az webapp up -n azure-test-nextjs -g azure-test --sku F1 -p azure-test-plan -l eastus -r node|16-LTS

At this time, the cli does not configure ci/cd github actions properly.  
- See here: https://github.com/Azure/azure-cli/issues/21375
- https://docs.microsoft.com/en-us/cli/azure/webapp/deployment/github-actions?view=azure-cli-latest  
  
Luckily setting it up in the GUI only takes a few clicks.

3)  View differences between Azure and local app settings
```az webapp config appsettings list --name azure-test-nextjs --resource-group azure-test```

4) Copy `example.azure-settings.json` to `azure-settings.json` in project root and change the values correctly.  
  
5) Deploy the changes to app settings from local to Azure. The resulting output of this command should match what you want the app settings to be.

``` az webapp config appsettings set --resource-group azure-test --name azure-test-nextjs --settings @azure-settings.json```

**NOTE:** Ensure that azure-settings.json or whatever the json file is called is .gitignored


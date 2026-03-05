import { uiExtensionsConfig } from '@vendure-nx/util-config';
import { compileUiExtensions } from '@vendure/ui-devkit/compiler';
import path from 'path';

compileUiExtensions({
  outputPath: path.join(__dirname, '../../../dist/apps/admin-ui'),
  extensions: uiExtensionsConfig,
  devMode: false,
  command: 'npm',
})
  .compile?.()
  .then(() => {
    process.exit(0);
  });

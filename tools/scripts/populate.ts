import { bootstrap, mergeConfig } from '@vendure/core';
import { populate } from '@vendure/core/cli';
import { config } from '@vendure-nx/util-config';
import { initialData } from '@vendure-nx/util-testing';
import * as path from 'path';

const mergedConfig = mergeConfig(config, {
  dbConnectionOptions: {
    synchronize: true,
    migrations: [path.join(__dirname, '../../apps/server/migrations/*.js')],
  },
  plugins: [],
});

const productsCsvPath = process.argv[2] || undefined;

populate(() => bootstrap(mergedConfig), initialData, productsCsvPath)
  .then((app) => app.close())
  .then(
    () => {
      console.log('Successfully populated the database');
      process.exit(0);
    },
    (err) => {
      console.error('Failed to populate the database');
      console.error(err);
      process.exit(1);
    },
  );

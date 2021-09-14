import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig =
{
    timeout: 2000,
    globalTimeout: 60000,
    reporter: 'list',
    testDir: './tests',
};

export default config;
import path from 'path';
import {
  createTestServer as originalCreateTestServer,
  timeout,
  fetchText,
  expectIncludes,
} from '@web/dev-server-core/test-helpers';
import { DevServerCoreConfig } from '@web/dev-server-core';

export function createTestServer(config: Partial<DevServerCoreConfig> = {}) {
  return originalCreateTestServer({
    rootDir: path.resolve(__dirname, 'fixtures', 'basic'),
    ...config,
  });
}

export { timeout, fetchText, expectIncludes };

import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import styled from 'styled-components';

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});
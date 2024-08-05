import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import pkg from '../package.json';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: `<div style="text-align: center;">
      <img src="https://fms.dev.enkitek.farm/shopfloor/images/full-logo.png" style="width: 100%;" />
      <br />      
        FMS Components<br />
        <small>${pkg.version}</small>      
    </div>`,
    brandUrl: 'https://github.com/ENKI-Technologies-S-L/enki-sveltestrap'
  })
});

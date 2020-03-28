# eth-co2

`eth-co2.js` is a JavaScript library to enable offsetting of CO2 emissions via
the Ethereum blockchain.

## Building

    npm run build

## Example usage

### Calculating the cost of offsetting CO2 emissions

For example, to calculate the cost of offsetting a flight from London to New York:

```javascript
import "babel-polyfill";
import { ethers } from "ethers";

import { getCO2kenPrice } from "./ts/eth-co2";

const dapp = async () => {
  let provider = new ethers.providers.Web3Provider(web3.currentProvider);
  window.price = await getCO2kenPrice(provider);
  let flightEmissions = 500;  // approx kg CO2 emissions from LON -> NYC flight
  let co2kenPrice = await getCO2kenPrice(web3);  // Cost in DAI to offset 1 ton of CO2
  let offsetCost = flightEmissions / 1000 * co2kenPrice;
};

dapp().catch(e => { console.error(e) });

```

### Pay DAI to offset carbon emissions

```javascript
import { offsetEmissions } from "@CO2ken/eth-co2";

offsetEmissions(provider, dai);

```

### Obtain gas footprint


```javascript
import { getCO2kenPrice } from "@CO2ken/eth-co2";

let gasFootprint = await getFootprint(provider);  // CO2 emissions per gas
```


### Estimate emissions from a transaction

```javascript
let emissions = gasUsed * gasFootprint;
let offsetCost = emissions * co2kenPrice;
```

### Wrap it all up for convenience

```javascript
import { estimateEmissions } from "@CO2ken/eth-co2";

let emissions = await estimateEmissions(provider, contractName, functionName);


```


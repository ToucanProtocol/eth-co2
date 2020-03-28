import { Provider } from "ethers/providers";

import { getTokenContract } from "./contracts/rinkeby/co2ken";
import { getStorageContract } from "./contracts/rinkeby/co2kenData";

/**
 * Get current CO2ken price in DAI
 * @param provider Provider object
 */
export async function getCo2kenPrice (provider: Provider) {
  let contract = getStorageContract(provider);
  return await contract.co2kenPrice();
}

/**
 * Get gasEnergyFootprint
 * @param provider Provider object
 */
export async function getGasEnergyFootprint (provider: Provider) {
  let contract = getStorageContract(provider);
  return await contract.gasEnergyFootprint();
}

/**
 * Get gridEmissionFactor
 * @param provider Provider object
 */
export async function getGridEmissionFactor (provider: Provider) {
  let contract = getStorageContract(provider);
  return await contract.gridEmissionFactor();
}

/**
 * Get gasCarbonFootprint
 * @param provider Provider object
 */
export async function getGasCarbonFootprint (provider: Provider) {
  let contract = getStorageContract(provider);
  return await contract.gasCarbonFootprint();
}

/**
 * Get gasCarbonFootprint
 * @param provider Provider object
 * @param payment
 */
export async function offsetCarbon (provider: Provider, payment: number) {
  let contract = getTokenContract(provider);
  return await contract.offsetCarbon(payment);
}

import { Provider } from "ethers/providers";

import { getTokenContract } from "./contracts/rinkeby/co2ken";
import { getStorageContract } from "./contracts/rinkeby/co2kenData";
import { getPaymentContract } from "./contracts/rinkeby/weenus";

/**
 * Get current CO2ken price in DAI / Weenus
 * @param provider Provider object
 */
export async function getCo2kenPrice (provider: Provider) {
  let contract = getStorageContract(provider);
  return await contract.co2kenPrice();
}

/**
 * Get current total number of CO2kens in supply
 * @param provider Provider object
 */
export async function getCo2kenSupply (provider: Provider) {
  let contract = getTokenContract(provider);
  return await contract.balance();
}

/**
 * Get current balance of CO2ken contract (payments for CO2kens)
 * @param provider Provider object
 */
export async function getCo2kenPaymentsBalance (provider: Provider) {
  let paymentContract = getPaymentContract(provider);
  let tokenContract = getTokenContract(provider);
  return await paymentContract.balanceOf(tokenContract.address);
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

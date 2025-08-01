# Cross Chain SDK Changes for Arbitrum Sepolia & Monad Support

## Overview
This document outlines all changes made to the cross-chain-sdk to support Arbitrum Sepolia and Monad networks.

## Files Modified

### 1. `src/chains.ts`
**Purpose**: Add new networks to supported chains list

**Changes Made**:
- Added `NetworkEnum.ARBITRUM_SEPOLIA` to the `SupportedChains` array
- Added `NetworkEnum.MONAD` to the `SupportedChains` array

**Before**:
```typescript
export const SupportedChains = [
    NetworkEnum.ETHEREUM,
    NetworkEnum.POLYGON,
    NetworkEnum.BINANCE,
    NetworkEnum.OPTIMISM,
    NetworkEnum.ARBITRUM,
    NetworkEnum.AVALANCHE,
    NetworkEnum.GNOSIS,
    NetworkEnum.COINBASE,
    NetworkEnum.ZKSYNC,
    NetworkEnum.LINEA,
    NetworkEnum.SONIC,
    NetworkEnum.UNICHAIN
] as const
```

**After**:
```typescript
export const SupportedChains = [
    NetworkEnum.ETHERNET,
    NetworkEnum.POLYGON,
    NetworkEnum.BINANCE,
    NetworkEnum.OPTIMISM,
    NetworkEnum.ARBITRUM,
    NetworkEnum.ARBITRUM_SEPOLIA,  // ✅ ADDED
    NetworkEnum.MONAD,             // ✅ ADDED
    NetworkEnum.AVALANCHE,
    NetworkEnum.GNOSIS,
    NetworkEnum.COINBASE,
    NetworkEnum.ZKSYNC,
    NetworkEnum.LINEA,
    NetworkEnum.SONIC,
    NetworkEnum.UNICHAIN
] as const
```

### 2. `src/deployments.ts`
**Purpose**: Configure contract addresses for new networks

**Changes Made**:

#### A. TRUE_ERC20 Configuration
Added entries for both new networks:
```typescript
[NetworkEnum.ARBITRUM_SEPOLIA]: TrueERC20,
[NetworkEnum.MONAD]: TrueERC20,
```

#### B. ESCROW_SRC_IMPLEMENTATION Configuration
Added specific deployed addresses:
```typescript
[NetworkEnum.ARBITRUM_SEPOLIA]: new Address('0xdf72A53658b379205832eA29beACD273Bb38c91a'),
[NetworkEnum.MONAD]: new Address('0xdf72A53658b379205832eA29beACD273Bb38c91a'),
```

#### C. ESCROW_DST_IMPLEMENTATION Configuration
Added specific deployed addresses:
```typescript
[NetworkEnum.ARBITRUM_SEPOLIA]: new Address('0xb5D6A8D096e9DbeD4DD7F1b05f5b0c7F6e831666'),
[NetworkEnum.MONAD]: new Address('0xb5D6A8D096e9DbeD4DD7F1b05f5b0c7F6e831666'),
```

#### D. ESCROW_FACTORY Configuration
Added specific deployed addresses:
```typescript
[NetworkEnum.ARBITRUM_SEPOLIA]: new Address('0x06770B86ABee7B3991f235BE4b6d920862979e13'),
[NetworkEnum.MONAD]: new Address('0x06770B86ABee7B3991f235BE4b6d920862979e13'),
```

## Contract Addresses Summary

### Arbitrum Sepolia (Chain ID: 421614)
- **Resolver**: `0xF1bF3e727Cb948C19d9D3b8c0a73cDf0a822bb04`
- **Factory**: `0x06770B86ABee7B3991f235BE4b6d920862979e13`
- **Limit Order Protocol**: `0xfde2d93A9D538940A9899CA6bEFa2517D9A0B23f`
- **EscrowSrc Implementation**: `0xdf72A53658b379205832eA29beACD273Bb38c91a`
- **EscrowDst Implementation**: `0xb5D6A8D096e9DbeD4DD7F1b05f5b0c7F6e831666`

### Monad (Chain ID: TBD)
- **Resolver**: `0xF1bF3e727Cb948C19d9D3b8c0a73cDf0a822bb04`
- **Factory**: `0x06770B86ABee7B3991f235BE4b6d920862979e13`
- **Limit Order Protocol**: `0xfde2d93A9D538940A9899CA6bEFa2517D9A0B23f`
- **EscrowSrc Implementation**: `0xdf72A53658b379205832eA29beACD273Bb38c91a`
- **EscrowDst Implementation**: `0xb5D6A8D096e9DbeD4DD7F1b05f5b0c7F6e831666`

## Missing Configurations
**Note**: The following addresses were provided but not yet configured in the SDK:
- Resolver addresses (may need to be added to a separate resolver configuration)
- Limit Order Protocol addresses (may need to be added to a separate LOP configuration)

These may need additional configuration files or mappings to be fully integrated.

## Cross-Chain Compatibility
With these changes, the SDK now supports:
- **Arbitrum Sepolia → Monad** swaps
- **Monad → Arbitrum Sepolia** swaps
- Integration with existing supported networks

## Next Steps
1. Update `@1inch/fusion-sdk` dependency to include the new NetworkEnum values
2. Test cross-chain functionality between the new networks
3. Verify all contract addresses are correct and functional
4. Add resolver and limit order protocol configurations if needed
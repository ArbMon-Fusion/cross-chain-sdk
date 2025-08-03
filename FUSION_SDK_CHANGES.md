# Fusion SDK Changes Required for Arbitrum Sepolia & Monad Support

## Overview
The `@nikhil0341/fusion-sdk` package **MUST** be modified to add support for Arbitrum Sepolia and Monad networks. These networks are not currently defined in the `NetworkEnum`.

## Required Changes

### 1. NetworkEnum Update
**File**: `src/constants.ts` (or equivalent enum definition file)

**Current NetworkEnum**:
```typescript
export enum NetworkEnum {
    ETHEREUM = 1,
    POLYGON = 137,
    ZKSYNC = 324,
    BINANCE = 56,
    ARBITRUM = 42161,
    AVALANCHE = 43114,
    OPTIMISM = 10,
    FANTOM = 250,
    GNOSIS = 100,
    COINBASE = 8453,
    LINEA = 59144,
    SONIC = 146,
    UNICHAIN = 130
}
```

**Required Addition**:
```typescript
export enum NetworkEnum {
    ETHEREUM = 1,
    POLYGON = 137,
    ZKSYNC = 324,
    BINANCE = 56,
    ARBITRUM = 42161,
    ARBITRUM_SEPOLIA = 421614,  // ✅ ADD THIS
    MONAD = 10143,             // ✅ ADD THIS 
    AVALANCHE = 43114,
    OPTIMISM = 10,
    FANTOM = 250,
    GNOSIS = 100,
    COINBASE = 8453,
    LINEA = 59144,
    SONIC = 146,
    UNICHAIN = 130
}
```

## Chain ID Information

### Arbitrum Sepolia
- **Chain ID**: `421614`
- **Network Name**: Arbitrum Sepolia
- **Type**: Testnet
- **Status**: ✅ Confirmed

### Monad
- **Chain ID**: `TBD` (needs confirmation)
- **Network Name**: Monad
- **Type**: Mainnet
- **Status**: ⚠️ Chain ID needs to be confirmed

## Implementation Steps

### Step 1: Fork the Repository
```bash
git clone https://github.com/1inch/fusion-sdk.git
cd fusion-sdk
```

### Step 2: Modify NetworkEnum
1. Locate the `NetworkEnum` definition (likely in `src/constants.ts`)
2. Add the two new network entries with correct chain IDs
3. Ensure proper ordering and formatting

### Step 3: Update TypeScript Definitions
1. Verify that TypeScript definitions are properly exported
2. Update any related interfaces or types that reference NetworkEnum
3. Check for any hardcoded network lists that need updating

### Step 4: Update Package Configuration
1. Modify `package.json` to use your forked version
2. Update version number to indicate custom build
3. Consider using a scoped package name (e.g., `@yourorg/fusion-sdk`)

### Step 5: Build and Test
```bash
npm run build
npm test
```

### Step 6: Integration
Update your cross-chain-sdk's `package.json`:
```json
{
  "dependencies": {
    "@nikhil0341/fusion-sdk": "git+https://github.com/yourusername/fusion-sdk.git#your-branch"
  }
}
```

## Additional Considerations

### 1. Chain ID Validation
Ensure Monad's actual chain ID is confirmed before implementation. Common chain IDs:
- Check [chainlist.org](https://chainlist.org)
- Verify with Monad documentation
- Confirm with network RPC endpoints

### 2. Network Configuration
Beyond the enum, check if fusion-sdk has:
- RPC endpoint configurations
- Block explorer URLs
- Gas price configurations
- Native token symbols

### 3. Testing Requirements
- Unit tests for new networks
- Integration tests with actual network endpoints
- Cross-chain functionality tests

### 4. Documentation Updates
- Update fusion-sdk README
- Add network-specific documentation
- Update API documentation

## Dependencies Impact

### Cross-Chain-SDK Integration
Once fusion-sdk is updated, the cross-chain-sdk will:
- ✅ Automatically recognize new networks
- ✅ Support new network combinations
- ✅ Enable cross-chain swaps between Arbitrum Sepolia ↔ Monad

### Breaking Changes
This is a **non-breaking change** since:
- Existing enum values remain unchanged
- Only new values are added
- Backward compatibility is maintained

## Alternative Approach

### Option 1: Custom Enum Extension (Not Recommended)
```typescript
// In cross-chain-sdk
export enum ExtendedNetworkEnum {
    ...NetworkEnum,
    ARBITRUM_SEPOLIA = 421614,
    MONAD = 12345
}
```
**Why not recommended**: Creates type incompatibilities and maintenance overhead.

### Option 2: Fork and Maintain (Recommended)
- Fork the fusion-sdk repository
- Apply the changes above
- Maintain your own version
- Submit PR to upstream when ready

## Summary
The fusion-sdk **MUST** be modified to add these two networks to the `NetworkEnum`. This is the only way to properly integrate them into the cross-chain-sdk ecosystem while maintaining type safety and compatibility.

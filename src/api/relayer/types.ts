import {LimitOrderV4Struct} from '@nikhil0341/fusion-sdk'
import {SupportedChain} from '../../chains'

export type RelayerRequestParams = {
    srcChainId: SupportedChain
    order: LimitOrderV4Struct
    signature: string
    quoteId: string
    extension: string
    secretHashes?: string[]
}

export type RelayerApiConfig = {
    url: string
    authKey?: string
}

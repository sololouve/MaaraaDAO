/**
 * This file contains the root router of your tRPC-backend
 */
import { createRouter } from '../create-router'

import superjson from 'superjson'

import { userRouter } from './user/user'
import { invoiceRouter } from './invoice/invoice'

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = createRouter()
    /**
     * Add data transformers
     * @link https://trpc.io/docs/data-transformers
     */
    .transformer(superjson)
    /**
     * Optionally do custom error (type safe!) formatting
     * @link https://trpc.io/docs/error-formatting
     */
    // .formatError(({ shape, error }) => { })
    .merge('user.', userRouter)
    .merge('invoice.', invoiceRouter)

export type AppRouter = typeof appRouter

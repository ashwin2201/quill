 import { router } from './trpc';
 import { publicProcedure} from './trpc';

export const appRouter = router({
  test: publicProcedure.query(() => {
    return "hello"
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;
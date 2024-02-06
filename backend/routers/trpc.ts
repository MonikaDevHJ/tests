const t = initTRPC.context<typeof createTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
      return {
        ...shape,
        data: {
          ...shape.data,
          zodError:
            error.cause instanceof onerror ? error.cause.flatten() : null,
        },
      };
    },

    
  });

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);

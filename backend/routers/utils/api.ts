export const api = createTRPCNext<AppRouter>({
    config() {
      return {
        transformer: superjson,
        links: [
          loggerLink({
            enabled: (opts: { direction: string; result: any; }) =>
              process.env.NODE_ENV === "development" ||
              (opts.direction === "down" && opts.result instanceof Error),
          }),
          (runtime: any) => {
            return (ctx: { op: any; }) => {
              let toUseFirebaseAuth = false;
              const { op } = ctx;
              const [mainRouter] = op.path.split(".");
              console.log(mainRouter);
              if (
                mainRouter === "utils" ||
                mainRouter === "admin" ||
                mainRouter === "fieldoptions"
              ) {
                toUseFirebaseAuth = true;
              }
              const httpLink = httpBatchLink({
                url: `${getBaseUrl()}/api/trpc`,
                async headers() {
                  return {
                    Authorization:
                      (toUseFirebaseAuth
                        ? await auth?.currentUser?.getIdToken()
                        : "") ?? "",
                  };
                },
              })(runtime);
  
              return httpLink(ctx);
            };
          },
        ],
      };
    },
    ssr: false,
  });

function createTRPCNext<T>(arg0: { config(): { transformer: any; links: any[]; }; ssr: boolean; }) {
    throw new Error("Function not implemented.");
}
function loggerLink(arg0: { enabled: (opts: { direction: string; result: any; }) => boolean; }): any {
    throw new Error("Function not implemented.");
}


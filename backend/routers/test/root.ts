

const employerRouter = createTRPCRouter({
    example: exampleRouter,
    jobs: jobsRouter,
    user: candidateRouter,
    employer: employerRouter,
    creds: credsRouter,
    utils: utilsRouter,
    fieldoptions: fieldOptionsRouter,
    file: fileRouter,
  });
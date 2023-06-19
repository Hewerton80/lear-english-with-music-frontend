export const getParsedValidationError = <T = any>(validationErrors: any[]) => {
  const songErrorTmp: any = {};
  validationErrors.forEach((validationError) => {
    songErrorTmp[validationError.property] = Object.values(
      validationError?.constraints
    )[0];
  });
  return songErrorTmp as T;
};

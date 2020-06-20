module GraphQLError = Error_GraphQLError;

module ExecutionResult = {
  type t('tData) = {
    errors: option(GraphQLError.t),
    data: option('tData),
  };
};
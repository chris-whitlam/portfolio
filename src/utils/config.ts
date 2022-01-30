interface AppConfig {
  isUnderConstruction: boolean;
}

export const getConfig = (): AppConfig => {
  const {
    REACT_APP_UNDER_CONSTRUCTION: isUnderConstruction = 'false'
  } = process.env;

  return {
    isUnderConstruction: isUnderConstruction === 'true'
  };
};
